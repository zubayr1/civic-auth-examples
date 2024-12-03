import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { buildLoginUrl, resolveOAuthAccessCode } from "@civic/auth/server";
import { getCookie, setCookie } from "hono/cookie";
import { CookieStorage } from "@civic/auth/server";
import type { Context } from "hono";
import "dotenv/config";

class HonoCookieStorage extends CookieStorage {
  constructor(private c: Context) {
    super();
  }

  async get(key: string): Promise<string | null> {
    const value = getCookie(this.c, key);
    return value !== undefined ? value : null;
  }

  async set(key: string, value: string): Promise<void> {
    setCookie(this.c, key, value);
  }
}

type Env = {
  Variables: {
    storage: HonoCookieStorage;
  };
};

const app = new Hono<Env>();

const config = {
  clientId: process.env.CLIENT_ID!,
  redirectUrl: `http://localhost:3000/auth/callback`, // change to your domain when deploying
  oauthServer: process.env.OAUTH_SERVER!, // optional: leave blank to use the default OAuth server
};

// Middleware to attach CookieStorage to each request
app.use("*", async (c, next) => {
  const storage = new HonoCookieStorage(c);
  c.set("storage", storage);
  return next();
});

app.get("/", async (c) => {
  const url = await buildLoginUrl(config, c.get("storage"));

  return c.redirect(url.toString());
});

app.get("/auth/callback", async (c) => {
  const code = c.req.query("code");
  const state = c.req.query("state");

  console.log({ code, state });

  if (!code || !state) {
    return c.redirect("/");
  }

  // Resolve OAuth access code and set session
  await resolveOAuthAccessCode(code, state, c.get("storage"), config);

  c.redirect("/admin/hello");
});

app.get("/admin/hello", async (c) => {
  const user = await c.get("storage").get("user");

  if (!user) {
    return c.redirect("/");
  }

  return c.json({ user });
});

const port = 3000;

console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});

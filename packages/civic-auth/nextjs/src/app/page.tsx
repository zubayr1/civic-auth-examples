import { getUser } from '@civic/auth/nextjs';
import { Providers } from "./providers";
import { Login } from "./login";

export default async function Home() {
  const user = await getUser();
  return (
    <div>
      <main>
        <Providers>
          {user && (
            <div>Hello {user.email}</div>
          ) }
          <Login />
        </Providers>
      </main>
     
    </div>
  );
}

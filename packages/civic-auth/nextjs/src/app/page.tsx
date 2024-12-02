import { getUser } from '@civic/auth/nextjs';
import { Login } from "./login";

export default async function Home() {
  const user = await getUser();
  return (
    <div>
      <main>
          {user && (
            <div>Hello {user.email}</div>
          ) }
          <Login />
      </main>
     
    </div>
  );
}

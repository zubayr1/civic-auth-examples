import React from "react";
import { CivicAuthProvider, UserButton } from "@civic/auth/react";

const App = () => {
  return (
      <CivicAuthProvider
        clientId={"YOUR CLIENT ID"}
      >
        <UserButton/>
      </CivicAuthProvider>
  );
}

export default App;
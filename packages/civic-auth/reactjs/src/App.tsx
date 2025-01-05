import { CivicAuthProvider } from "@civic/auth/react";

// import Login from "./components/Login";
import TitleBar from "./components/TitleBar";
import User from "./components/User";

const CLIENT_ID = "8722a11d-0e51-4c8b-88d0-600c8b2ae87e";
const App = () => {
  return (
    <CivicAuthProvider clientId={CLIENT_ID}>
      {/* <Login /> */}
      <TitleBar />
      <User />
    </CivicAuthProvider>
  );
};

export default App;

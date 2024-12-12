import { Toaster } from "sonner";
import UserList from "./components/usersList/UserList";

function App() {
  return (
    <>
      <Toaster visibleToasts={1} theme="dark" richColors duration={Infinity} />
      <UserList />
    </>
  );
}

export default App;

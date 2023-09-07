import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import Chat from "./components/Chat";
import AuthContextProvider from "./contexts/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <Switch>
        <Route path="/chats" component={Chat} />
        <Route path="/" component={Login} />
      </Switch>
    </AuthContextProvider>
  );
}

export default App;

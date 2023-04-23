import useRoutesHook from "./hooks/useRoutes.hook";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { AuthContext } from "./context/authContext";
import { useAuth } from "./hooks/auth.hook";
import useAppSelector from "./hooks/reduxHooks/useAppSelector.hook";
import { User } from "./types/main";

function App(): JSX.Element {
  const user: User = useAppSelector(state => state.user);
  const routes: JSX.Element = useRoutesHook(user.role);
  const { login, logout } = useAuth();
  const token: string | null = useAppSelector(state => state.token.accessToken);

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {!!token && <NavBar />}
      {routes}
      {!!token && <Footer />}
    </AuthContext.Provider>
  );
}

export default App;

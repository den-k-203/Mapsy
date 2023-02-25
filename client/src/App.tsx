import useRoutesHook from "./hooks/useRoutes.hook";
import M from "materialize-css";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const routes = useRoutesHook("ADMIN");

  useEffect(() => {M.AutoInit();},[]);

  return (
    <div className="App">
      <NavBar/>
      <div className="container">
        {routes}
      </div>
      <Footer/>
    </div>
  );
}

export default App;

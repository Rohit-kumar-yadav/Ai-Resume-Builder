import { Outlet } from "react-router-dom";
import "./App.css";

function App() {

  return (
    <>
      <h1>Welcome To Ai Resume Builder</h1>
      
      <Outlet />
    </>
  );
}

export default App;
import './App.css';
import NavHeader from './components/NavHeader/NavHeader';
import {
  Outlet,
} from "react-router-dom";

const App = () => {

  return (
    <>
      <NavHeader />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;

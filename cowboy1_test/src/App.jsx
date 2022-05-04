import Navigatorbar from './components/Navigatorbar';
import './App.css';

import Home from "./pages/Home";
import Social from "./pages/Social";
import Login from "./pages/Login";

const App = () => {
    return (
        <div>
        <Navigatorbar />
        <Login />
    </div>
    );
};

export default App;
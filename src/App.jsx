import "./App.scss";
import Layout from "./components/layout/Layout";
import Home from "./components/views/Home";
import Modules from "./components/views/Modules";
import Students from "./components/views/Students";

function App() {
    const loggedInUser = "User";

    return (
        <Layout loggedInUser={loggedInUser}>
            <Home />
            <Modules />
            <Students />
        </Layout>
    );
}

export default App;

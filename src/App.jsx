import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/views/Home";
import Modules from "./components/views/Modules";
import Students from "./components/views/Students";
import PageNotFound from "./components/views/404";

function App() {
    const loggedInUser = "User";

    return (
        <BrowserRouter>
            <Layout loggedInUser={loggedInUser}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/modules" element={<Modules />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/*" element={<PageNotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;

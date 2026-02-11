import "./Layout.scss";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout(props) {
    return (
        <div className="layout">
            <Header loggedInUser={props.loggedInUser} />
            <Navbar />

            <main>{props.children}</main>

            <Footer />
        </div>
    );
}

export default Layout;

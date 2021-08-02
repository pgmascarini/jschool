import {
    Link
  } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/">Home</Link>

            <Link to="/contato">Contact</Link>

            <Link to="/private">Private</Link>
        </header>
    );

}

export default Header;
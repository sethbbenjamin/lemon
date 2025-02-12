import { Link } from 'react-router-dom';
import Navbar from './Navbar';


function Header() {
    return (
        <header>
            <img src="/images/logo.svg" alt="Little Lemon logo" className="logo" />
            <Navbar />  
        </header>
    )
}

export default Header;
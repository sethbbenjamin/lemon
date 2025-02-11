import Navigation from "./Nav";


function Header(){
    return(
        <header>
        
            <img src="./src/logo.svg" alt="Little Lemon logo" className="logo" />
            <Navigation />  
        </header>
    )
}

export default Header;
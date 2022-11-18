import Nav from "./Nav";

const Header = () => {

    const menuElements = ["Accueil", "Recettes", "Contact"];

    return (
        <div>
            <h2>Vous ne devinerez jamais ce qui arrive à ce petit chat</h2>
            <Nav menuElements={menuElements} />
        </div>
    )
}

export default Header;
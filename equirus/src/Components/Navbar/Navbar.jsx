import Button from "../UI/Button";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <ul className="button">
        <Button>Product</Button>
        <Button>Features</Button>
        <Button>MarketPlace</Button>
        <Button>Company</Button>
      </ul>
    </nav>
  );
}

export default Navbar;

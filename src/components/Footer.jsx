import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="contenedor_footer">
        <span>
          <br />
          <div>
            <NavLink to="/">Home</NavLink> |{" "}
            <NavLink to="/products">Products</NavLink> |{" "}
            <NavLink to="/about">About</NavLink> |{" "}
            <NavLink to="/cart">Cart</NavLink> | <a href="#account">Account</a>
            <br />
            <br />
            Para cualquier falla en el sistema puede ponerse en contacto con el
            adminisrador del sistema.
            <br />
            <a href="mailto:adminsystem@queenshands.com" title="adminsystem">
              adminsystem@queenshands.com
            </a>
            <br />
            <br />
          </div>
        </span>
      </footer>
    </>
  );
};

export default Footer;

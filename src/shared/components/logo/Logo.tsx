import logo from "../../../assets/logo.svg";
import "./Logo.css";

const Logo = (): JSX.Element => {
  return (
    <a className="Logo" href="/">
      <img className="Logo__icon" src={logo} alt="Company logo" />
      <p className="Logo__text">Womazing</p>
    </a>
  );
};

export default Logo;

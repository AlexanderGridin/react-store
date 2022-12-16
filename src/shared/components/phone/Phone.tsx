import icon from "../../../assets/phone.svg";
import "./Phone.css";

interface PhoneProps {
  phone: string;
  showIcon?: boolean;
}

const Phone = ({ showIcon = true, phone = "" }: PhoneProps): JSX.Element => {
  return (
    <div className="Phone">
      {showIcon && <img className="Phone__icon" src={icon} alt="phone" />}
      <a className="Phone__link" href={"tel:" + phone.replace(" ", "")}>
        {phone}
      </a>
    </div>
  );
};

export default Phone;

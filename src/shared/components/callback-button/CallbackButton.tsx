import "./CallbackButton.css";
import { ReactComponent as Icon } from "../../../assets/phone.svg";

const CallbackButton = (): JSX.Element => {
  return (
    <button
      type="button"
      className="CallbackButton"
      onClick={() => {
        console.log("Callback");
      }}
    >
      <Icon className="CallbackButton__icon" />
      Callback
    </button>
  );
};

export default CallbackButton;

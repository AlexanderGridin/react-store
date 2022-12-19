import "./CartButton.css";
import { ReactComponent as Icon } from "../../../assets/cart.svg";

interface CartButtonProps {
  totalProducts: number;
}

const CartButton = ({ totalProducts = 0 }: CartButtonProps): JSX.Element => {
  return (
    <button className="CartButton">
      <Icon className="CartButton__icon" />
      Cart{" "}
      {totalProducts > 0 && (
        <span className="CartButton__counter">{totalProducts}</span>
      )}
    </button>
  );
};

export default CartButton;

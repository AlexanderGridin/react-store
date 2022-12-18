import "./App.css";

import Container from "../shared/components/container/Container";
import Logo from "../shared/components/logo/Logo";
import CallbackButton from "../shared/components/callback-button/CallbackButton";
import ContactLink, {
  ContactLinkType,
} from "../shared/components/contact-link/ContactLink";
import CartButton from "../shared/components/cart-button/CartButton";

const App = (): JSX.Element => {
  return (
    <>
      <Container>
        <Logo />
        <CallbackButton />
        <ContactLink type={ContactLinkType.Tel} value="+38 (063) 123 45 67" />
        <CartButton totalProducts={3}></CartButton>
      </Container>
    </>
  );
};

export default App;

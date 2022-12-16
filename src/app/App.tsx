import "./App.css";

import Container from "../shared/components/container/Container";
import Logo from "../shared/components/logo/Logo";
import Phone from "../shared/components/phone/Phone";

const App = (): JSX.Element => {
  return (
    <>
      <Container>
        <Logo />
        <Phone phone="+38 (063) 123 45 67" />
      </Container>
    </>
  );
};

export default App;

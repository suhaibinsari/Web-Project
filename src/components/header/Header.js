import React from "react";
import { StyledHeader, Nav, Logo, Image } from "../styled/Header.styled";
import { Container } from "../styled/Container.styled";
import { FLex } from "../styled/FLex.styled";
import { Button } from "../styled/Button.styled";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="no-img" />
          <Button>Try It Free</Button>
        </Nav>
        <FLex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.</p>
<Button bg='#ff0099' color='#fff' >Get Started For Free</Button>
          </div>
          <Image src='./images/illustration-mockups.svg'/>
        </FLex>
      </Container>
    </StyledHeader>
  );
}
export default Header;

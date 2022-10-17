import React from "react";
import SocialIcons from "../social-icons/SocialIcons";
import { Container } from "../styled/Container.styled";
import { FLex } from "../styled/FLex.styled";
import {StyledFooter} from '../styled/Footer.styled'

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="no-img" />

<FLex>
<ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+92-323-6620434</li>
            <li>suhaib47@outlook.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons/>
</FLex>

      </Container>

    </StyledFooter>
    
  );
}

export default Footer;

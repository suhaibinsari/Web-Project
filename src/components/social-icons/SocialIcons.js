import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { SocialStyled } from "../styled/SocialIcons.styled";
import React from "react";

function SocialIcons() {
  return (
    <SocialStyled>
      <li>
        <a href="https://twitter.com/SuhaibA53198140">
          <FaTwitter />
        </a>
        </li>
        <li>

        <a href="https://www.facebook.com/suhaibinsari/">
          <FaFacebook />
        </a>
        </li>
        <li>

        <a href="https://www.linkedin.com/in/suhaibinsari/">
          <FaLinkedin />
        </a>
      </li>
    </SocialStyled>
  );
}

export default SocialIcons;

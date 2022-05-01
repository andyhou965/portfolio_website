import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" /> <Span> JUNJIE's Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About Me</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technical Stack</NavLink>
        </Link>
      </li>
      {/* <li>
        <Link href="#acomplishments">
          <NavLink>Acomplishments</NavLink>
        </Link>
      </li> */}
    </Div2>
    <Div3>
      <SocialIcons href="#">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="#">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="#">
        <AiFillYoutube size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

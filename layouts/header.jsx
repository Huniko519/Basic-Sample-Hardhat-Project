import { useRouter } from "next/router";
import React from "react";
import {
  HeaderLink,
  HeaderLinkpart,
  HeaderLogoPart,
  HeaderPart,
} from "./styles";
import Text from "../components/customs/Text";
import logo from "../assets/img/logo.svg";
import Image from "next/image";

const Header = () => {
  const router = useRouter();

  const toLogin = () => {
    router.push("/auth/login");
  };

  const toRegister = () => {
    router.push("/auth/register");
  };

  const toLanding = () => {
    router.push("/");
  };

  return (
    <HeaderPart>
      <HeaderLogoPart onClick={toLanding}>
        <Image src={logo} alt="logo" />
      </HeaderLogoPart>
      <HeaderLinkpart>
        <HeaderLink onClick={toLogin}>
          <Text mode="span" fSize={25} lHeight={10} tSpacing={0} fColor="white">
            Login
          </Text>
        </HeaderLink>
        <HeaderLink onClick={toRegister}>
          <Text mode="span" fSize={25} lHeight={10} tSpacing={0} fColor="white">
            Register
          </Text>
        </HeaderLink>
      </HeaderLinkpart>
    </HeaderPart>
  );
};

export default Header;

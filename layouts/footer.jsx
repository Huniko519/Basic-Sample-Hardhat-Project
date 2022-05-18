import React from "react";
import Text from "../components/customs/Text";
import { FooterPart } from "./styles";

const Footer = () => {
  return (
    <FooterPart>
      <Text mode="span" fSize={15} lHeight={5} tSpacing={0}>
        NFT Marketplace Connect Wallet @copyright 2021
      </Text>
    </FooterPart>
  );
};

export default Footer;

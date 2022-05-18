import React, { useState, useEffect } from "react";
import { withRouter, useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import { ethers } from "ethers";

import {
  WalletBody,
  WalletBtn,
  WalletConnect,
  WalletContainer,
  WalletHeader,
} from "./styles";
import { FieldLineDiv } from "../auth/login/styles";
import Text from "../../components/customs/Text";
import Abi from "../../contracts/abi.json";

var tokenAddress = "0xb140665dde25c644c6b418e417c930de8a8a6ac9";
var myContract = new ethers.Contract(tokenAddress, Abi);

const Dashboard = () => {
  const router = useRouter();

  const [walletAddress, setWalletAddress] = useState("");
  const [chipCount, setChipCount] = useState(0);

  useEffect(() => {
    const { flag } = router.query;
    if (flag === "dashboard") {
      toast.success("Success to Sign In!");
    }
  }, []);

  const getBalance = async () => {
    if (window.ethereum) {
      try {
        var provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.listAccounts();
        console.log(accounts);
        setWalletAddress(window.ethereum.selectedAddress);
        const signer = provider.getSigner();
        var MyContract = myContract.connect(signer);
        console.log(MyContract);
        let balance = await MyContract.balanceOf(
          window.ethereum.selectedAddress
        );
        setChipCount(balance.toString());
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleWallet = () => {
    if (window.ethereum) {
      try {
        window.ethereum.enable().then((res) => {
          console.log("public key is ", window.ethereum.selectedAddress);
          setWalletAddress(window.ethereum.selectedAddress);
          if (res) {
            getBalance();
          }
          // User has allowed account access to DApp...
        });
      } catch (e) {
        // User has denied account access to DApp...
      }
    }
  };

  return (
    <WalletConnect>
      <WalletContainer>
        <WalletHeader>
          <Text
            mode="span"
            fSize={50}
            fWeight={700}
            tSpacing={0}
            fColor="white"
          >
            Wallet Info
          </Text>
        </WalletHeader>
        <WalletBody>
          <FieldLineDiv>
            <Text fSize={20} fWeight={400} tSpacing={0} fColor="white">
              Wallet Address:
            </Text>
            <Text fSize={15} tSpacing={0} fColor="white">
              {walletAddress}
            </Text>
          </FieldLineDiv>
          <FieldLineDiv>
            <Text fSize={20} fWeight={400} tSpacing={0} fColor="white">
              Wallet Amount:
            </Text>
            <Text fSize={20} fWeight={400} tSpacing={0} fColor="white">
              {chipCount}
            </Text>
          </FieldLineDiv>
          <FieldLineDiv>
            <WalletBtn onClick={handleWallet}>
              <Text mode="span" fSize={20} fWeight={400} tSpacing={0}>
                Connect Wallet
              </Text>
            </WalletBtn>
          </FieldLineDiv>
        </WalletBody>
        <ToastContainer />
      </WalletContainer>
    </WalletConnect>
  );
};

export default withRouter(Dashboard);

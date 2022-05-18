import React, { useState, useRef, useEffect } from "react";
import { withRouter, useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import {
  FieldLineDiv,
  LoginBody,
  LoginBtn,
  LoginContainer,
  LoginHeader,
  LoginPage,
} from "./styles";
import Text from "../../../components/customs/Text";

import userService from "../../../services/auth.service";

const Login = () => {
  const router = useRouter();

  const email = useRef();
  const password = useRef();

  useEffect(() => {
    const { flag } = router.query;
    if (flag === "registered") {
      toast.success("Success to register");
    }
  }, []);

  const handleLogin = () => {
    if (email.current.value === "" || password.current.value === "") {
      toast.warning("Please fill out all the gaps!");
    } else {
      const authdata = {
        email: email.current.value,
        password: password.current.value,
        authflag: "signin",
      };

      userService
        .login(authdata)
        .then((res) => {
          if (!res.error) {
            router.push({
              pathname: "/dashboard",
              query: { flag: "dashboard" },
            });
          } else {
            toast.error(res.data);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <LoginPage>
      <LoginContainer>
        <LoginHeader>
          <Text
            mode="span"
            fSize={50}
            fWeight={700}
            tSpacing={0}
            fColor="white"
          >
            Login
          </Text>
        </LoginHeader>
        <LoginBody>
          <FieldLineDiv>
            <Text fSize={20} fWeight={400} tSpacing={0} fColor="white">
              Email:
            </Text>
            <input
              type="text"
              ref={email}
              name="email"
              placeholder="admin@gmail.com"
            />
          </FieldLineDiv>
          <FieldLineDiv>
            <Text fSize={20} fWeight={400} tSpacing={0} fColor="white">
              Password:
            </Text>
            <input
              type="password"
              name="password"
              ref={password}
              placeholder="*********"
            />
          </FieldLineDiv>
          <FieldLineDiv>
            <LoginBtn onClick={handleLogin}>
              <Text mode="span" fSize={20} fWeight={400} tSpacing={0}>
                Login
              </Text>
            </LoginBtn>
          </FieldLineDiv>
        </LoginBody>
        <ToastContainer />
      </LoginContainer>
    </LoginPage>
  );
};

export default withRouter(Login);

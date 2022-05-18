import React, { useRef } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import {
  FieldLineDiv,
  RegisterBody,
  RegisterBtn,
  RegisterContainer,
  RegisterHeader,
  RegisterPage,
} from "./styles";
import Text from "../../../components/customs/Text";

import userService from "../../../services/auth.service";

const Register = () => {
  const router = useRouter();

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordconfirm = useRef();

  const handleRegister = () => {
    if (
      username.current.value === "" ||
      email.current.value === "" ||
      password.current.value === "" ||
      passwordconfirm.current.value === ""
    ) {
      toast.warning("Please fill out all the gaps!");
      return;
    } else {
      if (password.current.value !== passwordconfirm.current.value) {
        toast.error("Please match the password!");
        return;
      } else {
        if (password.current.value.length < 6) {
          toast.warning("Must be 6 letters at least!");
          return;
        }
        const senddata = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
          authflag: "signup",
        };

        userService
          .register(senddata)
          .then((res) => {
            if (!res.error) {
              router.push({
                pathname: "/auth/login",
                query: { flag: "registered" },
              });
            } else {
              toast.error(res.data);
            }
          })
          .catch((err) => console.log(err));
      }
    }
  };

  return (
    <RegisterPage>
      <RegisterContainer>
        <RegisterHeader>
          <Text
            mode="span"
            fSize={50}
            fWeight={700}
            tSpacing={0}
            fColor="white"
          >
            Register
          </Text>
        </RegisterHeader>
        <RegisterBody>
          <FieldLineDiv>
            <Text fSize={20} fWeight={400} tSpacing={0} fColor="white">
              Username:
            </Text>
            <input
              type="text"
              ref={username}
              name="username"
              placeholder="Andrei Yegor"
            />
          </FieldLineDiv>

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
            <Text fSize={20} fWeight={400} tSpacing={0} fColor="white">
              Confirm:
            </Text>
            <input
              type="password"
              ref={passwordconfirm}
              name="passwordconfirm"
              placeholder="*********"
            />
          </FieldLineDiv>
          <FieldLineDiv>
            <RegisterBtn onClick={handleRegister}>
              <Text mode="span" fSize={20} fWeight={400} tSpacing={0}>
                Register
              </Text>
            </RegisterBtn>
          </FieldLineDiv>
        </RegisterBody>
        <ToastContainer />
      </RegisterContainer>
    </RegisterPage>
  );
};

export default Register;

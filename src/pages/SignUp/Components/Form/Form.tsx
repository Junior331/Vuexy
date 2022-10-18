import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, IconButton, TextField } from "@mui/material";
import { CustomCircularProgress } from "../../../../components/modules/CustomCircularProgress";
import { useFormik } from "formik";
import React, { useState } from "react";
import { PasswordType, SingUpType } from "./@types";
import * as S from "./FormStyled";
import signUpSchema from "./SignUpSchema";
import axios from "axios";
import { getNakamaServer } from "../../../../utils/connectors";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigation = useNavigate();
  const [passwordShow, setPasswordShow] = useState<PasswordType>({
    showPassword: false,
    showConfirmPassword: false,
  });

  const [successSignUp, setSuccessSignUp] = useState(false);
  const [signUpRespMsg, setSignUpRespMsg] = useState("");
  const [signUpResp2Msg, setSignUpResp2Msg] = useState("");

  const nakamaServer = getNakamaServer();

  const [load, setLoad] = useState(false);
  const handleClickShowPassword = (
    password: boolean,
    confirmPassword: boolean
  ) => {
    setPasswordShow({
      showPassword: password,
      showConfirmPassword: confirmPassword,
    });
  };
  const [errorMsg, setErrorMsg] = useState("");

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const formik = useFormik<SingUpType>({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values, { setErrors }) => {
      signUpStart(
        values.email,
        values.password,
        values.confirmPassword,
        values.username
      );
    },
    validationSchema: signUpSchema,
  });

  async function signUpStart(
    email: string,
    password: string,
    confirmPassword: string,
    username: string
  ) {
    setLoad(true);
    const data = {
      email,
      password,
    };
    
    axios
      .post(`${nakamaServer}v2/account/authenticate/email?create=true&username=${username}`, data, {
        auth: {
          username: "lovemonsterserver",
          password: "",
        },
      })
      .then(function (response: any) {
        if(response.status === 200){
          setSuccessSignUp(true);
          setSignUpResp2Msg("✅ Account created!");
          setSignUpRespMsg("You must validate your account email before login.")
        }
      })
      .catch(function(error) {
        let err = error.response?.data?.message;
        if(err === "Invalid email address, must be 10-255 bytes."){
          err = "Invalid email address";
        }
        setErrorMsg(err); 
        setLoad(false);
      });
  }

  return (
    <S.Form onSubmit={formik.handleSubmit}>
      {(!successSignUp) && (<>
      <S.ContainerInput
        error={formik.touched.username && Boolean(formik.errors.username)}
      >
        <TextField
          id="username"
          type="text"
          label={"Username"}
          variant="outlined"
          autoComplete="off"
          sx={{
            "& legend": {
              fontSize: "1.2rem",
            },
          }}
          value={formik.values.username}
          onChange={formik.handleChange}
          onKeyUp={() => {
            formik.setFieldValue(
              "username",
              formik.values.username.replace("/s/g", "")
            );
          }}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
      </S.ContainerInput>
      <S.ContainerInput
        error={formik.touched.email && Boolean(formik.errors.email)}
      >
        <TextField
          id="email"
          type="email"
          label={"E-mail"}
          variant="outlined"
          autoComplete="off"
          sx={{
            "& legend": {
              fontSize: "1.2rem",
            },
          }}
          value={formik.values.email}
          onChange={formik.handleChange}
          onKeyUp={() => {
            formik.setFieldValue(
              "email",
              formik.values.email.replace("/s/g", "")
            );
          }}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </S.ContainerInput>
      <S.ContainerInput
        error={formik.touched.password && Boolean(formik.errors.password)}
      >
        <S.ContainerPassword>
          <TextField
            label={"Password"}
            variant="outlined"
            autoComplete="off"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            sx={{
              "& legend": {
                fontSize: "1.2rem",
              },
            }}
            type={`${passwordShow.showPassword ? "text" : "password"}`}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <IconButton
            aria-label="toggle password visibility"
            onClick={() =>
              handleClickShowPassword(
                !passwordShow.showPassword,
                !!passwordShow.showConfirmPassword
              )
            }
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {passwordShow.showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </S.ContainerPassword>
      </S.ContainerInput>
      <S.ContainerInput
        error={formik.touched.password && Boolean(formik.errors.password)}
      >
        <S.ContainerPassword>
          <TextField
            label={"Confirm Password"}
            variant="outlined"
            autoComplete="off"
            id="confirmPassword"
            sx={{
              "& legend": {
                fontSize: "1.2rem",
              },
            }}
            type={`${passwordShow.showConfirmPassword ? "text" : "password"}`}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          <IconButton
            aria-label="toggle Confirm Password visibility"
            onClick={() =>
              handleClickShowPassword(
                !!passwordShow.showPassword,
                !passwordShow.showConfirmPassword
              )
            }
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {passwordShow.showConfirmPassword ? (
              <VisibilityOff />
            ) : (
              <Visibility />
            )}
          </IconButton>
        </S.ContainerPassword>
      </S.ContainerInput>
      <S.ErrText>{errorMsg}</S.ErrText>
      <S.Register submit>
        {load ? (
          <Box>
            <CustomCircularProgress />
          </Box>
        ) : (
          <Box>Sign up</Box>
        )}
      </S.Register>
      <S.Text>
        Have an account?
        <S.BlueLink to="/">Sign In</S.BlueLink>
      </S.Text>
      </>)}
      {(successSignUp) && (
        <>
        <S.Text>
          {signUpResp2Msg}
        </S.Text>
        <br/>
        <S.Text>
          {signUpRespMsg}
        </S.Text>
        <S.Register onClick={() => navigation("/")}>
          Return to main menu
        </S.Register>
        </>
      
        )}
    </S.Form>
    );
  };

export default Form;

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, IconButton, TextField } from "@mui/material";
import { CustomCircularProgress } from "../../../../components/modules";
import { Formik } from "formik";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PasswordType } from "./@types";
import * as S from "./FormStyled";
import SignInSchema from "./SignInSchema";
import { getNakamaServer } from "../../../../utils/connectors";


const Form = () => {
  const navigation = useNavigate();


  const [errorMsg, setErrorMsg] = useState("");
  const nakamaServer = getNakamaServer();

  const [passwordShow, setPasswordShow] = useState<PasswordType>({
    showPassword: false,
    showConfirmPassword: false,
  });

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

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  async function loginStart(email: string, password: string) {
    setLoad(true);
    const data = {
      email,
      password,
    };
    
    // let session = await AuthClient(email, password);
  
      axios.post(`${nakamaServer}v2/account/authenticate/email?create=false`, data, {
        auth: {
          username: 'lovemonsterserver',
          password: ''
        }
      }).then(function(response: any) {
        let data = response?.data
        localStorage.setItem("token", data.token);   
        navigation('/lovemonster/account'); 
      }).catch(function(error) {
        setLoad(false);
        console.log(error)
        if(error.response.status === 401){
          setErrorMsg("Incorrect password, please try again.");
        }
        
        if(error.response.status === 500) {
          setErrorMsg("Account not validated.");
        }

        if(error.response.status === 404) {
          setErrorMsg("Account not found.");
        }
      });
  }

  // const ForgotPassword = useCallback(async (email: any) => {}, []);

  return (
    <Formik
      initialValues={{ email: "", password: ""}}
      validationSchema={SignInSchema}
      onSubmit={(values) => loginStart(values.email, values.password)}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
      }) => (
        <S.Form>
          <S.ContainerInput error={touched.email && Boolean(errors.email)}>
            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              autoComplete="off"
              type="email"
              sx={{
                "& legend": {
                  fontSize: "1.2rem",
                },
              }}
              value={values.email}
              onChange={handleChange}
              onKeyUp={() => {
                setFieldValue("email", values.email.replace(/\s/g, ""));
              }}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
          </S.ContainerInput>
          <S.ContainerInput
            error={touched.password && Boolean(errors.password)}
          >
            <S.ContainerPassword>
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                autoComplete="off"
                sx={{
                  "& legend": {
                    fontSize: "1.2rem",
                  },
                }}
                value={values.password}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                type={`${passwordShow.showPassword ? "text" : "password"}`}
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
          {/* <S.ChangePassword onClick={() => ForgotPassword(values.email)}>
            {"Forgot my password"}
          </S.ChangePassword> */}

          <S.Register onClick={() => handleSubmit()}>
            {load ? (
              <Box>
                <CustomCircularProgress />
              </Box>
            ) : (
              "Sign In"
            )}
          </S.Register>
          {(errorMsg !== "") && (

            <S.ContainerInput>
            <S.TextError>{errorMsg}</S.TextError>
          </S.ContainerInput>
            )}
          <S.Text>
            Don't have an account?
            <S.BlueLink to="/signUp">Sign Up for free</S.BlueLink>
          </S.Text>
        </S.Form>
      )}
    </Formik>
  );
};

export default Form;

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, IconButton, TextField } from "@mui/material";
import { CustomCircularProgress } from "../../../../components/modules";
import axios from "axios";
import React, { useState } from "react";
import * as S from "./FormStyled";
import { useLocation } from "react-router-dom";


const Form = () => {



  const [errorMsg, setErrorMsg] = useState("");

  return (
    <S.Form>
      <S.Text>
        Don't have an account?
        <S.BlueLink to="/signUp">Sign Up for free</S.BlueLink>
      </S.Text>
    </S.Form>
  );
};

export default Form;

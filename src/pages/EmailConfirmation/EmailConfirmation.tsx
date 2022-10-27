import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getImage } from "../../assets/img";
import { getNakamaServer, nakamaHttpKey, UserResponse } from "../../utils/connectors";
import * as S from "./EmailConfirmationStyled";

export const EmailConfirmation = () => {
  // const { state }: any = useLocation();
  

  const { state }: any = useLocation();

  const navigate = useNavigate()

  const nakamaServer = getNakamaServer()
  
  const location = useLocation();

  const [returnMsg, setReturnMsg] = useState("")
  
  const sendEmailKey = (key: string) => {
    let spaceRegex: RegExp = new RegExp("/ +/")
    let finalKey = key.replace(spaceRegex, '+');
    console.log(finalKey)
    try {
      axios
        .post(
          `${nakamaServer}v2/rpc/validateAccountEmailRpc?http_key=${nakamaHttpKey}&unwrap`,
          {
            token: key,
          }
        )
        .then(function (response: any) {
          if (response.status === 200){
            let parsedResp: UserResponse = response.data;
            setReturnMsg(`${parsedResp.success ? "✅" : "❌"} ${parsedResp.response}`)
          }
        })
        .catch(function (error: any) {
          console.log(error)
          if (error?.request?.status === 401) {
            navigate("/");
          }
          setReturnMsg("❌ Connection with the server failed");
        })
        .finally(async function () {
        });
      
    } catch (error) {
      setReturnMsg("❌ Connection with the server failed");
    }
  };

  useEffect(() => {

    let searchParams = new URLSearchParams(location.search);

    let key = searchParams.get("key");

    console.log(key)

    if(key !== null)
      sendEmailKey(key);
    else
      setReturnMsg("❌ Key not valid");

  }, []);

  return (
    <S.SignInContainer>
      <S.ContainerAbstract>
        <S.Img src={getImage("monsterCharacter")} alt="" />
      </S.ContainerAbstract>
      <S.Container>
        <S.Text>{returnMsg}</S.Text>
        <br/>
        <S.MainButton onClick={()=> {navigate("/")}}>Return to main page</S.MainButton>
      </S.Container>
    </S.SignInContainer>
  );
};

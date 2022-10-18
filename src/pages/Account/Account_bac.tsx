/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import {
  getIsTestnet,
  injected,
  getSignedMsg,
  UserWallet,
  UserResponse,
} from "../../utils/connectors";
import { useLocation, useNavigate } from 'react-router-dom';
import { profileType } from "./@types";
import { accountSchema, nftAddressSchema, lmtAddressSchema } from "./AccountSchema_bac";
import * as S from "./AccountStyled_bac";
// import { Menu } from "./Components/Menu";
import { getNakamaServer, nakamaHttpKey } from "../../utils/connectors";
import { ethers } from "ethers";
import { Menu } from "../../components/modules/Menu";

export const Account = () => {
  const { state }: any = useLocation();
  
  const navigate = useNavigate();

  const nakamaServer = getNakamaServer();

  const [edit, setEdit] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [chainId, setChainId] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [showGenerateMsg, setShowGenerateMsg] = useState(false);
  const [profileData, setProfileData] = useState({
    user: {
      id: "",
      username: "",
      lang_tag: "",
      create_time: "",
      update_time: "",
    },
    wallet: "",
    email: "",
  });
  const [walletData, setWalletData] = useState<UserWallet>({
    wallet_address: '',
    wallet_address_validated: false,
    migration_nft_address: '',
    migration_nft_address_validated: false,
    migration_lmt_address: '',
    migration_lmt_address_validated: false,
  });
  
  const [resp, setResponse] = useState("");

  const formik = useFormik<profileType>({
    initialValues: {
      name: profileData?.user.username,
      email: profileData?.email,
      wallet: walletData?.wallet_address,
    },
    onSubmit: (values, { setErrors }) => {
      setEdit(!edit);
    },
    validationSchema: accountSchema,
  });

  const formikLoveMonster = useFormik({
    initialValues: {
      nftAddress: walletData?.migration_nft_address,
    },
    onSubmit: (values, { setErrors }) => {
      sendMigrationNftWallets(values.nftAddress);
    },
    validationSchema: nftAddressSchema,
  });
  const formikLMT = useFormik({
    initialValues: {
      lmtAddress:  walletData?.migration_lmt_address,
    },
    onSubmit: (values, { setErrors }) => {
      sendMigrationLmtWallets(values.lmtAddress);
    },
    validationSchema: lmtAddressSchema,
  });
  const getUser = () => {
    axios
      .get(`${nakamaServer}v2/account`, {
        headers: {
          Authorization: "Bearer " + state.data.token,
        },
      })
      .then(function (response: any) {
        setProfileData(response.data);  
      })
      .catch(function (error: any) {
        if (error?.request?.status === 401) {
          navigate("/");
        }
      });
  };
  const getUserWallet = () => {
    axios
      .post(
        `${nakamaServer}v2/rpc/getAllUserWalletsRpc?http_key=${nakamaHttpKey}&unwrap`,
        {},
        {
          headers: {
            Authorization: "Bearer " + state.data.token,
          },
        }
      )
      .then(function (response: any) {
        if (response.status === 200 && response.data?.success !== false) {
          let responseData: UserResponse = {
            success: response.data?.success,
            response: response.data?.response,
          };

          if (responseData.success) {
            console.log(responseData.response);
            
            let metadata: UserWallet = JSON.parse(responseData.response);

            setWalletData(metadata);

            let currentValues = {
              nftAddress: metadata?.migration_nft_address,
              lmtAddress: metadata?.migration_lmt_address,
            };

            formikLoveMonster.setFieldValue('nftAddress', currentValues.nftAddress);
            formikLMT.setFieldValue('lmtAddress', currentValues.lmtAddress);
            setWalletAddress(metadata.wallet_address);
          }
        }
      })
      .catch(function (error: any) {
        if (error?.request?.status === 401) {
          navigate("/");
        }
        setResponse("❌ Cannot get User Wallets");
      })
      .finally(async function () {
        await getAccount();
      });
  };

  const setUserWallet = (
    UserAddress: string,
    signedMsg: string,
    timestamp: string
  ) => {
    axios
      .post(
        `${nakamaServer}v2/rpc/linkAccountAddressRpc?http_key=${nakamaHttpKey}&unwrap`,
        { wallet_address: UserAddress, signed_msg: signedMsg, timestamp },
        {
          headers: {
            Authorization: "Bearer " + state.data.token,
          },
        }
      )
      .then(function (response: any) {
        if (response.status === 200) {
          let parsedResp: UserResponse = response.data
          setResponse(`${parsedResp.success ? "✅" : "❌"} ${parsedResp.response}`);
        }
      })
      .catch(function (error: any) {
        if (error?.request?.status === 401) {
          navigate("/");
        }
        setResponse("❌ Error trying to update Avax Wallet");
      })
      .finally(async function () {
        await getAccount();
        getUserWallet();
      });
  };

  const sendMigrationNftWallets = (nftAddress: string) => {
    axios
      .post(
        `${nakamaServer}v2/rpc/updateMigrationWalletAddressNftRpc?http_key=${nakamaHttpKey}&unwrap`,
        {
          migration_nft_address: nftAddress,
        },
        {
          headers: {
            Authorization: "Bearer " + state.data.token,
          },
        }
      )
      .then(function (response: any) {
        if (response.status === 200){
          let parsedResp:UserResponse = response.data;
          setResponse(`${parsedResp.success ? "✅" : "❌"} ${parsedResp.response}`);
        }
      })
      .catch(function (error: any) {
        if (error?.request?.status === 401) {
          navigate("/");
        }
        setResponse("❌ Cannot update User NFT Migration Wallet");
      })
      .finally(async function () {
        await getAccount();
        getUserWallet();
      });
  };
  const sendMigrationLmtWallets = (lmtAddress: string) => {
    axios
      .post(
        `${nakamaServer}v2/rpc/updateMigrationWalletAddressLmtRpc?http_key=${nakamaHttpKey}&unwrap`,
        {
          migration_lmt_address: lmtAddress,
        },
        {
          headers: {
            Authorization: "Bearer " + state.data.token,
          },
        }
      )
      .then(function (response: any) {
        if (response.status === 200){
          let parsedResp:UserResponse = response.data;
          setResponse(`${parsedResp.success ? "✅" : "❌"} ${parsedResp.response}`);
        }
      })
      .catch(function (error: any) {
        if (error?.request?.status === 401) {
          navigate("/");
        }
        setResponse("❌ Cannot update User $LMT Migration Wallet");
      })
      .finally(async function () {
        await getAccount();
        getUserWallet();
      });
  };

  const connectedWallet = useCallback(async () => {
    const isTestnet = await getIsTestnet();
    await setChainId(isTestnet);
    await getAccount();
    injected.activate().then(async (value: any) => {
      setShowWallet(true);
      setWalletAddress(ethers.utils.getAddress(value?.account));
    });
  }, [setChainId]);

  const getAccount = async () => {
    injected.activate().then(async (value: any) => {
      setShowWallet(true);
      // getUserWallet();
      // setWalletAddress(ethers.utils.getAddress(value?.account));
    });
  };

  const authWallet = async () => {
    injected.activate().then(async (value: any) => {
      let signedMsgObject = await getSignedMsg();
      console.log(signedMsgObject);
      setUserWallet(
        ethers.utils.getAddress(value?.account),
        signedMsgObject?.signedMsg || "",
        signedMsgObject?.localTimestamp || ""
      );
    });
  };

  const getCurrentWallet = () => {
    let actualWallet = "";
    injected.activate().then((value: any) => {
      actualWallet = ethers.utils.getAddress(value?.account);
      return actualWallet;
    });
    return "";
  };

  useEffect(() => {
    getUser();
    getUserWallet();
  }, []);

  // function sendInfo(): void {
  //   formikLoveMonster.handleSubmit();
  //   if (
  //     formikLoveMonster.errors.lmtAddress === undefined &&
  //     formikLoveMonster.errors.nftAddress === undefined
  //   ) {
  //     setEdit(false);
  //     let values = formikLoveMonster.values;
  //     sendMigrationWallets(values.nftAddress, values.lmtAddress);
  //   }
  // }
  return (
    <S.AccountContainer>
      <Menu />
      <S.Content>
        <S.SubTitle>ACCOUNT OVERVIEW</S.SubTitle>
        <S.Form onSubmit={formik.handleSubmit}>
          <S.ContainerInput
            error={formik.touched.name && Boolean(formik.errors.name)}
          >
            <S.Text>Username</S.Text>
            {/* {edit ? (
              <TextField
                id="name"
                type="name"
                label={"User name"}
                variant="outlined"
                autoComplete="off"
                sx={{
                  "& legend": {
                    fontSize: "1.2rem",
                  },
                }}
                value={formik.values.name}
                onChange={formik.handleChange}
                onKeyUp={() => {
                  formik.setFieldValue(
                    "name",
                    formik.values.name.replace("/s/g", "")
                  );
                }}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            ) : ( */}
            <S.Text light>{profileData.user.username}</S.Text>
            {/* )} */}
          </S.ContainerInput>
          <S.ContainerInput
            error={formik.touched.email && Boolean(formik.errors.email)}
          >
            <S.Text>E-mail</S.Text>
            {/* {edit ? (
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
            ) : ( */}
            <S.Text ellipsis light>{profileData?.email}</S.Text>
            {/* )} */}
          </S.ContainerInput>
        </S.Form>

        <S.Form bottom onSubmit={formikLoveMonster.handleSubmit}>
          <S.ContainerInput 
            noBorder
            bottom
            noWrap
            error={
              formikLoveMonster.touched.nftAddress &&
              Boolean(formikLoveMonster.errors.nftAddress)
            }
          >
            <TextField
              id="nftAddress"
              type="text"
              disabled={!edit}
              label={"Love Monster NFT Wallet Address"}
              variant="outlined"
              autoComplete="off"
              sx={{ 
                "& legend": {
                  fontSize: "1.2rem",
                },
              }}
              value={formikLoveMonster.values.nftAddress}
              onChange={formikLoveMonster.handleChange}
              onKeyUp={() => {
                formikLoveMonster.setFieldValue(
                  "nftAddress",
                  formikLoveMonster.values.nftAddress.replace("/s/g", "")
                );
              }}
              error={
                formikLoveMonster.touched.nftAddress &&
                Boolean(formikLoveMonster.errors.nftAddress)
              }
              helperText={
                formikLoveMonster.touched.nftAddress &&
                formikLoveMonster.errors.nftAddress
              }
            />
            
            {/* {(walletData.migration_nft_address !== "") && (<S.Text ellipsis>Validated: {walletData.migration_nft_address_validated ? "✅" : "❌"}</S.Text>)} */}
            {(edit) && (<S.Button disabled={!edit} noActive={!edit} type="submit">Save</S.Button>)}
          </S.ContainerInput>
        </S.Form>
        <S.Form bottom onSubmit={formikLMT.handleSubmit}>
          <S.ContainerInput
            bottom
            noWrap
            noBorder
            error={
              formikLMT.touched.lmtAddress &&
              Boolean(formikLMT.errors.lmtAddress)
            }
          >
            <TextField
              id="lmtAddress"
              type="text"
              disabled={!edit}
              label={"$LMT Wallet Address"}
              variant="outlined"
              autoComplete="off"
              sx={{
                "& legend": {
                  fontSize: "1.2rem",
                },
              }}
              value={formikLMT.values.lmtAddress}
              onChange={formikLMT.handleChange}
              error={
                formikLMT.touched.lmtAddress &&
                Boolean(formikLMT.errors.lmtAddress)
              }
              helperText={
                formikLMT.touched.lmtAddress &&
                formikLMT.errors.lmtAddress
              }
            />
            {/* {(walletData.migration_lmt_address !== "" ) && (<S.Text ellipsis>Validated: {walletData.migration_lmt_address_validated ? "✅" : "❌"}</S.Text>)} */}
            {(edit) && (<S.Button disabled={!edit} noActive={!edit} type="submit">Save</S.Button>)}
          </S.ContainerInput>
        </S.Form>
        <S.ContainerInput>
          <S.Text>Avalanche Wallet</S.Text>
          <S.Text ellipsis>
            {walletAddress === "" ? "" : walletAddress}
            
          </S.Text>
            {(walletData.wallet_address !== "" ) && (<S.Text ellipsis>Validated: {walletData.wallet_address_validated ? "✅" : "❌"}</S.Text>)}
        </S.ContainerInput>
        <S.ContainerButtons>
          <S.Button type="button" onClick={() => setEdit(!edit)}>
            {edit ? "Finish" : "Edit Kleverchain Wallet"}
          </S.Button>
          {/* {edit && (
            <S.Button type="button" onClick={() => sendInfo()}>
              Save
            </S.Button>
          )} */}

          {(walletAddress === "" ||
            !walletData.wallet_address_validated) && (
            <S.Button type="button" onClick={() => connectedWallet()}>
              Connect Wallet
            </S.Button>
          )}

          {(walletAddress === "" ||
            !walletData.wallet_address_validated) && (
            <S.Button type="button" onClick={() => authWallet()}>
              Authenticate & Link Wallet
            </S.Button>
          )}
          <S.Text>{resp}</S.Text>
        </S.ContainerButtons>
        <S.Text>{!edit? "":"*To avoid fraudulent activities, you  will NOT be able to edit your Kleverchain wallet address after you have submitted it on our platform.*"}</S.Text>
        <S.ContainerButtons>

        {/* <S.Button type="button" onClick={() => {setShowGenerateMsg(true)}}>
          Generate Kleverchain Wallet 
          to Send Funds and Validate
        </S.Button>
        <S.Text>{showGenerateMsg ? "The wallet to transfer funds in Kleverchain will be available soon" : ""}</S.Text> */}
        </S.ContainerButtons>
      </S.Content>
    </S.AccountContainer>
  );
};

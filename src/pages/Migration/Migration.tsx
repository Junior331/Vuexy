/* eslint-disable @typescript-eslint/no-unused-vars */
import { TextField } from "@mui/material";
import axios from "axios";
import { ethers } from "ethers";
import { useFormik } from "formik";
import { useState, useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from "../../components/modules/Layout/Components/Menu";
import {
  getNakamaServer,
  UserWallet,
  nakamaHttpKey,
  UserResponse,
  getIsTestnet,
  injected,
  getSignedMsg,
} from "../../utils/connectors";
import {
  nftAddressSchema,
  lmtAddressSchema,
} from "./MigrationSchema";
import * as S from "./MigrationStyled";

export const Migration = () => {

  const navigate = useNavigate();
  const nakamaServer = getNakamaServer();
  const [edit, setEdit] = useState(false);
  const token = localStorage.getItem("token");
  const [walletAddress, setWalletAddress] = useState("");
  const [showWallet, setShowWallet] = useState(false);
  const [walletData, setWalletData] = useState<UserWallet>({
    wallet_address: "",
    wallet_address_validated: false,
    migration_nft_address: "",
    migration_nft_address_validated: false,
    migration_lmt_address: "",
    migration_lmt_address_validated: false,
  });

  const [resp, setResponse] = useState("");

  const connectedWallet = async () => {
    const isTestnet = await getIsTestnet();
    await getAccount();
    injected.activate().then(async (value: any) => {
      setShowWallet(true);
      setWalletAddress(ethers.utils.getAddress(value?.account));
    });
  };
  const getUserWallet = () => {
    axios
      .post(
        `${nakamaServer}v2/rpc/getAllUserWalletsRpc?http_key=${nakamaHttpKey}&unwrap`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
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
            let metadata: UserWallet = JSON.parse(responseData.response);

            setWalletData(metadata);

            let currentValues = {
              nftAddress: metadata?.migration_nft_address,
              lmtAddress: metadata?.migration_lmt_address,
            };
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
            Authorization: "Bearer " + token,
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
  const getAccount = async () => {
    injected.activate().then(async (value: any) => {
      setShowWallet(true);
      setWalletAddress(ethers.utils.getAddress(value?.account));
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
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(function (response: any) {
        if (response.status === 200) {
          let parsedResp: UserResponse = response.data;
          setResponse(
            `${parsedResp.success ? "✅" : "❌"} ${parsedResp.response}`
          );
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
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(function (response: any) {
        if (response.status === 200) {
          let parsedResp: UserResponse = response.data;
          setResponse(
            `${parsedResp.success ? "✅" : "❌"} ${parsedResp.response}`
          );
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
      lmtAddress: walletData?.migration_lmt_address,
    },
    onSubmit: (values, { setErrors }) => {
      sendMigrationLmtWallets(values.lmtAddress);
    },
    validationSchema: lmtAddressSchema,
  });
  useEffect(() => {
    getUserWallet();
  });
  return (
    <S.MigrationContainer>
      <S.Content>
        <S.SubContent>
          <S.FormContainer>
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
                {edit && (
                  <S.Button disabled={!edit} noActive={!edit} type="submit">
                    Save
                  </S.Button>
                )}
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
                    formikLMT.touched.lmtAddress && formikLMT.errors.lmtAddress
                  }
                />
                {/* {(walletData.migration_lmt_address !== "" ) && (<S.Text ellipsis>Validated: {walletData.migration_lmt_address_validated ? "✅" : "❌"}</S.Text>)} */}
                {edit && (
                  <S.Button disabled={!edit} noActive={!edit} type="submit">
                    Save
                  </S.Button>
                )}
              </S.ContainerInput>
            </S.Form>
              <S.Text>Avalanche Wallet: {walletAddress}</S.Text>
              {walletData.wallet_address !== "" && (
                <S.Text>
                  Validated: {walletData.wallet_address_validated ? "✅" : "❌"}
                </S.Text>
              )}
            <S.ContainerButtons>
              <S.Button type="button" onClick={() => setEdit(!edit)}>
                {edit ? "Finish" : "Edit Kleverchain Wallet"}
              </S.Button>

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
            <S.Text>
              {!edit
                ? ""
                : "*To avoid fraudulent activities, you  will NOT be able to edit your Kleverchain wallet address after you have submitted it on our platform.*"}
            </S.Text>
          </S.FormContainer>
        </S.SubContent>
      </S.Content>
    </S.MigrationContainer>
  );
};

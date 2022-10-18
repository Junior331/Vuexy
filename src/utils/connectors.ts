import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers } from "ethers";
// import { Client } from "@heroiclabs/nakama-js";

const injected = new InjectedConnector({ supportedChainIds: [43114, 43113] });

const nakamaProtocol = "https://";
const nakamaHostStaging = "stagingserver.lovemonsternft.com";
const nakamaHostProduction = "productionserver.lovemonsternft.com";
const nakamaPort = "443";
const nakamaHttpKey = "lovemonster";
const nakamaServerKey = "lovemonsterserver";


const getNakamaServer = () => {
  let nakamaHost = nakamaHostProduction;

  if(process.env.testnet === "true" || process.env.NODE_ENV === "development")
    nakamaHost = nakamaHostStaging;

  const nakamaServer = nakamaProtocol + nakamaHost + ":" + nakamaPort + "/";
  return nakamaServer;
}

const getIsTestnet = async () => {
  let isTestnet = false;
  await injected.activate().then(async (value) => {
    const ethersProv = new ethers.providers.Web3Provider(value.provider);
    await (isTestnet = (await ethersProv._networkPromise).chainId === 43113);
  });
  return isTestnet;
};

const getSignedMsg = async () => {
  var timestamp = parseInt(localStorage.getItem("timestamp") || "");
  var signedMsg = localStorage.getItem("signedMsg");
  var dateNow = parseInt((Date.now() / 1000).toFixed());
  var needsNewSignedMsg = false;

  if (
    timestamp === null ||
    timestamp === undefined ||
    timestamp.toFixed() === "NaN"
  ) {
    timestamp = dateNow;
    needsNewSignedMsg = true;
  }
  if (dateNow - timestamp > 120) {
    timestamp = dateNow;
    needsNewSignedMsg = true;
  }
  if (signedMsg === null) {
    needsNewSignedMsg = true;
  }
  if (signedMsg === "null") {
    needsNewSignedMsg = true;
  }
  if (signedMsg === "") {
    needsNewSignedMsg = true;
  }

  if (needsNewSignedMsg) {
    signedMsg = await Sign_Message(timestamp);
  }

  if (signedMsg === null || signedMsg === "null") {
    return undefined;
  }

  localStorage.setItem("timestamp", timestamp.toFixed());
  localStorage.setItem("signedMsg", signedMsg);
  const localTimestamp = timestamp.toFixed();

  return { localTimestamp, signedMsg };
};

const Sign_Message = async (timestamp: number) => {
  var finalMsg = "";
  await injected.activate().then(async (value) => {
    const ethersProv = new ethers.providers.Web3Provider(value.provider);
    var addr = ethers.utils.getAddress(value?.account || "");
    var baseMsg = `LoveMonster Signed Message to check the ${addr} address at ${timestamp}!`;
    var signer = ethersProv.getSigner();
    var signedMsg = await signer.signMessage(baseMsg);
    finalMsg = await signedMsg;
  });
  return finalMsg;
};

export type UserWallet = {
  wallet_address: string
  wallet_address_validated: boolean
  migration_nft_address: string
  migration_nft_address_validated: boolean
  migration_lmt_address: string
  migration_lmt_address_validated: boolean
}

export type UserResponse = {
  success: boolean
  response: string
}


export {
  injected,
  getIsTestnet,
  getSignedMsg,
  getNakamaServer,
  // AuthClient,
  nakamaHostStaging as nakamaHost,
  nakamaPort,
  nakamaHttpKey,
  nakamaServerKey,
};

import * as yup from "yup";

export const migrationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Mandatory name field!")
    .min(3, "The name must be longer than 3 letters"),
  email: yup
    .string()
    .email("Invalid e-mail.")
    .required("Mandatory e-mail field"),
  wallet: yup
    .string()
    .required("Mandatory wallet field!")
    .min(41, "The wallet must be longer than 3 letters"),
});
// export const walletAddressSchema = yup.object().shape({
//   nftAddress: yup
//     .string()
//     .required("Mandatory wallet field!")
//     .min(41, "The wallet must be longer than 41 letters"),
//     lmtAddress: yup
//     .string()
//     .required("Mandatory wallet field!")
//     .min(41, "The wallet must be longer than 41 letters"),
// });
export const nftAddressSchema = yup.object().shape({
  nftAddress: yup
    .string()
    .matches(/^klv1/, "Its not a KLV Address compatible")
    .required("Mandatory wallet field!")
    .min(62, "The address must contain more than 62 characters."),
});
export const lmtAddressSchema = yup.object().shape({
  lmtAddress: yup
    .string()
    .matches(/^klv1/, "Its not a KLV Address compatible")
    .required("Mandatory wallet field!")
    .min(62, "The address must contain more than 62 characters."),
});

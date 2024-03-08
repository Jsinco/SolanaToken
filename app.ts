import {getWalletBalance} from "./utils";
import {SolanaAPIWallet} from "./SolanaAPIWallet";


// test wallet
getWalletBalance("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN").then((balance) => {
    console.log(balance);
});

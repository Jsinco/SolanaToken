import {AccountInfo, Connection, LAMPORTS_PER_SOL, PublicKey} from "@solana/web3.js";
import {Buffer} from "buffer";

/**
 * Get the balance of a wallet in SOL
 * @param address - The address of the wallet
 */
export async function getWalletBalance(address: String): Promise<Number> {
    const key = new PublicKey(address);
    const connection = new Connection("https://api.devnet.solana.com", "confirmed");
    // @ts-ignore
    return await connection.getBalance(key) / LAMPORTS_PER_SOL;
}

export async function getAccountInfo(address: String): Promise<AccountInfo<Buffer> | null> {
    const key = new PublicKey(address);
    const connection = new Connection("https://api.devnet.solana.com", "confirmed");
    return await connection.getAccountInfo(key);
}
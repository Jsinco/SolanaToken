import {AccountInfo, Connection, PublicKey} from "@solana/web3.js";

export class SolanaAPIWallet {
    key: PublicKey;
    constructor(key: PublicKey) {
        this.key = key;
    }

    getBalance(): Promise<Number> {
        const connection = new Connection("https://api.devnet.solana.com", "confirmed");
        // @ts-ignore
        return await connection.getBalance(this.key) / LAMPORTS_PER_SOL;
    }

    async getAccountInfo(): Promise<AccountInfo<Buffer> | null> {
        const connection = new Connection("https://api.devnet.solana.com", "confirmed");
        return await connection.getAccountInfo(this.key);
    }

    async transfer(to: PublicKey, amount: Number) {
        // ... Need to read more into API
    }

}
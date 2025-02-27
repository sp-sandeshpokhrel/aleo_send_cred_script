import { ExecutionMode } from "@doko-js/core";
import { CreditsContract } from "../artifacts/js/credits";


async function main() {
    // write script to transfer credits to users

    const creditsContract = new CreditsContract({ mode: ExecutionMode.SnarkExecute })
    const [sender, receiver] = await creditsContract.getAccounts()
    const sender_credits = await creditsContract.account(sender)
    const receiver_credits = await creditsContract.account(receiver)
    console.log(`Current credits: ${sender_credits} for sender and ${receiver_credits} for receiver`)
    const list_of_users = [sender]
    const amount = BigInt(100000); // 1 ALEO credits=1000000
    for (let i = 0; i < list_of_users.length; i++) {
        const tx = await creditsContract.transfer_public(list_of_users[i], amount)
        await tx.wait()
    }
    const sender_credits_after = await creditsContract.account(sender)
    const receiver_credits_after = await creditsContract.account(receiver)
    console.log(`Credits after transfer: ${sender_credits_after} for sender and ${receiver_credits_after} for receiver`)
}
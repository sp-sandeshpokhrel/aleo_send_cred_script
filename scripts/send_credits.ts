import { ExecutionMode } from "@doko-js/core";
import { CreditsContract } from "../artifacts/js/credits";


async function main() {

    const creditsContract = new CreditsContract({ mode: ExecutionMode.SnarkExecute })
    const [sender] = creditsContract.getAccounts();
    const sender_credits = await creditsContract.account(sender)
    console.log(`Current credits: ${sender_credits}`)

    const list_of_users: string[] = ["aleo15ayvyxs52qkg2vsy5atln568qk49m4dndv6nptppk0l8fmt88ygs7jchep"]  // List of aleo users address in string
    const amount = BigInt(123456); // 1 ALEO credits=1000000
    for (let i = 0; i < list_of_users.length; i++) {
        try {
            console.log(`Transferring ${amount} credits to ${list_of_users[i]} index ${i}`)
            const tx = await creditsContract.transfer_public(list_of_users[i], amount)
            await tx.wait()
            console.log('Transfer successful for user:', list_of_users[i])
        } catch (e) {
            console.log('Transfer failed for user:', list_of_users[i], 'index ', i)
        }
    }
    const sender_credits_after = await creditsContract.account(sender)
    console.log(`Credits after transfer: ${sender_credits_after}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
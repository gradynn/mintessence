import { Auth } from 'aws-amplify';

export async function isLoggedIn() {
    try {
        await Auth.currentAuthenticatedUser();
        console.log("Logged In");
        return true;
    } catch {
        console.log("Not Logged In");
        return false;
    }
}
import { Authenticator, ThemeProvider} from "@aws-amplify/ui-react";
import React from "react";
import "@aws-amplify/ui-react/styles.css";

function SignUpSignInPage() {

    return (
        <ThemeProvider>
            <Authenticator></Authenticator>
        </ThemeProvider>
    );
}

export default SignUpSignInPage;
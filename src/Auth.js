import auth0 from 'auth0-js';

const LOGIN_SUCCESS = "/secret";
const LOGIN_FAILURE = "/"

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: "dev-liwu6bl3.auth0.com",
        clientID: "Zx337it6952CiporJWaG06qCLx7hJeym",
        redirectUri: "http://localhost:3000/callback",
        audience: "https://dev-liwu6bl3.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid profile"
    });

    constructor() {
        this.login = this.login.bind(this);
    }

    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        this.auth0.parseHash((err,authResults)=>{
            if(authResults && authResults.accessToken && authResults.idToken) {
                let expiresAt = JSON.stringify((authResults.expiresIn) * 100 + new Date().getTime());
                localStorage.setItem("access_token", authResults.accessToken);
                localStorage.setItem("id_token", authResults.idToken);
                localStorage.setItem("expires_at", expiresAt);
                window.location.hash = "";
                window.location.pathname = LOGIN_SUCCESS;

            } else if (err) {
                window.location.pathname = LOGIN_FAILURE
                console.log(err);
            }
        })
    }

    isAuthenticated() {
        let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
    }

    logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        window.location.pathname = LOGIN_FAILURE;
    }
}
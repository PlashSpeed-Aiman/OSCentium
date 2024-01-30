import loginState from "../loginState.ts";

export class AuthService{
    public static checkAuth(): boolean{
        return !!loginState.authenticated;
    }
}
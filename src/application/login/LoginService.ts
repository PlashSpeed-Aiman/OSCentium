import {SEED_USERS} from "../seeduser.ts";
import loginState from "../loginState.ts";


export default class LoginService{

public static login(username: string, password: string): boolean{
    let user = SEED_USERS.find(user => user.username === username && user.password === password);
    // store authenticated
    if(user){

        localStorage.setItem('authenticated', 'true');
    }
    return !!user;
    }

public static logout(): void{
    localStorage.removeItem('authenticated');
}
}

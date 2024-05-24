import {PassportStrategy} from "@nestjs/passport";
import {Strategy} from "passport-local";
import {AuthService} from "../auth.service";
import {Injectable, UnauthorizedException} from "@nestjs/common";
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({ usernameField: 'email' });
    }
    async validate(email:string, password:string) {
        console.log('local.strategy');
        const jwtUser = await this.authService.validate({email,password});
        console.log(jwtUser);
        if (!jwtUser) throw new UnauthorizedException();
        return jwtUser;
    }
}
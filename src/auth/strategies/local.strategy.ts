import {PassportStrategy} from "@nestjs/passport";
import {Strategy} from "passport-local";
import {AuthService} from "../auth.service";
import {Injectable, UnauthorizedException} from "@nestjs/common";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly authService: AuthService) {
        super();

    }

    validate(username: string, password: string) {
        const jwtUser = this.authService.validate({email: username, password: password});
        if (!jwtUser) {
            throw new UnauthorizedException();
        }
        return jwtUser;
    }


}
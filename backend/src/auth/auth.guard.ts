import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { UserService } from "src/users/users.service";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private jwtService:JwtService,
        private userService:UserService,
    ){}
    async canActivate(context: ExecutionContext):Promise<boolean> {
         
        const request = context.switchToHttp().getRequest()
        const token = this.extractTokenFromHeader(request)
        console.log(token)

        if(!token){
            throw new UnauthorizedException()
        }

        try {
            const payload = await this.jwtService.verifyAsync(
                token,
                {
                    secret:'Esta es la llave secreta deberia estar en variables de configuracion.'
                }
            )
            console.log(payload.mail)
            const user = await this.userService.findUserbyMail(payload.mail)
            request['user'] =  user
            console.log(user)

            
        } catch (error) {
            console.log(error)
            throw new UnauthorizedException();
        }
        return true
    }

    private extractTokenFromHeader(request): string | undefined {
        if(!request.headers.authorization){
            throw new UnauthorizedException()
        }
        const [type, token] = request.headers.authorization.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
      }

}
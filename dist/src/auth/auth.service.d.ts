import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
export declare class AuthService {
    private jwt;
    private userService;
    constructor(jwt: JwtService, userService: UserService);
    register(dto: any): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    login(dto: any): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    generateTokens(userId: number, email: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}

import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: any): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    login(dto: any): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}

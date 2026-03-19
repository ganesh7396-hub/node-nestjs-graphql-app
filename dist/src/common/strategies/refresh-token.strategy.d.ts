import { Request } from 'express';
export interface RefreshTokenPayload {
    sub: number;
    email: string;
}
declare const RefreshTokenStrategy_base: new (...args: any) => any;
export declare class RefreshTokenStrategy extends RefreshTokenStrategy_base {
    constructor();
    validate(req: Request, payload: RefreshTokenPayload): Promise<{
        userId: number;
        email: string;
        refreshToken: string;
    }>;
}
export {};

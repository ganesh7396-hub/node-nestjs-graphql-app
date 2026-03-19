export interface JwtPayload {
    sub: number;
    email: string;
}
declare const AccessTokenStrategy_base: new (...args: any) => any;
export declare class AccessTokenStrategy extends AccessTokenStrategy_base {
    constructor();
    validate(payload: JwtPayload): Promise<{
        userId: number;
        email: string;
    }>;
}
export {};

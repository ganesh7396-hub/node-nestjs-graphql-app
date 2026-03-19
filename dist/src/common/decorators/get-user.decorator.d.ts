export interface CurrentUser {
    userId: number;
    email: string;
    refreshToken?: string;
}
export declare const GetUser: (...dataOrPipes: (keyof CurrentUser | import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>> | undefined)[]) => ParameterDecorator;

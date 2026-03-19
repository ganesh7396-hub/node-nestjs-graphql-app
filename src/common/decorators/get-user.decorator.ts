import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface CurrentUser {
  userId: number;
  email: string;
  refreshToken?: string;
}

export const GetUser = createParamDecorator(
  (data: keyof CurrentUser | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    const user: CurrentUser = request.user;

    if (!user) {
      return null;
    }

    return data ? user[data] : user;
  },
);
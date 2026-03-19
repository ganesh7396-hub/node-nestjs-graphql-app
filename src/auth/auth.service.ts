import { Injectable, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    private userService: UserService,
  ) {}

  async register(dto: any) {
    const hash = await bcrypt.hash(dto.password, 10);
    const user = await this.userService.createUser(dto.email, hash);
    return this.generateTokens(user.id, user.email);
  }

  async login(dto: any) {
    const user = await this.userService.findByEmail(dto.email);
    if (!user) throw new ForbiddenException();

    const match = await bcrypt.compare(dto.password, user.password);
    if (!match) throw new ForbiddenException();

    return this.generateTokens(user.id, user.email);
  }

  async generateTokens(userId: number, email: string) {
    return {
      accessToken: await this.jwt.signAsync(
        { sub: userId, email },
        { secret: process.env.JWT_ACCESS_SECRET, expiresIn: '15m' },
      ),
      refreshToken: await this.jwt.signAsync(
        { sub: userId, email },
        { secret: process.env.JWT_REFRESH_SECRET, expiresIn: '7d' },
      ),
    };
  }
}
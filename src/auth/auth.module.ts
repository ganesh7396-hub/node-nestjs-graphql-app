import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AccessTokenStrategy } from 'src/common/strategies/access-token.strategy';
import { RefreshTokenStrategy } from 'src/common/strategies/refresh-token.strategy';



@Module({
  imports: [
    JwtModule.register({}), // JWT setup
    UserModule,             // ✅ Required for UserService
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AccessTokenStrategy,
    RefreshTokenStrategy,
  ],
  exports: [AuthService], // optional (if used elsewhere)
})
export class AuthModule {}
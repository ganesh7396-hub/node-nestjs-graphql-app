import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  providers: [UserService],
  exports: [UserService], // ✅ Important: used in AuthModule
})
export class UserModule {}
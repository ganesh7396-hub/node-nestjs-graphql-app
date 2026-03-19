import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './post/post.module';

@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true, // ✅ important
    }),
    PrismaModule,
    AuthModule,
    UserModule,
    PostModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,   // ✅ REQUIRED (this is your error fix)
      autoSchemaFile: true,
      context: ({ req }) => ({ req }),
    }),


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

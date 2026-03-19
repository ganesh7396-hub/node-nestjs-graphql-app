Step 1: Create Project

npm i -g @nestjs/cli
nest new node-nestjs-graphql-app
cd node-nestjs-graphql-app

Step 2: Install Dependencies

npm install @nestjs/graphql @nestjs/apollo graphql
npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt
npm install prisma @prisma/client
npm install class-validator class-transformer

Step 3: Prisma Setup
npx prisma init


node-nestjs-graphql-app/
│
├── src/
│   ├── main.ts
│   ├── app.module.ts
│
│   ├── prisma/
│   │   ├── prisma.module.ts
│   │   ├── prisma.service.ts
│
│   ├── common/
│   │   ├── guards/
│   │   │   ├── access-token.guard.ts
│   │   │   ├── refresh-token.guard.ts
│   │   ├── strategies/
│   │   │   ├── access-token.strategy.ts
│   │   │   ├── refresh-token.strategy.ts
│   │   ├── decorators/
│   │   │   ├── get-user.decorator.ts
│
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.module.ts
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── dto/
│   │   │   │   ├── register.dto.ts
│   │   │   │   ├── login.dto.ts
│   │
│   │   ├── user/
│   │   │   ├── user.module.ts
│   │   │   ├── user.service.ts
│   │
│   │   ├── post/
│   │   │   ├── post.module.ts
│   │   │   ├── post.service.ts
│   │   │   ├── post.resolver.ts
│   │   │   ├── dto/
│   │   │   │   ├── create-post.input.ts
│   │   │   │   ├── update-post.input.ts
│   │   │   ├── models/
│   │   │   │   ├── post.model.ts
│
├── prisma/
│   ├── schema.prisma
│
├── .env
├── package.json


🔐 3. .env
DATABASE_URL="postgresql://postgres:root@localhost:5432/ebook"

JWT_ACCESS_SECRET=access-secret
JWT_REFRESH_SECRET=refresh-secret

Run:

npx prisma migrate dev --name init
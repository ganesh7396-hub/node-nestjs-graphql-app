import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // ✅ Create User (Register)
  async createUser(email: string, password: string) {
    return this.prisma.user.create({
      data: {
        email,
        password,
      },
    });
  }

  // ✅ Find User by Email (Login)
  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  // ✅ Find User by ID (optional use)
  async findById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  // ✅ Get all users (optional / admin use)
  async findAll() {
    return this.prisma.user.findMany();
  }

  // ✅ Delete user (optional)
  async deleteUser(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
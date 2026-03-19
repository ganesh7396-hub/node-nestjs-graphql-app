import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  // ✅ Create Post
  async addPost(userId: number, title: string, content: string) {
    return this.prisma.post.create({
      data: {
        title,
        content,
        userId,
      },
    });
  }

  // ✅ Update Post
  async updatePost(id: number, title: string, content: string) {
    return this.prisma.post.update({
      where: { id },
      data: {
        title,
        content,
      },
    });
  }

  // ✅ Delete Post
  async deletePost(id: number) {
    return this.prisma.post.delete({
      where: { id },
    });
  }

  // ✅ Get All Posts
  async getPosts() {
    return this.prisma.post.findMany({
      include: {
        user: true,
      },
    });
  }
}
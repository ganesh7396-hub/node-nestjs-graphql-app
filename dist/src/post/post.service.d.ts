import { PrismaService } from 'src/prisma/prisma.service';
export declare class PostService {
    private prisma;
    constructor(prisma: PrismaService);
    addPost(userId: number, title: string, content: string): Promise<{
        createdAt: Date;
        id: number;
        title: string;
        content: string;
        userId: number;
    }>;
    updatePost(id: number, title: string, content: string): Promise<{
        createdAt: Date;
        id: number;
        title: string;
        content: string;
        userId: number;
    }>;
    deletePost(id: number): Promise<{
        createdAt: Date;
        id: number;
        title: string;
        content: string;
        userId: number;
    }>;
    getPosts(): Promise<({
        user: {
            email: string;
            password: string;
            createdAt: Date;
            id: number;
        };
    } & {
        createdAt: Date;
        id: number;
        title: string;
        content: string;
        userId: number;
    })[]>;
}

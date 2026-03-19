import { PrismaService } from '../prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(email: string, password: string): Promise<{
        email: string;
        password: string;
        createdAt: Date;
        id: number;
    }>;
    findByEmail(email: string): Promise<{
        email: string;
        password: string;
        createdAt: Date;
        id: number;
    } | null>;
    findById(id: number): Promise<{
        email: string;
        password: string;
        createdAt: Date;
        id: number;
    } | null>;
    findAll(): Promise<{
        email: string;
        password: string;
        createdAt: Date;
        id: number;
    }[]>;
    deleteUser(id: number): Promise<{
        email: string;
        password: string;
        createdAt: Date;
        id: number;
    }>;
}

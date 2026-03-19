import { PostService } from './post.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
export declare class PostResolver {
    private readonly postService;
    constructor(postService: PostService);
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
    addPost(userId: number, createPostInput: CreatePostInput): Promise<{
        createdAt: Date;
        id: number;
        title: string;
        content: string;
        userId: number;
    }>;
    updatePost(updatePostInput: UpdatePostInput): Promise<{
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
}

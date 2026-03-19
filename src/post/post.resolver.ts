import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
} from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './models/post.model';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from 'src/common/guards/access-token.guard';
import { GetUser } from 'src/common/decorators/get-user.decorator';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  // ✅ Query (IMPORTANT - fixes your error)
  @Query(() => [Post])
  async getPosts() {
    return this.postService.getPosts();
  }

  // ✅ Add Post
  @UseGuards(AccessTokenGuard)
  @Mutation(() => Post)
  async addPost(
    @GetUser('userId') userId: number,
    @Args('createPostInput') createPostInput: CreatePostInput,
  ) {
    return this.postService.addPost(
      userId,
      createPostInput.title,
      createPostInput.content,
    );
  }

  // ✅ Update Post
  @UseGuards(AccessTokenGuard)
  @Mutation(() => Post)
  async updatePost(
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
  ) {
    return this.postService.updatePost(
      updatePostInput.id,
      updatePostInput.title,
      updatePostInput.content,
    );
  }

  // ✅ Delete Post
  @UseGuards(AccessTokenGuard)
  @Mutation(() => Post)
  async deletePost(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.postService.deletePost(id);
  }
}
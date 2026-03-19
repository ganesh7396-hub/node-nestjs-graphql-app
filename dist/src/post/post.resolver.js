"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const post_service_1 = require("./post.service");
const post_model_1 = require("./models/post.model");
const create_post_input_1 = require("./dto/create-post.input");
const update_post_input_1 = require("./dto/update-post.input");
const common_1 = require("@nestjs/common");
const access_token_guard_1 = require("../common/guards/access-token.guard");
const get_user_decorator_1 = require("../common/decorators/get-user.decorator");
let PostResolver = class PostResolver {
    postService;
    constructor(postService) {
        this.postService = postService;
    }
    async getPosts() {
        return this.postService.getPosts();
    }
    async addPost(userId, createPostInput) {
        return this.postService.addPost(userId, createPostInput.title, createPostInput.content);
    }
    async updatePost(updatePostInput) {
        return this.postService.updatePost(updatePostInput.id, updatePostInput.title, updatePostInput.content);
    }
    async deletePost(id) {
        return this.postService.deletePost(id);
    }
};
exports.PostResolver = PostResolver;
__decorate([
    (0, graphql_1.Query)(() => [post_model_1.Post]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "getPosts", null);
__decorate([
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    (0, graphql_1.Mutation)(() => post_model_1.Post),
    __param(0, (0, get_user_decorator_1.GetUser)('userId')),
    __param(1, (0, graphql_1.Args)('createPostInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_post_input_1.CreatePostInput]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "addPost", null);
__decorate([
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    (0, graphql_1.Mutation)(() => post_model_1.Post),
    __param(0, (0, graphql_1.Args)('updatePostInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_post_input_1.UpdatePostInput]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "updatePost", null);
__decorate([
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    (0, graphql_1.Mutation)(() => post_model_1.Post),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "deletePost", null);
exports.PostResolver = PostResolver = __decorate([
    (0, graphql_1.Resolver)(() => post_model_1.Post),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostResolver);
//# sourceMappingURL=post.resolver.js.map
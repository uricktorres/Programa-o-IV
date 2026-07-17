import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './posts/post.entity';
import { User } from './users/user.entity';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Post, User],
      synchronize: true,
    }),
    PostsModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}

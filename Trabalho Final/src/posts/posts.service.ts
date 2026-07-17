import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  create(dto: CreatePostDto): Promise<Post> {
    const post = this.postRepository.create(dto);
    return this.postRepository.save(post);
  }

  findAll(): Promise<Post[]> {
    return this.postRepository.find({ order: { order: 'ASC' } });
  }

  findOne(id: number): Promise<Post | null> {
    return this.postRepository.findOneBy({ id });
  }

  async update(id: number, dto: UpdatePostDto): Promise<Post | null> {
    await this.postRepository.update(id, dto);
    return this.postRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.postRepository.delete(id);
  }
}

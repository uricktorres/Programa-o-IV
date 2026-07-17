import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from '../src/posts/posts.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Post } from '../src/posts/post.entity';

describe('PostsService', () => {
  let service: PostsService;
  let repo: { create: jest.Mock; save: jest.Mock; find: jest.Mock; findOneBy: jest.Mock; update: jest.Mock; delete: jest.Mock };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostsService,
        {
          provide: getRepositoryToken(Post),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
            find: jest.fn(),
            findOneBy: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<PostsService>(PostsService);
    repo = module.get(getRepositoryToken(Post));
  });

  it('deve criar um post', async () => {
    const dto = { title: 'Teste', content: 'Conteúdo', imageUrl: '', order: 1 };
    const created = { id: 1, ...dto };
    repo.create.mockReturnValue(created);
    repo.save.mockResolvedValue(created);
    const result = await service.create(dto as any);
    expect(result).toEqual(created);
  });

  it('deve listar posts ordenados', async () => {
    repo.find.mockResolvedValue([{ id: 1, title: 'A' }]);
    const result = await service.findAll();
    expect(result).toEqual([{ id: 1, title: 'A' }]);
  });
});

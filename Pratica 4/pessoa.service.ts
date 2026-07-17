import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './create-usuario.dto';
import { UpdateUsuarioDto } from './update-usuario.dto';

@Injectable()
export class PessoaService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  // CREATE
  create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuario = this.usuarioRepository.create(createUsuarioDto);
    return this.usuarioRepository.save(usuario);
  }

  // READ - lista todos
  findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  // READ - um único usuário
  findOne(id: number): Promise<Usuario | null> {
    return this.usuarioRepository.findOneBy({ id });
  }

  // UPDATE
  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario | null> {
    await this.usuarioRepository.update(id, updateUsuarioDto);
    return this.usuarioRepository.findOneBy({ id });
  }

  // DELETE
  async remove(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
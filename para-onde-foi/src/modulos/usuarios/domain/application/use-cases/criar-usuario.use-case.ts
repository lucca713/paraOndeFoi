 import { UsuariosRepository } from '../../repositories/usuarios.repository';
import { criarUSuarioDto } from '../dto/usuariosDto.dto';
import { Usuarios } from '../../entities/usuarios.entity';

export class criarUsuarioUseCase {
  constructor(private readonly usuarioRepository: UsuariosRepository) {}

  async criar(imputs: criarUSuarioDto): Promise<Usuarios> {
    if (await this.usuarioRepository.findByemail(imputs.email))
      throw new Error(
        'Usuario existente, tente novamente ou recupere sua senha',
      );

    const usuario = new Usuarios(
      imputs.nome,
      imputs.email,
      imputs.renda_total,
      imputs.senha,
    );

    return this.usuarioRepository.create(usuario);
  }
}

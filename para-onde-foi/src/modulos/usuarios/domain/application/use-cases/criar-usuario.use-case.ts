import { UsuariosRepository } from '../../repositories/usuarios.repository';
import { criarUSuarioDto } from '../dto/usuariosDto.dto';
import { Usuarios } from '../../entities/usuarios.entity';
import { hashProvider } from '../providers/hash.provider';

export class criarUsuarioUseCase {
  constructor(
    private readonly usuarioRepository: UsuariosRepository,
    private readonly hashProvider: hashProvider,
  ) {}

  async criar(imputs: criarUSuarioDto): Promise<Usuarios> {
    if (await this.usuarioRepository.findByemail(imputs.email))
      throw new Error(
        'Usuario existente, tente novamente ou recupere sua senha',
      );

    const senha = await this.hashProvider.criarUmHash(imputs.senha);

    const usuario = new Usuarios(
      imputs.nome,
      imputs.email,
      imputs.renda_total,
      senha,
    );

    return this.usuarioRepository.create(usuario);
  }
}

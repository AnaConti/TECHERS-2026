import * as repository from './auth.repository.js';

export const cadastrarNovoUsuario = async (dadosDigitados) => {
    const idade = Number(dadosDigitados.get('idade'));
    const senha = dadosDigitados.get('senha');
    const email = dadosDigitados.get('email');

    // Validações de Regra de Negócio
    if (idade < 16) throw new Error('Idade mínima é 16 anos.');
    if (senha.length <= 6) throw new Error('A senha deve ter mais de 6 caracteres.');

    const usuarios = await repository.buscarUsuarios();
    const emailExiste = usuarios.some(user => user.email === email);
    
    if (emailExiste) throw new Error('E-mail já cadastrado.');

    // Objeto limpo para o banco de dados
    const novoUsuario = {
        nome: dadosDigitados.get('nome'),
        email, 
        senha, 
        idade
    };

    await repository.salvarUsuario(novoUsuario);
};
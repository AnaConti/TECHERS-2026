import fs from 'node:fs/promises';
const ARQUIVO = './usuarios.json';

export const buscarUsuarios = async () => {
    try {
        const dados = await fs.readFile(ARQUIVO, 'utf-8');
        return JSON.parse(dados);
    } catch (e) { 
        return []; 
    }
};

export const salvarUsuario = async (novoUsuario) => {
    const usuarios = await buscarUsuarios();
    usuarios.push(novoUsuario);
    await fs.writeFile(ARQUIVO, JSON.stringify(usuarios, null, 2));
};
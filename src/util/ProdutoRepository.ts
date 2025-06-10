import { Produto } from "../model/Produto";

export interface ProdutoRepository{

    // CRUD do produto
    procurarPorCodigo(codigo: number): void;
    listarTodas(): void;
    cadastrar(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(codigo: number): void;
}
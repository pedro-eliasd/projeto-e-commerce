import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../util/ProdutoRepository";

export class ProdutoController implements ProdutoRepository{

    private listaProdutos: Array<Produto> = new Array<Produto>();
    codigo: number = 0

    procurarPorCodigo(codigo: number): void {
        let buscaProduto = this.buscarNoArray(codigo);

        if (buscaProduto !== null){
            buscaProduto.visualizar();
        }else{
            console.log(`O produto com o código ${codigo} não foi encontrado.`)
        }
    }
    listarTodas(): void {
        for (let produto of this.listaProdutos){
            produto.visualizar();
        }
    }
    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log(`\nO produto com o código: ${produto.codigo} foi adicionado com sucesso!`)
    }
    atualizar(produto: Produto): void {
       let buscaProduto = this.buscarNoArray(produto.codigo);

       if (buscaProduto !== null){
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(`O produto com o código: ${produto.codigo} foi adicionado com sucesso.`);
       }else{
            console.log(`O produto com o código: ${produto.codigo} não foi encontrado.`);
       }
    }
    deletar(codigo: number): void {
        let buscaProduto = this.buscarNoArray(codigo);

        if(buscaProduto !== null){
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log(`O produto com o código: ${codigo} foi apagado com sucesso.`);
        }else{
            console.log(`O produto com o código: ${codigo} não foi encontrado.`);
        }
    }

    //Metodos auxiliares

    //Gerar código do produto
    public gerarCodigo(): number{
        return ++ this.codigo;
    }

    //Checa se uma conta existe
    public buscarNoArray(codigo: number): Produto | null{
        for(let produto of this.listaProdutos){
            if (produto.codigo === codigo){
                return produto;
            }
        }
        return null;
    }
    
}
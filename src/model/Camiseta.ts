import { Produto } from "./Produto";

export class Camiseta extends Produto{
    private _tamanho: string;
    private _cor: string;
    private _caimento: string;

    constructor( codigo: number,  nome: string, preco: number, emEstoque: boolean, tipo: number, tamanho: string, cor: string, caimento: string){
        super(codigo, nome, preco, emEstoque, tipo);
        this._tamanho = tamanho;
        this._cor = cor;
        this._caimento = caimento;
    }

    public get tamanho(){
        return this._tamanho;
    }

    public set tamanho(tamanho: string){
        this._tamanho = tamanho
    }

    public get cor(){
        return this._cor;
    }

    public set cor(cor: string){
        this._tamanho = cor
    }

    public get caimento(){
        return this._caimento;
    }

    public set caimento(caimento: string){
        this._tamanho = caimento
    }

    public visualizar(){

        console.log("\n\n*****************************************************");
        console.log("Dados do produto:");
        console.log("*****************************************************");
        console.log("Código: " + this.codigo)
        console.log("Nome: " + this.nome);
        console.log("Tamanho: " + this._tamanho);
        console.log("Cor: " + this._cor);
        console.log("Caimento: " + this._caimento);
        console.log("Preço: " + this.preco);
        console.log("Em estoque: " + this.emEstoque);
        console.log("*****************************************************");
    }
}
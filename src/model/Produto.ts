export abstract class Produto{
    private _codigo: number;
    private _nome: string;
    private _preco: number;
    private _emEstoque: boolean;
    private _tipo: number;

    constructor( codigo: number,  nome: string, preco: number, emEstoque: boolean, tipo: number){
        this._codigo = codigo;
        this._nome = nome;
        this._preco = preco;
        this._emEstoque = emEstoque;
        this._tipo = tipo;
    }

    public get preco(){
        return this._preco;
    }

    public set preco(preco: number){
        this._preco = preco;
    }

    public get emEstoque(){
        return this._emEstoque;
    }

    public set emEstoque(emEstoque: boolean){
        this._emEstoque = emEstoque;
    }

    public get tipo(){
        return this._tipo;
    }

    public set tipo(tipo: number){
        this._tipo = tipo;
    }

    public get nome(){
        return this._nome;
    }

    public set nome(nome: string){
        this._nome = nome;
    }

    public get codigo(){
        return this._codigo;
    }

    public set codigo(codigo: number){
        this._codigo = codigo;
    }

    public visualizar(){
        let tipo: string = "";

        switch (this._tipo){
            case 1:
                tipo = 'Calçados';
                break;
            case 2:
                tipo = 'Vestuário';
                break;
        }

        console.log("\n\n*****************************************************");
        console.log("Dados do produto:");
        console.log("*****************************************************");
        console.log("Preço: " + this._preco);
        console.log("Em estoque: " + this._emEstoque);
        console.log("Tipo de produto: " + tipo);
        console.log("Nome: " + this._nome);
    }

}
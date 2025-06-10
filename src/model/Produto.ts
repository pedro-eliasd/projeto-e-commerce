export abstract class Produto{
    private _preco: number;
    private _emEstoque: boolean;
    private _tipo: number;
    private _nome: string;
    private _codigo: number

    constructor(preco: number, emEstoque: boolean, tipo: number, nome: string, codigo: number){
        this._preco = preco;
        this._emEstoque = emEstoque;
        this._tipo = tipo;
        this._nome = nome;
        this._codigo = codigo;
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
        let emEstoque : boolean;

        switch (this._tipo){
            case 1:
                tipo = 'Calçados';
                break;
            case 2:
                tipo = 'Vestuario';
                break;
            case 3:
                tipo = 'Acessórios';
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
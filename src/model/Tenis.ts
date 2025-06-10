import { Produto } from "./Produto";

export class Tenis extends Produto{
    private _modelo: string;
    private _marca: string;
    private _colorWay: string;

    constructor(preco: number, emEstoque: boolean, tipo: number, nome: string, codigo: number, modelo: string, marca: string, colorWay: string){
        super(preco, emEstoque, tipo, nome, codigo);
        this._modelo = modelo;
        this._marca = marca;
        this._colorWay = colorWay;
    }

    public get modelo(){
        return this._modelo;
    }

    public set modelo(modelo: string){
        this._modelo = modelo;
    }

    public get marca(){
        return this._marca;
    }

    public set marca(marca: string){
        this._marca = marca;
    }
public get colorWay(){
        return this._colorWay;
    }

    public set colorWay(colorWay: string){
        this._colorWay = colorWay;
    }

    public visualizar(){

        console.log("\n\n*****************************************************");
        console.log("Dados do produto:");
        console.log("*****************************************************");
        console.log("Código: " + this.codigo)
        console.log("Nome: " + this.nome);
        console.log("Modelo: " + this._modelo);
        console.log("Nome: " + this._marca);
        console.log("Nome: " + this._colorWay);
        console.log("Preço: " + this.preco);
        console.log("Em estoque: " + this.emEstoque);
        console.log("*****************************************************");
    }

}
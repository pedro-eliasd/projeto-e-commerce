import leia = require ('readline-sync');
import { Produto } from './src/model/Produto';
import { Tenis } from './src/model/Tenis';
import { Camiseta } from './src/model/Camiseta';
import { ProdutoController } from './src/controller/ProdutoController';

export function main(){

    let produtos: ProdutoController = new ProdutoController();

    let opcao, preco, tipo, codigo: number;
    let nome, modelo, marca, colorWay, tamanho, cor, caimento: string;
    let emEstoque: boolean;
    const tipoProdutos = ['Calçados', 'Vestuário', 'Acessórios']

    while (true){
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                ALPHA SNEAKERSTORE                   ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Adicionar produto                    ");
        console.log("            2 - Listar todas os produtos             ");
        console.log("            3 - Buscar produto por código            ");
        console.log("            4 - Atualizar Dados do produto           ");
        console.log("            5 - Apagar produto                       ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log('Entre com a opção desejada: ');
        opcao = leia.questionInt("");

        if (opcao === 6){
            console.log('\nObrigado por visitar a Alpha Sneakerstore!')
            sobre();
            process.exit(0);
        }

        switch (opcao){
            case 1:
                console.log('\n\nAdicionar produto:\n\n');

                console.log('Digite o preço do produto: ');
                preco = leia.questionFloat('');
                
                emEstoque = true;

                console.log('Digite o tipo do produto(1 ou 2): ');
                tipo = leia.questionInt('');

                console.log('Digite o nome do produto: ');
                nome = leia.question('');

                console.log('Digite o código do produto: ')
                codigo = leia.questionInt('');

                switch (tipo){
                    case 1: 
                        console.log('Digite o modelo: ');
                        modelo = leia.question('')

                        console.log('Digite a marca: ');
                        marca = leia.question('');

                        console.log('Digite a color way: ');
                        colorWay = leia.question('');
                        break;
                    case 2: 
                        console.log('Digite o tamanho: ');
                        tamanho = leia.question('')

                        console.log('Digite a cor: ');
                        cor = leia.question('');

                        console.log('Digite a caimento: ');
                        caimento = leia.question('');
                        break;
                    default:
                        console.log('Tipo inválido.');
                        break;
                }

                keyPress();
                break;

            case 2:
                console.log('\n\nListar todos os produtos:\n\n');
                produtos.listarTodas();
                keyPress();
                break;

            case 3:
                console.log('\n\nBuscar produto por código\n\n');
                console.log('Digite o código do produto: ');
                codigo = leia.questionInt('');
                produtos.procurarPorCodigo(codigo);

                keyPress();
                break;

            case 4:
                console.log('\n\nAtualizar os dados do produto:\n\n');
                console.log('Digite o código do produto: ');
                codigo = leia.questionInt('');
                let produto = produtos.buscarNoArray(codigo);

                if (produto !== null){
                    console.log('Digite o preço do produto: ');
                preco = leia.questionFloat('');
                
                emEstoque = true;

                console.log('Digite o tipo do produto(1 ou 2): ');
                tipo = leia.questionInt('');

                console.log('Digite o nome do produto: ');
                nome = leia.question('');

                console.log('Digite o código do produto: ')
                codigo = leia.questionInt('');

                switch (tipo){
                    case 1: 
                        console.log('Digite o modelo: ');
                        modelo = leia.question('')

                        console.log('Digite a marca: ');
                        marca = leia.question('');

                        console.log('Digite a color way: ');
                        colorWay = leia.question('');
                        break;
                    case 2: 
                        console.log('Digite o tamanho: ');
                        tamanho = leia.question('')

                        console.log('Digite a cor: ');
                        cor = leia.question('');

                        console.log('Digite a caimento: ');
                        caimento = leia.question('');
                        break;
                    default:
                        console.log('Tipo inválido.');
                        break;
                }

                }else{
                    console.log(`O produto com o código ${codigo} não foi encontrado.`)
                }

                keyPress();
                break;

            case 5:
                console.log('\n\nApagar um produto\n\n');
                console.log('Digite o código do produto: ');
                codigo = leia.questionInt();
                produtos.deletar(codigo);

                keyPress();
                break;
            
            default:
                console.log('\nOpção inválida\n')
                keyPress();
                break;
        }

        function sobre(): void{
            console.log("\n*****************************************************");
            console.log("Projeto Desenvolvido por: Pedro Elias");
            console.log("Contato - elias.pedrocontato@gmail.com");
            console.log("github.com/pedro-eliasd");
            console.log("*****************************************************");
        }

        function keyPress(): void{
            console.log('Pressione enter para continuar...');
            leia.prompt();
        }
    }
}
import leia = require ('readline-sync');
import { Produto } from './src/model/Produto';
import { Tenis } from './src/model/Tenis';

export function main(){

    let opcao: number;

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

                break;

            case 2:

                break;

            case 3:

                break;

            case 4:

                break;

            case 5:

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
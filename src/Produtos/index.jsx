import ConjuntoQueridinhoImagem from '../assets/imgs/conjunto-queridinho.jpeg';
import MaioGabb from '../assets/imgs/maio-gabb.jpeg';
import TopMay from '../assets/imgs/top-may.jpeg';
import CalcinhaDuo from '../assets/imgs/calcinha-duo.jpeg';
import CalcaKimono from '../assets/imgs/calca-kimono.jpeg';


const Produtos = [
    {
        titulo: "Conjunto Queridinho",
        preçoTotal: 115.00,
        preçoPeça: [
            {
                tiara: 18.00,
                parteDeCima: 57.60,
                parteDeBaixo: 57.50
            }
        ],
        imagem: ConjuntoQueridinhoImagem,
        cores: [],
    },

    {
        titulo: "Maiô Gabb",
        preço: 150.00,
        preçoPeça: [
            {
                semFlor: 150.00,
                ComFlor: ''
            }
        ],
        imagem: MaioGabb,
        cores: ['rosa', 'preto', 'prata'],
    },

    {
        titulo: "Top May",
        preço: 135.00,
        preçoPeça: [
            {   
                semFlor: '',
                comFlor: 135.00,
                parteDeCima: 67.50,
                parteDeBaixo: 67.50,
            }
        ],
        imagem: TopMay,
        cores: ['verde', 'rosa', 'verde/rosa', 'preto', 'prata', 'preto/prata'],

    },

    {
        titulo: "Calcinha Duo",
        preço: 62.50,
        preçoPeça: [
            {   
                
            }
        ],
        imagem: CalcinhaDuo,
        cores: ['único'],

    },

    {
        titulo: "Conjunto Calça/Kimono",
        preço: '',
        preçoPeça: [
            {   
                calça: 140.00,
                kimono: 130.00
            }
        ],
        imagem: CalcaKimono,
        cores: ['rosa', 'bege'],

    },
   
]

export default Produtos
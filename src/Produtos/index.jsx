import ConjuntoQueridinhoImagem from "../assets/imgs/conjunto-queridinho.jpeg";
import MaioGabb from "../assets/imgs/maio-gabb.jpeg";
import MaioGabb2 from "../assets/imgs/maio-gabb2.jpg";
import TopMay from "../assets/imgs/top-may.jpeg";
import CalcinhaDuo from "../assets/imgs/calcinha-duo.jpeg";
import CalcaKimono from "../assets/imgs/calca-kimono.jpeg";
import vestido from "../assets/imgs/vestido.jpg";
import vestido2 from "../assets/imgs/vestido2.jpg";
import MaioRetro from "../assets/imgs/maio-retro.jpg";
import ConjuntoPraia from "../assets/imgs/conjunto-praia.jpg";
import ConjuntoArtesanal from "../assets/imgs/conjunto-artesanal.jpg";
import ConjuntoArtesanal2 from "../assets/imgs/conjunto-artesanal2.jpg";

const Produtos = [
  //Conjunto Queridinho
  {
    titulo: "Conjunto Queridinho",
    preçoTotal: 115.0,
    preçoPeça: [
      {
        tiara: 18.0,
        parteDeCima: 57.6,
        parteDeBaixo: 57.5,
      },
    ],
    imagem: [ConjuntoQueridinhoImagem],
    cores: [],
  },

  //Conjunto Artesanal
  {
    titulo: "Conjunto Artesanal",
    preço: 180.0,
    preçoPeça: [
      {
        parteDeCima: 60.0,
        calça: 140.0,
      },
    ],
    imagem: [ConjuntoArtesanal, ConjuntoArtesanal2],
    cores: ["único"],
  },

  //Conjunto Praia
  {
    titulo: "Conjunto Praia",
    preço: 130.0,
    preçoPeça: [
      {
        parteDeCima: 70.0,
        short: 75.0,
      },
    ],
    imagem: [ConjuntoPraia],
    cores: ["único"],
  },

  //Maiô Gabb
  {
    titulo: "Maiô Gabb",
    preço: 150.0,
    preçoPeça: [
      {
        semFlor: 150.0,
        ComFlor: "",
      },
    ],
    imagem: [MaioGabb, MaioGabb2],
    cores: ["rosa", "preto", "prata"],
  },

  //Maiô Retrô
  {
    titulo: "Maiô Retrô",
    preço: 150.0,
    preçoPeça: [{}],
    imagem: [MaioRetro],
    cores: ["único"],
  },

  //Top May
  {
    titulo: "Top May",
    preço: 135.0,
    preçoPeça: [
      {
        semFlor: "",
        comFlor: 135.0,
        parteDeCima: 67.5,
        parteDeBaixo: 67.5,
      },
    ],
    imagem: [TopMay],
    cores: ["verde", "rosa", "verde/rosa", "preto", "prata", "preto/prata"],
  },

  //Calcinha Duo
  {
    titulo: "Calcinha Duo",
    preço: 62.5,
    preçoPeça: [{}],
    imagem: [CalcinhaDuo],
    cores: ["único"],
  },

  //Conjunto Calça Kimono
  {
    titulo: "Conjunto Calça/Kimono",
    preço: "",
    preçoPeça: [
      {
        calça: 140.0,
        kimono: 130.0,
      },
    ],
    imagem: [CalcaKimono],
    cores: ["rosa", "bege"],
  },

  //vestido
  {
    titulo: "Vestido Rosa",
    preço: 145.0,
    preçoPeça: [{}],
    imagem: [vestido, vestido2],
    cores: ["rosa"],
  },
];

export default Produtos;

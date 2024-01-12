import ConjuntoQueridinhoImagem from "../assets/imgs/conjunto-queridinho.jpeg";
import maioGabb from "../assets/imgs/maio-gabb.jpeg";
import maioGabb2 from "../assets/imgs/maio-gabb2.jpg";
import topMay from "../assets/imgs/top-may.jpeg";
import calcinhaDuo from "../assets/imgs/calcinha-duo.jpeg";
import calcaKimono from "../assets/imgs/calca-kimono.jpeg";
import vestido from "../assets/imgs/vestido.jpg";
import vestido2 from "../assets/imgs/vestido2.jpg";
import maioRetro from "../assets/imgs/maio-retro.jpg";
import conjuntoPraia from "../assets/imgs/conjunto-praia.jpg";
import conjuntoArtesanal from "../assets/imgs/conjunto-artesanal.jpg";
import calcaPantalona from "../assets/imgs/conjunto-artesanal2.jpg";
import vestidoMacrame from "../assets/imgs/vestido-mecrame.jpg";
import saiaPrata from "../assets/imgs/saia1.jpg";
import saiaPretaComTop from "../assets/imgs/saia2.jpg";
import conjuntoBiquini from "../assets/imgs/conjunto-biquini.jpg";

const Produtos = [
  //Saia preta com top
  {
    titulo: "Saia preta com top",
    preço: 60.0,
    preçoPeça: [{}],
    imagem: [saiaPretaComTop],
    cores: ["único"],
  },

  //Calça Pantalona
  {
    titulo: "Calça pantalona",
    preço: 140.0,
    preçoPeça: [{}],
    imagem: [calcaPantalona],
    cores: ["único"],
  },

  //Top queridinho artesanal
  {
    titulo: "Top queridinho artesanal",
    preço: 60.0,
    preçoPeça: [{}],
    imagem: [conjuntoArtesanal],
    cores: ["único"],
  },

  //Conjunto Praia
  {
    titulo: "Conjunto Praia",
    preço: 127.5,
    preçoPeça: [
      {
        top: 67.5,
        short: 60.0,
      },
    ],
    imagem: [conjuntoPraia],
    cores: ["preto", "prata"],
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
    imagem: [maioGabb, maioGabb2],
    cores: ["rosa", "preto", "prata"],
  },

  //Maiô Retrô
  {
    titulo: "Maiô Reto",
    preço: 150.0,
    preçoPeça: [{}],
    imagem: [maioRetro],
    cores: ["prata", "preto", "preto/prata"],
  },

  //vestido macramê
  {
    titulo: "Vestido em macramê com pedraria",
    preço: 80.0,
    preçoPeça: [{}],
    imagem: [vestidoMacrame],
    cores: ["preto", "branco"],
  },

  //Conjunto May
  {
    titulo: "Conjunto May",
    preço: 135.0,
    preçoPeça: [
      {
        top: 67.5,
        calcinha: 67.5,
      },
    ],
    imagem: [topMay],
    cores: ["verde", "rosa", "verde/rosa", "preto", "prata", "preto/prata"],
  },

  //Calcinha Duo
  {
    titulo: "Calcinha Duo",
    preço: 62.5,
    preçoPeça: [{}],
    imagem: [calcinhaDuo],
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
    imagem: [calcaKimono],
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

  //Saia
  {
    titulo: "Saia prata",
    preço: 60.0,
    preçoPeça: [{}],
    imagem: [saiaPrata],
    cores: ["único"],
  },

  //Conjunto biquíni
  {
    titulo: "Conjunto biquíni",
    preço: 115.0,
    preçoPeça: [
      {
        parteDeCima: 57.0,
        parteDeBaixo: 57.0,
      },
    ],
    imagem: [conjuntoBiquini],
    cores: ["preto/prata", "preto", "rosa", "verde", "rosa/verde"],
  },

  //Conjunto Queridinho
  {
    titulo: "Conjunto Queridinho",
    preçoTotal: 115.0,
    preçoPeça: [
      {
        tiara: 18.0,
        top: 57.6,
        calcinha: 57.5,
      },
    ],
    imagem: [ConjuntoQueridinhoImagem],
    cores: [],
  },
];

export default Produtos;

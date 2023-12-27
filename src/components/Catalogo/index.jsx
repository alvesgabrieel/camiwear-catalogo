import { useState } from "react";

import * as S from './styles';

import Img from '../../assets/imgs/imagem-inicial.png';
import Img2 from '../../assets/imgs/vestido-pink-nobg.png';
import logo from '../../assets/imgs/CAMIWEAR-logo-nobg.png';

const Catalogo = () => {
    const [initialScreen, setInitialScreen] = useState(true);

    const ChangeInitialScreen = () => {
        setInitialScreen(false);
    }

    return (
        <S.MainContent>
            <S.ImgContent>
                <img src={logo} alt="logotipo camiwear" />
            </S.ImgContent>
            <S.ParagraphContent>
                <p>Ola, seja bem vindo(a), como você se chama?</p>
            </S.ParagraphContent>          
            <input type="text"/>
            <S.ButtonContent>
              Ir para o catálogo <S.Button />    
            </S.ButtonContent>                      
            <img src={Img} alt="Modelo camiwear" />
        </S.MainContent>
    );
}

export default Catalogo;

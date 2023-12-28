import { useState } from "react";

import ListaProdutos from "../ListaProdutos";
import * as S from './styles';

import Img from '../../assets/imgs/imagem-inicial.png';
import logo from '../../assets/imgs/CAMIWEAR-logo-nobg.png';

const Catalogo = () => {
    const [initialScreen, setInitialScreen] = useState(true);
    const [name, setName] = useState('');

    const ChangeInitialScreen = () => {
        setInitialScreen(false);
        console.log("Nome digitado:", name);
        console.log(initialScreen);
    }

    const handleInputChange = (event) => {
        setName(event.target.value);
    }

    return (
        <>
            {initialScreen ? (
                <S.MainContent>
                <S.ImgContent>
                    <img src={logo} alt="logotipo camiwear" />
                </S.ImgContent>
                <S.ParagraphContent>
                    <p>Ola, seja bem vindo(a), como você se chama?</p>
                </S.ParagraphContent>          
                <input type="text" value={name} onChange={handleInputChange} />
                <S.ButtonContent onClick={ChangeInitialScreen}>
                Ir para o catálogo <S.Button />    
                </S.ButtonContent>                      
                <img src={Img} alt="Modelo camiwear" />
            </S.MainContent>
            ) : (
                <S.CatalogContent>
                    <S.ImgContentCatalog>
                        <img src={logo} alt="logotipo camiwear" />
                    </S.ImgContentCatalog>
                    <h1>Olá, {name.charAt(0).toUpperCase() + name.slice(1)}</h1>
                    <p>Compras somente pelo whatsapp</p>
                    <ListaProdutos />
                </S.CatalogContent>
            )}
            
        </>
       
    );
}

export default Catalogo;

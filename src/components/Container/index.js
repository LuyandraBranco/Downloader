import {
    ContainerDiv,
    Title,
    Subtitle,
    Buttons,
    Button1,
    Button2,
    Button3,
    SocialMedias
}
    from './styles';
import { FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

export function Container() {

    return (
        <ContainerDiv>
            <Title>Transfere conteúdos de aplicativos </Title>
            <Subtitle>Copie o link de um vídeo ou imagem e aperte</Subtitle>
            <Subtitle> no botão abaixo</Subtitle>

            <Buttons>
                <Button1>

                </Button1>

                <Button2>

                </Button2>

                <Button3>

                </Button3>
            </Buttons>

            <SocialMedias>
                <FaYoutube/>
                <FaInstagram/>
                <FaTwitter/>
            </SocialMedias>
        </ContainerDiv>

    )
};
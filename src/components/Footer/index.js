import {
    ContainerDiv,
    Container,
    Title,
    Description
}
    from './styles';

export function Footer() {

    return (
        <ContainerDiv>
            <Container>
                <Title>⚡ Simples</Title>
                <Description>Só precisa pegar o link do</Description>
                <Description>conteúdo que deseja baixar e</Description>
                <Description>aperta no botão</Description>
            </Container>

            <Container>
                <Title>🌎 Unificado</Title>
                <Description>Pode baixa o conteúdo de</Description>
                <Description>diferentes plataformas, só</Description>
                <Description>precisa pegar o link</Description>
            </Container>

            <Container>
                <Title>🔄 Converta</Title>
                <Description>Transforme rápidamente o seu</Description>
                <Description>vídeo em áudio com apenas</Description>
                <Description>alguns cliques</Description>
            </Container>
        </ContainerDiv>
    )
};
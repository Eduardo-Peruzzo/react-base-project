import styled from "styled-components";

const Container = styled.div`
    width: 10em;
    height: min-content;
    border: 1px solid var(--secundaria);
    border-radius: 5px;
    margin-bottom: 10px;
    margin-right: 10px;
`;

const Titulo = styled.h3`
    padding: 0.5em .5em 0 0.5em;
    text-decoration: underline;
`;

const Texto = styled.p`
    padding: 0 .5em;
`;

export {Container, Titulo, Texto};
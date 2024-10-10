import Cartao from "../components/Cartao/Cartao";
import ListContainer from "../components/ListContainer/ListContainer";
import Base from "./Base";

const dados = [
    {
        titulo: "Um título do array",
        texto: "Um texto grande do array."
    },
    {
        titulo: "Um outro título do array",
        texto: "Um outro texto grande do array."
    }
]

const SobreNos = () => (
    <Base>
        <ListContainer>
        {
            dados.map( (elemento, index) => (
                <Cartao 
                    key={index}
                    titulo={elemento.titulo}
                    texto={elemento.texto}
                />
            ))
        }
        </ListContainer>
    </Base>
);

export default SobreNos;
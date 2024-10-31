import { useParams } from "react-router-dom";
import FotoCard from "../components/FotoCard/FotoCard";
import ListContainer from "../components/ListContainer/ListContainer";
import dadosBrutos from "../data/computadores.json";
import Protegida from "./Protegida";
import { useEffect, useState } from "react";
import Base from "./Base";

const Fotos = () => {

  const [dados, setDados] = useState(dadosBrutos);

  const filtro = (entrada) => setDados(dadosBrutos.filter(
    (elemento) => elemento.nome.includes(entrada) || elemento.link_original.includes(entrada)
  ))

  return (
      <Base>
      <input type="text" onChange={ (evento) => filtro(evento.target.value)} placeholder="Pesquisar..."/>

        <ListContainer>
          {dados.map(
            (el, index) => (
              <FotoCard 
                key={index}
                titulo={el.nome}
                src={`${process.env.PUBLIC_URL}/${el.url}`}
                link_original={el.link_original}
                agradecimento={el.agradecimento}
              />
              )
          )}
          </ListContainer>
      </Base>      
 )
};

export default Fotos;
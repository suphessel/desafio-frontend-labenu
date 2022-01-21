import React, { useState, useEffect, useCallback } from "react";
import {
  ContainerPage,
  ContainerLotery,
  ContainerResult,
  TextBox,
  BoxResult,
  DivResult,
} from "./styled";
import axios from "axios";
import getInfoContest from "../services/concursos";
import { getLoterias, getLoteriesContest } from "../services/loterias";
import { BASE_URL, headers } from "../constants/urls";
import useForm from "../hooks/useForm";

const LoteriesPage = () => {
  const [loteries, setLoteries] = useState([]);
  const [lotery, setLotery] = useState();
  const [constestId, setConstestId] = useState("2359");
  const [contest, setContest] = useState({});

  const nanana = useCallback( async () => {
    const infos = await getInfoContest(constestId)
    setContest(infos)
    console.log("INFOS", infos)
  }, [constestId], )
  
  useEffect(() => {
    getLoteries();
    nanana()
  }, [nanana]);



  const onChangeLotery = async (e) => {
    console.log("e.target");
    console.log(e.target.value);

    setLotery(e.target.value);

    const relationships = await getLoteriesContest()

    console.log(relationships, "relationships")

   const newRelationship = relationships.filter((relationship) => {
    console.log("relationship.loteriaId", relationship.loteriaId  )
    console.log("e.target.value", e.target.value  )
      return relationship.loteriaId === Number(e.target.value);
    });

    console.log(newRelationship )
    console.log("concursoId no onchange", typeof newRelationship.concursoId )
    setConstestId(newRelationship[0].concursoId);

    console.log(newRelationship, "newRelationship")
  };

  const getLoteries = () => {
    axios
      .get(`${BASE_URL}/loterias`, {
        headers: headers,
      })
      .then((res) => {
        console.log("res");
        console.log(res.data);

        setLoteries(res.data);
      })
      .catch((err) => {
        console.log("ERROOO", err);
      });
  };

  return (
    <ContainerPage>
      <ContainerLotery>
        <select value={lotery} onChange={onChangeLotery}>
          {loteries.map((lotery) => {
            return <option value={lotery.id}>{lotery.nome}</option>;
          })}
        </select>
        <div>
          <p>Concurso</p>
          <p> {contest.id ?? "CARREGANDO!!"} - {contest.data ?? "CARREGANDO!!"}</p>
        </div>
      </ContainerLotery>
      <ContainerResult>
        <BoxResult>
          <DivResult style={{ display: 'flex', flexDirection:"row", gap:"10px"}}>
             { contest.numeros ? contest.numeros.map((numero) => {
              return <div style={{backgroundColor: 'red', }}>{numero} </div>
            }) : "CARREGANDO!!"}
          </DivResult>
        </BoxResult>
        <TextBox>
          <p>
            Este sorteio é meramente ilustrativo e não possui nenhuma ligação
            com a CAIXA.
          </p>
        </TextBox>
      </ContainerResult>
    </ContainerPage>
  );
};

export default LoteriesPage;

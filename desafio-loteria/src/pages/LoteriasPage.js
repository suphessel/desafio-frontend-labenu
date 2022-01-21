import React, { useState, useEffect, useCallback } from "react";
import {
  ContainerPage,
  ContainerLotery,
  SelectLotery,
  BoxContest,
  ContainerResult,
  TextBox,
  BoxResult,
  DivResult,
  DivNumber,
} from "./styled";
import axios from "axios";
import getInfoContest from "../services/concursos";
import { getLoteriesContest } from "../services/loterias";
import { BASE_URL, headers } from "../constants/urls";

const LoteriesPage = () => {
  const [loteries, setLoteries] = useState([]);
  const [lotery, setLotery] = useState();
  const [constestId, setConstestId] = useState("2359");
  const [contest, setContest] = useState({});

  const callbackContest = useCallback(async () => {
    const infos = await getInfoContest(constestId);
    setContest(infos);
  }, [constestId]);

  useEffect(() => {
    getLoteries();
    callbackContest();
  }, [callbackContest]);

  const onChangeLotery = async (e) => {
    setLotery(e.target.value);

    const relationships = await getLoteriesContest();

    const newRelationship = relationships.filter((relationship) => {
      return relationship.loteriaId === Number(e.target.value);
    });

    setConstestId(newRelationship[0].concursoId);
  };

  const getLoteries = () => {
    axios
      .get(`${BASE_URL}/loterias`, {
        headers: headers,
      })
      .then((res) => {
        setLoteries(res.data);
      })
      .catch((err) => {});
  };

  return (
    <ContainerPage>
      <ContainerLotery>
        <SelectLotery>
          <select value={lotery} onChange={onChangeLotery}>
            {loteries.map((lotery) => {
              return <option value={lotery.id}>{lotery.nome}</option>;
            })}
          </select>
        </SelectLotery>
        <BoxContest>
          <p>Concurso</p>
          <p>
            {" "}
            {contest.id ?? "CARREGANDO!!"} - {contest.data ?? "CARREGANDO!!"}
          </p>
        </BoxContest>
      </ContainerLotery>
      <ContainerResult>
        <BoxResult>
          <DivResult>
            {contest.numeros
              ? contest.numeros.map((numero) => {
                  return <DivNumber>{numero} </DivNumber>;
                })
              : "CARREGANDO!!"}
          </DivResult>
          <TextBox>
            <p>
              Este sorteio é meramente ilustrativo e não possui nenhuma ligação
              com a CAIXA.
            </p>
          </TextBox>
        </BoxResult>
      </ContainerResult>
    </ContainerPage>
  );
};

export default LoteriesPage;

import axios from "axios";
import { BASE_URL, headers } from "../constants/urls";

const getInfoContest = async (id) => {
  try {
    console.log({ id, base: BASE_URL });

    const res = await axios.get(`${BASE_URL}/concursos/${id}`, {
      headers: headers,
    });

    console.log("entrei aqui");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("ERROOO", error);
  }
};

export default getInfoContest;

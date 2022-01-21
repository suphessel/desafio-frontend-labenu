import axios from "axios";
import { BASE_URL, headers } from "../constants/urls";

const getLoteries = () => {
  axios
    .get(`${BASE_URL}/loterias`, {
      headers: headers,
    })
    .then((res) => {
      console.log(res);
      // setPosts(res.data);
    })
    .catch((err) => {
      console.log("ERROOO", err);
    });
};

const getLoteriesContest = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/loterias-concursos`, {
      headers: headers,
    })
  
    console.log("entrei aqui");
    console.log(res.data);
  
    return res.data;
  } catch (error) {
    console.log("ERROOO", error);
  }
};



export { getLoteries, getLoteriesContest };

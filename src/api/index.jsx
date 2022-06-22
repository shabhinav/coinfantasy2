import axios from "axios";

export const searchData = (duration) =>
  axios.get(
    process.env.REACT_APP_BASE_URL + `market_chart?vs_currency=usd&days=${duration}&interval=daily`
  );


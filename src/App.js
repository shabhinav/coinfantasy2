import "./App.css";
import "./theme/stylesheet.scss";
import { useEffect, useState } from "react";
import { searchData } from "./api";
import { timeStampToDateHandler } from "./utils";
import Button from "./Common/Button";
import { duration } from "./utils/constant";
import AreChart from "./Common/Charts/AreaChart";

function App() {
  const [durations, setDuration] = useState("1");
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    changeDurationHandler();
  }, [durations]);

  const changeDurationHandler = () => {
    searchData(durations)
      .then(({ data: { prices } }) => {
        let array = prices?.map((item) => {
          return { name: timeStampToDateHandler(item?.[0]), value: item?.[1] };
        });
        setMyData(array);
      })
      .catch((err) => console.log(err));
  };

  const onClickHandler = (label, event) => {
    setDuration(label);
  };

  return (
    <div className='App'>
      <div className='shadow-lg w-50-per m-auto p-4'>
        <div className='text-right'>
          {duration?.map((item, index) => (
            <Button onClick={onClickHandler} key={index} label={item} />
          ))}
        </div>
        <div>
          <AreChart data={myData} />
        </div>
      </div>
    </div>
  );
}

export default App;

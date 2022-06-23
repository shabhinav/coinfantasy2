import "./App.css";
import "./theme/stylesheet.scss";
import { useEffect, useState } from "react";
import { searchData } from "./api";
import { timeStampToDateHandler } from "./utils";
import Button from "./Common/Button";
import { duration } from "./utils/constant";
import AreChart from "./Common/Charts/AreaChart";

function App() {
  const [durations, setDuration] = useState(1);
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

  const onClickHandler = (label) => {
    setDuration(label);
  };

  return (
    <div className='App'>
      <div className='shadow-lg graph-container  p-4'>
        <div className='flex items-center'>
          <h1>BITCOIN (BTC)</h1>
          <div className='ml-4'>
            <p className='my-0'>Date: {myData[myData?.length - 1]?.name}</p>
            <p className='text-green500 my-0 mt-2'>
              Price: ${myData[myData?.length - 1]?.value.toFixed(2)}
            </p>
          </div>
        </div>
        <div className='flex flex-wrap justify-end'>
          {duration?.map((item, index) => (
            <div className='mt-2'>
              <Button
                isSelected={item === durations}
                onClick={onClickHandler}
                key={index}
                duration={duration}
                label={item}
              />
            </div>
          ))}
        </div>
        <div className='mt-4'>
          <AreChart data={myData} />
        </div>
      </div>
    </div>
  );
}

export default App;

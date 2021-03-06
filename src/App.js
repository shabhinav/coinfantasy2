import "./App.css";
import "./theme/stylesheet.scss";
import { useEffect, useState } from "react";
import { searchData } from "./api";
import { numFormatter, timeStampToDateHandler } from "./utils";
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
      .then(({ data: { prices, market_caps, total_volumes } }) => {
        let array = prices?.map((item, index) => {
          return {
            name: timeStampToDateHandler(item?.[0]),
            value: item?.[1],
            market_cap: market_caps[index][1],
            total_volumes: total_volumes[index][1],
          };
        });
        setMyData(array);
      })
      .catch((err) => console.log(err));
  };

  const onClickHandler = (label) => {
    setDuration(label);
  };

  console.log("myData", myData);

  return (
    <div className='App'>
      <div className='shadow-lg graph-container rounded mt-6 p-4'>
        <div className='flex items-center'>
          <h1>BITCOIN (BTC)</h1>
          <div className='ml-4'>
            <p className='my-0 text-xxs'>
              Date: {myData[myData?.length - 1]?.name}
            </p>
            <p className='text-green500 text-xxs my-0 mt-2'>
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
        <div className='flex justify-between'>
          <div>
            <h4>TOTAL MARKET VALUE</h4>
            <p className='text-green500'>
              $ {numFormatter(myData[0]?.market_cap)}
            </p>
          </div>
          <div>
            <h4>24 hr Volume</h4>
            <p className='text-green500'>
              $ {numFormatter(myData[0]?.total_volumes)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

"use client";
import { useState } from "react";
import scss from "./Services.module.scss";

const data = [
  {
    type: "Стрижка",
    box: [
      {
        num: "01",
        name: "Борода и бритье",
        min: "60",
        com: "1500",
      },
      {
        num: "02",
        name: "Стрижка под машинку",
        min: "30",
        com: "1000",
      },
      {
        num: "03",
        name: "Стрижка ножницами",
        min: "90",
        com: "1500",
      },
      {
        num: "04",
        name: "Детская стрижка",
        min: "60",
        com: "700",
      },
      {
        num: "05",
        name: "Укладка",
        min: "15",
        com: "500",
      },
    ],
  },
  {
    type: "Борода и бритье",
    box: [
      {
        num: "01",
        name: "Борода и бритье",
        min: "60",
        com: "1500",
      },
      {
        num: "02",
        name: "Стрижка ножницами",
        min: "30",
        com: "1000",
      },
      {
        num: "03",
        name: "Детская стрижка",
        min: "90",
        com: "1500",
      },
      {
        num: "04",
        name: "Стрижка под машинку",
        min: "60",
        com: "700",
      },
      {
        num: "05",
        name: "Укладка",
        min: "15",
        com: "500",
      },
    ],
  },
  {
    type: "Уход",
    box: [
      {
        num: "01",
        name: "Укладка",
        min: "60",
        com: "1500",
      },
      {
        num: "02",
        name: "Стрижка ножницами",
        min: "30",
        com: "1000",
      },
      {
        num: "03",
        name: "Стрижка под машинку",
        min: "90",
        com: "1500",
      },
      {
        num: "04",
        name: "Детская стрижка",
        min: "60",
        com: "700",
      },
      {
        num: "05",
        name: "Борода и бритье",
        min: "15",
        com: "500",
      },
    ],
  },
  {
    type: "Комбо",
    box: [
      {
        num: "01",
        name: "Стрижка под машинку",
        min: "60",
        com: "1500",
      },
      {
        num: "02",
        name: "Борода и бритье",
        min: "30",
        com: "1000",
      },
      {
        num: "03",
        name: "Стрижка ножницами",
        min: "90",
        com: "1500",
      },
      {
        num: "04",
        name: "Укладка",
        min: "60",
        com: "700",
      },
      {
        num: "05",
        name: "Детская стрижка",
        min: "15",
        com: "500",
      },
    ],
  },
];

const Services = () => {
  const [selectedType, setSelectedType] = useState<string>("Стрижка");

  const handleClick = (type: string) => {
    setSelectedType(type);
  };

  const selectedData = data.find((el) => el.type === selectedType);
  console.log(selectedData);

  return (
    <div id={scss.Services}>
      <div className="container">
        <div className={scss.services}>
          <div className={scss.services_text}>
            <h1>услуги и цены</h1>
            <div className={scss.buttons}>
              {data.map((el, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(el.type)}
                  className={selectedType === el.type ? scss.active : ""}
                >
                  {el.type}
                </button>
              ))}
            </div>
          </div>
          <div className={scss.block}>
            {selectedData?.box.map((item, idx) => (
              <div key={idx} className={scss.box}>
                <div className={scss.num}>
                  <h1>{item.num}</h1>
                  <h1>{item.name}</h1>
                </div>
                <div className={scss.min}>
                  <h1>{item.min}мин</h1>
                  <h1>{item.com}сом</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

import { useEffect, useState } from "react";
import WorksList from "../worksList/WorksList";
import "./Works.scss";
import {reactData,webPortfolio} from "../../data"

export default function Works() {
  const [selected, setSelected] = useState("reactJS");
  const [data, setData] = useState([])

  useEffect(()=>{
    switch (selected){
      case "reactJS":
        setData(reactData)
        break;
      case "nodeJS":
        setData(webPortfolio)
        break;
      default:
        setData(webPortfolio)

    }
  },[selected])
  const worksList = [
    { id: "reactJS", title: "reactJS" },
    { id: "nodeJS", title: "nodeJS" },
    { id: "nextJS", title: "nextJS" },
  ];

  return (
    <div className="works" id="works">
      <h1>works</h1>
      <ul>
        {worksList.map((item) => (
          <WorksList key={item.id} title={item.title} active={item.id===selected} setSelected={setSelected} id={item.id}/>
        ))}
      </ul>
      <div className="container">
        {
          data.map((d)=>(
            <div className="item" key={d.id}>
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          ))
        }
      </div>
    </div>
  );
}

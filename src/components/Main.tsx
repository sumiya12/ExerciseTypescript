// import { useEffect, useState } from "react";
import FetchHook from "../API/FetchHook";
import Header from "./Header";
import { User } from "../types/type";

function Main(): JSX.Element {
  const data = FetchHook("https://randomuser.me/api");
  const style = {
    textAlign: "center" as "center",
    justifyContent: "center",
    alignItems: "center",
    // height: "50vh",
    margin: "auto",
    image: {
      borderRadius: "50%",
      border: "2px solid grey",
      padding: "5px",
      width: "25%",
    },
    hr: {
      position: "absolute" as "absolute",
      top: "200px",
      zIndex: "-1",
      width: "100vw",
      border: "1px solid grey",
    },
    name: {
      display: "flex",
      padding: "10px",
      fontSize: "40px",
      fontWeight: "Normal",
      justifyContent: "center",
    },
    inside: {
      paddingLeft: "20px",
    },
  };
  return (
    <div>
      <Header />
      <div style={style}>
        <hr style={style.hr} />
        <img src={data?.picture.large} alt="Picture" style={style.image} />
        <div>Hi, My name is</div>
      </div>
      <div style={style.name}>
        <div>{data?.name.first}</div>
        <div style={style.inside}>{data?.name.last}</div>
      </div>

      {/* <div>{data?.dob.date}</div>
      <div>{data?.email}</div>
      <div>{data?.gender}</div> */}
    </div>
  );
}

export default Main;

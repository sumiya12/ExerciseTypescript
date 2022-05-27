import { useUser } from "./myContext";
import { useEffect } from "react";
import { User } from "../types/type";
function UsersLocal() {
  const { users, setUsers } = useUser();

  const style = {
    pic: {
      width: "200px",
      height: "200px",
      margin: "10px",
      borderRadius: "15px",
      textAlign: "center" as "center",
    },
    h1: { textAlign: "center" as "center", color: "black" },
    h2: { textAlign: "center" as "center", color: "white" },
    outer: {
      border: "2px solid grey",
      borderRadius: "15px",
      backgroundColor: "black",
    },
    div: { marginTop: "auto" },
  };
  return (
    <div style={style.div}>
      <h1 style={style.h1}>Gentlemen </h1>
      <div className="d-flex">
        {users &&
          users.map((e: User, i: number) => {
            if (e.gender === "male")
              return (
                <div key={i} style={style.outer}>
                  <img
                    src={e.picture.large}
                    alt={e.picture.large}
                    style={style.pic}
                  />
                  <div style={style.h2}>{e.name.first + " " + e.name.last}</div>
                </div>
              );
          })}
      </div>
      <h1 style={style.h1}> Ladies</h1>
      <div className="d-flex">
        {users &&
          users.map((e: User, i: number) => {
            if (e.gender === "female")
              return (
                <div key={i} style={style.outer}>
                  <img
                    src={e.picture.large}
                    alt={e.picture.large}
                    style={style.pic}
                  />
                  <div style={style.h2}>{e.name.first + " " + e.name.last}</div>
                </div>
              );
          })}
      </div>
    </div>
  );
}

export default UsersLocal;

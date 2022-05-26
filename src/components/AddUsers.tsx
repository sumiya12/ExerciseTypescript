import { useEffect, useState } from "react";
import { User } from "../types/type";
import { useUser } from "./myContext";
import moment from "moment";
function AddUsers() {
  //   const [user, setUser] = useState<User>();
  const { users, setUsers } = useUser();
  useEffect(() => {}, [users]);
  function handler() {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results[0]);
        setUsers([...users, res.results[0]]);
      });
  }
  function close() {
    window.location.reload();
  }

  function addToLocal() {}
  //   let name: any = `${users?.name?.first}  ${users[0]?.name?.last}`;
  const style = {
    display: "flex",
    textAlign: "center" as "center",
    justifyContent: "center",
    height: "70vh",
    margin: "auto",
    alignItems: "center",
    ranImage: {
      width: "350px",
      height: "350px",
      fontWeight: "500",
      borderRadius: "20px",
    },
    ranText: {
      lineHeight: "2",
      fontSize: "30px",
      justifyContent: "left",
      textAlign: "left" as "center",
      paddingLeft: "10px",
    },
    ranButtons: {
      justifyContent: "space-around",
      display: "flex",
    },
    eachButton: {
      border: "none",
      backgroundColor: "black",
      color: "white",
      margin: "10px",
      borderRadius: "10px",
      padding: "10px",
    },
    geneButton: {
      textAlign: "center" as "center",
      justifyContent: "center",
      display: "flex",
      margin: "auto",
      height: "10vh",
      width: "20vw",
      alignItems: "center",
    },
    outerdiv: {
      //   display: "flex",
      textAlign: "center" as "center",
      justifyContent: "center",
      height: "10vh",
      margin: "auto",
      width: "20vw",
      alignItems: "center",
    },
  };

  //   console.log(users[0]?.cell);
  return (
    <div style={style}>
      <button
        style={style.outerdiv}
        onClick={() => {
          handler();
        }}
      >
        Generate User
      </button>

      <div style={style}>
        <div>
          <img src={users[0]?.picture.large} alt="" style={style.ranImage} />
        </div>
        <div style={style.ranText}>
          <div>Age: {users[0]?.dob.age}</div>
          <div>Gender: {users[0]?.gender}</div>
          <div>Email: {users[0]?.email}</div>
          <div>Phone: {users[0]?.phone}</div>
          <div>Birthday: {moment(users[0]?.dob.date).format("YYYY-MM-DD")}</div>
        </div>
      </div>

      <div>
        {users && (
          <div style={style.ranButtons}>
            {" "}
            <button style={style.eachButton}>Add User To List</button>{" "}
            <button
              style={style.eachButton}
              onClick={() => {
                handler();
              }}
            >
              Generate New
            </button>{" "}
            <button style={style.eachButton} onClick={close}>
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddUsers;

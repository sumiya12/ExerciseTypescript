import { useEffect, useState } from "react";
import { User } from "../types/type";
import moment from "moment";
function AddUsers() {
  const [user, setUser] = useState<User>();
  function handler(): void {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((user) => {
        setUser(user.results[0]);
        console.log(user.results[0]);
      });
  }
  function close() {
    window.location.reload();
  }
  function addToLocal() {}
  let name: any = `${user?.name?.first}  ${user?.name?.last}`;
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
  };
  return (
    <div>
      {!user && (
        <button
          style={style}
          onClick={() => {
            handler();
          }}
        >
          Generate User
        </button>
      )}
      {user && (
        <div style={style}>
          <div>
            <img src={user?.picture.large} alt="" style={style.ranImage} />
          </div>
          <div style={style.ranText}>
            <div>Name: {name}</div>
            <div>Age: {user?.dob.age}</div>
            <div>Gender: {user?.gender}</div>
            <div>Email: {user?.email}</div>
            <div>Phone: {user?.phone}</div>
            <div>Birthday: {moment(user?.dob.date).format("YYYY-MM-DD")}</div>
          </div>
        </div>
      )}
      {user && (
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
  );
}

export default AddUsers;

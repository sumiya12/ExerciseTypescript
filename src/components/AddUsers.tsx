import { useEffect, useState } from "react";
import { User } from "../types/type";
import { useUser } from "./myContext";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function AddUsers(): JSX.Element {
  const [tempUser, setTempUser] = useState<User>();
  const { users, setUsers } = useUser();

  useEffect(() => {
    console.log(users);
  }, [users]);

  function addUser() {
    console.log("add user funct");
    toast("added to local storage!");

    if (tempUser) {
      setUsers([...users, tempUser]);
    }
  }

  function handler() {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.results);
        setTempUser(res.results[0] as User);
      });
  }

  function close() {
    window.location.reload();
  }

  // function addToLocal() {}
  //   let name: any = `${users?.name?.first}  ${users[0]?.name?.last}`;
  const style = {
    display: "flex",
    textAlign: "center" as "center",
    justifyContent: "center",
    height: "50vh",
    marginTop: "auto",
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
      border: "none",
      fontSize: "20px",
      borderRadius: "10px",
      color: "white",
      backgroundColor: "black",
    },
    justButton: {},
  };

  //   console.log(users[0]?.cell);
  return (
    <div style={style}>
      {tempUser ? (
        <div>
          <div style={style}>
            <div>
              <img src={tempUser.picture.large} alt="" style={style.ranImage} />
            </div>
            <div style={style.ranText}>
              <div>Name: {tempUser.name.first + "" + tempUser.name.last}</div>
              <div>Age: {tempUser.dob.age}</div>
              <div>Gender: {tempUser.gender}</div>
              <div>Email: {tempUser.email}</div>
              <div>Phone: {tempUser.phone}</div>
              <div>
                Birthday: {moment(tempUser.dob.date).format("YYYY-MM-DD")}
              </div>
            </div>
          </div>
          <div style={style.ranButtons}>
            <button style={style.eachButton} onClick={addUser}>
              Add User To List
            </button>
            <ToastContainer />
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
        </div>
      ) : (
        <button
          style={style.outerdiv}
          onClick={() => {
            handler();
          }}
        >
          Generate User
        </button>
      )}
    </div>
  );
}

export default AddUsers;

// {
//   <div>
//     <div style={style.ranButtons}>
//       {" "}
//       <button style={style.eachButton} onClick={addUser}>
//         Add User To List
//       </button>{" "}
//       <button
//         style={style.eachButton}
//         onClick={() => {
//           handler();
//         }}
//       >
//         Generate New
//       </button>{" "}
//       <button style={style.eachButton} onClick={close}>
//         Cancel
//       </button>
//     </div>
//   </div>;
// }

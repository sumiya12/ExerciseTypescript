import FetchHook from "../API/FetchHook";
import { IsSelectType } from "../types/type";
import { useState } from "react";
import moment from "moment";
import { useUser } from "./myContext";

function Main(): JSX.Element {
  const data = FetchHook("https://randomuser.me/api");
  const { users, setUsers } = useUser();
  // if (users) {
  //   let a = `${!users && users}`;
  //   console.log(a);
  // }
  // console.log(users && users[0].name);
  console.log(users);
  const [isSelect, setselect] = useState<IsSelectType>("address");
  const buttons: Array<IsSelectType> = [
    "name",
    "address",
    "calendar",
    "email",
    "lock",
    "phone",
  ];

  let name: any = `${data?.name?.first}  ${data?.name?.last}`;
  let address: any = `${data?.location.street.name} ${data?.location.street.number}`;

  let changed: any;
  let title: string = "";
  if (isSelect === "name") {
    changed = name;
    title = "Hi my name is";
  } else if (isSelect === "address") {
    changed = address;
    title = "Hi my address is";
  } else if (isSelect === "calendar") {
    changed = moment(data?.dob.date).format("YYYY-MM-DD");
    title = "Hi my birthday is";
  } else if (isSelect === "email") {
    changed = data?.email;
    title = "Hi my email is";
  } else if (isSelect === "lock") {
    changed = data?.login.password;
    title = "Hi my password is";
  } else {
    changed = data?.phone;
    title = "Hi my phone is";
  }
  const style = {
    textAlign: "center" as "center",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    image: {
      borderRadius: "50%",
      border: "2px solid grey",
      padding: "5px",
      width: "18%",
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
    logo: {
      display: "flex",
      textAlign: "center" as "center",
      margin: "auto",
      justifyContent: "center",
    },
    logoImage: { width: "80px", height: "80px", border: "none" },
    bordeButton: {
      border: "none",
      padding: "10px",
      margin: "10px",
      borderRadius: "50%",
    },
  };
  return (
    <div>
      <div style={style}>
        <hr style={style.hr} />
        <img src={data?.picture.large} alt="Picture" style={style.image} />
        <div>{title}</div>
      </div>

      <div style={style.name}>
        <div>{changed}</div>
      </div>

      <div style={style.logo}>
        {buttons?.map((each: any, i: number) => {
          return (
            <button
              style={style.bordeButton}
              onMouseOver={() => setselect(each as IsSelectType)}
              key={i}
              title={title}
              name={changed}
            >
              <img src={`/pic/${each}.jpg`} style={style.logoImage} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Main;

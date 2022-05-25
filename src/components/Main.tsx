// import { useEffect, useState } from "react";
import FetchHook from "../API/FetchHook";
import Header from "./Header";
import { User } from "../types/type";
import { useEffect, useState } from "react";

function Main(): JSX.Element {
  const data = FetchHook("https://randomuser.me/api");
  const [image, setImage] = useState<any[]>();
  const [buttonAIsHovering, buttonAHoverProps] = useHover();
  const [buttonBIsHovering, buttonBHoverProps] = useHover();
  const [buttonCIsHovering, buttonCHoverProps] = useHover();
  const [buttonDIsHovering, buttonDHoverProps] = useHover();
  const [buttonEIsHovering, buttonEHoverProps] = useHover();
  function davidon(e: any): any {
    e.target.style.background = "green";
  }
  function davidoff(e: any): any {
    e.target.style.background = "white";
  }
  function useHover(): (
    | boolean
    | {
        onMouseEnter: () => void;
        onMouseLeave: () => void;
      }
  )[] {
    const [hovering, setHovering] = useState(false);
    const onHoverProps = {
      onMouseEnter: () => setHovering(true),
      onMouseLeave: () => setHovering(false),
    };
    return [hovering, onHoverProps];
  }
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((res) => {
        setImage(res.data);
        console.log(res.data);
      });
  }, []);
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
      // marginLeft:"10px",
      textAlign: "center" as "center",
      margin: "auto",
    },
    logoImage: { width: "50px", height: "50px", border: "none" },
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

      <div style={style.logo}>
      <div>
        {buttonAIsHovering
          ? "button A hovering"
          : buttonBIsHovering
          ? "button B hovering"
          : buttonCIsHovering
          ? "button C hovering"
          : buttonDIsHovering
          ? "button D hovering"
          : "button E hovering"}
      </div>
      {/* <button {...buttonAHoverProps}>A</button>
      <button {...buttonBHoverProps}>B</button>
      <button {...buttonCHoverProps}>C</button>
      <button {...buttonDHoverProps}>D</button>
      <button {...buttonEHoverProps}>E</button> */}
        {image?.map((each: any, i: number) => {
          return (
            <button onMouseOver={davidon} onMouseOut={davidoff}>
              <img
                src={each.img}
                key={i}
                style={style.logoImage}
                onMouseOver={davidon}
                onMouseOut={davidoff}
              />
            </button>
          );
        })}
      </div>
      {/* <div>{data?.dob.date}</div>
      <div>{data?.email}</div>
      <div>{data?.gender}</div> */}
    </div>
  );
}

export default Main;

import { Nav } from "react-bootstrap";

function Header(): JSX.Element {
  const style = {
    button: {
      border: "none",
      padding: "10px",
      marginLeft: "30px",
      margin: "10px",
      borderRadius: "10px",
      backgroundColor: "black",
      navlink: { color: "white", fontSize: "20px" },
    },
  };
  return (
    <>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <button style={style.button}>
            <Nav.Link href="/Main" style={style.button.navlink}>
              Home
            </Nav.Link>
          </button>
        </Nav.Item>
        <Nav.Item as="li">
          <button style={style.button}>
            <Nav.Link href="/UsersLocal" style={style.button.navlink}>
              Users
            </Nav.Link>
          </button>
        </Nav.Item>
        <Nav.Item as="li">
          <button style={style.button}>
            <Nav.Link href="/AddUsers" style={style.button.navlink}>
              Add Users
            </Nav.Link>
          </button>
        </Nav.Item>
        <Nav.Item as="li">
          <button style={style.button}>
            <Nav.Link href="/NotFound" style={style.button.navlink}>
              Not Found
            </Nav.Link>
          </button>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Header;

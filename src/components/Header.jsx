import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import logo from "../assets/nba-logo.png"

const Header = () => {
  return (
    <Container> 
        <Image src={logo} width="750px"/>
        <h1 className="my-2 text-white">I made the above logo using Ai ;)</h1>
    </Container>
  )
}

export default Header;
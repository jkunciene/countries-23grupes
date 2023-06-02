import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Regions = ({ regions, filterData }) => {
  console.log(regions);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Countries</Navbar.Brand>
          <Nav className="me-auto" >
            { regions.map((region, index) => (
                <Nav.Link href="#" key={index} 
                onClick={()=>filterData(region)}
                >{region}</Nav.Link>
              )) }
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Regions

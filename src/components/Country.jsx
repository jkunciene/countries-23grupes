import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Country = ({ allCountries }) => {
    console.log(allCountries)
    return (
    <div>
        {allCountries !== undefined && allCountries.length !== 0 ? 
        allCountries.map((country, index) => (
            <Card style={{ width: '18rem' }} key={index}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{country.name.common}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
        </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        ))

            : <h1>Duomenys nerasti</h1>
        }
    </div>)
}

export default Country

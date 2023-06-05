
const OneCountryModal = ({ oneCountry, setModalIsOpenToFalse }) => {
    console.log(oneCountry[0])
    return (
        <div className="card" style={{ width: '300px', padding: 20 }}>
            <h2 className="card-title text-center my-2">{oneCountry[0].name.common}</h2>
            <img src={oneCountry[0].flags.png}  alt={oneCountry[0].name.common}  />
            
            <div className="card-body">
                <p><strong>Region</strong> {oneCountry[0].region}</p>
                <p><strong>Capital city</strong> {oneCountry[0].capital &&
                     typeof (oneCountry[0].capital) == 'object' ? 
                     oneCountry[0].capital[0] : oneCountry[0].capital || 'Nerasta...'}</p>
                <p><strong>Population</strong> {oneCountry[0].population}</p>
                <p><strong>Area Size</strong> {oneCountry[0].area}</p>
                <p><strong>TimeZone</strong> {oneCountry[0].timezones[0]}</p>
            </div>
            <button
                type="button"
                className="btn btn-primary"
                onClick={setModalIsOpenToFalse}
            >Close</button>
        </div>
    )
}


export default OneCountryModal

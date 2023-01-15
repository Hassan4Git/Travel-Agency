import styled from "styled-components"
import DestinationCard from "./DestinationCard"

const Container = styled.div`
    width: 100%;
    max-height: 47vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5vw;
    row-gap: 3vh;
    margin: auto;
    overflow: hidden;
    transition: 0.6s;
    position: relative;
`

const Faded = styled.div`
    width: 100%;
    height: 10%;
    position: absolute;
    bottom: 0%;
    background-image: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1));
    transition: 0.6s;
    filter: opacity(1);
`

const FeaturedCountries = ({ countries }) => {
    return (
        <Container id="grid">
            {
                countries.map((country, i) => <DestinationCard key={i} country={country} image={country} />)
			}
            <Faded id='faded' />
        </Container>
    )
}

export default FeaturedCountries
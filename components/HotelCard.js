import styled from 'styled-components'
import Image from 'next/image'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 3%;
    overflow: hidden;
    min-width: 26.5vw;
    margin: 0px 2px 0px;
    position: relative;
    @media (orientation: portrait) {
        min-width: 90vw;
    }
    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
        // border-radius: 2%;
    }
    & p {
        font-size: 2em;
        margin: auto;
        position: absolute;
        color: white;
        top: 2%;
        left: 3%;
    }
`

const Faded = styled.div`
    position: absolute;
    height: 50%;
    width: 100%;
    top: 0%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.6), transparent);
`

export default function HotelCard({ hotelName, hotelImage }) {
    return (
        <Container>
            <Faded />
            <Image src={hotelImage} height={500} width={500} />
            <p>{hotelName}</p>
        </Container>
    )
}

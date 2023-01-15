import styled from "styled-components"
import HotelCard from "./HotelCard"
import Image from "next/image"

const Wrapper = styled.div`
    position: relative;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
`

const Container = styled.div`
    display: flex;
    gap: 15px;
    width: 100%;
    height: 250px;
    margin: auto;
    overflow: auto;
    white-space: nowrap;
    scrollbar-width: none;
    @media (orientation: portrait) {
        scrollbar-width: auto;
    }
`

const MyLeftButton = styled.div`
    position: absolute;
    left: -0.8%;
    transform: rotate(90deg);
    cursor: pointer;
    &:hover {
        transform: rotate(90deg) translate(0, 2px);
    }
`
const MyRightButton = styled.div`
    position: absolute;
    right: -1%;
    transform: rotate(-90deg);
    cursor: pointer;
    &:hover {
        transform: rotate(-90deg) translate(0, 2px);
    }
`

const FeaturedProducts = ({ hotels }) => {
    const scrollHorizontal = (direction) => {
        const elem = document.getElementById('productContainer')
        if (direction == 'right') {
            elem.scrollBy(1000,0)
        } else if (direction == 'left') {
            elem.scrollBy(-1000,0)
        }

    }
    return (
        <Wrapper >
            <Container id='productContainer'>
                {
                    hotels.map((hotel, i) => <HotelCard 
                                                key={i}        
                                                hotelName={hotel.hotelName} 
                                                hotelImage={hotel.hotelImage} 
                                            />)
                }
            </Container>
            <MyLeftButton onClick={() => scrollHorizontal('left')}>
                <Image src='/Down_arrowhead.png' height={60} width={60} alt='Left Arrow' />
            </MyLeftButton>
            <MyRightButton onClick={() => scrollHorizontal('right')}>
                <Image src='/Down_arrowhead.png' height={60} width={60} alt='Right Arrow' />
            </MyRightButton>
        </Wrapper>
    )
}

export default FeaturedProducts
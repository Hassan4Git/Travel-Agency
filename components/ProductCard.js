import styled from 'styled-components'
import Image from 'next/image'

const Container = styled.div`
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    height: 400px;
    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover > img {
        transform: scale(1.03) translate(0, -5px);
    }
`

const Chips = styled.div`
    position: absolute;
    bottom: 0%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 5px 5px;
`

const Chip = styled.div`
    display: flex;
    color: white;
    padding: 5px 20px;
    border: 1px solid white;
    border-radius: 10px;
    align-items: center;
    gap: 5px;
    font-weight: 500;
    & > img {
        filter: brightness(0%) invert(1);
    }
`

const Faded = styled.div`
    position: absolute;
    bottom: 0%;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.9));
`

const ProductCard = ({ hotelImageNum, price, randomDate }) => {
    return (
        <Container>
            <Image src={`/${hotelImageNum}.jpg`} height={700} width={700} alt="hotelImage" />
            <Faded />
            <Chips>
                <Chip><Image src='/dollar.png' height={15} width={15} alt='Dollar' />{price}</Chip>
                <Chip><Image src='/calendar.png' height={20} width={20} alt='Calendar' />{randomDate}</Chip>
                <Chip><Image src='/two_people.png' height={20} width={20} alt='Two Adults' />2</Chip>
            </Chips>
        </Container>
    )
}

export default ProductCard

import styled from "styled-components"
import Image from "next/image"

const Container = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    & > img {
        object-fit: cover;
        width: 100%;
        transform: translate(0, -20vh);
        filter: brightness(90%);
        @media (orientation: portrait) {
            transform: translate(0, -10vh);
        }
    }
`

const CenterText = styled.h1`
    position: absolute;
    bottom: 40%;
    font-size: 90px;
    color: white;
    font-weight: 300;
    @media (orientation: portrait) {
        font-size: 40px;
        bottom: 60%;
    }
`

const Quote = styled.p`
    position: absolute;
    bottom: 35%;
    color: white;
    font-size: 20px;
    text-align: center;

`

const ToggleButton = styled.button`
    position: absolute;
    bottom: 10%;
    font-size: 40px;
    color: white;
    border: 1px solid white;
    border-radius: 5px;
    background: transparent;
    padding: 15px 35px;
    cursor: pointer;
    &:hover {
        border: 1px solid rgb(76, 124, 172);
        background: white;
        color: rgb(76, 124, 172);
    }
`

const Faded = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, rgba(0,0,0,0.4), transparent);
`

const Hero = () => {
    const scrollToForm = () => {
        document.getElementById('formBlock').scrollIntoView({behavior: 'smooth'})
    }
    return (
        <Container >
            <Image src='/sand.jpg' height={1000} width={1600} alt='Beach Photo' />
            <Faded />
            <CenterText>Explore The World!</CenterText>
            <Quote>'The best travel agency in North America' - Times Magazine</Quote>
            <ToggleButton onClick={scrollToForm}>Contact Us</ToggleButton>
        </Container>
    )
}

export default Hero
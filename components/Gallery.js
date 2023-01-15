import styled from "styled-components"
import Image from "next/image"
import { useState } from "react"

const Container = styled.div`
    display: flex;
    position: relative;
    width: 100vw;
    height: 60vh;
    & > img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
`

const MyLeftButton = styled.div`
    position: absolute;
    top: 50%;
    & > img {
        filter: opacity(70%);
        &:hover {
            cursor: pointer;
            filter: opacity(100%);
        }
    }

`

const MyRightButton = styled.div`
    position: absolute;
    top: 50%;
    right: 0%;
    & > img {
        filter: opacity(80%);
        &:hover {
            cursor: pointer;
            filter: opacity(100%);
        }
    }
`

const Gallery = () => {
    const arrayOfImages = Array(5).fill(0).map(
        (v, i) => `/travel${i}.jpg`
    )
    const [travelImage, setTravelImage] = useState(0)
    const switchPic  = (x) => {
        document.getElementById('pic').style.filter = "opacity(0%)"
        setTimeout(() => {
            document.getElementById('pic').style.filter = "opacity(100%)"
            if (travelImage + x <= -1) {
                setTravelImage(arrayOfImages.length - 1)
            } else if (travelImage + x >= arrayOfImages.length) {
                setTravelImage(0)
            } else {
                setTravelImage(travelImage + x)
            }
        }, 200)
    }
    return (
        <Container>
            <MyLeftButton onClick={() => switchPic(-1)}>
                <Image src='/arrowhead_left.png' height={60} width={60} alt='Left Arrow Button' />
            </MyLeftButton>
            <Image src={arrayOfImages[travelImage]} width={1800} height={1000} alt='Hero Travel Image' id='pic' />
            <MyRightButton onClick={() => switchPic(1)}>
                <Image src='/arrowhead_right.png' height={60} width={60} alt='Left Arrow Button' />
            </MyRightButton>
        </Container>
    )
}

export default Gallery
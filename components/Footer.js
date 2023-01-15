import Link from "next/link"
import styled from "styled-components"
import Image from "next/image"

const Wrapper = styled.div`
    width: 100vw;
    height: 80px;
    position: absolute;
    bottom: 0%;
    background-color: rgb(235,235,235);
`

const Container = styled.div`
    position: absolute;
    bottom: 0%;
    display: flex;
    width: 95%;
    height: 100%;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    padding: 10px 55px;
    margin-top: 80px;
    background-color: rgb(235,235,235);
    @media (orientation: portrait) {
        width: 100%;
        padding: 10px 15px;
    }
    & ul {
        display: flex;
        @media (orientation: portrait) {
            flex-direction: column;
        }
        & a {
            color: rgb(76, 124, 172);
            padding: 15px 25px;
            border-radius: 5px 20px 5px 10px;
            white-space: nowrap;
            &:hover {
                background-color: rgba(0,0,0,0.1);
            }
            @media (orientation: portrait) {
                font-size: 12px;
                padding: 5px 15px;
            }
        }
    }
`

const SocialContainer = styled.div`
    display: flex;
    height: 100%;
    gap: 10px;
    align-items: center;
    & > img {
        width: fit-content;
        height: 90%;
        border-radius: 5px;
        &:hover {
            cursor: pointer;
            transform: translate(0, -2px);
        }
        @media (orientation: portrait) {
            max-height: 30px;
        }
    }
`

const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <SocialContainer>
                    <Image src='/twitter.png' height={500} width={500} alt="Twitter Logo" />
                    <Image src='/instagram.png' height={500} width={500} alt="Twitter Logo" />
                    <Image src='/facebook.png' height={500} width={500} alt="Twitter Logo" />
                    <Image src='/tiktok.png' height={500} width={500} alt="Twitter Logo" />
                </SocialContainer>
                <ul>
                    <li><Link href={'/'}>© Copyright Information</Link></li>
                    <li><Link href={'/'}>Privacy Policy</Link></li>
                </ul>
            </Container>
        </Wrapper>
    )
}

export default Footer
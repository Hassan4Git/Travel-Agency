import Image from "next/image"
import styled from "styled-components"
import Link from "next/link"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    height: 40vh;
    padding: 0px 0px 5px 0px;
    overflow: hidden;
    transition: 0.2s;
    position: relative;
    justify-content: center;
    align-items: center;
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
        filter: brightness(30%);
    }
    & p {
        position: absolute;
        font-size: 3rem;
        color: white;
        filter: opacity(100%);
        text-align: center;
        @media (orientation: portrait) {
            font-size: 2rem;
        }
    }
    &:hover {
        cursor: pointer;
        & img {
            filter: brightness(100%);
            transform: scale(1.02);
        }
        & p {
            filter: opacity(0%);
        }
    }
`

export default function ({ country = 'Lebanon', image = '/airplane.jpg' }) {
    return (
        <Link href={`/destinations/${country}`} target="_blank">
            <Container>
                <Image src={`/${image}.jpg`} height={700} width={700} />
                <p>{country.toUpperCase()}</p>
            </Container>
        </Link>
    )
}
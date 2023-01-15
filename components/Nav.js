import Link from "next/link"
import styled from "styled-components"


const Wrapper = styled.div`
    width: 100%;
    height: 80px;
    background-color: rgb(235,235,235);
`
const Container = styled.div`
    display: flex;
    height: 100%;
    width: 95%;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    background-color: rgb(235,235,235);
    & img {
        height: 80%;
        cursor: pointer;
        @media (orientation: portrait) {
            height: 40%;
        }
    }
    & ul {
        display: flex;
        & li {
            & a {
                font-size: 22px;
                color: rgb(76, 124, 172);
                padding: 15px 25px;
                border-radius: 5px 20px 5px 10px;
                &:hover {
                    background-color: rgba(0,0,0,0.1);
                }
                @media (orientation: portrait) {
                    font-size: 12px;
                    padding: 5px 15px;
                    border-radius: 0px 10px 0px 5px;
                }
            }
        }
    }
`

const Nav = () => {
    return (
        <Wrapper>
            <Container>
                <img src='/icon_logo.png' />
                <ul>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/'}>Home</Link></li>
                </ul>
            </Container>
        </Wrapper>
    )
}

export default Nav
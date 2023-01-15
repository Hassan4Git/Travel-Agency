import styled from 'styled-components'
import Image from 'next/image'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    border-radius: 10px 20px;
    overflow: hidden;
    & img {
        border-radius: inherit;
        object-fit: cover;
        object-position: -60px 0px;
        width: 130%;
        height: 80%;
    }
`

const SubContainer = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 10px 5px 10px;
    justify-content: center;
    & > div {
        width: fit-content;
        margin: auto;
    }
`

const Name = styled.span`
    color: rgb(76, 124, 172);
    font-size: 24px;
`

const Title = styled.span`
    
`

const Experience = styled.span`

`

const Email = styled.p`

`

export default function EmployeeCard({ name, experience, image, title, email }) {
    return (
        <Container>
            <Image src={image} height={800} width={800} />
            <SubContainer>
                <div>
                    <Name>{name}: </Name>
                    <Title>{title},</Title>
                    <Experience> {experience}</Experience>
                </div>
                <Email>{email}</Email>
            </SubContainer>
        </Container>
    )
}
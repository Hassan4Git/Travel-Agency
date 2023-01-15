import styled from "styled-components"
import EmployeeCard from "./EmployeeCard"

const Container = styled.div`
    display: grid;
    gap: 15px;
    width: 70%;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    @media (orientation: portrait) {
        width: 100%;
        height: 70%;
        grid-template-columns: 1fr;
    }
`

const FeaturedEmployees = ({ employees }) => {
    return (
        <Container>
            {employees.map((employee, i) => {
                return (
                    employee.frontPage ? 
                        (<EmployeeCard key={i} {...employee} />) : null
                )
            })}
        </Container>
    )
}

export default FeaturedEmployees
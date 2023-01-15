import styled from "styled-components"
import { TextField } from "@mui/material"

const FormBlock = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 30%;
    justify-content: center;
    gap: 30px;
    align-items: center;
    @media (orientation: portrait) {
        height: 30%;
        width: 100%;
        padding: 0px 20px;
    }
    & h2 {
        font-size: 60px;
    }
    & .inputSubmit {
        padding: 20px 20px;
        font-size: 24px;
        border-radius: 5px;
        cursor: pointer;
        background-color: rgb(76, 124, 172);
        color: white;
        width: 80%;
        &:hover {
            background-color: rgb(43, 82, 121);
        }
    }
`

const Form = () => {
    return (
        <FormBlock id='formBlock'>
            <h2>Contact</h2>
            <TextField fullWidth label='First & Last Name' variant='outlined' />
            <TextField fullWidth type={'number'} label='Phone Number' variant='outlined' />
            <TextField fullWidth label='Email' variant='outlined' />
            <TextField multiline minRows={4} maxRows={4} fullWidth label='Message' variant='outlined' />
            <input type="submit" value='Submit' className='inputSubmit' />
        </FormBlock>
    )
}

export default Form
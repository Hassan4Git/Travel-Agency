import styled from "styled-components"
import { DatePicker } from "@mui/x-date-pickers"
import { TextField } from '@mui/material'
import { InputAdornment } from "@mui/material"
import { useState } from "react"
import Image from "next/image"
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

const Container = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 20px;
    gap: 15px;
    & > button {
        display: flex;
        align-items: center;
        padding: 8px 40px;
        gap: 10px;
        width: fit-content;
        height: 56px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        &:after {
            content: 'Search';
            @media (orientation: portrait) {
                content: '';
            }
        }
        @media (orientation: portrait) {
            padding: 5px 5px 5px 15px;
        }
    }
`



const Filter = ({ maxDate, filter }) => {
    const [selectedDate, setSelectedDate] = useState(null)
    const filterFunction = () => {
        const minNum = parseInt(document.getElementById('minNum').value)
        const maxNum = parseInt(document.getElementById('maxNum').value)
        const dateField = document.getElementById('dateField').value
        filter({minNum, maxNum, dateField})
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Container>
                <TextField 
                    variant='outlined'
                    label='min'
                    id='minNum'
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>
                    }} 
                />
                <TextField 
                    variant='outlined'
                    label='max'
                    id='maxNum'
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>
                    }} 
                />
                <DatePicker 
                    label="Dates"
                    inputFormat="dd/MM/yyyy" 
                    value={selectedDate}
                    minDate={new Date().toLocaleDateString()}
                    maxDate={maxDate} 
                    onChange={(newValue) => {setSelectedDate(newValue)}}
                    renderInput={(params) => <TextField {...params} id='dateField' />}
                />
                <button onClick={filterFunction}><Image src='/search_icon.png' height={20} width={20} alt='Search Icon' /></button>
            </Container>
        </LocalizationProvider>
    )   

}

export default Filter
// Задание 1: Температурный конвертер с Material UI

// Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

// Компоненты:
// Используйте TextField для ввода значения температуры.
// Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from 'react';

function TemperatureConverter() {
    const [celciusValue, setCelsiusValue] = useState(0);
    const [fahrenheitValue, setFahrenheitValue] = useState(0);
    const [activeCelcius, setActiveCelcius] = useState(true);
    const [activeFahrenheit, setActiveFahrenheit] = useState(true);


    function handleCelciusChange (e) {
        setCelsiusValue(e.target.value);
    } 

    function handleFahrenheitChange (e) {
        setFahrenheitValue(e.target.value);
    } 

    function handleStatus (e) {
        e.target.name === 'celsius' ? setActiveCelcius(true) : setActiveCelcius(false)
        e.target.name === 'fahrenheit' ? setActiveFahrenheit(true) : setActiveFahrenheit(false)
    }

    function handleReset () {
        setActiveCelcius(true);
        setActiveFahrenheit(true);
    }

    return ( 
        <div className="converter-box">
            <div className="converter-fields">
                {activeCelcius ? 
                <TextField onChange={handleCelciusChange} onClick={handleStatus} name='celsius' value={celciusValue}
                    label="Celsius"
                    type="number"
                    variant="filled"
                    slotProps={{
                        inputLabel: {
                        shrink: true,
                        },
                     }}
                />
            :   <TextField
          disabled
          id="filled-disabled"
          defaultValue="Hello World"
          variant="filled"
        /> }
                  
                {activeFahrenheit ? 
                <TextField
                onChange={handleFahrenheitChange} onClick={handleStatus}
                    label="Fahrenheit"
                    type="number"
                    variant="filled" value={fahrenheitValue} name='fahrenheit'
                    slotProps={{
                        inputLabel: {
                        shrink: true,
                        },
                    }}
                />
                : <TextField
          disabled
          id="filled-disabled"
          defaultValue="Hello World"
          variant="filled"
        />
             }
            </div>
            <div className="buttons">
                <Button className='btn' variant="contained" color="success">Convert</Button>
                <Button className='btn' onClick={handleReset}variant="contained" color="success">Reset</Button>
            </div>
            
        </div>
     )
}

export default TemperatureConverter;
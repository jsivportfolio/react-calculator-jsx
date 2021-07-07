// import React and the hook {useState} from 'react' library
import React, {useState} from 'react';

// import styled container.component
import {Container, DisplayScreen, DisplayScreenPrevious, DisplayScreenCurrent, CalculatorButton} from './styled/styled.components.jsx';

// export functional Component - Calculator 
export default function Calculator() {

    // implement React State
    // create array const to store data value in array and function to set data value
        // the array itself cannot change, but the values inside the array can change
    const [valueCurrent, valueSetCurrent] = useState('');

    const [valuePrevious, valueSetPrevious] = useState('');
    const [valueOperation, valueSetOperation] = useState('');

    const functionValueAppend = (anElement) => {
        const value = anElement.target.getAttribute('data');
        console.log(value);
        console.log(valueCurrent);
        // gaurd clause to prevent multiple decimals beings added to the value
        if (value === '.' && valueCurrent.includes('.')) return;
        // concatonate strings to create number
        valueSetCurrent(valueCurrent + value);
        console.log(valueSetCurrent);
    };

    const functionHandleDelete = () => {
        // delete last value of String 
        valueSetCurrent(String(valueCurrent.slice(0, -1)));
    };

    const functionHandleAllClear = () => {
        // clear all values 
        valueSetCurrent('');
        valueSetPrevious('');
        valueSetOperation('');
    };

    const functionSelectOperation = (anElement) => {
        if (valueCurrent === '') return
        if (valuePrevious !== '') {
            let aValue = valueCompute();
            valueSetPrevious(aValue);
        } else {
            valueSetPrevious(valueCurrent);
        }

        valueSetCurrent('');
        valueSetOperation(anElement.target.getAttribute('data'));
    };

    const valueCompute = () => {
        let valueComputedResult;
        // convert any string number to a number with a decimal and convert to a Number data type in order to do Math operations
        let valuePreviousNumber = parseFloat(valuePrevious);
        let valueCurrentNumber = parseFloat(valueCurrent);

        // prevents concatonation of strings if values are Not a Number Type
        if (isNaN(valuePreviousNumber) || isNaN(valueCurrentNumber)) return

        switch(valueOperation) {
            case '÷':
                valueComputedResult = valuePreviousNumber / valueCurrentNumber;
                break;
            case 'x':
                valueComputedResult = valuePreviousNumber * valueCurrentNumber;
                break;
            case '+':
                valueComputedResult = valuePreviousNumber + valueCurrentNumber;
                break;
            case '-':
                valueComputedResult = valuePreviousNumber - valueCurrentNumber;
                break;
            default:
                return;
        };
        return valueComputedResult;
    };

    const functionValueEquals = () => {
        let aValueComputed = valueCompute();
        if (aValueComputed === undefined || aValueComputed == null) return

        valueSetCurrent(aValueComputed);
        valueSetPrevious('');
        valueSetOperation('');
    };

    // return elements to render to the display
    return (
        <Container>
            <DisplayScreen>
                <DisplayScreenPrevious>{valuePrevious} {valueOperation}</DisplayScreenPrevious>
                <DisplayScreenCurrent>{valueCurrent}</DisplayScreenCurrent>
            </DisplayScreen>
            {/* pass in props as a parameter to the component */}
            <CalculatorButton onClick={functionHandleAllClear} gridSpan={2} calculatorControl>AC</CalculatorButton>
            <CalculatorButton onClick={functionHandleDelete} calculatorControl>DEL</CalculatorButton>
            <CalculatorButton data={'÷'} onClick={functionSelectOperation} calculatorOperation>÷</CalculatorButton>
            <CalculatorButton data={7} onClick={functionValueAppend}>7</CalculatorButton>
            <CalculatorButton data={8} onClick={functionValueAppend}>8</CalculatorButton>
            <CalculatorButton data={9} onClick={functionValueAppend}>9</CalculatorButton>
            <CalculatorButton data={'x'} onClick={functionSelectOperation} calculatorOperation>x</CalculatorButton>
            <CalculatorButton data={4} onClick={functionValueAppend}>4</CalculatorButton>
            <CalculatorButton data={5} onClick={functionValueAppend}>5</CalculatorButton>
            <CalculatorButton data={6} onClick={functionValueAppend}>6</CalculatorButton>
            <CalculatorButton data={'+'} onClick={functionSelectOperation} calculatorOperation>+</CalculatorButton>
            <CalculatorButton data={1} onClick={functionValueAppend}>1</CalculatorButton>
            <CalculatorButton data={2} onClick={functionValueAppend}>2</CalculatorButton>
            <CalculatorButton data={3} onClick={functionValueAppend}>3</CalculatorButton>
            <CalculatorButton data={'-'} onClick={functionSelectOperation} calculatorOperation>-</CalculatorButton>
            <CalculatorButton data={'.'} onClick={functionValueAppend} calculatorControlDecimal>.</CalculatorButton>
            <CalculatorButton data={0} onClick={functionValueAppend}>0</CalculatorButton>
            <CalculatorButton onClick={functionValueEquals} gridSpan={2} calculatorControlEquals>=</CalculatorButton>
        </Container>
    )
};
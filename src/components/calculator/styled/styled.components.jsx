// import styled from 'styled-components' library
import styled from 'styled-components';

// use library to create container component
export const Container = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    width: 400px;
    margin: 40px auto;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: minmax(120px, auto) repeat(5, 100px);
    box-shadow: 2px 2px 10px #333;
    border-radius: 9px;
`

// build the main container for screen (area that displays numbers from button clicks)
export const DisplayScreen = styled.div`
    grid-column: 1 / -1;
    background-color: rgba(60,64,67,0.75);
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
    word-wrap: break-word;
    word-break: break-all;
    text-align: right;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
`

// create the previous portion of the screen
export const DisplayScreenPrevious = styled.div`
    color: rgba(255, 255, 255, 0.75);
    font-size: 1.5rem;
`

// create the current portion of the screen
export const DisplayScreenCurrent = styled.div`
    color: rgba(255, 255, 255);
    font-size: 2.5rem;
`

// create the calculator buttons
export const CalculatorButton = styled.button`
    cursor: pointer;
    font-size: 2rem;
    border: 1px outset white;
    outline: none;
    background-color: rgba(153,170,181, 0.75);
    &:hover {
        background-color: rgba(35,39,42, 0.90); 
        color: rgba(114,137,218)
    }

    /* create function to create expanded form and look for the props object */
    ${ function ({ gridSpan }) {
        if (gridSpan) {
            return `grid-column: span ${gridSpan};`
        }
    }}

    /* create function to create custom buttons and look for the props object */
    ${({ calculatorOperation }) => calculatorOperation && `background-color: #23272a; color: #ffffff;`}

    ${({ calculatorControl }) => calculatorControl && `background-color: #7289da;`}

    ${({ calculatorControlDecimal }) => calculatorControlDecimal && `border-bottom-left-radius: 9px; background-color: #7289da;`}

    ${({ calculatorControlEquals }) => calculatorControlEquals && `border-bottom-right-radius: 9px; background-color: #ffffff;`}
`
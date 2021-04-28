import React from 'react';
import styled from 'styled-components';

const CalcStyle = styled.p`
    color : grey;
    font-size : 20px;
`

const AppHeader = ({calcDone,calcAll}) => {
    return (
        <div className = "d-flex justify-content-between align-items-baseline">
            <h1>Todo List</h1>
            <CalcStyle>{calcAll} more to do, {calcDone} done</CalcStyle>
        </div>
     ) 
}

export default AppHeader;
import React from 'react'
import {Input} from 'reactstrap';
import styled from 'styled-components';

const InputStyled = styled(Input)`
    margin-right : 10px;
`

const SearchPanel = ({onUpdateTerm}) => {
    return <InputStyled type="text" placeholder = "Search" onChange = {(e) => onUpdateTerm(e.target.value)}/>
}

export default SearchPanel;
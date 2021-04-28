import React from 'react';
import ListItem from '../list-item/list-item';
import styled from 'styled-components';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ListStyle = styled(ListGroup)`
    margin-top : 15px;
`

const ListItemForm = ({data,deleteItem,onUpdateImportant,onUpdateDone}) => {

    const elements = data.map(value => {
        const {id , ...otherData} = value
        return (
            <ListGroupItem key = {id}>
                <ListItem 
                { ...otherData} 
                deleteItem = {() => deleteItem(id)}
                onUpdateImportant= {() => onUpdateImportant(id)}
                onUpdateDone = {() => onUpdateDone(id)}/>
            </ListGroupItem>
        )
    })

    return (
        <ListStyle>
            {elements}
        </ListStyle>
    )
}
export default ListItemForm;
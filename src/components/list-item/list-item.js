import React from 'react';
import { Button } from 'reactstrap';
import './list.item.scss';

const ListItem = ({text,deleteItem,onUpdateImportant,onUpdateDone,done,important}) => {

    let className = "item"

    if(done) {
        className += " done"
    }
    if(important) {
        className += " important"
    }

    return (
        <div className = "d-flex justify-content-between align-items-center">
            <span>
                <p onClick = {onUpdateDone} className = {className}>{text}</p>
            </span>
            <div className = "d-flex ">
                <Button 
                outline 
                color = "success"
                onClick = {onUpdateImportant}
                className = "list__button">
                    <i className = "fa fa-exclamation"></i>
                </Button>
                <Button  
                outline 
                color = "danger"
                className = "list__button"
                onClick = {deleteItem}>
                <i className = "fa fa-trash-o"></i>
                </Button>
            </div>
        </div>
    )
}

export default ListItem
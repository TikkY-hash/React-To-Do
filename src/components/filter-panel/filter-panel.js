import React,{Component} from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import nextId from "react-id-generator";

export default class FilterPanel extends Component {
    
    state = {
        buttonsData : [
            {name : 'All',label : 'All',id : nextId()},
            {name : 'Active',label : 'Active',id : nextId()},
            {name : 'Done',label : 'Done',id : nextId()}
        ]
    }

    render() {

        const {buttonsData} = this.state
        const {filter,onUpdateFilter} = this.props

    
        const element = buttonsData.map(value => {
            const {id,label,name} = value;
            const activeClazz = filter === name;
            
            return (
                <Button
                 key = {id} 
                 outline = {!activeClazz} 
                 color = {activeClazz ? 'primary' : 'secondary'}
                 onClick = {() => onUpdateFilter(name)}>
                    {label}
                </Button>
            )
        })


        return (
            <ButtonGroup>
                 {element}
            </ButtonGroup>
        )
    }
}




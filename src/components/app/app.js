import React,{Component} from 'react';
import styled from 'styled-components';
import nextId from "react-id-generator";
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import FilterPanel from '../filter-panel';
import ListItemForm from '../list-item-form';
import AddItem from '../add-item';
import { Container } from 'reactstrap';


const ToDoPosition = styled.div`
    margin : 0 auto;
    max-width : 555px;
    margin-top : 100px;
`

export default class App extends Component {

    state = {
        data : [
            {text : 'Drink the coffe',important : false,done : false,id : nextId()},
            {text : 'Learn the React',important : false,done : false, id : nextId()},
            {text : 'Build React App',important : false,done : false, id : nextId()}
        ],
        filter : 'All',
        term : ''
    }

    onDeleteItem = (id) => {
        this.setState(({data}) => {
            const element = data.findIndex((value) => value.id === id)
            const newArr = [...data.slice(0,element),...data.slice(element + 1)]

            return {
                data : newArr
            }
        })
    }

    onUpdateDone = (id) => {
       this.setState(({data}) => {
           const element = data.findIndex(value => value.id === id)
           const oldElement = data[element];
           const newElement = {...oldElement,done : !oldElement.done}
           const newArr = [...data.slice(0,element), newElement ,...data.slice(element + 1)]

           return {
                data : newArr
           }
       })
    }

    onUpdate = (arr,id,propsItem) => {
        const element = arr.findIndex(value => value.id === id)
        const oldElement = arr[element];
        const newElement = {...oldElement,[propsItem] : !oldElement[propsItem]}
    
        return  [...arr.slice(0,element), newElement ,...arr.slice(element + 1)]
        
    }

    onUpdateImportant = (id) => {
        this.setState(({data}) => {
            return {
                data : this.onUpdate(data,id,'important')
            }
        })
    }

    onUpdateDone = (id) => {
        this.setState(({data}) => {
            return {
                data : this.onUpdate(data,id,'done')
            }
        })
    }

    onCreateItem = (text) => {
        const newElement = {text ,important : false ,done : false ,id : nextId()}

        this.setState(({data}) => {
            const newData = [...data,newElement]
            return {
                data : newData
            }
        })
    }

    onUpdateFilter = (name) => {
        this.setState(({filter}) => {
            return {
                filter : name
            }
        })
      
    }

    filter(data,name) {
        
        switch(name) {
            case 'All':
                return data;
            case 'Done':
                return data.filter(value => value.done);
            case 'Active':
                return data.filter(value => !value.done);
            default :
                return data
        }

    }

    onUpdateVisible = (term,data) => {
        if(!term) {
            return data
        }

        return data.filter(({text}) => {
            return text.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    onUpdateTerm = (text) => this.setState({term : text})

    render() {
        const {data,filter,term} = this.state
        const visible = this.filter(this.onUpdateVisible(term,data),filter)

        document.body.style.backgroundColor = "aliceblue";

        const calcDone = data.filter(value => value.done).length
        const calcAll = data.length;

        return (
            <Container>
                <ToDoPosition>
                    <AppHeader calcDone = {calcDone} calcAll = {calcAll}/>
                    <div className = "d-flex">
                        <SearchPanel onUpdateTerm = {(text) => this.onUpdateTerm(text)}/>
                        <FilterPanel  onUpdateFilter = {(name) => this.onUpdateFilter(name)} filter = {filter}/>
                    </div>
                    <ListItemForm 
                    data = {visible} 
                    deleteItem = {(id) => this.onDeleteItem(id)}
                    onUpdateDone = {(id) => this.onUpdateDone(id)}
                    onUpdateImportant = {(id) => this.onUpdateImportant(id)}/>
                    <AddItem
                    onCreateItem = {(text) => this.onCreateItem(text)}/>
                </ToDoPosition>
            </Container>
        )
    }
}


import React,{Component} from 'react';
import {Input,Button} from 'reactstrap';
import styled from 'styled-components';

const InputStyled = styled(Input)`
    margin-right : 10px;
`
const FormStyle = styled.form`
    display : flex;
    margin-top : 10px;
`

export default class AddItem extends Component {

    state = {
        text : ""
    }

    onUpdateText = (e) => this.setState({ text : e.target.value })
    
    onChangeData = (e) => {
        e.preventDefault()
        const {text} = this.state
        const {onCreateItem} = this.props
        
        if(text) {
            onCreateItem(text)
        }

        this.setState({ text : '' })
    }

    render() {
       const {text} = this.state

        return (
            <FormStyle onSubmit = {this.onChangeData}>
                <InputStyled 
                type="text" 
                placeholder = "Add" 
                onChange = {this.onUpdateText}
                value = {text}/>
               <Button outline color = "secondary" > Add </Button>
            </FormStyle>
        )
    }
}


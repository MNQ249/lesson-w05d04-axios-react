import React, { Component } from 'react';

class PostForm extends Component {

constructor(props){
    super(props)
    this.state = {
        title: '',
        body: ''

    }
}


handleClick = (e)=>{
    e.preventDefault(); //this will prevent page to be reload
    this.props.sendDate(this.state)
}

handleChange = (e)=>{
    this.setState({
       [e.target.name]: e.target.value
    })
}

    render() {
        console.log(this.state)
        return (
            <form>
                <label>
                    Title:
                    <input type="text" name="title" value={this.state.title} onChange ={this.handleChange}/>
                </label>
                <label>
                    Body:
                    <input type="text" name="body" value={this.state.body} onChange ={this.handleChange}/>
                </label>
                <button onClick={this.handleClick}>send</button>
            </form>
        )
    }
};

export default PostForm;
import React from "react"
 export default class Hello extends React.Component{
    render(){
        // return (<p>Hello</p>);
        return(<p>Hello{this.props.name}</p>)
    }
}
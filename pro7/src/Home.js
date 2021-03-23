import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

export default class Home extends React.Component {
    constructor(props) {
        super()
        this.state = {
            // yourState: []
        }
    }
   
    // componentDidMount() {
    //     //wll run immmediately after render processes (including all mounting for child components) is complete
    //     let newData = []
    //     this.setState({ yourState: newData })
    // }
    // componentDidUpdate() {
    //     //will only run if a component is React detects a change in the state for this component or props from parent
    // }
    // componentWillUnmount() {
    //     //will only run if a component is about to be removed from the dom by React
    // }
    render() {
        return (
            <div>
               //put documentation and a background picture here
            </div>
        )
    }
}
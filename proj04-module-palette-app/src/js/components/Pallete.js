
import React, {Component} from 'react';
import PalleteBox from "./PalleteBox";
import {randomColor} from "../utils";

export default class Pallete extends Component{

    initProps = () =>
    {
        this.N = this.props.N;
        this.pallete = [];
        for(let i =0; i<this.N; i++) this.pallete.push(
            <PalleteBox color={randomColor()} size={100 + Math.floor(Math.random()*20)}/>);
    };

    render = () =>{
        this.initProps();
        return (
            <div style={{display: 'inline-block'}}>
                {this.pallete}
            </div>
        );
    };
}

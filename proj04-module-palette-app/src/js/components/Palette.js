
import React, {Component} from 'react';
import PaletteBox from "./PaletteBox";
import {randomColor} from "../utils";

export default class Palette extends Component{

    initProps = () =>
    {
        this.N = this.props.N;
        this.pallete = [];
        for(let i =0; i<this.N; i++) this.pallete.push(
            <PaletteBox color={randomColor()} size={100 + Math.floor(Math.random()*20)}/>);
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

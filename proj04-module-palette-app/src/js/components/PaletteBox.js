import React, {Component} from 'react';
import '../../css/palleteApp.css'


export default class PaletteBox extends Component{

    state = {extraStyle:{}, clicks:0};

    componentWillMount = () =>{ console.log(`willMount ${this.color}`);}

    componentDidMount = () => { console.log(`didMount ${this.color}`); }

    componentDidUpdate = () => { console.log(`didUpdate ${this.color}`); }

    shouldComponentUpdate = (state,props) => {
        console.log(`shouldComponentUpdate ${this.color}`);
        if(this.state.clicks > 10) return false;
        return true;
    }

    onMouseOverHandler =(e) =>{
        //console.log(this.color,'--> Over');
        //this.setState({extraStyle:{border: 'solid 2px', borderColor:'grey', padding: "0px"}});
        this.setState((oldstate) =>
        {
            return {...oldstate, extraStyle:{border: 'solid 2px', borderColor:'grey', padding: "0px"}};
        });
    }
    onMouseLeaveHandler =(e)=>{
        //console.log(this.color,'--> Leave');
        //this.setState({extraStyle:{}});
        this.setState((oldstate) => ({...oldstate, extraStyle:{}}))
    }

    onClickHandler = () =>{
        console.log(this.color, ' clicked!');
        this.setState( (oldstate) => {

            return {...oldstate, clicks: oldstate.clicks + 1};
        } );

    }


    initProps = () => {
        let {color = "#9ca1e7", size} = this.props;


        size = parseInt(size);
        if (!Number.isInteger(size) || size < 10 || size > 150) size = 100;
        this.size = size;
        this.color = color;
        this.style =
            {
                width: this.size,
                height: this.size,
                backgroundColor: this.color,
                borderRadius: '5px',
                padding: '2px',
                margin: '2px',
                display: 'inline-block',
                textAlign: 'center',
                ...this.state.extraStyle
            };
    }

    render = () => {
        this.initProps();
        console.log(`+++ render ${this.color}`);

        return (
            <div style={this.style} onMouseOver={this.onMouseOverHandler}
                 onMouseLeave={this.onMouseLeaveHandler}
                 onClick={this.onClickHandler}>
                <span className="palleteText">{this.color}</span>
                <br/>
                <span>clicks:{this.state.clicks}</span>

            </div>
        );
    }
}

//export default PalleteBox;

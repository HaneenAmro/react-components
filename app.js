// TODO


class Kale extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hasVitamins : false,
        };
    }

    onKaleAClick(){
        this.setState({
            hasVitamins: !this.state.hasVitamins
        });
    }

render() {

    var style = {
        fontWeight: this.state.hasVitamins ? '900' : 'none'
    };

return (   
    <li style={style}  onMouseOver={this.onKaleAClick.bind(this)}>{this.props.vitamin}</li>
);
}
}

class Cucumbers extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hasVitamins: false,
        };
    }

    oncucCClick() {
        this.setState({
            hasVitamins: !this.state.hasVitamins
        });
    }

    render() {
        var style = {
            textDecoration: this.state.hasVitamins ? 'line-through' : 'none' 
        }
    return (
    <li style={style}  onMouseOver={this.oncucCClick.bind(this)}>{this.props.vitamin}</li>
    );
    }
}


var App = () => (
<div>
    <h2>GroceryList</h2>
    <h3>Cucumbers vitamins</h3>
    < Cucumbers vitamin={'A'}/>
    <h3>Kale vitamins</h3>
    <Kale vitamin={'C'}/>

</div>  
);

ReactDOM.render(<App />, document.getElementById("app"));




// TODO


// var Kale = (props) => {

//     var onKaleAClick = (event) => {
//         alert('I got clicked');
//     };

// return ( 
//     <ul>
//     <li onClick={onKaleAClick}>{props.vitamin[0]}</li>
//     <li>{props.vitamin[1]}</li>
//     <li>{props.vitamin[2]}</li>

//     </ul>
// );
// }

// var Cucumbers = (props) => {

//     var oncucCClick = (event) => {
//         alert('I got clicked');
//     };

//     return (
//     <ul>
//     <li>{props.vitamin[0]}</li>
//     <li>{props.vitamin[1]}</li>
//     <li onClick={oncucCClick}>{props.vitamin[2]}</li>

//     </ul>
//     );
//     };


// var App = () => (
// <div>
//     <h2>GroceryList</h2>
//     <h3>Cucumbers vitamins</h3>
//     < Cucumbers vitamin={['A', 'B', 'C']}/>
//     <h3>Kale vitamins</h3>
//     <Kale vitamin={['A', 'C', 'K']}/>

// </div>  
// );

// ReactDOM.render(<App />, document.getElementById("app"));
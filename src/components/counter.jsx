import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: this.props.value
    };

    styles = {
        fontSize: 16,
        fontWeight: 'bold',
    };

    //arrow function
    //onClick attr: no ()
    //syntax {state_elemment: this.state.state_element}
    handleIncrement = () => {
        // console.log("clicked");
        this.setState({count: this.state.count + 1});
    }

    handleDecrement = () => {
        // console.log("clicked");
        this.setState({count: this.state.count - 1});
    }

    handleReset = () => {
        this.setState({count: this.state.count = 0});
    }

    disableBtnState() {
        if (this.state.count > 0) return false;
        return true;
    }

    render() {
        console.log(this.props);
        return (
            //put elements directly under root div
            <React.Fragment>
                
                <div className="ml-4">
                    {this.props.children}
                </div>
            
                <div className="m-3">

                    <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm p-2">Delete</button>

                    <button className="btn btn-secondary btn-sm ml-2" style={this.styles}
                            onClick={this.handleIncrement}>
                                +
                    </button>
                    
                    <button className="btn btn-secondary btn-sm ml-1" style={this.styles}
                            onClick={this.handleDecrement}
                            disabled={this.disableBtnState()}>
                                -
                    </button>

                    <button className="btn btn-danger btn-sm ml-1 mr-3"
                            onClick={this.handleReset}
                            disabled={this.disableBtnState()}>
                                Reset
                    </button>

                    <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 p-3 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
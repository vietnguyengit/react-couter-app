import React, { Component } from 'react';

class Counter extends Component {

    styles = {
        fontSize: 16,
        fontWeight: 'bold',
    };

    disableBtnState() {
        if (this.props.counter.value > 0) return false;
        return true;
    }

    render() {
        
        return (
            //put elements directly under root div
            <React.Fragment>
                
                <div className="ml-4">
                    {this.props.children}
                </div>
            
                <div className="m-3">

                    <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm p-2">Delete</button>

                    <button className="btn btn-secondary btn-sm ml-2" style={this.styles}
                            onClick={() => this.props.onIncrement(this.props.counter)}>
                                +
                    </button>
                    
                    <button className="btn btn-secondary btn-sm ml-1" style={this.styles}
                            onClick={() => this.props.onDecrement(this.props.counter)}
                            disabled={this.disableBtnState()}>
                                -
                    </button>

                    <button className="btn btn-danger btn-sm ml-1 mr-3"
                            onClick={() => this.props.onReset(this.props.counter)}
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
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
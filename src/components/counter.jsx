import React, { Component } from 'react';

class Counter extends Component {
    styles = {
        fontSize: 16,
        fontWeight: 'bold',
    };

    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
    }

    componentWillUnmount() {
        console.log("Counter - Unmount");
    }
    
    render() {
        console.log("Counter - rendered")
        const {onDelete, onIncrement, onDecrement, onReset, counter} = this.props;
        return (
            //put elements directly under root div
            <React.Fragment>
                <div className="ml-4">
                    {this.props.children}
                </div>
                <div className="m-3">
                    <button onClick={() => onDelete(this.props.id)} className="btn btn-danger btn-sm p-2">Delete</button>
                    <button className="btn btn-secondary btn-sm ml-2" style={this.styles}
                            onClick={() => onIncrement(this.props.counter)}>
                                +
                    </button>
                    <button className="btn btn-secondary btn-sm ml-1" style={this.styles}
                            onClick={() => onDecrement(this.props.counter)}
                            disabled={this.disableBtnState()}>
                                -
                    </button>

                    <button className="btn btn-danger btn-sm ml-1 mr-3"
                            onClick={() => onReset(this.props.counter)}
                            disabled={this.disableBtnState()}>
                                Reset
                    </button>

                    <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
            </React.Fragment>
        );
    }

    disableBtnState() {
        if (this.props.counter.value > 0) return false;
        return true;
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
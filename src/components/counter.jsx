import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0,
        imgURI: 'http://www.ddmcivil.com.au/wp-content/uploads/2018/02/DDM-Logo-White-Sml.png',
        tags: ["tag1", "tag2", "tag3"]
    };

    styles = {
        fontSize: 16,
        fontWeight: 'bold',
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p className="alert alert-warning">There are no tags!</p>;
        return <ul className="list-group">{this.state.tags.map(tag => <li key={tag} className="list-group-item">{tag}</li>)}</ul>
    }

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
        return (
            //put elements directly under root div
            <React.Fragment>
                <div className="m-3">
                    <div className="m-2 mb-3"><img src={this.state.imgURI} width="100px" alt=""/></div>

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

                {this.state.tags.length === 0 && <p className="alert alert-secondary mb-0">Submit new tag!</p>}
                {this.renderTags()}
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
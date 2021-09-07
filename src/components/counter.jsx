import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0,
        imgURI: 'http://www.ddmcivil.com.au/wp-content/uploads/2018/02/DDM-Logo-White-Sml.png',
        tags: ["list_item1", "list_item2", "list_item3"]
    };

    styles = {
        fontSize: 16,
        fontWeight: 'bold',
    };

    render() {
        return (
            //put elements directly under root div
            <React.Fragment>
                <div className="m-3">
                    <img src={this.state.imgURI} width="100px"/>
                    <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button className="btn btn-secondary btn-sm">Increment</button>
                </div>

                <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
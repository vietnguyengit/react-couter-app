import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0}
        ],
        imgURI: 'http://www.ddmcivil.com.au/wp-content/uploads/2018/02/DDM-Logo-White-Sml.png',
        tags: ["tag1", "tag2", "tag3"]
    }

    
    renderTags() {
        if (this.state.tags.length === 0) return <p className="alert alert-warning">There are no tags!</p>;
        return <ul className="list-group">{this.state.tags.map(tag => <li key={tag} className="list-group-item">{tag}</li>)}</ul>
    }
    
    render() {
        return (
             <React.Fragment>
                    <div className="m-3">
                        <div className="m-2 mb-3"><img src={this.state.imgURI} width="100px" alt=""/></div>
                    </div>

                    <div>
                        {this.state.counters.map(counter => <Counter key={counter.id}></Counter>)}
                    </div>

                    {this.state.tags.length === 0 && <p className="alert alert-secondary mb-0">Submit new tag!</p>}
                    {this.renderTags()}
             </React.Fragment>
        );
    }
}

export default Counters;
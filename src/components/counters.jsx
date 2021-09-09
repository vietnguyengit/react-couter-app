import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            {_id: 1, value: 3},
            {_id: 2, value: 0},
            {_id: 3, value: 0}
        ],
        imgURI: 'http://www.ddmcivil.com.au/wp-content/uploads/2018/02/DDM-Logo-White-Sml.png',
        tags: [
            {_id: 0, value: "tag1"},
            {_id: 1, value: "tag2"},
            {_id: 2, value: "tag3"}
        ]
    }

    handleCounterDelete = counterID => {
        console.log("Counter #" + counterID + " deleted!");
        const counters = this.state.counters.filter(c => c._id !== counterID)
        this.setState({counters});
    }
    
    handleTagDelete = tag => {
        const tags = this.state.tags.filter(t => t._id  !== tag._id);
        this.setState({tags: tags});
    }
    
    renderTags() {
        if (this.state.tags.length === 0) return <p className="alert alert-warning">There are no tags!</p>;
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Value</th>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tags.map(tag =>
                        <tr>
                            <td>{tag.value}</td>
                            <td>
                                <button onClick={() => this.handleTagDelete(tag)} className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
    
    render() {
        return (
             <React.Fragment>
                    <div className="m-3 mb-5">
                        <div className="m-2 mb-3"><img src={this.state.imgURI} width="100px" alt=""/></div>
                    </div>

                    <div>
                        {this.state.counters.map(counter => <Counter key={counter._id} value={counter.value} id={counter._id} onDelete={this.handleCounterDelete}>
                            <h5>Counter #{counter._id}</h5>
                        </Counter>)}
                    </div>

                    {this.state.tags.length === 0 && <p className="alert alert-secondary mb-0">Submit new tag!</p>}
                    {this.renderTags()}
             </React.Fragment>
        );
    }
}

export default Counters;
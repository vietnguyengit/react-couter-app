import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    renderTags() {
        const {tags, onTagDelete} = this.props;
        if (tags.length === 0) return <p className="alert alert-warning">There are no tags!</p>;
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Value</th>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                    {tags.map(tag =>
                        <tr>
                            <td>{tag.value}</td>
                            <td>
                                <button onClick={() => onTagDelete(tag)} className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    render() {  
        
        console.log("Counters - rendered")
        const {counters, imgURI, onDelete, onIncrement, onDecrement, onReset, onResetAll} = this.props;
        return (

             <React.Fragment>
                    <div className="m-3 mb-5">
                        <div className="m-2 mb-3"><img src={imgURI} width="100px" alt=""/></div>
                        <button onClick={onResetAll} className="btn btn-primary btn-sm">Reset All</button>
                    </div>
                    <div>
                        {counters.map(counter => 
                        <Counter 
                            key={counter._id}
                            id={counter._id}
                            counter={counter}
                            onDelete={onDelete}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                            onReset={onReset}>
                            <h5>Counter #{counter._id}</h5>
                        </Counter>)}
                    </div>
                    {this.props.tags.length === 0 && <p className="alert alert-secondary mb-0">Submit new tag!</p>}
                    {this.renderTags()}
             </React.Fragment>
        );
    }
}

export default Counters;
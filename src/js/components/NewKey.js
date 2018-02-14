import React from 'react';

export default class NewKey extends React.Component{
    constructor(){
        super();
        this.addKey=this.addKey.bind(this);
    }
    addKey(){
        alert('key was added');
    }
    render(){
        return(
            <div className="vvp-new-key">
                <h4>New key</h4>
                <div className="vvp-new-key__content">
                    <div className="vvp-new-key__id">
                        1112
                    </div>
                    <div className="vvp-new-key__tag-input">
                        FA423
                        <input type="text" placeholder="Enter Description"/>
                        <button onClick={this.addKey}>+</button>
                    </div>
                </div>
            </div>
        )
    }
}
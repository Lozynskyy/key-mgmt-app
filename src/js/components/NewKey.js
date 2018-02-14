import React from 'react';

export default class NewKey extends React.Component{
    constructor(){
        super();
        this.state={
            description:''
        };
        this.addKey=this.addKey.bind(this);
        this.handleDescription=this.handleDescription.bind(this);
    }
    addKey(){
        alert(this.state.description);
    }
    handleDescription(event){
        this.setState({
            description:event.target.value
        })
    }
    render(){
        return(
            <div className='row'>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="vvp-new-key">
                        <div className="vvp-new-key__content">
                            <div className='row'>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                                    <div className="vvp-new-key__id">
                                        1112
                                    </div>
                                </div>

                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                <div className="vvp-new-key__tag-input">
                                    FA423
                                    <input type="text" placeholder="Enter Description" value={this.state.description} onChange={this.handleDescription}/>
                                    <button onClick={this.addKey}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
        )
    }
}
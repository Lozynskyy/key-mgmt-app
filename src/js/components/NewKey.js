import React from "react";

export default class NewKey extends React.Component{
    constructor(){
        super();
        this.state={
            description:""
        };
        this.addKey=this.addKey.bind(this);
        this.handleDescription=this.handleDescription.bind(this);
    }
    addKey(){
        if(this.state.description){
            alert(this.state.description);
        }
        else {
            alert("enter key description");
        }

    }
    handleDescription(event){
        this.setState({
            description:event.target.value
        });
    }
    render(){
        return(

            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10">
                <div className="vvp-new-key">
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                        <div className="vvp-new-key__id">
                                        1112
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                        <div className="vvp-new-key-tag">
                                        ABC123
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">

                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Enter description" value={this.state.description} onChange={this.handleDescription} aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" onClick={this.addKey} type="button">Add key</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
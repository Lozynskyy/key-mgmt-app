import React from "react";
import {InputGroup,Button,FormControl} from "react-bootstrap";

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
        if(this.state.description && this.state.description.length<=50){
            alert(this.state.description);
        }
        else if(this.state.description && this.state.description.length>50){
            alert("description should be shorter");
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
            <div className="vvp-new-key">
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <div className="vvp-new-key__id">
                        {this.props.id}
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <div className="vvp-new-key-tag">
                        {this.props.tag}
                    </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">

                    <InputGroup>
                        <FormControl value={this.state.description} placeholder="Key description" onChange={this.handleDescription} type="text" />
                        <InputGroup.Button>
                            <Button onClick={this.addKey}>Add key</Button>
                        </InputGroup.Button>
                    </InputGroup>
                </div>
            </div>


        );
    }
}
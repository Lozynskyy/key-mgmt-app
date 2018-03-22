import React from "react";
import {InputGroup,Button,FormControl} from "react-bootstrap";

class NewKey extends React.Component{
    constructor(){
        super();
        this.state={
            description:"",
            key:{
                rkey:null,
                description:"",
            }
        };
        this.handleDescription=this.handleDescription.bind(this);
    }

    handleDescription(event){
        this.setState({
            description:event.target.value,
            key:{
                rkey:this.props.data.id,
                description:this.state.description
            }
        });
    }
    render(){
        return(
            <div className="vvp-new-key">
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <div className="vvp-new-key__id">
                        {this.props.data.id}
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <div className="vvp-new-key-tag">
                        {this.props.data.tag}
                    </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">

                    <InputGroup>
                        <FormControl value={this.state.description} placeholder="Key description" onChange={this.handleDescription} type="text" />
                        <InputGroup.Button>
                            <Button onClick={this.props.addKey.bind(this,this.state.key)}>Add key</Button>
                        </InputGroup.Button>
                    </InputGroup>
                </div>
            </div>


        );
    }
}

export default NewKey;
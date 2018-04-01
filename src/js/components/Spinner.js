import React from "react";
import { PulseLoader } from "react-spinners";

export default class Spinner extends React.Component{
    render(){
        return(
            <div className="spinner">
                <PulseLoader
                    color={"#000"}
                    loading={this.props.show}
                />
            </div>
        );
    }
}
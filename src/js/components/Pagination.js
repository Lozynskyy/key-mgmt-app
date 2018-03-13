import React from "react";
import { Pagination } from "react-bootstrap";
import { buildQueryString } from "../utilities/url";

class Pagination extends React.Component{
  render(){
    return({
      <Pagination className="pull-right" bsSize="medium">
        {
          for (let number = 1; number <= pages; number++) {
            return (<Pagination.Item key={number} active={number === this.props.page} onClick={() => this.changePage(number)}>{number}</Pagination.Item>
            );
          }
        }
      </Pagination>
    });
  }
}
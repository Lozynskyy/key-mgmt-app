import React from "react";
import LocksListElement from "./LocksListElement";
import { connect } from "react-redux";
import {Pagination} from "react-bootstrap";
import {push} from "react-router-redux";
import { queryString } from "query-string";
import {getLocksData} from "../actions/getLocksData";
import { history } from "../configurateStore/history";

class LocksTable extends React.Component{
    constructor(props){
        super(props);
        this.changePage = this.changePage.bind(this);
    }
    componentDidMount(){
        this.props.getAllLocksData();
    }
    renderPages(pages) {
        const result = [];
        for (let number = 1; number <= pages; number++) {
            result.push(<Pagination.Item key={number} active={number === this.props.page} onClick={() => this.changePage(number)}>{number}</Pagination.Item>);
        }
        return result;
    }
    render()
    {
        const per_page = 5;
        const pages = Math.ceil(this.props.locks.length / per_page);
        const current_page = this.props.page;
        const start_offset = (current_page - 1) * per_page;
        let start_count = 0;
        return(
            <div>
                <table className="table table-bordered table-hover table-striped">
			  <thead>
			    <tr>
			      <th colSpan="3">Locks</th>
			    </tr>
			    <tr>
			      <th>ID</th>
			      <th>Name</th>
			    </tr>
			  </thead>
                    <tbody>
                        {this.props.locks.map((lock, index) => {
            	if (index >= start_offset && start_count < per_page) {
            		start_count ++;
            		return(
                                    <LocksListElement key={lock.id} lock={lock}/>
                                );
            	}
                        })}
                    </tbody>
                </table>
                <Pagination className="locks-pagination pull-right" bsSize="medium">
                    {this.renderPages(pages)}
                </Pagination>

            </div>
        );
    }

    changePage(pagen)
    {
        const queryString = require("query-string");
        const parsed = queryString.parse(this.props.location.search);
        if(parsed.employeesPage === undefined && parsed.locksPage === undefined)
            history.push("/dashboard/?locksPage=" + pagen);
        else if(parsed.employeesPage !== undefined && parsed.locksPage === undefined)
            history.push(this.props.location.pathname + this.props.location.search + "&locksPage=" + pagen);
        else if(parsed.locksPage !== undefined){
            parsed.locksPage = pagen;
            const searchString = queryString.stringify(parsed);
            history.push("/dashboard/?" + searchString);
        }
    }
}

function mapStateToProps(state){
    const queryString = require("query-string");
    const parsed = queryString.parse(state.routing.location.search);
    return({
        locks: state.locks.data,
        page: Number(parsed.locksPage) || 1,
        location: state.routing.location
    });
}

function mapDispatchToProps(dispatch){
    return {
        getAllLocksData(){
            dispatch(getLocksData());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocksTable);
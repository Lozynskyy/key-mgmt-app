import React from "react";
import LocksListElement from "./LocksListElement";
import { connect } from "react-redux";
import {Pagination} from "react-bootstrap";
import {push} from "react-router-redux";
import queryString from "query-string";
import {getLocksData} from "../actions/lock";
import { buildQueryString } from "../utilities/url";
import {deleteLock} from "../actions/lock";
import AddLock from "./LockSubmit";
import DeleteModal from "./PopUps/DeleteModal";

class LocksTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showDelLockModal:false,
            currentLock:null
        };
        this.changePage = this.changePage.bind(this);
        this.showDeleteLockModal = this.showDeleteLockModal.bind(this);
        this.delLock = this.delLock.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal(hide) {
        this.setState({
            showDelLockModal: hide
        });
    }
    componentDidMount(){
        this.props.getAllLocksData();
    }

    changePage(pageNumber){
        const url = buildQueryString(pageNumber, "locksPage", this.props.location.search);
        this.props.navigate(url);
    }

    showDeleteLockModal(id){
        this.setState({
            showDelLockModal:true,
            currentLock:id
        });
    }
    delLock(){
        this.props.deleteThisLock(this.state.currentLock);
        this.setState({showDelLockModal:false});
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
                <AddLock/>
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th colSpan="3">Locks</th>
                        </tr>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.locks.map((lock, index) => {
                            if (index >= start_offset && start_count < per_page) {
                                start_count ++;
                                return(
                                    <LocksListElement key={lock.id} lock={lock} deleteLock={this.showDeleteLockModal}/>
                                );
                            }
                        })}
                    </tbody>
                </table>
                <Pagination className="locks-pagination pull-right" bsSize="medium">
                    {this.renderPages(pages)}
                </Pagination>
                <DeleteModal show={this.state.showDelLockModal} name="lock" closeModal={this.closeModal} delete={this.delLock}/>
            </div>
        );
    }
}

function mapStateToProps(state){
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
        },
        deleteThisLock(id){
            dispatch(deleteLock(id));
        },
        navigate(url) {
            dispatch(push(url));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocksTable);
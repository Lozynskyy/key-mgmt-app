import React from "react";
import LocksListElement from "./LocksListElement";
import { connect } from "react-redux";
import {Pagination} from "react-bootstrap";
import {push} from "react-router-redux";
import queryString from "query-string";
import {getLocksData} from "../actions/getLocksData";
import { buildQueryString } from "../utilities/url";
import {Button,Modal} from "react-bootstrap";
import {deleteLock} from "../actions/deleteLock";
import AddLock from "./LockSubmit";
import LockForm from "./LockForm";

class LocksTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showDelLockModal:false,
            showUpLockModal:false,
            currentLock:null
        };
        this.changePage = this.changePage.bind(this);
        this.showDeleteLockModal = this.showDeleteLockModal.bind(this);
        this.showUpdateLockModal = this.showUpdateLockModal.bind(this);
        this.delLock = this.delLock.bind(this);
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

    showUpdateLockModal(id){
        this.setState({
            showUpLockModal:true,
            currentLock:id
        });
    }

    delLock(){
        this.props.deleteThisLock(this.state.currentLock);
        this.setState({showDelLockModal:false});
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
                                    <LocksListElement key={lock.id} lock={lock} deleteLock={this.showDeleteLockModal} updateLock={this.showUpdateLockModal}/>
                                );
                            }
                        })}
                    </tbody>
                </table>
                <Pagination className="locks-pagination pull-right" bsSize="medium">
                    {this.renderPages(pages)}
                </Pagination>

                <Modal show={this.state.showDelLockModal}>
                    <Modal.Header>
                        <Modal.Title>Confirm action</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>Do you really want to delete this lock?</Modal.Body>

                    <Modal.Footer>
                        <Button onClick={()=>{this.setState({showDelLockModal:false});}}>Close</Button>
                        <Button bsStyle="danger" onClick={this.delLock}>Delete</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showUpLockModal}>
                    <Modal.Header>
                        <Modal.Title>Update lock</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <LockForm onSubmit={this.submit} />

                    </Modal.Body>

                    <Modal.Footer>
                        <Button type="button" bsSize="large" onClick={()=>this.setState({showUpLockModal:false})}>Close</Button>
                    </Modal.Footer>
                </Modal>

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
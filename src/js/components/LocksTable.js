import React from "react";
import LocksListElement from "./LocksListElement";
import { connect } from "react-redux";
import {Pagination} from "react-bootstrap";
import {push} from "react-router-redux";
import queryString from "query-string";
import {getLocksData,updateLock,getLockConfig} from "../actions/lock";
import { buildQueryString } from "../utilities/url";
import {deleteLock} from "../actions/lock";
import AddLock from "./LockSubmit";
import DeleteModal from "./PopUps/DeleteModal";
import SearchLock from "./SearchLock";
import {Button} from "react-bootstrap";
import UpdateModal from "./PopUps/UpdateModal";
import LockForm from "./LockForm";
import {initialize} from "redux-form";

class LocksTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showDelLockModal:false,
            showUpLockModal:false,
            currentLock:null,
            displayShowAllBtn:"allEmployeeBtn--hide"
        };
        this.lockUpdate = this.lockUpdate.bind(this);
        this.changePage = this.changePage.bind(this);
        this.showDeleteLockModal = this.showDeleteLockModal.bind(this);
        this.showUpdateLockModal = this.showUpdateLockModal.bind(this);
        this.delLock = this.delLock.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.findLock=this.findLock.bind(this);
        this.formConfig=this.formConfig.bind(this);
    }

    closeModal(hide) {
        this.setState({
            showDelLockModal: hide,
            showUpLockModal: hide
        });
    }

    lockUpdate(values){
        const lock={
            lock_name: values.lock_name,
            lock_pass: values.lock_pass
        };
        this.props.updateLockData(values.id, lock);
        this.setState({showUpLockModal:false});
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

    showUpdateLockModal(data){
        this.props.initializeForm(data);
        this.setState({
            showUpLockModal:true,
        });
    }

    delLock(){
        this.props.deleteThisLock(this.state.currentLock);
        this.setState({showDelLockModal:false});
        this.props.getAllLocksData();
    }

    findLock(data){
        this.props.getAllLocksData(data.toFind);
        this.setState({
            displayShowAllBtn:""
        });
    }
    formConfig(id){
        this.props.getLockConfig(id);
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
        const per_page = 10;
        const pages = Math.ceil(this.props.locks.length / per_page);
        const current_page = this.props.page;
        const start_offset = (current_page - 1) * per_page;
        let start_count = 0;
        return(
            <div>
                {this.props.lockConfig}
                <AddLock/>
                <SearchLock onSubmit={this.findLock}/>
                <Button className={this.state.displayShowAllBtn} onClick={()=>{this.setState({displayShowAllBtn:"allEmployeeBtn--hide"}); this.props.getAllLocksData();}}>Show all locks</Button>

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
                                    <LocksListElement key={lock.id} lock={lock} formConfig={this.formConfig} deleteLock={this.showDeleteLockModal} updateLock={this.showUpdateLockModal}/>
                                );
                            }
                        })}
                    </tbody>
                </table>
                <Pagination className="locks-pagination pull-right" bsSize="medium">
                    {this.renderPages(pages)}
                </Pagination>

                <DeleteModal show={this.state.showDelLockModal} name="lock" closeModal={this.closeModal} delete={this.delLock}/>
                <UpdateModal show={this.state.showUpLockModal} name="lock" closeModal={this.closeModal} form={<LockForm onSubmit={this.lockUpdate}/>}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    const parsed = queryString.parse(state.routing.location.search);
    return({
        locks: state.locks.data,
        page: Number(parsed.locksPage) || 1,
        location: state.routing.location,
        lockConfig:state.lockConfig.data
    });
}

function mapDispatchToProps(dispatch){
    return {
        getAllLocksData(filter){
            dispatch(getLocksData(filter));
        },
        deleteThisLock(id){
            dispatch(deleteLock(id));
        },
        navigate(url) {
            dispatch(push(url));
        },
        updateLockData(id, values){
            dispatch(updateLock(id, values));
        },
        initializeForm(data){
            dispatch(initialize("AddUpdateLock", data));
        },
        getLockConfig(id){
            dispatch(getLockConfig(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocksTable);
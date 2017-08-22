import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateSearch, toggleModalAdd, toggleModalDelete, deleteItems} from '../reducers/reducer';
import Popup from './Popup';

class Panel extends Component {
    handleSearch = (evt) => {
        const val = evt.target.value;
        this.props.updateSearch(val);
    };

    handleAddItem = () => {
        this.props.toggleModalAdd();
    };

    handleDeleteItem = () => {
        this.props.toggleModalDelete();
    };

    render() {
        const {searchInput, modalItemAdd, modalItemDelete, meetups} = this.props;
        return (
            <div className="meetup-panel">
                <div>
                    <button className="btn-panel btn-add" onClick={this.handleAddItem}>+</button>
                    <button className="btn-panel btn-remove"
                            disabled={meetups.every(item=> !item.isComplete) || !meetups.length}
                            onClick={this.handleDeleteItem}>-
                    </button>
                </div>
                <div className="panel-input-container">
                    <input type="text"
                           onChange={this.handleSearch}
                           value={searchInput}
                           placeholder="Поиск"/>
                </div>
                {modalItemAdd ? <Popup contentType="ADD"/> : null}
                {modalItemDelete ? <Popup contentType="DELETE"/> : null}
            </div>
        )
    }
}

export default connect(
    (state) => ({
        searchInput: state.meetups.searchInput,
        modalItemAdd: state.meetups.modalItemAdd, modalItemDelete: state.meetups.modalItemDelete,
        meetups: state.meetups.meetups
    }),
    {updateSearch, toggleModalAdd, toggleModalDelete, deleteItems}
)(Panel)
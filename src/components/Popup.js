import React, {Component} from 'react';
import {connect} from 'react-redux';
import DayPickerInput from 'react-day-picker/DayPickerInput';
// eslint-disable-next-line
import moment from 'moment';
import 'react-day-picker/lib/style.css';
import {toggleModalAdd, toggleModalDelete, addItemToList, deleteItems} from '../reducers/reducer';
import CITIES from '../constants/cities';

class Popup extends Component {
    handleAddConfirm = () => {
        const {name, date, place} = this.props.meetupItem;
        const newItem = {};
        newItem.id = new Date().getTime();
        newItem.name = name;
        newItem.date = date;
        newItem.place = place;
        newItem.isComplete = false;
        this.props.addItemToList(newItem);
        console.log(this.props);
    };

    handleAddCancel = (evt) => {
        evt.preventDefault();
        this.props.toggleModalAdd();
    };

    handleNewItemInput = (evt) => {
        this.props.meetupItem[evt.target.name] = evt.target.value;
    };

    handleDayChange = (selectedDay) => {
        this.props.meetupItem.date = selectedDay.format('DD/MM/YYYY');
    };

    handleSelectChange = (evt) => {
        this.props.meetupItem.place = evt.target.value;
    };

    handleDeleteConfirm = () => {
        this.props.deleteItems();
        this.props.toggleModalDelete();
    };

    handleDeleteCancel = (evt) => {
        evt.preventDefault();
        this.props.toggleModalDelete();
    };

    render() {
        return this.props.contentType === "ADD" ? (
            <div className="popup-container">
                <h3>Добавление мероприятия</h3>
                <div className="popup-editable-container">
                    <div className="popup-editable-line">
                        <input type="text" name="name"
                               onChange={this.handleNewItemInput}
                               placeholder="Название"/>
                    </div>
                    <div className="popup-editable-line">
                        <DayPickerInput
                            name="date"
                            placeholder="Дата"
                            format="DD/MM/YYYY"
                            onDayChange={this.handleDayChange}
                        />
                    </div>
                    <div className="popup-editable-line">
                        <select
                            onChange={this.handleSelectChange}>
                            <option value="" disabled selected>Город</option>
                            {CITIES.map(city => <option
                                key={city.id}
                                value={city.name}>{city.name}</option>)}
                        </select>
                    </div>
                </div>
                <div className="popup-controls-panel">
                    <button className="btn btn-add" onClick={this.handleAddCancel}>Отмена</button>
                    <button className="btn btn-remove" onClick={this.handleAddConfirm}>Добавить</button>
                </div>
            </div>
        ) : (
            <div className="popup-container">
                <h3>Удаление мероприятия</h3>
                <div>Вы действительно хотите удалить выбранные мероприятия?</div>
                <div className="popup-controls-panel">
                    <button className="btn btn-add" onClick={this.handleDeleteCancel}>Отмена</button>
                    <button className="btn btn-remove" onClick={this.handleDeleteConfirm}>Удалить</button>
                </div>
            </div>
        )

    }
}

export default connect(
    (state) => ({
        modalItemDelete: state.meetups.modalItemDelete,
        meetupItem: state.meetups.meetupItem
    }),
    {toggleModalAdd, toggleModalDelete, addItemToList, deleteItems}
)(Popup)

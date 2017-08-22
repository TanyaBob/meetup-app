import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleItemSelect, toggleAllItemsSelect} from '../reducers/reducer';

const MeetupItem = ({name, date, place, isComplete, handleCheckboxChange, id}) => (
    <div className="table-line">
        <div className="table-line-item item-1">
            <input type="checkbox" name="meetupItem" checked={isComplete}
                   onChange={()=>handleCheckboxChange(id)}
            />
        </div>
        <div className="table-line-item item-2">{name}</div>
        <div className="table-line-item item-3">{date}</div>
        <div className="table-line-item item-4">{place}</div>
    </div>
);

class MeetupList extends Component {
    handleCheckAllItems = (evt) => {
        console.log('handleCheckAllItems --> evt.target.checked', evt.target.checked);
        this.props.toggleAllItemsSelect(evt.target.checked);
    };

    toggleCheckbox = (id) => {
        this.props.toggleItemSelect(id);
    };

    render() {
        const {meetups, searchInput} = this.props;

        function filterSearch(str, key) {
            if (str.match(new RegExp(key))) return str
        }

        const filteredMeetups = meetups.filter(meetup => {
            return meetup.name === filterSearch(meetup.name, searchInput)
        });

        return (
            <div className="meetup-list-table">
                <div className="meetup-list-table-head">
                    <div className="table-line">
                        <div className="table-line-item item-1">
                            <input type="checkbox" name="allItems"
                                   checked={!meetups.length ? false : null}
                                   onChange={this.handleCheckAllItems}/>
                        </div>
                        <div className="table-line-item item-2">Название</div>
                        <div className="table-line-item item-3">Дата</div>
                        <div className="table-line-item item-4">Место проведения</div>
                    </div>
                </div>
                <div>
                    {filteredMeetups.map(item => (
                        <MeetupItem key={item.id} {...item}
                                    handleCheckboxChange={this.toggleCheckbox}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({meetups: state.meetups.meetups, searchInput: state.meetups.searchInput}),
    {toggleItemSelect, toggleAllItemsSelect}
)(MeetupList)
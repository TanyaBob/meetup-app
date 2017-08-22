import React, {Component} from 'react';
import Panel from './components/Panel';
import MeetupList from './components/MeetupList';
import './MeetupApp.css';

class MeetupApp extends Component {
    render() {
        return (
            <div className="app-container">
                <div className="meetup-app">
                    <div className="meetup-header">
                        <h1>Meetups</h1>
                    </div>
                    <div className="meetup-list-container">
                        <Panel />
                        <MeetupList />
                    </div>
                </div>
            </div>
        );
    }
}

export default MeetupApp;

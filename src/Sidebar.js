import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
function Sidebar() {
    const recentItems = (topic) => (
        <div className="recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="background" />
                <Avatar className="sidebar__avatar" />
                <h2>Dawid Spisak</h2>
                <h4>dawidspisak@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you:</p>
                    <p className="sidebar__statNumber">2,321</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,321</p>
                </div>

            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItems("reactjs")}
                {recentItems('JavaScript')}
                {recentItems('Ruby')}
                {recentItems('Ruby on Rails')}
            </div>
        </div>
    )
}

export default Sidebar
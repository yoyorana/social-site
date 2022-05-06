// import React from 'react'
import "./Topbar.css";
import { Search,Person,Chat,Notifications } from '@mui/icons-material';
const Topbar = () => {
  return (
    <div>
        <div className="topbar">
            <div className="topbarleft">
                <span className='logo'> I am logo</span>
            </div>
            <div className="topbarcenter">
                <Search/>
                <input placeholder='search for friends,post' className='searchinput'/>
            </div>
            <div className="topbarright">
                <div className="topbarlinks">
                    <span className='topbarlink'>Home</span>
                    <span className='topbarlink'>Timelines</span>
                </div>
                <div className="topbaricons">
                    <div className="topbariconitems">
                        <Person/>
                     <span className="topbariconbadge">1</span>
                    </div>

                    <div className="topbariconitems">
                        <Chat/>
                     <span className="topbariconbadge">2</span>
                    </div>
                    
                    <div className="topbariconitems">
                        <Notifications/>
                     <span className="topbariconbadge">1</span>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar;
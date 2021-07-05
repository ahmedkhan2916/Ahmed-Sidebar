import "./sidebar.css"
import Icon from "./download.png";
import {useState,useRef} from "react";
import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import HelpIcon from '@material-ui/icons/Help';
import DashboardIcon from '@material-ui/icons/Dashboard'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import SurroundSoundIcon from '@material-ui/icons/SurroundSound';
import ContactsIcon from '@material-ui/icons/Contacts';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import PostAddIcon from '@material-ui/icons/PostAdd';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import WarningIcon from '@material-ui/icons/Warning';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';

function Sidebar_component({Setdata}) {
  
    return (
        <div className="sidebar">
            <div className="logo">
            <img src={Icon}></img>
            </div>
            <div className="logo-child">
                <SettingsIcon className="Icon"/>
                <PowerSettingsNewIcon className="Icon"/>
                <HelpIcon className="Icon"/>
            </div>
            <div className="button-div">
            <button onClick={(event)=>{
                  Setdata(event.target.textContent);
                  
           
        }}>Upgrade to premium</button>
            </div>
            <div className="help-icon2">
            <HelpIcon className="Icon-2"/>

            </div>
        
    
        <ul>
            <div className="dashboard" >
        <DashboardIcon className="Icon" />
        <li style={{color:"white"}} onClick={(event)=>{
          Setdata(event.target.textContent);
          
        }}>Dashboard</li>
        </div>
        <div className="dashboard" >
        <SurroundSoundIcon className="Icon"/>
        <li style={{color:"white"}} onClick={(event)=>{
                  Setdata(event.target.textContent);
                  
           
        }}>System</li>
        </div>
        <div className="dashboard">
        <EmojiObjectsIcon className="Icon"/>
        <li style={{color:"white"}} onClick={(event)=>{
                Setdata(event.target.textContent);
                
        }}>Rentals</li>
        </div>
        <div className="dashboard">
        <ContactsIcon className="Icon"/>
        <li style={{color:"white"}} onClick={(event)=>{
               Setdata(event.target.textContent);
               
        }}>Approval List</li>
        </div>
        <div className="dashboard">
        <RecentActorsIcon className="Icon"/>
        <li style={{color:"white"}} onClick={(event)=>{
               Setdata(event.target.textContent);
               
        }}>User Management</li>

        </div>
        <div className="dashboard">
        <MotorcycleIcon className="Icon"/>
        <li style={{color:"white"}}  onClick={(event)=>{
               Setdata(event.target.textContent);
               
        }}>Asset Management</li>
        </div>
        <div className="dashboard">
        <WarningIcon className="Icon"/>
        <li style={{color:"white"}}  onClick={(event)=>{
               Setdata(event.target.textContent);
               
        }}>Alarms</li>
        </div>
        <div className="dashboard">
        <PostAddIcon className="Icon"/>
        <li style={{color:"white"}}  onClick={(event)=>{
               Setdata(event.target.textContent);
               
        }}>Guide Screens</li>
        </div>
        <div className="dashboard">
        <AssignmentReturnedIcon className="Icon"/>
        <li style={{color:"white"}}  onClick={(event)=>{
               Setdata(event.target.textContent);
               
        }}>Archived Data</li>
        </div>
        <div className="dashboard">
        <MonetizationOnIcon className="Icon"/>
        <li style={{color:"white"}}  onClick={(event)=>{
               Setdata(event.target.textContent);
               
        }}>Payouts</li>
         </div>
        <div className="dashboard">
        <NotListedLocationIcon className="Icon"/>
        <li style={{color:"white"}}  onClick={(event)=>{
               Setdata(event.target.textContent);
               
        }}>Need help?</li>
        </div>
        </ul>
           
        </div>
    )
}

export default Sidebar_component

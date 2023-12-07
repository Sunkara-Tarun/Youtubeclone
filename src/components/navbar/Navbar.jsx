import React,{useEffect, useState} from 'react';
import './Navbar.css';
// import './App.css';

import logo from './youtube.png';
import SearchBar from './SearchBar/SearchBar';
import {RiVideoAddLine} from 'react-icons/ri';
import { IoMdNotificationsOutline} from "react-icons/io";
import {BiUserCircle} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import {gapi} from 'gapi-script';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth';
import Auth from '../../Pages/Auth/Auth';

function Navbar({toggleDrawer ,setEditCreateChanelBtn}) {

  const [AuthBtn, setAuthBtn] = useState(false) 

//  const CurrentUser = null; 
  // const CurrentUser = {
  //   result :{
  //     email:"Tarun@gmail.com",
  //     joinedOn:"2222-07-15T09:57:23.489Z"
  //   }
  // };

  const CurrentUser = useSelector((state)=>state.currentUserReducer);
  console.log(CurrentUser);
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:"46100958151-6gffoltsg4a4hhjfltu3r9kkld8954br.apps.googleusercontent.com",
        scope:"email"
      })
    }
    gapi.load("client:auth2",start);
  },[]);

  const dispatch = useDispatch();
  const onSuccess =(response)=>{
    const email = response?.profileObj.email;
    console.log(email);
    dispatch(login({email:email}))
  }
  const onFailure =(response)=>{
    console.log("Failed", response);
  }
  return (
    <>
    <div className='container_navbar'>
      <div className='Burger_Logo_Navbar'>
        <div className='burger' onClick={()=>toggleDrawer()}>
          <p></p>
          <p></p>
          <p></p>
        </div>
          <Link to={'/'} className='logo_div_navbar'>
            <img src={logo} alt=""/>
            <p className='logo_title_navbar'>YouTube</p>
          </Link>
      </div>
      <SearchBar/>
      <RiVideoAddLine size={22} className={"vid_bell_Navbvar"}/>

      <div className='apps_Box'>
        <p className='appsBox'></p>
        <p className='appsBox'></p>
        <p className='appsBox'></p>
        <p className='appsBox'></p>
        <p className='appsBox'></p>
        <p className='appsBox'></p>
        <p className='appsBox'></p>
        <p className='appsBox'></p>
        <p className='appsBox'></p>
      </div>
      <IoMdNotificationsOutline size={22} className={"vid_bell_Navbvar"}/>
      <div className='Auth_cont_Navbar'>
      {
        CurrentUser ? 
        (<> 
          <div className="Chanel_logo_App" onClick={()=>setAuthBtn(true)}>
            <p className='fstChar_logo_App'>
              {
                CurrentUser?.result.name ?(
                  <>
                  {CurrentUser?.result.name.charAt(0).toUpperCase()}
                  </>
                ):(
                <>
                  {CurrentUser?.result.email.charAt(0).toUpperCase()}
                </>
                )
              }
            </p>
          </div>
        </>
        ):(
        <>
          <GoogleLogin 
              clientId={
                        '46100958151-6gffoltsg4a4hhjfltu3r9kkld8954br.apps.googleusercontent.com'
                      }
              onSuccess={onSuccess}
              onFailure={onFailure}
              render={(renderProps)=>(
               <p className='Auth_Btn' onClick={renderProps.onClick}>
                 <BiUserCircle size={22}/>
                 <b>Sign in</b>
               </p>
             )}
           />
         
        </>)}
      </div>
    </div>
    {
      AuthBtn &&
      <Auth User ={CurrentUser}
            setAuthBtn = {setAuthBtn}
            setEditCreateChanelBtn={setEditCreateChanelBtn} />
    }
   </>
  )
}

export default Navbar;
import React,{ useEffect, useState } from 'react';
import './App.css';
import  AllRoutes from './components/AllRoutes';
import  DrawerSidebvar from './components/LeftSidebar/DrawerSidebvar';
import  Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, } from 'react-router-dom';
import  CreateEditChanel from './Pages/Chanel/CreateEditChanel';
import { useDispatch } from 'react-redux';
import { fetchAllChanel } from './actions/chanelUser';
import  VideoUpload from './Pages/VideoUpload/VideoUpload';
import { getAllVideo } from './actions/video';
import { getAlllikedVideo } from './actions/likedVideo';
import { getAllwatchLater } from './actions/watchLater';
import { getAllHistory } from './actions/History';

function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAllChanel());
    dispatch(getAllVideo());
    dispatch(getAlllikedVideo());
    dispatch(getAllwatchLater());
    dispatch(getAllHistory());
  }, [dispatch])
  
  const [toggleDrawerSidebar, settoggleDrawerSidebar] = useState({display:"none",})
  const toggleDrawer=()=>{
    if(toggleDrawerSidebar.display==="none"){
      settoggleDrawerSidebar({display:"flex"})
    }
    else{
      settoggleDrawerSidebar({display:"none"})
    }
  }
  const [vidUploadPage, setVidUploadPage] = useState(false)
  const [EditCreateChanelBtn, setEditCreateChanelBtn] = useState(false);

  return (
    <div>
      <Router>
        {
          vidUploadPage && <VideoUpload setVidUploadPage={setVidUploadPage}/>
        }
        { 
          EditCreateChanelBtn &&
          <CreateEditChanel setEditCreateChanelBtn = {setEditCreateChanelBtn}/>
        }
      <Navbar setEditCreateChanelBtn={setEditCreateChanelBtn}  toggleDrawer={toggleDrawer}/>
      {
        <DrawerSidebvar toggleDrawer={toggleDrawer} toggleDrawerSidebar={toggleDrawerSidebar}/>
      }
      <AllRoutes setVidUploadPage={setVidUploadPage} setEditCreateChanelBtn = {setEditCreateChanelBtn}/>
      </Router>
    </div>
  );
}

export default App;

import React from 'react'
import './Home.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid';
// import vid from '../../components/Video/vid.mp4';
import { useSelector } from 'react-redux';
function Home() {

  const vids = useSelector(state=>state.videoReducer)?.data?.filter(q=>q).reverse();
  console.log(vids);

//   const vids = [
//    {
//     _id:1,
//     video_src: vid,
//     Chanel:"62bafe6752cea35a6c30685f",
//     title:"video 1",
//     Uploader:"abc",
//     description:"description of video 1"
//   },
//    {
//     _id:2,
//     video_src: vid,
//     Chanel:"cdd",
//     title:"video 2",
//     Uploader:"abc",
//     description:"description of video 2"
//   },
//    {
//     _id:3,
//     video_src: vid,
//     Chanel:"add",
//     title:"video 3",
//     Uploader:"abc",
//     description:"description of video 3"
//   },
//    {
//     _id:4,
//     video_src: vid,
//     Chanel:"add",
//     title:"video 4",
//     Uploader:"abc",
//     description:"description of video 4"
//   }
// ];
const NavList = [
  "All",
  "HTML",
  "CSS",
  "JavaScript",
  "JQuery",
  "Bootstrap",
  "Sass",
  "MediaQuerys",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Pyton",
  "Java",
  "C++",
  "Animation",
  "Gameing",
  "Movies"
]
  return (
    <div className='Container_Pages_App'>
        <LeftSidebar></LeftSidebar>
      <div className='Container2_Pages_App'>
        <div className="navigation_Home">
          {
            NavList.map(m=>{
              return <p key={m} className="btn_nav_home">
                {m}
              </p>
            })
          }
        </div>
         <ShowVideoGrid vids={vids}></ShowVideoGrid>
      </div>
    </div>
  )
}

export default Home;

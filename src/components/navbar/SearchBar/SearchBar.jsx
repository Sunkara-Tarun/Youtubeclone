import React, { useState } from "react";
import './SearchBar.css'
import { FaSearch} from "react-icons/fa";
import { BsMicFill} from "react-icons/bs";
import SearchList from "./SearchList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { useState } from "react";

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [SearchListA, setSearchList] = useState(false);
    const TitleArray = useSelector(s=>s.videoReducer)?.data?.filter(q=>q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase())).map(m=>m.videoTitle)
    // const TitleArray = ["video1","Video2", "animation video","Movie", "video3"].filter(q=>q.toUpperCase().includes(SearchQuery.toUpperCase()))
   
    return (
        <>
        <div className="SearchBar_Container">
            <div className="SearchBar_Container2">
              <div className="search_div">
              <input type="text" className="iBox_SearchBar" value={searchQuery} onChange={e=>setSearchQuery(e.target.value)} onClick={e=>setSearchList(true)} placeholder="Search"/>
              <Link to= {`/search/${searchQuery}`}>
             
                <FaSearch className="SearchIcon_SearchBar" 
                onClick={e=>setSearchList(false)}/>

              </Link>
              <BsMicFill className="Mic_SearchBar"/>
                {searchQuery&& SearchListA &&
                <SearchList setSearchQuery={setSearchQuery}  TitleArray={TitleArray} />}
              
              </div>
            </div>
        </div>
      </>
    )
}
export default SearchBar;
import './App.css';
import React from 'react';
import Popup from './popup';
import { useState, useEffect } from 'react';
import { useHistory,useLocation } from 'react-router-dom';
// import axios from 'axios';
const App=(props)=> {
  const [show,setShow]=useState(false);
  const hiddenFileInput = React.useRef(null);
  const [arr, setArr] = useState([<p></p>]);
  const history=useHistory();
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  // const location=useLocation();
  // const [state, setState] = useState({
  //   IpfsHash: "",
  //   pinSize: "",
  //   Timestamp:"",
  //   isduplicate:false
  // });
  // // const [verify,setVerify]=useState('');
  // useEffect(() => {
  //   setState(state => ({ ...state, IpfsHash: location.state.det.IpfsHash }));
  //   console.log(state.IpfsHash);
  // }, [state.IpfsHash,location]);
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    const file1=fileUploaded.name;
    history.push({pathname:"./App",
        state:{
          file:file1
        }
      })
    setShow(true);
    setArr([...arr, <p><p id="p1">Name</p><p id="p2">Cid</p><p id="p3">Submarined</p></p>])
    
  };
  return (
        <div>
          <h1>Hey Gokulprasanth</h1>
          <div id="div1">
              <h3>My files</h3>
              <button onClick={handleClick}>Upload a file</button>
              <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{display: 'none'}} />
              
              <Popup trigger={show} setTrigger={setShow}>
                <h3>My popup</h3>
              </Popup>
              <p id="pin">pinned status</p>
              <select id="pin1">
                <option value="pinned" default>pinned</option>
                <option value="unpinned">unpinned</option>
                <option value="All">All</option>
              </select>

              <p id="border1"></p>
              <p><p id="p1">Name</p><p id="p2">Cid</p><p id="p3">Submarined</p></p>
              <p id="border2"></p>
              <div>
              {arr.map((a, i) => (
          <p key={i}>{a}</p>
        ))}
              </div>
              <p>No more pins</p>
          </div>

        </div>
  );
}

export default App;

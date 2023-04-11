
import './App.css';
import {useState} from 'react'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

function App() {
  const [page, setPage] = useState("Page1")

  let Component = null;
  if (page==="Page1") {
    Component = <Page1 />
  }
  if (page==="Page2") {
    Component = <Page2 />
  }

  return (
    <div className='wrap'>
      <button className='distance' onClick={()=>setPage("Page2")}> distance</button>
      {Component}
    </div>
  );
}

export default App;

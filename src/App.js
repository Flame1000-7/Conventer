
import './App.css';
import {useState} from 'react'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

function App() {
  const [page, setPage] = useState("MainPage")

  let Component = null;
  if (page==="Page1") {
    Component = <Page1 />
  }
  if (page==="Page2") {
    Component = <Page2 />
  }

  return (
    <div className='MainWrap'>
      <button className='distance' onClick={()=>setPage("Page1")}> distance</button>
      <button className='distance' onClick={()=>setPage("Page2")}> valume</button>
      {Component}
    </div>
  );
}

export default App;

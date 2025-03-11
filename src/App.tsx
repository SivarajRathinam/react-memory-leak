import {  useState } from 'react'
import './App.css'
import Timer from './Timer';

function App() {
  const [tab, setTab] = useState(0);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div>
        <button onClick={()=>setTab(0)} id="tab1">Tab1</button>
        <button onClick={()=>setTab(1)} id="tab2">Tab2</button>
      </div>
      {tab === 0 ? <Timer /> : <div>Tab1</div> }
    </div>
  )
}

export default App

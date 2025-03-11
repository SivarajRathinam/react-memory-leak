import { useEffect, useRef, useState } from 'react'
import './App.css'

function Timer() {
  const [timer,setTimer] = useState(0);
  const [intervalValue, setIntervalValue] = useState<string | number | NodeJS.Timeout | undefined>();

  const containerRef = useRef<HTMLDivElement>(null);

  const startTimer = () =>{
    clearInterval(intervalValue)
    setIntervalValue(setInterval(()=>{
      setTimer((prev)=>prev+1)
    },1))
  }
  const endTimer = () =>{
    clearInterval(intervalValue)
  }
  const resetTimer = () =>{
    setTimer(0);
    clearInterval(intervalValue);
  }

  useEffect(()=>{
    containerRef.current?.addEventListener('scroll',()=>{
      console.log('scrolling')
    })
  },[])

  return (
    <div style={{height: '400px', overflow:'auto'}} ref={containerRef}> 
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '1000px',
      overflow: 'auto'
    }} >
      <h1>{(timer/1000).toFixed(2)}</h1>
      <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
      <button id="start-timer" onClick={startTimer}>Start Timer</button>
      <button id="end-timer" onClick={endTimer}>End Timer</button>
      <button id="reset-timer" onClick={resetTimer}>Reset Timer</button>
      </div>
    </div>
    </div>
  )
}

export default Timer

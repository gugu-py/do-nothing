import React, { useEffect, useState } from 'react';
import timer from './timer.js'
import './App.css';

function App() {
  const [started, setStarted]=useState(false);
  const [fail, setFail]=useState(0); // 0=null, 1=not fail, 2=fail
  
  function handleStartButton(){
    console.log('pressed.');
    // document.addEventListener('click', ()=>{});
    // document.removeEventListener('click', ()=>{});
    setStarted(true);
    setFail(1);
    timer.reset();
    timer.start();
  }

  let click_count=0;
  const onMouseMove = () => {setFail(2);console.log('moved mouse')}
  const onKeyDown = () => {setFail(2);console.log('keydown');};
  const onClick = () => {
    if(click_count>0) setFail(2); 
    click_count++;
    console.log('clicked');
  };
  const onContextMenu = () => {setFail(2);console.log('ContextMenu');};
  useEffect(
    () => {
      if (started){
        click_count=0;
        console.log('add listeners.');
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('click', onClick);
        document.addEventListener('contextmenu', onContextMenu);
      }
      
      return () => {
        if (!started){
          click_count=0;
          console.log('Clean listeners.');
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('keydown', onKeyDown);
          document.removeEventListener('click', onClick);
          document.removeEventListener('contextmenu', onContextMenu);
        }
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('keydown', onKeyDown);
        document.removeEventListener('click', onClick);
        document.removeEventListener('contextmenu', onContextMenu);
      };
    }, [started]
  );

  useEffect(() => {
    if (started && fail===2){
      console.log('failed. start end. ');
      setStarted(false);
      timer.stop();
    }
  }, [started, fail]);


  if (started === false){
    return (
      <>
      <div class='title'>
        {fail===2?'you did nothing for '+timer.time+' second. ':''}
        start by doing NOTHING.
        <button onClick={handleStartButton}>start</button>
      </div>
      </>
    );
  }
  else{
    console.log('do nothing start')
    return (
      <div class='title'>Do nothing.</div>
    );
  }
}

export default App;

import React,{Fragment, useState, useEffect} from   "react"

const Clock = () => {
    const init_timer=25*60
    const [clock,setClock]=useState(init_timer);
    const [topButton, setTopButton]= useState(false);
    const [splitButton, setSplitButton]=useState(true);
  
    

    useEffect(() => {
        var timerID = setInterval( () => setClock(clock-(topButton?1:0)), 1000 );
      
        return function cleanup() {
            clearInterval(timerID);
          };
       });
      
       const getMinutes=(number)=> {
        number = Math.floor(number/60)
        var twodigit = number >= 10 ? number : "0"+number.toString();
        return twodigit;
      }
      
      const getSeconds=(number) =>{
        number = Math.floor(number%60)
        var twodigit = number >= 10 ? number : "0"+number.toString();
        return twodigit;
      }
    return <Fragment>

        <div className="clock">
            <div className="c-head">
                <div>Settings</div>
                <div>POMODORO #1</div>
            </div>
            <div className="c-time">
                {`${getMinutes(clock)} : ${getSeconds(clock)}`}
            </div>
            <div className="c-description">
                tarefa
            </div>
            <div className="c-buttons">

                <button className="c-btn c-btn--red" onClick={()=>{setTopButton(true); setSplitButton(false)}}  style={{display: splitButton ? 'block' : 'none' }}>Iniciar</button>

                <div style={{display: splitButton ? 'none' : 'block' }}>
                    <button className="c-btn c-btn--red" onClick={()=>{setClock(init_timer); setTopButton(false); setSplitButton(true)}}>Resetar</button>
                    <button className="c-btn c-btn--red" onClick={()=>setTopButton(!topButton)} >{topButton?'Pause':'Resume'}</button>
                </div>
                
            </div>


        </div>
    </Fragment>;
}


export default Clock;   
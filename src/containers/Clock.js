import React,{Fragment, useState, useEffect} from   "react"

const Clock = ({todo,  delayValue, longValue, shortValue, sesssionValue, autoStartBreak, autoStartPomodoro, taskDone, deleteTodo}) => {
    const [clock,setClock]=useState(sesssionValue*60);
    const [breakDelay,setBreakDelay] = useState(0);
    const [init, setInit]= useState(false);
    const [pause, setPause]=useState(true);
    const [session, setSession] = useState(true);
    const [short, setShort] = useState(true);
    const [countPomodoro, setCountPomodoro]= useState(1);

    const tictac = () => {
        if(clock<1){
            finishTime();//termina o tempo e vai pro proximo estado do pomodoro
        }
        else {
            setClock(clock-(pause?0:1));
        }
        
    }
    
    //maquina de estado do pomodoro
    const finishTime = () =>{
        if(session){
            if(breakDelay > delayValue){
                setClock(longValue*60);
                setBreakDelay(0);
            } else {
                setClock(shortValue*60);
                setBreakDelay(breakDelay+1);
            }
            setSession(false);
            setInit(autoStartBreak);
            setPause(!autoStartBreak);
            taskDone(todo);
            deleteTodo(todo.id);

        } else {
            setSession(true);
            setCountPomodoro(countPomodoro+1);
            setInit(autoStartPomodoro);
            setPause(!autoStartPomodoro);
            setClock(sesssionValue*60);
        }

    }
  
    

    useEffect(() => {
        var timerID = setInterval( () =>tictac(), 1000 );
      
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
      const firstButton = () => {
          if(init) {
              if(session){
                  setPause(!pause);
              }
              else {
                  setPause(!pause);
              }
          } else {
              setInit(true);
              setPause(false);
          }
      }

      const secondButton = () => {
          if(session){


          if(init){
                  if(pause){//Click Done
                      finishTime();
                  } else{//Click STOP
                      setClock(sesssionValue*60);
                      setInit(false);
                      setPause(true);
                  }
        }}
        else{//SKIP
            
            console.log("skip",)
            finishTime();
        }

    }

    const sndBtnLabel = () => {
        if (session){
            if(init){
                if(pause){
                    return 'DONE';
                } else {
                    return 'STOP';
                }
            } else {
                return 'STOP'
            }
        }
        else {
            return 'SKIP';
        }
    }
    const fstBtnLabel = () =>{
        
                if(init==false){
                    return 'Iniciar'
                }else {
                    if(pause){
                        return 'Resume'
                    }
                    else{
                        return 'Pause'
                    }
                }

            
        
    }

    //const resetBtn= this.state.isSession===false? 'IGNORAR' : this.state.pause===true && this.state.start===true?'FEITO':'PARAR' 
    return <Fragment>

        <div className="clock">
            <div className="c-head">
                <div>Settings</div>
                <div>{`${session?'POMODORO' : 'BREAK'} #${countPomodoro}`} POMODORO #1</div>
            </div>
            <div className="c-time">
                {`${getMinutes(clock)} : ${getSeconds(clock)}`}
            </div>
            <div className="c-description">
                {todo.description}
            </div>
            <div className="c-buttons">

                <div >
                    <button className="c-btn c-btn--red" onClick={()=>firstButton()}>{fstBtnLabel()}</button>
                    <button className="c-btn c-btn--red" onClick={()=>secondButton()} >{sndBtnLabel()}</button>
                </div>
                
            </div>


        </div>
    </Fragment>;
}


export default Clock;   
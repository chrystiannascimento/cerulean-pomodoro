import React,{Fragment, useState} from   "react"

const Settings = ({ submitSettings}) => {
    const [settings, setSettings]=useState( {pomoDur: 50, shortDur: 10, longDur: 20, breakDelay: 2, autoStartPomodoro: true, autoStartBreak: false  });

    const handleChange = (event) => {
        const auxSettings = {...settings};
        auxSettings[event.target.name] = parseInt(event.target.value);
        setSettings(auxSettings);
      };

      const handleChangeCB = (event) =>{
        const auxSettings = {...settings};
        auxSettings[event.target.name] = event.target.checked;
        setSettings(auxSettings);
      }



    return <Fragment>
       <div className="settings">
                    <h2>Settings</h2>
                    <form>
                        <div className="o-field">
                            <label className="c-label">Pomodoro duration</label>
                            <div className="u-flex1">
                                <input className="c-input" name="pomoDur" type="number" min="1" value={settings["pomoDur"]} onChange={handleChange}/>
                                <span className="u-size-xs">in minutes</span>
                            </div>
                        </div>
                        <div className="o-field">
                            <label className="c-label">Short break duration</label>
                            <div className="u-flex1">
                                <input className="c-input" name="shortDur" type="number" value={settings.shortDur} onChange={handleChange}/>
                                <span className="u-size-xs">in minutes</span>
                            </div>
                        </div>
                        <div className="o-field">
                            <label className="c-label">Long break duration</label>
                            <div className="u-flex1">
                                <input className="c-input" type="number" name="longDur" value={settings.longDur} onChange={handleChange}/>
                                <span className="u-size-xs">in minutes</span>
                            </div>
                        </div>
                        <div className="o-field">
                            <label className="c-label">Long break delay</label>
                            <div className="u-flex1">
                                <input className="c-input" type="number"  name="breakDelay" value={settings.breakDelay} onChange={handleChange}/>
                                <span className="u-size-xs">in pomodoros</span>
                            </div>
                        </div>

                   
                    

                        <div className="o-field">
                            <label className="c-label">Auto start pomodoros</label>
                            <div className="u-flex u-flex--align-center">
                                <label className="switch u-flex u-flex--align-center">
                                    <input type="checkbox" checked={settings.autoStartPomodoro} name="autoStartPomodoro" onChange={handleChangeCB}/>
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            
                        </div>
                        <div className="o-field">
                            <label className="c-label">Auto start breaks</label>
                            <div className="u-flex u-flex--align-center">
                                <label className="switch u-flex u-flex--align-center">
                                    <input type="checkbox" checked={settings.autoStartBreak}  name="autoStartBreak" onChange={handleChangeCB}/>
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            
                        </div>
                        <div>
                            <button className="s-btn" onClick={(e)=>submitSettings(e, settings)}>Save</button>
                        </div>

                       

                       
                    </form>
                  

                </div>


    </Fragment>;
}


export default Settings;   
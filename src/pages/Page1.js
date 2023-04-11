
import {useState} from 'react'
export default function Page1(){
    const [santi, setSanti] = useState(0)
    const [meters, setMeters] = useState(0)
    const changeSanti = (e) => {
        setSanti(parseInt(e.target.value));
    };
    const changeMeters = (e) => {
        setMeters(parseInt(e.target.value));
    };
    return(
    <div className="wrap">
        <div className="SantiMeters-Meters">
            <p>SantiMeters-Meters:</p>
            <input type="number" onChange={changeSanti}/>
            <input type="number" onChange={changeMeters}/>
            <button className='mama' onClick={()=>{setMeters(santi/100)}}>Count</button>
            <p>{meters} - result</p>
        </div>
    </div>
    ); 
}
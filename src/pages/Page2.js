import {useState} from 'react'
export default function Page2(){
    const [lit, setLit] = useState(0)
    const [cubmeters, setCubmeters] = useState(0)
    const changeLit = (e) => {
        setLit(parseInt(e.target.value));
    };
    const changeCubmeters = (e) => {
        setCubmeters(parseInt(e.target.value));
    };
    return(
        <div className="wrap">
<div className='liters-CubicMeters'>
<input type="number" onChange={changeLit}/>
<input type="number" onChange={changeCubmeters}/>
<button className='papa' onClick={()=>{setCubmeters(lit/1000)}}>Count</button>
</div>
<p className='vres'>{cubmeters} - result Cub Meters</p>
        </div>
    );
}
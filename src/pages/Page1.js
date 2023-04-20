import { useState } from "react";
export default function Page1() {
    const [san, setSan] = useState(0);
    const [met, setMet] = useState(0);
    const [santi, setSanti] = useState(0);
    const [meters, setMeters] = useState(0);
    const [yard, setYard] = useState(0);
    const [yr, setYr] = useState(0); // yr short form from yard
    const changeYard = (e) => {
        setYard(parseInt(e.target.value));
    };
    const changeSanti = (e) => {
        setSanti(parseInt(e.target.value));
    };
    const changeMeters = (e) => {
        setMeters(parseInt(e.target.value));
    };
    return (
        <div className="wrap">
            <div className="SantiMeters-Meters">
                <p>SantiMeters-Meters-Yard:</p>
                <div className="values">
                    <div className="inputs">
                        <input type="number" onChange={changeSanti} />
                        <input type="number" onChange={changeMeters} />
                        <input type="number" onChange={changeYard} />
                    </div>
                    <div className="text">
                        <p>Santimeters</p>
                        <p>Meters</p>
                        <p>Yards</p>
                    </div>
                </div>

                <button
                    className="mama"
                    onClick={() => {
                        if (santi) {
                            setSan(santi / 100);
                            setYr((santi / 100) * 1.09);
                        }
                        if (meters) {
                            setSan(0);
                            setMet(meters * 1000);
                            setYr(meters * 1.09);
                        }
                        if (yard) {
                            setYr(0);
                            setSan(yard * 0.91);
                            setMet(yard * 0.91 * 100);
                        }
                    }}
                >
                    Count
                </button>
                <p className="mres">{san} - result meters</p>
                <p className="sres">{met} - result santimeters</p>
                <p className="yres">{yr} - result Yards</p>
            </div>
        </div>
    );
}

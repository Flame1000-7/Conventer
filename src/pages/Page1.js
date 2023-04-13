import { useState } from "react";
export default function Page1() {
    const [san, setSan] = useState(0);
    const [met, setMet] = useState(0);
    const [santi, setSanti] = useState(0);
    const [meters, setMeters] = useState(0);
    const changeSanti = (e) => {
        setSanti(parseInt(e.target.value));
    };
    const changeMeters = (e) => {
        setMeters(parseInt(e.target.value));
    };
    return (
        <div className="wrap">
            <p>SantiMeters-Meters:</p>
            <div className="SantiMeters-Meters">
                <div className="values">
                    <div className="inputs">
                        <input type="number" onChange={changeSanti} />
                        <input type="number" onChange={changeMeters} />
                    </div>
                    <div className="text">
                        <p>Santimeters</p>
                        <p>Meters</p>
                    </div>
                </div>

                <button
                    className="mama"
                    onClick={() => {
                        console.log(santi);
                        if (santi) {
                            setSan(santi / 100);
                        } else {
                            setMet(meters * 100);
                        }
                    }}
                >
                    Count
                </button>
                <p className="mres">{san} - result meters</p>
                <p className="sres">{met} - result santimeters</p>
            </div>
        </div>
    );
}

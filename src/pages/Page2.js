import { useState } from "react";
export default function Page2() {
    const [litr, setLitr] = useState(0);
    const [metr, setMetr] = useState(0);
    const [lit, setLit] = useState(0);
    const [cubmeters, setCubmeters] = useState(0);
    const changeLit = (e) => {
        setLit(parseInt(e.target.value));
    };
    const changeCubmeters = (e) => {
        setCubmeters(parseInt(e.target.value));
    };
    return (
        <div className="wrap">
            <div className="liters-CubicMeters">
                <p>liters - Cub meters</p>
                <div className="values">
                    <div className="inputs">
                        <input type="number" onChange={changeLit} />
                        <input type="number" onChange={changeCubmeters} />
                    </div>
                    <div className="text">
                        <p>Liters</p>
                        <p>Cub meters</p>
                    </div>
                </div>

                <button
                    className="mama"
                    onClick={() => {
                        if (lit) {
                            setMetr(lit / 1000);
                        } else {
                            setLitr(cubmeters * 1000);
                        }
                    }}
                >
                    Count
                </button>
                <p className="vres">{metr} - result Cub Meters</p>
                <p className="vres">{litr} - result Liters</p>
            </div>
            
        </div>
    );
}

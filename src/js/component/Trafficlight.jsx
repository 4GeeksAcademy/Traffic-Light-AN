import React, {useState, useEffect} from "react";
 const Trafficlight = () =>{
    const [activeLight, setActiveLight] = useState("");
    const [changecolor, setchangecolor] = useState(false);
    const [hidden, setHidden] = useState(true)   
    useEffect(() => {
        if (changecolor === true) {
            const interval = setInterval(() => {
                switch (activeLight) {
                    case "red":
                        setActiveLight("yellow");
                        break;
                    case "yellow":
                        setActiveLight("green");
                        break;
                    case "green":
                        hidden === true ? setActiveLight("red") : setActiveLight("purple");
                        break;
                    default:
                        setActiveLight("red");
                        break;
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [changecolor, activeLight]);
    
    return (
        <div className="container">
            <div
                className={`light red ${activeLight === "red" ? "selected" : ""}`}
                onClick={() => {
                    setActiveLight("red");
                }}
            ></div>
            <div
                className={`light yellow ${activeLight === "yellow" ? "selected" : ""}`}
                onClick={() => {
                    setActiveLight("yellow");
                }}
            ></div>
            <div
                className={`light green ${activeLight === "green" ? "selected" : ""}`}
                onClick={() => {
                    setActiveLight("green");
                }}
            ></div> <div
            className={`light purple ${activeLight === "purple" ? "selected" : ""} ${hidden === true ? "hidden" : ""}`}
            onClick={() => {
                setActiveLight("purple");
            }}
        ></div>

        <button
            disabled={changecolor === true ? "disabled" : ""}
            className="btn btn-light w-100"
            onClick={() => {
                setchangecolor(true);
            }}
        >
            Start light cycle
        </button>
        <button
            disabled={changecolor === false ? "disabled" : ""}
            className="btn btn-light w-100"
            onClick={() => {
                setchangecolor(false);
            }}
        >
            Stop light cycle
        </button>
        <button
            className="btn btn-light w-100"
            onClick={() => {
                setHidden(!hidden);
            }}

        >
            {`${hidden === true ? "Show" : "Hide"} Purple Light`}
        </button>

        </div>
    )
}
export default Trafficlight;

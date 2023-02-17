import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import styled from "styled-components";
import { FiDelete } from "react-icons/fi";

function App() {
    const [currentOperand, setCurrentOperand] = useState("");
    const [previousOperand, setPreviousOperand] = useState("");
    const [operation, setOperation] = useState("");

    const number = (e) => {
        const value = e.target.innerText;
        const { className } = e.target;

        if (currentOperand.length >= 12) {
            return alert("You can enter only 12-digit number!");
        }

        if (parseFloat(value) || ["-", "0"].includes(value)) {
            if (value === "-" && currentOperand === "-") return;

            setCurrentOperand(currentOperand + value);
        }

        if (className.includes("operation")) {
            if (!currentOperand || currentOperand === "-") return;

            setPreviousOperand(`${currentOperand} ${value}`);
            setCurrentOperand("");
            setOperation(value);
        }
    };

    const compute = () => {
        let computedValue = "";
        if (previousOperand === operation) return;
        if (!currentOperand || currentOperand === "-") return;

        const cases = {
            "+": parseFloat(previousOperand) + parseFloat(currentOperand),
            "-": parseFloat(previousOperand) - parseFloat(currentOperand),
            x: parseFloat(previousOperand) * parseFloat(currentOperand),
            "÷": parseFloat(previousOperand) / parseFloat(currentOperand),
        };

        computedValue = cases[operation].toString();

        setPreviousOperand("");
        setOperation("");
        setCurrentOperand(
            computedValue.split("").includes(".")
                ? cases[operation].toFixed(6).toString()
                : computedValue
        );
    };

    const clear = () => {
        setPreviousOperand("");
        setCurrentOperand("");
    };

    const deleteLast = () => {
        setCurrentOperand(currentOperand.slice(0, -1));
    };

    // fixed right-0 top-0 w-full h-full before:content-['*'] before:absolute before:left-0 before:top-0 before:w-full before:h-screen before:backdrop-saturate-[2] before:bg-gradient-to-r from-slate-500 to-slate-800

    return (
        <div>
            <Section>
                <video width="320" height="240" autoPlay loop muted>
                    <source
                        src="https://assets.codepen.io/3364143/7btrrd.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </Section>
            <div className="absolute w-[420px] h-[650px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/[36%] flex flex-col overflow-hidden text-2xl font-medium rounded-[14px] backdrop-blur-lg">
                <div className="relative mx-auto px-[35px] py-[35px] w-full h-full">
                    <div className="relative flex items-end flex-col bg-white h-[170px] p-[25px] overflow-hidden">
                        <h3 className="absolute top-[20%] text-3xl ">
                            {previousOperand}
                        </h3>
                        <h1 className="absolute bottom-[20%] text-4xl">
                            {currentOperand}
                        </h1>
                    </div>
                </div>
                <div className="absolute h-[70%] w-full bottom-0 grid grid-rows-5 grid-cols-4 justify-center gap-[20px] p-[35px]">
                    <div
                        onClick={clear}
                        className="flex justify-center bg-white w-full items-center row-start-1 row-end-2 col-start-1 col-end-3 "
                    >
                        C
                    </div>
                    <div
                        onClick={deleteLast}
                        className="flex justify-center bg-white w-full items-center "
                    >
                        <FiDelete />
                    </div>
                    <div
                        onClick={number}
                        className="flex justify-center w-full items-center bg-[#e05353] operation text-white"
                    >
                        ÷
                    </div>
                    <div
                        onClick={number}
                        className="flex justify-center bg-white w-full items-center "
                    >
                        7
                    </div>
                    <div
                        onClick={number}
                        className="flex justify-center bg-white w-full items-center "
                    >
                        8
                    </div>
                    <div
                        onClick={number}
                        className="flex justify-center bg-white w-full items-center "
                    >
                        9
                    </div>
                    <div
                        onClick={number}
                        className="flex justify-center w-full items-center bg-[#e05353] operation text-white"
                    >
                        x
                    </div>
                    <div
                        onClick={number}
                        className="flex justify-center bg-white w-full items-center "
                    >
                        4
                    </div>
                    <div
                        onClick={number}
                        className="flex justify-center bg-white w-full items-center "
                    >
                        5
                    </div>
                    <div
                        onClick={number}
                        className="flex justify-center bg-white w-full items-center "
                    >
                        6
                    </div>
                    <div
                        onClick={number}
                        className="flex justify-center  w-full items-center bg-[#e05353] operation text-white"
                    >
                        +
                    </div>
                    <div
                        onClick={number}
                        className="flex justify-center bg-white w-full items-center "
                    >
                        1
                    </div>
                    <div
                        onClick={number}
                        className="flex justify-center bg-white w-full items-center "
                    >
                        2
                    </div>
                    <div
                        onClick={number}
                        className="flex justify-center bg-white w-full items-center "
                    >
                        3
                    </div>
                    <div
                        onClick={number}
                        className="flex justify-center bg-white w-full items-center row-start-5 row-end-6 col-start-1 col-end-4"
                    >
                        0
                    </div>
                    <div
                        onClick={number}
                        className="flex justify-center  w-full items-center bg-[#e05353] operation text-white"
                    >
                        -
                    </div>
                    <div
                        onClick={compute}
                        className="flex justify-center  w-full items-center bg-[#e05353] operation text-white"
                    >
                        =
                    </div>
                </div>
            </div>
        </div>
    );
}

const Section = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        background: linear-gradient(
            160deg,
            rgba(255, 255, 255, 0.7) 0%,
            rgb(255 255 255 /55%) 10%
        );
        backdrop-filter: saturate(3);
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export default App;

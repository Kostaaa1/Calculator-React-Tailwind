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
        if (
            !e.target.className.includes("operation") ||
            e.target.innerText === "-"
        ) {
            setCurrentOperand(currentOperand + e.target.innerText);
        } else {
            setPreviousOperand(currentOperand + " " + e.target.innerText);
            setCurrentOperand("");
            setOperation(e.target.innerText);
        }
    };

    const compute = () => {
        let sum = 0;

        switch (operation) {
            case "+":
                sum = parseInt(previousOperand) + parseInt(previousOperand);
                break;
            case "-":
                sum = parseInt(previousOperand) - parseInt(previousOperand);
                break;
            case "x":
                sum = parseInt(previousOperand) * parseInt(previousOperand);
                break;
            case "÷":
                sum = parseInt(previousOperand) / parseInt(previousOperand);
                break;
        }

        setPreviousOperand("");
        setCurrentOperand(sum.toString());
    };

    const clear = () => {
        setPreviousOperand("");
        setCurrentOperand("");
    };
    return (
        <>
            <Section>
                <video width="320" height="240" autoPlay loop muted>
                    <source
                        src="https://assets.codepen.io/3364143/7btrrd.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </Section>
            <Container>
                {/* <div className="wrap"> */}
                <div className="screen-wrap">
                    <div className="screen">
                        <h3>{previousOperand}</h3>
                        <h1>{currentOperand === "" ? 0 : currentOperand}</h1>
                    </div>
                </div>
                <div className="grid">
                    <div onClick={clear} className="button item-0">
                        C
                    </div>
                    <div onClick={number} className="button">
                        <FiDelete />
                    </div>
                    <div onClick={number} className="button operation">
                        ÷
                    </div>
                    <div onClick={number} className="button">
                        7
                    </div>
                    <div onClick={number} className="button">
                        8
                    </div>
                    <div onClick={number} className="button">
                        9
                    </div>
                    <div onClick={number} className="button operation">
                        x
                    </div>
                    <div onClick={number} className="button">
                        4
                    </div>
                    <div onClick={number} className="button">
                        5
                    </div>
                    <div onClick={number} className="button">
                        6
                    </div>
                    <div onClick={number} className="button operation">
                        +
                    </div>
                    <div onClick={number} className="button">
                        1
                    </div>
                    <div onClick={number} className="button">
                        2
                    </div>
                    <div onClick={number} className="button">
                        3
                    </div>
                    <div onClick={number} className="button item-1">
                        0
                    </div>
                    <div onClick={number} className="button operation">
                        -
                    </div>
                    <div onClick={compute} className="button operation">
                        =
                    </div>
                </div>
                {/* </div> */}
            </Container>
        </>
    );
}

const Container = styled.section`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(255 255 255 / 31%);
    width: 420px;
    height: 650px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 14px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    font-size: 25px;
    font-weight: 500;

    .screen-wrap {
        position: relative;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        padding: 35px;

        .screen {
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            background-color: white;
            height: 170px;
            padding: 25px;
            position: relative;

            h1 {
                font-size: 2.5rem;
                position: absolute;
                bottom: 10%;
            }

            h3 {
                font-size: 1.6rem;
                position: absolute;
                top: 20%;
                color: #524e4e;
            }
        }
    }

    .grid {
        position: absolute;
        height: 70%;
        width: 100%;
        bottom: 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        justify-items: center;
        gap: 20px;
        padding: 35px;
        display: grid;

        .button {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            background-color: white;
            width: 100%;
        }

        .item-0 {
            grid-row-start: 1;
            grid-column-start: 1;

            grid-row-end: 2;
            grid-column-end: 3;
        }

        .item-1 {
            grid-row-start: 5;
            grid-column-start: 1;

            grid-row-end: 6;
            grid-column-end: 4;
        }

        .operation {
            background-color: #e05353;
            color: white;
        }
    }
`;

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
            180deg,
            rgba(255, 255, 255, 0.72) 0%,
            rgb(255 255 255 / 25%) 100%
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

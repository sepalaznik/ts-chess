import React, { FC, useEffect, useRef, useState } from "react";
import { Colors } from "../models/Colors";
import { Player } from "../models/Player";

interface TimerProps {
    currentPlayer: Player | null;
    restart: () => void;
};

const DEFAULT_GAME_TIME = 300;

const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
    const [blackTime, setBlackTime] = useState(DEFAULT_GAME_TIME);
    const [whiteTime, setWhiteTime] = useState(DEFAULT_GAME_TIME);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null);

    useEffect(() => {
        startTimer();
    }, [currentPlayer]);

    function startTimer() {
        if(timer.current) {
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;

        timer.current = setInterval(callback, 1000)
    };

    function decrementBlackTimer() {
        setBlackTime((prev) => {
            if (prev && prev > 0) {
                return prev - 1
            } else {
                return 0;
            }
        })
    };

    function decrementWhiteTimer() {
        setWhiteTime((prev) => {
            if (prev && prev > 0) {
                return prev - 1
            } else {
                return 0;
            }
        })
    };

    const startNewGame = () => {
        setWhiteTime(DEFAULT_GAME_TIME);
        setBlackTime(DEFAULT_GAME_TIME);
        restart();
    };

    return (
        <div className="timer">
            <button onClick={startNewGame}>Start New Game</button>
            <h4>Black Player Time: {blackTime}</h4>
            <h4>White Player Time: {whiteTime}</h4>
        </div>
    )
};

export default Timer;

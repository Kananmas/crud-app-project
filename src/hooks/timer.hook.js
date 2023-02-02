import { useEffect, useRef, useState } from "react";

export function useTimer(startsFrom) {
    // States
    const [timer, setTimer] = useState(startsFrom);
    const [isStarted, setIsStarted] = useState(false);
    // Refs
    const timerId = useRef()
    // Variables
    const isDone = timer === 0;

    // Watchers
    useEffect(() => {
        if (isStarted) {
            timerId.current = setInterval(() => {
                setTimer((prevTimer) => {
                    const nextTimer = prevTimer - 1;

                    if (nextTimer === 0) {
                        stop();
                    }

                    return nextTimer;
                });
            }, 1000);
        } else {
            clearInterval(timerId.current);
            timerId.current = null;
        }
    }, [isStarted])

    // Handlers
    function start() {
        setIsStarted(true);
    }

    function stop() {
        setIsStarted(false);
    }

    function reset() {
        setIsStarted(false);
        setTimer(startsFrom);
    }

    return {
        value: timer,
        isDone,
        start,
        stop,
        reset,
    };
}
import { useEffect, useState } from "react";

/**
 * Sets a timeout for the amount of ms given, then returns true once the time has elapsed.
 *
 * @param {number} time Amount of milliseconds to sleep for.
 * @return {boolean} 
 */
export default function useSleep(time: number): boolean {
    const [timePassed, setTimePassed] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTimePassed(true);
        }, time);
    }, [time]);

    return timePassed;
}
import React, {useEffect, useRef, useState} from "react"
import Navbar from "../Components/Navbar";

const CountDownPage = ()  => {
    const [timerDays, setTimerDays] = useState('');
    const [timerHours, setTimerHours] = useState('');
    const [timerMinutes, setTimerMinutes] = useState('');
    const [timerSeconds, setTimerSeconds] = useState('');

    let interval = useRef()

    const startTimer = () => {
        const countDownDate = new Date("November 30 2023 00:00:00").getTime()

        interval = setInterval(() => {

            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor( distance / (1000 * 60 * 60 *24));
            const Hours = Math.floor(( distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const Minutes = Math.floor( (distance % (1000 * 60 * 60)) /(1000 * 60));
            const Seconds = Math.floor(( distance % (1000 * 60)) / 1000);

            if (distance < 0){
                clearInterval(interval.current)
            }
            else {

                setTimerDays(days)
                setTimerHours(Hours)
                setTimerMinutes(Minutes)
                setTimerSeconds(Seconds)
            }

            },
            1000)
    }
    useEffect(() => {
        startTimer()
        return() => {
            clearInterval(interval.current)
        }
    })
    return(
        <section className="timer-container">
            <Navbar/>
            <div>
                <section className="timer">
                    <section className="timer-header">
                        <p>
                            THIS PAGE WOULD BE COMPLETED IN !!!!
                        </p>
                    </section>
                    <div className="timer-box">
                        <section className="timer-con">
                            <p>
                                {timerDays}
                            </p>
                            <small>
                                Days
                            </small>
                        </section>
                        <span>:</span>
                        <section className="timer-con">
                            <p>
                                {timerHours}
                            </p>
                            <small>
                                Hours
                            </small>
                        </section>
                        <span>:</span>
                        <section className="timer-con">
                            <p>
                                {timerMinutes}
                            </p>
                            <small>
                                Minutes
                            </small>
                        </section>
                        <span>:</span>
                        <section className="timer-con">
                            <p>
                                {timerSeconds}
                            </p>
                            <small>
                                Seconds
                            </small>
                        </section>
                    </div>
                </section>
            </div>
        </section>
    )
}
export default CountDownPage
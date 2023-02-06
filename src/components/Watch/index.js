import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import styles from './Watch.module.scss'

const cx = classNames.bind(styles)

function Watch() {
    const [time, setTime] = useState(new Date())

    let second = time.getSeconds()
    let minute = time.getMinutes()
    let hour = time.getHours()

    useEffect(() => {
        const myTimer = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(myTimer)
    }, [])

    return (
        <span id="time-current" className={cx('time')}>
            <span id="hour" className={cx('hours')}>
                <span>{hour < 10 ? 0 : hour.toString()[0]}</span>
                <span>{hour < 10 ? hour : hour.toString()[1]}</span>
            </span>
            <span>:</span>
            <span id="minute" className={cx('minutes')}>
                <span>{minute < 10 ? 0 : minute.toString()[0]}</span>
                <span>{minute < 10 ? minute : minute.toString()[1]}</span>
            </span>
            <span>:</span>
            <span id="second" className={cx('seconds')}>
                <span>{second < 10 ? 0 : second.toString()[0]}</span>
                <span>{second < 10 ? second : second.toString()[1]}</span>
            </span>
        </span>
    )
}

export default Watch

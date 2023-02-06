import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '~/assets/images'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const cx = classNames.bind(styles)

function Header() {
    const [active, setActive] = useState(window.location.pathname)

    useEffect(() => {
        const pathName = window.location.pathname
        setActive(pathName)
        document.title = pathName === '/' ? 'Clock' : `${pathName[1].toUpperCase()}${pathName.substring(2)}`
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.location.pathname])
    return (
        <header className={cx('header')}>
            <Link to={'/'} className={cx('nav-btn', 'clock', { active: active === '/' })}>
                <img src={images.clock} alt="" className={cx('image')} />
                <span className={cx('title')}>Clock</span>
            </Link>
            <Link to={'/alarm'} className={cx('nav-btn', ' alarm', { active: active === '/alarm' })}>
                <img src={images.alarm} alt="" className={cx('image')} />
                <span className={cx('title')}>Alarm</span>
            </Link>
            <Link to={'/timer'} className={cx('nav-btn', 'timer', { active: active === '/timer' })}>
                <img src={images.timer} alt="" className={cx('image')} />
                <span className={cx('title')}>Timer</span>
            </Link>
            <Link to={'/stopwatch'} className={cx('nav-btn', 'stopwatch', { active: active === '/stopwatch' })}>
                <img src={images.stopwatch} alt="" className={cx('image')} />
                <span className={cx('title')}>Stopwatch</span>
            </Link>
        </header>
    )
}

export default Header

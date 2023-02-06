import Header from './Header'
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
import Footer from './Footer'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('stopwatch-app')}>
                <Header></Header>
                <div className={cx('content')}>
                    <div className={cx('watch')}>{children}</div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default DefaultLayout

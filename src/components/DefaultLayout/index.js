import Header from './Header'
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
import Footer from './Footer'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    )
}

export default DefaultLayout

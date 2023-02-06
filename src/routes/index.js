import Watch from '~/components/Watch'
import Alarm from '~/components/Alarm'
import Stopwatch from '~/components/Stopwatch'
import Timer from '~/components/Timer'

const publicRoutes = [
    {
        path: '/',
        component: Watch,
    },
    {
        path: '/alarm',
        component: Alarm,
    },
    {
        path: '/stopwatch',
        component: Stopwatch,
    },
    {
        path: '/timer',
        component: Timer,
    },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }

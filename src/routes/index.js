import Watch from '../components/Watch'
import Alarm from '../components/Alarm'
import Stopwatch from '../components/Stopwatch'

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
]

const privateRoutes = []

export { publicRoutes, privateRoutes }

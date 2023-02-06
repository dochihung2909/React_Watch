import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { publicRoutes } from './routes'
import DefaultLayout from '~/components/DefaultLayout'

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    console.log(route)
                    let Layout = DefaultLayout
                    let Page = route.component

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page></Page>
                                </Layout>
                            }
                        ></Route>
                    )
                })}
            </Routes>
        </Router>
    )
}

export default App

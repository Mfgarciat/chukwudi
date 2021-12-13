import type {NextPage} from 'next'
import Layout from '../components/layout'
import {Provider} from 'react-redux'
import store from '../redux/store'

const Home: NextPage = () => {
    return (
        <Provider store={store}>
            <Layout/>
        </Provider>
    )
}

export default Home

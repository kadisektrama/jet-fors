import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Layout } from 'antd'

// Tools
import Header from './header/header'
import Footer from './footer/footer'
import ErrorBoundary from '../common/errorBoundary'
import Loader from '../common/loader'

const layout = () => {
    return (
        <Layout style={{ display: "flex" }}>
            <header className='header-flex'>
                <Header />
            </header>
            <main className='main-flex'>
                <ErrorBoundary>
                    <Suspense fallback={<div></div>}>
                        <Outlet />
                    </Suspense>
                </ErrorBoundary>
            </main>
            <footer className='footer-flex'>
                <Footer />
            </footer>
        </Layout>
    )
}

export default layout
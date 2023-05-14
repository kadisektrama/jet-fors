import * as React from 'react'
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../../logo_header.png'

const { Header } = Layout;

const LayoutHeader: React.FC = () => {
    return (
        <Header className="header">
            <div className="logo">
                <Link to={'/'}>
                    <img src={logo} width="98" height="58" />
                </Link>
            </div>
        </Header>
    )
}

export default LayoutHeader
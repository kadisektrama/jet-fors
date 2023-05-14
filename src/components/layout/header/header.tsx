import * as React from 'react'
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const LayoutHeader: React.FC = () => {
    return (
        <Header className="header">
            <div className="logo">
                <Link to={'/'}>
                    <img src="http://www.jet-fors.ru/resources/img/logo_header.png" width="98" height="58" />
                </Link>
            </div>
        </Header>
    )
}

export default LayoutHeader
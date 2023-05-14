import * as React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

const Loader = () => <Spin style={{ width: '100%', margin: '16px' }} indicator={antIcon} />;

export default Loader;
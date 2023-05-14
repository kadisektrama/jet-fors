import * as React from 'react'
import { useSearchParams } from "react-router-dom";
import { UserCard } from './card/card';
import { Space } from 'antd';
import Loader from '../common/loader'

import type { PaginationProps } from 'antd';
import { Input, Pagination, Typography } from 'antd';
import { userApi } from '../../redux/services/userService';

const { Title } = Typography;
const { Search } = Input;

const Users: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const { data: users, isLoading, error, refetch } = userApi.useFetchAllUsersQuery(searchParams.toString())

    const onChange: PaginationProps['onChange'] = (pageNumber) => {
        searchParams.set('page', `${pageNumber}`)
        refetch()
    };

    const onSearch = (value: string) => {
        searchParams.delete('page')
        searchParams.set('search', value)
        refetch()
    }
    
    return (
        <div style={{ width: '80%' }}>
            {isLoading && <Loader />}
            {error && <div>Something is wrong</div>}
            {users && (
                <Space direction='vertical' size={30} style={{ marginBottom: '30px', width: '100%' }}>
                    <Title level={2}>Users</Title>  
                    <Search
                        placeholder="Text name"
                        allowClear
                        className="search-bar"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                    />
                    <Space className='space-grid' size={18}>
                        {users.results.map((user) => <UserCard key={user.created} user={user} />)}
                    </Space>
                    <Pagination
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        onChange={onChange}
                        defaultCurrent={searchParams.get('page') ? parseInt(searchParams.get('page') || '1') : 1}
                        total={users.count}
                        showSizeChanger={false}
                    />
                </Space>
            )}
        </div>    
    )
}

export default Users
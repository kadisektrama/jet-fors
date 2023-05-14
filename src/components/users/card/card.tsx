import * as React from 'react'
import { IUser } from '../../../types/IUser'
import { Link } from 'react-router-dom'
import { Card } from 'antd';

type TMapStateToProps = {
    user: IUser
}

export const UserCard: React.FC<TMapStateToProps> = ({ user }) => {
    return (
        <Card title={user.name} extra={<Link to={`users/${user.url.split('/').at(-2)}`}>Редактировать</Link>}>
            <p>Gender: {user.gender}</p>
            <p>Hair color: {user.hair_color}</p>
            <p>Height: {user.height}</p>
            <p>Weight: {user.mass}</p>
        </Card>
    )
}
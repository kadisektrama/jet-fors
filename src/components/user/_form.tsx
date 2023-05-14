import * as React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { fetchUser } from '../../redux/thunk/user';
import { useParams } from 'react-router-dom'
import { IUser } from '../../types/IUser';
import { useForm, Controller } from 'react-hook-form'
import type { SelectProps } from 'antd';

import {
    Form,
    Input,
    Button,
    Select,
} from 'antd'

const { TextArea } = Input

type TCount = {
    count: number
}

type TMapStateToProps = {
    user: IUser | undefined,
    films: TCount,
    species: TCount,
    vehicles: TCount,
    starships: TCount,
} 

interface ItemProps {
    label: string;
    value: string;
  }

const options: ItemProps[] = [];


//"https://swapi.dev/api/films/1/"1: "https://swapi.dev/api/films/2/"2: "https://swapi.dev/api/films/3/"3: "https://swapi.dev/api/films/4/"4: "https://swapi.dev/api/films/5/"5: "https://swapi.dev/api/films/6/"

const UserForm: React.FC<TMapStateToProps> = ({ user, films, species, vehicles, starships }) => {
    const { handleSubmit, watch, control, formState: { errors } } = useForm<IUser>({ defaultValues: user });
    
    const onSubmit = handleSubmit(data => {
        alert(JSON.stringify(data));
    })

    const selectProps = (count: number, name: string): SelectProps => {
        let options = []

        for (let i = 1; i <= count; i++) {
            options.push({
              label: `https://swapi.dev/api/${name}/${i}/`,
              value: `https://swapi.dev/api/${name}/${i}/`,
            });
        }

        const selectProps: SelectProps = {
            mode: 'multiple',
            style: { width: '100%' },
            options: options,
            placeholder: 'Select Item...',
            maxTagCount: 'responsive',
        };

        return selectProps
    }

    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            onFinish={onSubmit}
            layout='horizontal'
            style={{ maxWidth: 600 }}
        >
            <Form.Item label='Name'>
                <Controller
                    name="name"
                    control={control}
                    rules={{ required: true, minLength: 6, maxLength: 100 }}
                    render={({ field }) => <Input {...field} />}
                />
                {errors.name && <p className="error">name is required</p>}
            </Form.Item>

            <Form.Item label="Height">
                <Controller
                    name="height"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Input {...field} />}
                />
                {errors.height ? <p className="error">height id is required</p> : null}
            </Form.Item>

            <Form.Item label='Weight'>
                <Controller
                    name="mass"
                    control={control}
                    rules={{ required: true, minLength: 1, maxLength: 5 }}
                    render={({ field }) => <Input {...field} />}
                />
                {errors.mass && <p className="error">weight is required</p>}
            </Form.Item>

            <Form.Item label='Hair color'>
                <Controller
                    name="name"
                    control={control}
                    rules={{ required: true, minLength: 2, maxLength: 100 }}
                    render={({ field }) => <Input {...field} />}
                />
                {errors.hair_color && <p className="error">hair color is required</p>}
            </Form.Item>

            <Form.Item label='Skin color'>
                <Controller
                    name="skin_color"
                    control={control}
                    rules={{ required: true, minLength: 4, maxLength: 100 }}
                    render={({ field }) => <Input {...field} />}
                />
                {errors.skin_color && <p className="error">skin color is required</p>}
            </Form.Item>

            <Form.Item label='Birth year'>
                <Controller
                    name="name"
                    control={control}
                    rules={{ required: true, minLength: 2, maxLength: 100 }}
                    render={({ field }) => <Input {...field} />}
                />
                {errors.name && <p className="error">name is required</p>}
            </Form.Item>

            <Form.Item label='Gender'>
                <Controller
                    name="gender"
                    control={control}
                    rules={{ required: true, minLength: 2, maxLength: 100 }}
                    render={({ field }) => <Input {...field} />}
                />
                {errors.gender && <p className="error">gender is required</p>}
            </Form.Item>

            <Form.Item label='Home world'>
                <Controller
                    name="homeworld"
                    control={control}
                    rules={{ required: true, minLength: 2, maxLength: 100 }}
                    render={({ field }) => <Input {...field} />}
                />
                {errors.homeworld && <p className="error">home world is required</p>}
            </Form.Item>

            <Form.Item label='Films'>
                <Controller
                    name="films"
                    control={control}
                    rules={{ required: true, minLength: 2, maxLength: 100 }}
                    render={({ field }) => <Select {...selectProps(films.count, 'films')} {...field} />}
                />
                {errors.films && <p className="error">films is required</p>}
            </Form.Item>

            <Form.Item label='Species'>
                <Controller
                    name="species"
                    control={control}
                    rules={{ required: true, minLength: 2, maxLength: 100 }}
                    render={({ field }) => <Select {...selectProps(species.count, 'species')} {...field} />}
                />
                {errors.species && <p className="error">species is required</p>}
            </Form.Item>

            <Form.Item label='Vehicles'>
                <Controller
                    name="vehicles"
                    control={control}
                    rules={{ required: true, minLength: 2, maxLength: 100 }}
                    render={({ field }) => <Select {...selectProps(vehicles.count, 'vehicles')} {...field} />}
                />
                {errors.vehicles && <p className="error">vehicles is required</p>}
            </Form.Item>

            <Form.Item label='Starships'>
                <Controller
                    name="starships"
                    control={control}
                    rules={{ required: true, minLength: 2, maxLength: 100 }}
                    render={({ field }) => <Select {...selectProps(starships.count, 'starships')} {...field} />}
                />
                {errors.starships && <p className="error">starships is required</p>}
            </Form.Item>

            <Form.Item label='Url'>
                <Controller
                    name="url"
                    control={control}
                    rules={{ required: true, minLength: 6, maxLength: 100 }}
                    render={({ field }) => <Input {...field} />}
                />
                {errors.url && <p className="error">url is required</p>}
            </Form.Item>

            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form>
    )
}

export default UserForm
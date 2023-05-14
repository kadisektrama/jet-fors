import * as React from 'react'
import { useParams } from 'react-router-dom'
import Form from './_form'
import Loader from '../common/loader'

import { userApi } from '../../redux/services/userService';

const User: React.FC = () => {
    const { id } = useParams()
    const { data: films, isLoading: isLoadingFilms } = userApi.useFetchAllFilmsQuery('')
    const { data: species, isLoading: isLoadingSpecies } = userApi.useFetchAllSpeciesQuery('')
    const { data: vehicles, isLoading: isLoadingVehicles } = userApi.useFetchAllVehiclesQuery('')
    const { data: starships, isLoading: isLoadingStarhips } = userApi.useFetchAllStarshipsQuery('')
    const { data: user, isLoading, error } = userApi.useFetchUserQuery(id as string)

    return (
        <div style={{ width: '80%', padding: '25px 0 25px 0' }}>
            {[isLoading, isLoadingFilms, isLoadingSpecies, isLoadingVehicles, isLoadingStarhips].every(i => i === false) ? <Form user={user} films={films} species={species} vehicles={vehicles} starships={starships} /> : <Loader />}
        </div>
    )
}

export default User
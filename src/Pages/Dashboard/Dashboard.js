import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import api from '../../services/api'

import Nav from '../../Components/Nav/Nav'
import DeletableCard from '../../Components/Card/DeletableCard'

import './styles.css'

function Dashboard() {

    const [rooms, setRooms] = useState([])
    const history = useHistory()
    const _id = localStorage.getItem('user_id')

    useEffect(()=>{
        loadRooms()
    },[])

    async function loadRooms() {
        const data = await api.get(`/rooms/${_id}`)
        const roomsData = data.data
        setRooms(roomsData)        
    }

    async function deleteHandler(id) {
        try{
            await api.delete(`/rooms/${id}`, {headers: {user_id: _id}})
            alert('Quarto deletado com sucesso')
            setRooms(rooms.filter(room=>room._id != id))
        }catch(err){
            alert('Erro ao deletar o quarto, tente novamente')
        }
    }

    return (
        <div className="container">
            <Nav btnTitle="SAIR" btnRoute=""/>
            <div className="content">
                <button className="btn add-btn" onClick={() => history.push('/newroom')}>Adicionar Quarto</button>
                <h2>Meus Quartos</h2>                
                <div className="search-results">
                    {rooms.map(room => (
                        <DeletableCard
                            image={room.imgUrl}
                            name={room.title}
                            city={room.city}
                            price={room.price}
                            description={room.description}
                            phone={room.state || room.phone}
                            key={room._id}
                            handleDelete={()=>{deleteHandler(room._id)}}
                        />
                    ))}                    
                </div>
            </div> 
        </div>
    )
}

export default Dashboard

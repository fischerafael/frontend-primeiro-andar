import React, {useState, useEffect} from 'react'
import api from '../../services/api'

import Nav from '../../Components/Nav/Nav'
import Card from '../../Components/Card/Card'
import Search from '../../Components/Search/Search'

function Home() {
    
    const [rooms, setRooms] = useState([])
    const [citySearch, setCitySearch] = useState('')
    const [priceSearch, setPriceSearch] = useState(1500)

    useEffect(()=>{        
        loadRooms()
    },[])

    useEffect(() => {               
        FilterRooms()
    }, [citySearch, priceSearch])

    function FilterRooms() {        
        let filteredRooms = rooms.filter(room =>
            (!citySearch || room.city.toLowerCase().includes(citySearch.toLowerCase())) &&
            (!priceSearch || room.price <= priceSearch)
        )
        setRooms(filteredRooms)
    }  
       
    async function loadRooms() {
        const data = await api.get('/showrooms')
        const roomsData = data.data
        setRooms(roomsData)        
    }

    return (
        <div className="container">  
            <Nav  btnTitle="ENTRAR" btnRoute="login"/>          
            <div className="content">
                <Search 
                    citySearch={citySearch}
                    priceSearch={priceSearch}
                    setCitySearch={e => setCitySearch(e.currentTarget.value)}
                    setPriceSearch={e => setPriceSearch(e.currentTarget.value)}
                />                
                <div className="search-results">
                    {rooms.map(room => (
                        <Card 
                            image={room.imgUrl}
                            name={room.title}
                            city={room.city}
                            price={room.price}
                            description={room.description}
                            phone={room.state || room.phone}
                        />                           
                    ))}                    
                </div>                
            </div> 
        </div>
    )
}

export default Home

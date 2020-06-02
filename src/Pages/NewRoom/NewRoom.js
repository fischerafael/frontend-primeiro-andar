import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

import api from '../../services/api'
import './style.css'

import Logo from '../../assets/Logo-be36f7.png'

function NewRoom() {

    const defaultImg = 'https://baladasegura.rs.gov.br/themes/modelo-institucional/images/outros/GD_imgSemImagem.png'
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [city, setCity] = useState('')
    const [phone, setPhone] = useState('')
    const [description, setDescription] = useState('')
    const [imgUrl, setImgUrl] = useState(defaultImg)
    const _id = localStorage.getItem('user_id')
    const history = useHistory()

    async function newRoomHandler(e){
        e.preventDefault()
        const data = {title, price, city, phone, description, imgUrl}
        try{
            const responseData = await api.post('rooms', data, {headers: {user_id: _id}})
            alert('Cadastro realizado com sucesso!')            
            history.push('/dashboard')
        }catch(err){
            alert('Erro ao cadastrar quarto, tente novamente')
        }
    }    

    return (
        <div className="newroom-container">
            <div className="newroom-content">
                <div className="logo-newroom">
                    <img src={Logo} alt=""/>
                    <h2>Cadastre o quarto</h2>
                </div>
                <div className="newroom-form">
                    <div className="newroom-inputs">
                        <div className="newroom-fields">
                            <label htmlFor="room">Título do quarto</label>
                            <input 
                                type="text" 
                                placeholder="Quarto" 
                                id="room"
                                value={title}
                                onChange={e=>setTitle(e.target.value)}
                            />
                        </div>
                        <div className="newroom-fields">
                            <label htmlFor="newroom">Valor do aluguel</label>
                            <input 
                                type="number" 
                                placeholder="Preço" 
                                id="price"
                                value={price}
                                onChange={e=>setPrice(e.target.value)}
                            />
                        </div>                              
                    </div> 
                    <div className="newroow-inputs">
                        <div className="newroom-fields">
                            <label htmlFor="city">Cidade</label>
                            <input 
                                type="text" 
                                placeholder="Cidade" 
                                id="city"
                                value={city}
                                onChange={e=>setCity(e.target.value)}
                            />
                        </div> 
                        <div className="newroom-fields">
                            <label htmlFor="phone">Telefone</label>
                            <input 
                                type="text" 
                                placeholder="Telefone" 
                                id="phone"
                                value={phone}
                                onChange={e=>setPhone(e.target.value)}
                            />
                        </div>                     
                    </div>
                    <div className="newroow-inputs">
                        <div className="newroom-fields">
                            <label htmlFor="description">Descrição</label>
                            <textarea 
                                placeholder="Descreva o apartamento" 
                                id="description"
                                value={description}
                                onChange={e=>setDescription(e.target.value)}
                            ></textarea>
                        </div>                     
                    </div>
                    <div className="newroom-img"  style={{backgroundImage: `url(${imgUrl})`}}></div> 
                </div>
                <div className="newroom-fields">
                    <label htmlFor="imgurl">Imagem do Apartamento</label>
                    <input 
                        type="text" 
                        placeholder="Copie e cole o link aqui de alguma imagem do apartamento aqui" 
                        id="imgurl"                                               
                        onChange={e => setImgUrl(e.currentTarget.value)}
                    />                    
                </div>                
                <div className="newroom-btn">                        
                    <button className="btn" onClick={newRoomHandler}>ADICIONAR QUARTO</button>
                </div>            
                <button className="close-btn btn" onClick={()=>{history.push('/dashboard')}}>X</button>                             
            </div>            
        </div>
    )
}

export default NewRoom
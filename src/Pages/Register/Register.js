import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

import api from '../../services/api'
import './style.css'

import Logo from '../../assets/Logo-be36f7.png'

function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    async function registrationHandler(e) {
        e.preventDefault()
        const data = {email, password}
        try{
            const responseData = await api.post('users', data)
            alert('Cadastro realizado com sucesso!')            
            history.push('/login')
        }catch(err){
            alert('Erro ao cadastrar, tente novamente')
        }
    }

    return (

        <div className="register-container">
            <div className="register-content">
                <div className="register-form">
                    <div className="logo-register">
                        <img src={Logo} alt=""/>
                        <h2>Cadastre-se</h2>
                    </div>                    
                    <form>
                    <div className="register-fields">
                        <label htmlFor="user">Usuário</label>
                        <input 
                            type="text" 
                            placeholder="Insira seu email" 
                            id="user"
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="register-fields">
                        <label htmlFor="register">Senha</label>
                        <input 
                            type="password" 
                            placeholder="Insira sua senha" 
                            id="password"
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                        />
                    </div>                    
                    <div className="register-btn">                        
                        <button className="btn" onClick={registrationHandler}>FINALIZAR CADASTRO</button>
                    </div>                
                    </form>
                </div>                   
                <button className="close-btn btn" onClick={()=>{history.push('/login')}}>X</button>             
            </div>            
        </div>
    )
}

export default Register
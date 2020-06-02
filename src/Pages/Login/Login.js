import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import api from '../../services/api'

import './style.css'

import LoginImg from '../../assets/login.svg'
import Logo from '../../assets/Logo-be36f7.png'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    async function loginHandler(e){
        e.preventDefault()
        try{
            const sessionData = await api.post('sessions', {email, password})
            alert(`Olá, ${sessionData.data._id}`)
            localStorage.setItem('user_id', sessionData.data._id)
            history.push('/dashboard')
        }catch(err){
            alert('Falha no login, tente novamente') 
        }
    }

    return (
        <div className="login-container">
            <div className="login-content">
                <div className="login-form">
                    <div className="logo-login">
                        <img src={Logo} alt=""/>
                        <h2>Login</h2>
                    </div>                    
                    <form>
                    <div className="login-fields">
                        <label htmlFor="login">Usuário</label>
                        <input 
                            type="text" 
                            placeholder="Insira seu email"
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="login-fields">
                        <label htmlFor="login">Senha</label>
                        <input 
                            type="password" 
                            placeholder="Insira sua senha"
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                        />
                    </div> 
                    <div className="login-btn">
                        <button className="btn" onClick={loginHandler}>ENTRAR</button>
                        <button className="btn" onClick={()=>{history.push('/register')}}>CADASTRAR-SE</button>
                    </div>                
                    </form>
                </div>
                <div className="login-img">
                    <img src={LoginImg} alt=""/>
                </div>   
                <button className="close-btn btn" onClick={()=>{history.push('/')}}>X</button>             
            </div>            
        </div>
    )
}

export default Login

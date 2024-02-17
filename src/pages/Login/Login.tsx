import { useState } from "react";
import { useLoginMutation } from "../../services/user";

import './Login.css'
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [login] = useLoginMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        setIsLoading(true)
        setError(null)

        try {
            const response = await login({
                email,
                password
            })
            console.log(response)
            navigate('/home')
        } catch (error) {
            setError('An error occurred during login.')
            console.error('Login error:', error);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <main className='login'>
            <form onSubmit={handleSubmit}>
                <h1 className="title">Login</h1>
                {error && <p className="error-message">{error}</p>}
                <div className="email">
                    <input 
                        type="email"
                        id="email" 
                        placeholder="Digite seu e-mail: "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                </div>
                <div className="password">
                    <input 
                        type="password" 
                        placeholder="Digite sua senha: "
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Acessando...' : 'Acessar'}
                </button>
                <div className="options">
                    <span>_________</span>
                    <p>ou</p>
                    <span>_________</span>
                </div>
                <a href="/register">Cadastre-se</a>
            </form>
        </main>
    );
}
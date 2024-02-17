import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../services/user";

import './Register.css'

export default function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [register] = useRegisterMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        setIsLoading(true)
        setError(null)

        try {
            const response = await register({
                email,
                password
            })
            console.log(response)
            navigate('/')
        } catch (error) {
            setError('An error occurred during registration.')
            console.error('Registrarion error:', error);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <main className='register'>
            <form onSubmit={handleSubmit}>
                <h1 className="title">Cadastro</h1>
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
                <button type="submit" disabled={isLoading} >
                    {isLoading ? 'Cadastrando...' : 'Cadastrar'}
                </button>
                <div className="options">
                    <span>_________</span>
                    <p>ou</p>
                    <span>_________</span>
                </div>
                <a href="/">logue-se</a>
            </form>
        </main>
    );
}
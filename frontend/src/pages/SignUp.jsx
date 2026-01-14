import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"

const SignUp = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(undefined)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(undefined)
        
        const user = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        try {
            const res = await fetch("https://scaling-broccoli-wvgvpr77j6hgwpr-3000.app.github.dev/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user),
                credentials: "include"
            })

            const data = await res.json()

            if (!res.ok) throw new Error(data)

            navigate("/")
        } catch (error) {
            console.error(error)
            setError(error.message)
        }
    }
    return (
        <div className="container">

            <h1>🎮 Кликер Игра</h1>
            <p className="subtitle">Демонстрация CSRF + CORS + Sessions</p>

            <div className="forms">
                <div className="form-card">
                    <h2>Регистрация</h2>
                    <form onSubmit={handleSubmit}>
                        <input id="email" name="email" type="email" placeholder="Почта" required />
                        <input id="password" name="password" type="password" placeholder="Пароль (мин. 6 символов)" required />
                        {error && <p className="form-error">{error}</p>}
                        <button type="submit">Зарегистрироваться</button>
                    </form>
                    <Link className="form-link" to={"/signin"}>Вход</Link>
                </div>
            </div>
            
        </div>
    )
}

export default SignUp
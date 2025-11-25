const SignUp = () => {
    return (
        <div className="container">

            <h1>🎮 Кликер Игра</h1>
            <p className="subtitle">Демонстрация CSRF + CORS + Sessions</p>

            <div className="forms">
                <div className="form-card">
                    <h2>Регистрация</h2>
                    <form>
                        <input type="text" placeholder="Имя пользователя" required />
                        <input type="password" placeholder="Пароль (мин. 6 символов)" required />
                        <button type="submit">Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
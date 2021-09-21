const Login = () => {
    return(
        <form className="mt-3 Login">
            <h2>Login to the Translator</h2>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input id="username" type="text" placeholder="Enter your username" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary btn-lg">Login</button>
        </form>
    )
}

export default Login
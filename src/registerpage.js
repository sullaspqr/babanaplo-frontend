import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from './AuthService';

export function Regisztralas() {
    const [isLoginPending, setRegisterPending] = useState(false);
    const navigate = useNavigate();

    function registerFormSubmit(e){
        e.persist();
        e.preventDefault();
        
        const registerdata = {
            userName: e.target.userName.value,
            password: e.target.password.value,
            email: e.target.email.value,
            fullname: e.target.fullname.value,
            age: e.target.age.value
        };
        setRegisterPending(true);
        register(registerdata).then(response =>{
            setRegisterPending(false);
            navigate('/');
        })
        .catch(error =>{
            alert("Helytelen regisztrációs adatok, kérjük próbálja újra!");
            setRegisterPending(false);
        })
    }
    if (isLoginPending) {
        return (
            <div className="center-item">
                <div className="spinner-border text-danger"></div>
            </div>
        );
    }
    return (
        <div className="container-fluid d-flex justify-content-center h-100 login-container">
            <div className="card login-card">
                <div className="card-header">
                    <h3>Regisztráció</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={registerFormSubmit}>

                        <div className='input-group form-group'>
                            <input type = "text" name="userName" className="form-control" placeholder="Felhasználónév"/>
                        </div>

                        <div className='input-group form-group'>
                            <input type = "password" name="password" className="form-control" placeholder="Jelszó"/>
                        </div>

                        <div className='input-group form-group'>
                            <input type = "email" name="email" className="form-control" placeholder="Email"/>
                        </div>

                        <div className='input-group form-group'>
                            <input type = "text" name="fullname" className="form-control" placeholder="Teljes név"/>
                        </div>

                        <div className='input-group form-group'>
                            <input type = "number" name="age" className="form-control" placeholder="Kor"/>
                        </div>

                        <div className='form-group'>
                            <button type = "submit" name="Regisztráció" className="btn float-right btn-warning" placeholder="email">Regisztráció</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
export default Regisztralas;
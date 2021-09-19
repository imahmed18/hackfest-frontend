import React, {useState} from 'react'
import './Login.css'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { Link } from 'react-router-dom';

function Login() {
    const [name, setName] = useState('');
    const [cnic, setCnic] = useState('');

    const handleClick = (e)=>{
        e.preventDefault();
        console.log(name + " " + cnic);
        

    }
    return (
        <div className="login">
            <div className="login__row">
                <div className="login__burger-menu"><MenuRoundedIcon /></div>
                <div className="login__title">remit easy</div>
            </div>
            <div className="login__header">
                Payments have <br/> never been easier
            </div>
            <p className="login__desc">Access the easiest remittance app, with built-in real-time FX conversion <br/> during transactions for your ease and convenience</p>
            <div className="login__prompt">Login to your acount:</div>
            <div>
                <form className="login__form">
                    <input className="input__cnic" type="text" name="cnic" placeholder="Enter your 14-digit CNIC" onChange={event => setCnic(event.target.value)} value={cnic}/>
                    <input className="input__name" type="text" name="name" placeholder="Enter your name" onChange={event => setName(event.target.value)} value={name}/>
                    <Link to="/transfer">
                        <button className="input__submit" type="submit" onClick={(e)=>handleClick(e)}>LOG IN</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login

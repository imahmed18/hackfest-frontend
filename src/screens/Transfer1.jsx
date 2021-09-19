import React, {useState} from 'react'
import "./Transfer1.css"
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';

function Transfer1() {
    const [name, setName] = useState('');
    const [cnic, setCnic] = useState('');

    const handleClick = (e)=>{
        e.preventDefault();
        console.log(name + " " + cnic);
        

    }
    return (
        <div className="transfer1">
            <div className="transferload__row">
                <div className="transferload__burger-menu"><MenuRoundedIcon /></div>
                <div className="transferload__title">remit easy</div>
            </div>
            <div className="transfer1__row">
                <div>
                    <div className="transfer1__balance">Total Balance</div>
                    <div className="transfer1__bal">$12,900</div>
                </div>
                <div>
                    <div className="transfer1__balance">Live Rate</div>
                    <div className="transfer1__bal">1 USD = 169.3 PKR</div>
                </div>
            </div>
            <div className="transfer1__card">
                <div>
                <form className="transfer1__form">
                    <input className="input__acc" type="text" name="cnic" placeholder="Enter the Recipient's Account Number" onChange={event => setCnic(event.target.value)} value={cnic}/>
                    <input className="input__amount" type="text" name="name" placeholder="Enter the Amount" onChange={event => setName(event.target.value)} value={name}/>
                    <button className="input__submit" type="submit" onClick={(e)=>handleClick(e)}>Confirm Transaction</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Transfer1

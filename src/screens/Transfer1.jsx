import React, {useState} from 'react'
import "./Transfer1.css"
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { Dropdown, Selection } from 'react-dropdown-now';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import 'react-dropdown-now/style.css';
import { Link } from 'react-router-dom';

function Transfer1() {
    const [acc, setAcc] = useState('');
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('');

    const handleClick = (e)=>{
        e.preventDefault();
        console.log(amount + " " + acc);
        

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
                    <div className="transfer1__conversion">Live Rate</div>
                    <div className="transfer1__con">1 USD = 169.3 PKR</div>
                </div>
            </div>
            <div className="transfer1__card">
                <div>
                <form className="transfer1__form">
                    <div className="form_input1">
                        <span className="form_label">Account Number</span>
                        <input className="input__acc" type="text" name="cnic" placeholder="Enter the Recipient's Account Number" onChange={event => setAcc(event.target.value)} value={acc}/>    
                    </div>
                    <div className="form_input1">
                        <span className="form_label">Amount</span>    
                        <input className="input__amount" type="text" name="name" placeholder="Enter the Amount" onChange={event => setAmount(event.target.value)} value={amount}/>
                    </div>
                    <div className="form_input2">
                        <KeyboardArrowDownIcon/> 
                        <span className="form_label">Currency</span>   
                        <input className="input__amount" type="text" name="name" placeholder="" onChange={event => setCurrency(event.target.value)} value={currency}/>
                    </div>
                    <Link className="link_transfer" to="/transferstatus">
                        <button className="input__submit" type="submit" onClick={(e)=>handleClick(e)}>Confirm Transaction</button>
                    </Link>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Transfer1

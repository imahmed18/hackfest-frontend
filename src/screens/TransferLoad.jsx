import React from 'react'
import "./TransferLoad.css"
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import checkIcon from '../images/pngegg.png';
import CheckCircleIcon from '@material-ui/icons/CheckCircleRounded';

function TransferLoad() {
    return (
        <div className="transferload">
            <div className="transferload__row">
                <div className="transferload__burger-menu"><MenuRoundedIcon /></div>
                <div className="transferload__title">remit easy</div>
            </div>
            <div className="transferload__rate">Live Rates</div>
            <div className="transferload__status">Transferring 1 USD to XYZ</div>
            <div className="transferload__loading">...</div>
            <img className="icon" src={checkIcon} />
        </div>
    )
}

export default TransferLoad 

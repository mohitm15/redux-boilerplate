import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Shop = () => {
    const dispatch = useDispatch(); //to dispacth the action creator functions
    const balance = useSelector(state => state.amount) // to access the state variables in UI
    const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators,dispatch);

    //to access the state variables in UI
    const darkmode = useSelector(state => state.darkmode);

    // let darkmodeStyle = {}
    // if(darkmode === 'ON') {
    //     darkmodeStyle = {
    //         backgroundColor:'#2d2d2d',
    //         color:'whitesmoke'
    //     }
    // }

    return (
        <>
        <div className="container p-3"> 
        <div className={`alert alert-${darkmode === 'ON'? 'dark':'success'}` } role="alert">
            <h2>Mohit Bank of India</h2>
        </div>
            <h3 className="my-5">Deposit/Withdraw Money</h3>
            {/* <button className="btn btn-success mx-2" onClick={()=>dispatch(actionCreators.depositMoney(100))}>+</button>
            You Balance
            <button className="btn btn-danger mx-2" onClick={()=>dispatch(actionCreators.withdrawMoney(100))}>-</button> */}
            <button className="btn btn-success mx-2" onClick={()=>(depositMoney(100))}>+</button>
            You Balance - Rs. {balance}
            <button className="btn btn-danger mx-2" onClick={()=>(withdrawMoney(100))}>-</button>
            <div className="container my-5">
            DarkMode = {darkmode}
            </div>
        </div>
        </>
    )
}
// value of payload i.e. Rs 100 is sent by UI only as a payloadOfAction
export default Shop;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Shop = () => {
    const dispatch = useDispatch(); //to dispacth the action creator functions
    const balance = useSelector(state => state.amount) // to access the state variables in UI
    const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators,dispatch);
    return (
        <div className="container p-3">
            <h3>Deposit/Withdraw Money</h3>
            {/* <button className="btn btn-success mx-2" onClick={()=>dispatch(actionCreators.depositMoney(100))}>+</button>
            You Balance
            <button className="btn btn-danger mx-2" onClick={()=>dispatch(actionCreators.withdrawMoney(100))}>-</button> */}
            <button className="btn btn-success mx-2" onClick={()=>(depositMoney(100))}>+</button>
            You Balance - Rs. {balance}
            <button className="btn btn-danger mx-2" onClick={()=>(withdrawMoney(100))}>-</button>
        </div>
    )
}

export default Shop;

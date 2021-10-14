import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Navbar = () => {

  //useSeletor is used to access the state variable
  const amount = useSelector((state) => state.amount);
  //amountReducer will change its value

  const darkmode = useSelector((state) => state.darkmode);// to access the state variables in UI
  const dispatch = useDispatch();//to dispacth the action creator functions
  const {enableDarkMode} = bindActionCreators(actionCreators, dispatch);


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Mohit Bank of India
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
              <button className="btn btn-secondary mx-2" onClick={()=>{darkmode === 'OFF'?enableDarkMode('ON'):enableDarkMode('OFF')}}>Dark Mode : {darkmode}</button>
            </div>
          <div>
            <button className="btn btn-primary mx-1">Your Balance: {amount}</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

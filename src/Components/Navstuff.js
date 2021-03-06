import React from 'react';
import logo from '../polygon_logo_White.svg'
import {Navbar,Nav, Form, Button, Alert, ToggleButtonGroup, ToggleButton} from 'react-bootstrap'
import '../App.css'

// TO DO:- 
// Integrate Connect Web3 UI Button
{/*    
    <div className="container">

      <Button variant="primary" className="float-right" onClick={this.loadBlockchainData}>Connect to Web3</Button>
      <br/><br/>
      
      {this.state.authorized ? 
          this.state.networkId == "137" || this.state.networkId == "80001" ? 
                <p>{this.state.account}</p> 
            : <p className="float-right">Please change network to MATIC mainnet or Testnet and click "Connect To Web3"</p>
        : <p className="float-right">web3 is not connected</p> }

    </div> 
*/}

export default function Navstuff() 
{
    return (
    <Navbar variant="dark" className="color-nav">
        <Navbar.Brand href="#">
          <img
            src={logo}
            width="120px"
            height="45px"
            className="d-inline-block align-center"
            alt="React Bootstrap logo"
          /> {" "}
        </Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="#home">NFT MINTER</Nav.Link>
        </Nav>
       <Button variant="outline-light">Connect Web3</Button>{' '}
    </Navbar>
    );
}
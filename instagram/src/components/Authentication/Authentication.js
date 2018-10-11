import React from 'react';
import Login from '../Login/Login';
import Modal from '../Login/modal';
import Styled from 'styled-components';


const ModalDiv = Styled.div`
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Authentication = WrappedComponent => 
    class Auth extends React.Component{
        constructor(props){
            super(props)
            this.login = this.login.bind(this)
            this.logout = this.logout.bind(this)
            this.state = {
                isLoggedIn: false,
                txtUserName: '',
                txtPassword: ''
            }
        }
        userNameChange = event => { 
            this.setState({txtUserName:event.target.value})
        }        
        passwordChange = event =>{
            this.setState({txtPassword:event.target.value})
        }
        componentDidMount(){
            let userName = localStorage.getItem('igUserName');
            let password = localStorage.getItem('igPassword');
            debugger
            if(userName && password){
              this.setState({isLoggedIn:true})
            } else {
              this.setState({isLoggedIn: false})
            }            
        } 
        login(){
            localStorage.setItem('igUserName',this.state.txtUserName);
            localStorage.setItem('igPassword',this.state.txtPassword);
            this.setState({
                isLoggedIn:true,
                txtUserName:'',
                txtPassword:''
                })
        }
        logout(){
            localStorage.removeItem('igUserName');
            localStorage.removeItem('igPassword');
            this.setState({isLoggedIn:false})
        }



        render(){
            const modal = !this.props.isLoggedIn ? ( 
                <Modal>
                    <ModalDiv>

                        <Login 
                            userNameChange={this.userNameChange} 
                            passwordChange={this.passwordChange} 
                            login = {this.login}
                            txtUserName = {this.state.txtUserName}
                            txtPassword = {this.state.txtPassword}
                        />
                    </ModalDiv>
                </Modal>
              ):null;

            if(this.state.isLoggedIn){
                return <WrappedComponent logout={this.logout}/>
            } else{
                return <div id='modalRoot'>{modal} </div>
            }
            
        }
    }

export default Authentication
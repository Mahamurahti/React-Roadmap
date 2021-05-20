'use strict';

function UserGreeting(props){
    return <h1>Welcome back!</h1>
}

function GuestGreeting(props){
    return <h1>Please, sign in.</h1>
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn)
        return <UserGreeting />
    else
        return <GuestGreeting />
}

function LoginButton(props){
    return <button onClick={props.onClick}>Login</button>
}

function LogoutButton(props){
    return <button onClick={props.onClick}>Logout</button>
}

// Stateful component
class LoginControl extends React.Component{
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state = {isLoggedIn: false}
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false})
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn) // Remember not "handleLogoutClick()" but "handleLogoutClick"
            button = <LogoutButton onClick={this.handleLogoutClick} />
        else           // Remember not "handleLoginClick()" but "handleLoginClick"
            button = <LoginButton onClick={this.handleLoginClick} />

        // Note: The above if else statement can also be used below in the JSX as such instead of "{button}":
        // {isLoggedIn
        //     ? <LogoutButton onClick={this.handleLogoutClick} />
        //     : <LoginButton onClick={this.handleLoginClick} />
        // }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                <h2>User is currently <b>{isLoggedIn ? '' : 'not'}</b> logged in</h2>
                {button}
                <Mailbox unreadMessages={['React', 'Re: React', 'Re:Re: React']} isLoggedIn={isLoggedIn}/>
            </div>
        )
    }
}

function Mailbox(props){
    const unreadMessages = props.unreadMessages
    const isLoggedIn = props.isLoggedIn
    // true && expression = expression
    // false && expression = false
    return (
        <div>
            {unreadMessages.length > 0 && isLoggedIn &&
                <h2>You have {unreadMessages.length} unread messages.</h2>
            }
        </div>
    )
}

function App(){
    return (
        <div>
            <LoginControl />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))
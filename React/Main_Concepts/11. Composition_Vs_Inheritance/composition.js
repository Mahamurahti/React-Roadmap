'use strict';

// We render the children, meaning everything that is inside of the FancyBorder-tag (the h1-tag and the p-tag)
function FancyBorder(props){
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

// the h1-tag and p-tag are the children of FancyBorder
function WelcomeDialog(){
    return (
        <FancyBorder color='red'>
            <h1 className='DialogTitle'>Welcome</h1>
            <p className='DialogMessage'>Thank you for visiting spacecraft!</p>
        </FancyBorder>
    )
}

// "left" and "right" are the children of SplitPane component, they are renamed from "children"
function SplitPane(props){
    return (
        <div className='SplitPane'>
            <div className='SplitPane-left'>{props.left}</div>
            <div className='SplitPane-right'>{props.right}</div>
        </div>
    )
}

// This is the left side of the SplitPane
function Contacts(props){
    const contacts = props.contacts
    const contactList = contacts.map(contact => <li key={contact.id}>{contact.name}</li>)
    return (
        <div>
            <h1>Contacts:</h1>
            <ul>{contactList}</ul>
        </div>
    )
}

// This is the right side of the SplitPane
function Chat(props){
    const messages = props.messages
    const messageList = messages.map(message => <li key={message.id}>{message.content}</li>)
    return(
        <div>
            <h1>Messages:</h1>
            <ul>{messageList}</ul>
        </div>
    )
}

const contacts = [{name: 'John', id: 154}, {name: 'Alex', id: 165}, {name: 'Callus', id: 8790}, {name: 'Xiau', id: 12}]
const messages = [{content: 'Hi!', id: 46}, {content: 'Yo!', id: 678}, {content: 'How are ya?', id: 354}]

// Here we render the WelcomeDialog and the SplitPane with the correct components
// In React inheritance is not recommended
function App(){
    return (
        <div>
            <WelcomeDialog />
            <SplitPane left={<Contacts contacts={contacts}/>} right={<Chat messages={messages}/>} />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))
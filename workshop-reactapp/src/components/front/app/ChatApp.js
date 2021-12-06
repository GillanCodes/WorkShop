import React from 'react'

export default function ChatApp() {
    return (
        <div className='ca-container'>
            <div className='ChatApp'>

                <div className="header">
                    <img src="" alt="LOGO" className="icon" />
                    <h1 className="name">Name</h1>
                    <p className='icons'>Icons</p>
                </div>
                <div className="content">
                    
                    <div className="chat ">
                        <div className="chat-content me">
                            <img src="./img/user-pic.png" alt="LOGO" className="logo" />
                                <p className="text">Coucou !</p> 
                        </div>
                        <p className="date">Demain</p>
                    </div>
                    <div className="chat ">
                        <div className="chat-content other">
                            <img src="./img/user-pic.png" alt="LOGO" className="logo" />
                                <p className="text">Salut !</p> 
                        </div>
                        <p className="date">Hier</p>
                    </div>


                </div>
                <div className="footer">
                    <textarea name="" id="" className='chat-input'></textarea>
                    <button className='send'><i class="far fa-paper-plane"></i></button>
                </div>

            </div>
        </div>
    )
}

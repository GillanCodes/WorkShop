import React from 'react'

export default function Home() {
    return (
        <div className="container">
            <aside class="menu">
                <p class="menu-label">
                    App
                </p>
                <ul class="menu-list">
                    <li><a href='./front/app/chatapp'>Chat App</a></li>
                </ul>
                <p class="menu-label">
                    Components
                </p>
                <ul class="menu-list">
                    <li><a href='./front/components/buttons'>Buttons</a></li>
                </ul>
                </aside>
        </div>
    )
}
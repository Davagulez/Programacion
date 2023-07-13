import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {

    return (    
        <section className='App'>          
            <TwitterFollowCard userName="midudev" initialIsFollowing={true}>
                Miguel Angel Durán
            </TwitterFollowCard>
            <TwitterFollowCard userName="midudev">
                Miguel Angel Durán
            </TwitterFollowCard>
        </section>

    
    )
}
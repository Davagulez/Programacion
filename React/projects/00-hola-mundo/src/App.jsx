import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
    const formatUserName = (userName) => `@${userName}`

    return (    
        <section className='App'>
            <TwitterFollowCard formatUserName={formatUserName} itsFollowing userName="midudev" name="Miguel Angel Durán"/>
            <TwitterFollowCard formatUserName={formatUserName} itsFollowing userName="midudev" name="Miguel Angel Durán"/>
            <TwitterFollowCard formatUserName={formatUserName} itsFollowing userName="midudev" name="Miguel Angel Durán"/>
            <TwitterFollowCard formatUserName={formatUserName} itsFollowing userName="midudev" name="Miguel Angel Durán"/>
        </section>

    
    )
}
import {useState} from 'react'

export function TwitterFollowCard({ userName = 'unknow', children, initialIsFollowing}) {
    const [isFollowing, setIsFollowingState] = useState(initialIsFollowing)
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowingState(!isFollowing)
    }

    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header" >
                <img
                    className='tw-followCard-avatar'
                    alt='El avatar de midudev'
                    src={`https://unavatar.io/${userName}`}
                />
            </header>
            <div className="tw-followCard-info">
                <strong>{children}</strong>
                <span className="tw-followCard-info">
                    @{userName}
                </span>
                <span className=''>te sigue</span>
            </div>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
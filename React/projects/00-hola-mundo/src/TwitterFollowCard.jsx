
export function TwitterFollowCard({formatUserName, userName, name, isFollowing}) {
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
                <strong>{name}</strong>
                <span className="tw-followCard-info">
                {formatUserName(userName)}
                </span>
                <span>te sigue</span>
            </div>
            <aside>
                <button className="tw-followCard-button">
                    Seguir
                </button>
            </aside>
        </article>
    )
}
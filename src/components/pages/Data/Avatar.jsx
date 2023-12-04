import './Avatar.css'

export function Avatar1({icon, titulo, texto}) {
    return (
        <div className='avatar-div'>
            <div className='icon-avatar'>
                <span>{icon}</span>
            </div>
            <div className='texto-avatar'>
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>
        </div>
    )
}

export function Avatar2({icon, titulo, texto}) {
    return (
        <div className='avatar-div'>
            <div className='icon-avatar'>
                <span>{icon}</span>
            </div>
            <div className='texto-avatar2'>
                <h3>{titulo}</h3>
            </div>
        </div>
    )
}
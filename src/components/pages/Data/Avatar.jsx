import './Avatar.css'

export default function Avatar({icon, titulo, texto}) {
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
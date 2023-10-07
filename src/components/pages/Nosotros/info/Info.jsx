import './Info.css'

export function Info({title, info}){
    return (
        <div className= "info linea">            
            <h3>{title}</h3>
            <p>{info}</p>
        </div>
    )
}

export function InfoNoLine({title, info}){
    return (
        <div className= "info">            
            <h3>{title}</h3>
            <p>{info}</p>
        </div>
    )
}
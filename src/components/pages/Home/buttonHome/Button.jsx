import './Button.css';

export default function ButtonHome({text}) {
    return(
        <button className='btn-home'>
          <span>{text}</span>
        </button>
    )
}
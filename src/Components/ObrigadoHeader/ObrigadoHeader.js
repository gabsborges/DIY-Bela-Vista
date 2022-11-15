import './ObrigadoHeader.css'
import { Link } from 'react-router-dom'

function ObrigadoHeader() {
    return (
        <div className='obrigadoHeader'>
            <Link to='/'><img src='./logo.png' alt='Logo da DIY Bela Vista'/></Link>
        </div>
    )
}

export default ObrigadoHeader
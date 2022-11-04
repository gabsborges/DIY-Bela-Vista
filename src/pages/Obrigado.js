import '../App.css'
import ObrigadoFooter from '../Components/ObrigadoFooter/ObrigadoFooter'
import ObrigadoHeader from '../Components/ObrigadoHeader/ObrigadoHeader'
import ObrigadoMainSection from '../Components/ObrigadoMainSection/ObrigadoMainSection'

function Obrigado() {
    return (
        <div className='obrigado'>
            <ObrigadoHeader />
            <ObrigadoMainSection />
            <ObrigadoFooter />
        </div>
    )
}

export default Obrigado
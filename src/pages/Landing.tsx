import '../styles/pages/landing.css'
import Illustration from '../images/landing-illustration.svg'

function Landing() {
    return (
        <div id='page-landing'>
            <div className='content-wrapper'>
                <main>
                    <h1>
                        Precisando encontrar profissionais de cloud?
                    </h1>
                    <h2>
                        Preparando e conectando profissionais de nuvem para o mundo
                    </h2>
                </main>
                <img src={Illustration} alt='ed' />
            </div>
        </div>
    )
}

export default Landing;
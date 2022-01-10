import '../../App.css'
import { Link } from 'react-router-dom';
import logoinicial from './logoinicial.png'




const Home = () => {
    return(
        <>
        <center>
            <body className='fundo'>
            <div className='primeira-pagina'>
            <header className="component-header">
                <nav className='pag1'>
                    <img className='img-logo' src={logoinicial} alt="" />                    
                    <h3>Olá, gamer!<br/> Bem vindo a sua melhor página de jogos!</h3>
                    <h2>Vamos começar!</h2>
                    <center><ul className='list-inicio-ul' >
                        <li className='list-inicio'>
                            <Link to="/games" style={{ textDecoration:'none'}}><b>Jogos</b></Link>                        
                        </li>
                        <li className='list-inicio'>
                            <Link to="/news" style={{ textDecoration:'none'}}><b>Notícias</b></Link>
                        </li>
                    </ul></center>
                </nav>
          
          
        </header>
            <footer>
            Todos os direitos reservados &copy;DEVinHouse
            </footer>
            </div>

        </body>
        </center>
      </>
    
    )
}



export default Home;
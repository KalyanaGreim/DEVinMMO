import '../../App.css'
import { Link } from 'react-router-dom';




const Home = () => {
    return(
        <>
        <center>
            <body className='fundo'>
            <div className='primeira-pagina'>
            <header className="component-header">
                <nav className='pag1'>
                    <h1 className='title-primeiro'>DEVinMMO</h1>
                    <h3>Olá, gamer!<br/> Bem vindo a melhor página de jogos!</h3>
                    <h2>Vamos começar!</h2>
                    <center><ul className='list-inicio-ul' >
                        <li className='list-inicio'>
                        <Link to="/news" style={{ textDecoration:'none'}}>Notícias</Link>
                        </li>
                        <li className='list-inicio'>
                        <Link to="/games" style={{ textDecoration:'none'}}>Jogos</Link>
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
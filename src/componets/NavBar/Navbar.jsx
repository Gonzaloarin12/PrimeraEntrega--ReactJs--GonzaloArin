import './Navbar.css'
import logo from '../../img/logo.png'

const Navbar = () => {
    return(
        <header className="bg-teal-900" >
            <div className="conteiner m-auto py-5 px-20 flex justify-between items-center">

                <img className="logo" src={logo} alt="logo" />

                <nav className="flex gap-4 ">
                    <a className="text-white bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded" href="#">INICIO</a>
                    <a className="text-white bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded" href="#">PRODUCTOS</a>
                    <a className="text-white bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded" href="#">SOBRE NOSOTROS</a>
                    <a className="text-white bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded" href="#">CONTACTO</a>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
import logo from './../imagenes/Alogo.png'

export default function Menu() {
    return (
        <nav>
            <img src={logo} class="logo"/>
            <ul>
                <li><a href="#1">Inicio</a></li>
                <li><a href="#2">Acerca de</a></li>
                <li><a href="#3">Servicio</a></li>
                <li><a href="#4">Contacto</a></li>
            </ul>
        </nav>
    )
}
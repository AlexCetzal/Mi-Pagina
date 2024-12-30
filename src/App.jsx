import Menu from './assets/components/Menu.jsx'
import Perfil from './assets/components/perfil.jsx'
import SobreMi from './assets/components/SobreMi.tsx'
import Contacto from './assets/components/Contacto.jsx'
import Proyectos from './assets/components/proyectos.tsx'

export function App() {
    return (
        <>
        <header>
        <Menu />
        </header>

        <main>
            <Perfil />
            <SobreMi />
            <Proyectos />
            <Contacto />

        </main>

        </>
    )
}
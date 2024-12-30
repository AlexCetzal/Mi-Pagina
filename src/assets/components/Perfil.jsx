import perfil from './../imagenes/perfil.jpeg'



export default function Perfil() {
    return (
        <section>
            <div class="perfil" id='1'>
                <div class="sobremi">
                    <div className="constend">
                        <h2>Hola, soy</h2>
                        <h1>Alberto A. Cetzal Chan</h1>
                        <p>Soy un desarrollador web especializado en la creación de experiencias digitales innovadoras, funcionales y centradas en el usuario. Mi trabajo se enfoca en el diseño y desarrollo de soluciones tecnológicas que integren creatividad, eficiencia y alto impacto, con el objetivo de mejorar la interacción entre las personas y las plataformas digitales.
                        </p>
                    </div>
                </div>
                <div class="mifoto">
                    <div class="circulo">
                        <img src={perfil} alt="" class="circ-per" />
                    </div>
                </div>
            </div>
        </section>

    )
}

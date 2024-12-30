

export default function Contacto() {
    return (
        <section className="contacto" id="4">
            <h2>Contacto</h2>
            <p>¿Interesado en trabajar juntos? ¡Hablemos!</p>
            <form action="" method="post">
                <input type="text" name="nombre" placeholder="Nombre" required />
                <input type="email" name="email" placeholder="Email" required />
                <textarea name="mensaje" placeholder="Mensaje" required></textarea>
                <button type="submit"class="btn">Enviar</button>
            </form>
        </section>
    )
}
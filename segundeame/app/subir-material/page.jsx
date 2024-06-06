export default function SubirMaterialesPage (){
    return(
        <html lang="es">
            <form action="">
                <fieldset>
                    <label htmlFor="" className="block">Imagen (maximo 10): 
                        <input type="file" accept="image/*" multiple/>
                    </label>
                    <label htmlFor="" className="block">Material:
                        <input type="text" required/>
                    </label>
                    <label htmlFor="" className="block">Descripción:
                        <input type="text" required/>
                    </label>
                    <label htmlFor="" className="block">Contacto:
                        <label htmlFor="" className="block">Email:
                            <input type="email" required/>
                        </label>
                        <label htmlFor="" className="block">Teléfono:
                            <input type="tel"/>
                        </label>
                    </label>
                </fieldset>
                <input type="sumbit" value="Subir material" className="flex align-center justify-center"/>
            </form>
        </html>
    )
}

export default function SubirMaterialesPage (){
    return(
        <div className="flex align-center justify-center h-[85%] w-full flex-col">
            <form action="" className="flex align-center justify-center">
                <fieldset className="flex align-center justify-center flex-col gap-y-2">
                    <label htmlFor="" className="block">Imagen (máximo 10)* 
                        <input type="file" accept="image/*" multiple className="cursor-pointer" />
                    </label>
                    <label htmlFor="" className="block">Material*
                        <input type="text" required />
                    </label>
                    <label htmlFor="" className="block">Descripción*
                        <input type="text" required />
                    </label>
                    <div className="block">
                        <label htmlFor="" className="block">Contacto:</label>
                        <div className="block">
                            <label htmlFor="" className="block">Email*
                                <input type="email" required />
                            </label>
                            <label htmlFor="" className="block">Teléfono
                                <input type="tel" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Subir material" className="flex align-center justify-center cursor-pointer bottom-10 bg-green-200 hover:bg-green-300 focus:outline-none focus:bg-green-300 rounded-md py-2 px-4" />
                </fieldset>
            </form>
        </div>
    )
}

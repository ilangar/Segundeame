export default function SubirMaterialesPage (){
    return(
        <main>
        <div className="flex align-center justify-center h-[85%] w-full flex-col">
            <form action="" className="flex align-center justify-center">
                <fieldset className="flex align-center justify-center flex-col gap-y-2">
                    <label htmlFor="" className="block border border-[#80B48B] rounded-md py-2 px-4 mr-2">Imagen (máximo 10)* 
                        <input type="file" accept="image/*" multiple className="cursor-pointer" />
                    </label>
                    <label htmlFor="" className="block border border-[#80B48B] rounded-md py-2 px-4 mr-2">Material*
                        <input type="text" required border classNeame=""/> 
                    </label>
                    <label htmlFor="" className="block border border-[#80B48B] rounded-md py-2 px-4 mr-2">Descripción*
                        <input type="text" required />
                    </label>
                    <div className="block border border-[#80B48B] rounded-md py-2 px-4 mr-2">
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
                    <input type="submit" value="Subir material" className="flex align-center justify-center cursor-pointer hover:text-with focus:outline-none" />
                </fieldset>
            </form>
        </div>
        </main>
        
    )
}

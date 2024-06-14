export default function SubirMaterialesPage (){
    return(
        <main className="">
        <div className="flex align-center justify-center w-full flex-col overflow-hidden">
            <form action="" className="flex align-center justify-center">
                <fieldset className="flex align-center justify-center flex-col gap-y-2">
                    <label htmlFor="" className="block border border-[#80B48B] rounded-md py-2 px-4 mr-2">Imagen (máximo 10)* 
                        <input type="file" accept="image/*" multiple className="cursor-pointer" />
                    </label>
                    <label htmlFor="" className="block border border-[#80B48B] rounded-md py-2 px-4 mr-2">
                        <input type="text" required placeholder="Materiales*" classNeame=""/> 
                    </label>
                    <label htmlFor="" className="block border border-[#80B48B] rounded-md py-2 px-4 mr-2">
                        <input type="text" required placeholder="Descripción*"/>
                    </label>
                    <div className="block border border-[#80B48B] rounded-md py-2 px-4 mr-2">
                        <label htmlFor="" className="block">Contacto:</label>
                        <div className="block">
                            <label htmlFor="" className="block">
                                <input type="email" required placeholder="Email*"/>
                            </label>
                            <label htmlFor="" className="block">
                                <input type="tel" placeholder="Telefono"/>
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Subir material" className=" text-white flex align-center justify-center bg-[#80B48B] hover:bg-[#6C9675] cursor-pointer rounded-md py-2 px-4" />
                </fieldset>
            </form>
        </div>
        </main>
        
    )
}

export default function SubirMaterialesPage (){
    return(
        <main className="h-[70%]">
        <div className="flex align-center justify-center mt-16 w-full flex-col overflow-hidden ">
            <form action="" className="flex align-center justify-center">
                <fieldset className="flex align-center justify-center flex-col gap-y-2">
                    <label htmlFor="" className="block border border-[#80B48B] rounded-md py-2 px-4 mr-2">Imagenes*
                        <input type="file" accept="image/*" multiple className="cursor-pointer" />
                    </label>
                    <label htmlFor="" className="block border border-[#80B48B] rounded-md py-2 px-4 mr-2">
                        <input type="text" required placeholder="Materiales*" className="focus:outline-none w-full"/> 
                        
                    </label>
                    <label htmlFor="" className="block border border-[#80B48B] rounded-md py-2 px-4 mr-2">
                        <input type="text" required placeholder="Descripción*" className="focus:outline-none w-full"/>
                    </label>
                    <div className="block border border-[#80B48B] rounded-md py-2 px-4 mr-2">
                        <label htmlFor="" className="block">Contacto:</label>
                        <div className="block">
                            <label htmlFor="" className="block">
                                <input type="email" required placeholder="Email*" className="focus:outline-none w-full"/>
                            </label>
                            <label htmlFor="" className="block ">
                                <input type="tel" placeholder="Telefono" className="focus:outline-none w-full"/>
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

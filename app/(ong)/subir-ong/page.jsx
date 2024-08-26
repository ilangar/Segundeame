export default function ONGs() {
  
    return (
     
        <main className="">
        <div className=" mt-10 flex align-center justify-center w-full flex-col overflow-hidden">
            <form className="flex align-center justify-center">
                <fieldset className="flex align-center justify-center flex-col gap-y-2">
                    <label className="block border border-[#80B48B] rounded-md py-2 px-4 mr-2">
                        Imagen (máximo 5)
                        <input type="file" accept="image/*" multiple className="cursor-pointer" 
                           
                        />
                    </label>
                    <label className="block border border-[#80B48B] rounded-md py-2 px-4 mr-2">
                        <input 
                            type="text" required placeholder="Título*"
                            className="focus:outline-none"
                        />
                    </label>
                    <label className="block border border-[#80B48B] rounded-md py-2 px-4 mr-2">
                        <input 
                            type="text" required placeholder="Descripción*" 
                            className="focus:outline-none"
                        />
                    </label>
                    <div className="block border border-[#80B48B] rounded-md py-2 px-4 mr-2 ">
                        <label className="block">Contacto:</label>
                        <div className="block ">
                            <label className="block focus:outline-none ">
                                <input 
                                    type="email" required placeholder="Email*"
                                    className="focus:outline-none"
                                />
                            </label>
                            <label className="block">
                                <input 
                                    type="tel"  placeholder="Telefono" 
                                    className="focus:outline-none"
                                />
                            </label>
                        </div>
                    </div>
                    <input 
                        type="submit" 
                        value="Subir pedido" 
                        className=" text-white bg-[#80B48B] hover:bg-[#6C9675] cursor-pointer rounded-md py-2 px-4" 
                    />
                </fieldset>
            </form>
        </div>
    </main>
    );
  }
  
export default function ONGs() {
    return (
        <main className="flex flex-col items-center justify-center w-full mt-10">
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-4xl">
                {/* Sección de imagen */}
                <div className="flex flex-col items-center border-2 border-dashed border-[#80B48B] rounded-lg p-6 w-72 h-64">
                    <div className="flex flex-col items-center">
                        <div className="text-[#80B48B] text-3xl mb-2">+</div>
                        <p className="text-[#4A4A4A] text-lg font-medium">Agregar foto</p>
                    </div>
                    <p className="text-sm text-[#4A4A4A] mt-2">Mínino una imagen</p>
                    <input type="file" accept="image/*" multiple className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer" />
                </div>

                {/* Formulario */}
                <form className="flex flex-col gap-4 w-full max-w-sm">
                    <input 
                        type="text" 
                        required 
                        placeholder="Título *" 
                        className="border border-[#80B48B] rounded-md p-3 text-gray-700 focus:outline-none"
                    />
                    <input 
                        type="text" 
                        required 
                        placeholder="Descripción *" 
                        className="border border-[#80B48B] rounded-md p-3 text-gray-700 focus:outline-none"
                    />
                    <input 
                        type="email" 
                        required 
                        placeholder="Email *" 
                        className="border border-[#80B48B] rounded-md p-3 text-gray-700 focus:outline-none"
                    />
                    <input 
                        type="tel" 
                        placeholder="Número de teléfono" 
                        className="border border-[#80B48B] rounded-md p-3 text-gray-700 focus:outline-none"
                    />
                    <input 
                        type="submit" 
                        value="Subir pedido" 
                        className="bg-[#80B48B] text-white font-semibold rounded-md p-3 cursor-pointer hover:bg-[#6C9675]"
                    />
                </form>
            </div>
        </main>
    );
}

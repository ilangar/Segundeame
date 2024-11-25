export default function ONGs() {
  return (
      <section className="flex flex-col items-center justify-center w-full mt-10">
          {/* Carrusel de proyectos */}
          <div className="flex items-center justify-center gap-6 mb-10">
              {/* Botón de navegación izquierda */}
              <button className="text-[#80B48B]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 4.293a1 1 0 00-1.414 0L6 9.586a1 1 0 000 1.414l5.293 5.293a1 1 0 001.414-1.414L8.414 10l4.293-4.293a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
              </button>

              {/* Tarjetas de proyectos */}
              <div className="grid grid-cols-3 gap-4">
                  <div className="relative bg-white border rounded-lg shadow-lg overflow-hidden w-48 h-56">
                      <img src="/Proyecto1.jpg" alt="Proyecto 1" className="w-full h-3/4 object-cover" />
                      <div className="absolute top-2 right-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.414l-6.828-6.828a4 4 0 010-5.656z" />
                          </svg>
                      </div>
                  </div>
                  <div className="relative bg-white border rounded-lg shadow-lg overflow-hidden w-48 h-56">
                      <img src="/Proyecto2.jpg" alt="Proyecto 2" className="w-full h-3/4 object-cover" />
                      <div className="absolute top-2 right-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.414l-6.828-6.828a4 4 0 010-5.656z" />
                          </svg>
                      </div>
                  </div>
                  <div className="relative bg-white border rounded-lg shadow-lg overflow-hidden w-48 h-56">
                      <img src="Proyecto3.jpg" alt="Proyecto 3" className="w-full h-3/4 object-cover" />
                      <div className="absolute top-2 right-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.414l-6.828-6.828a4 4 0 010-5.656z" />
                          </svg>
                      </div>
                  </div>
              </div>

              {/* Botón de navegación derecha */}
              <button className="text-[#80B48B]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 4.293a1 1 0 011.414 0L14 9.586a1 1 0 010 1.414l-5.293 5.293a1 1 0 01-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
              </button>
          </div>

          
          <div className="absolute bottom-10 bg-[#80B48B] hover:bg-[#6C9675] focus:outline-none focus:bg-green-300 rounded-md py-2 px-4">
              <a href="./subir-ong" className="text-white">Subir proyecto solidario</a>
          </div>
      </section>
  );
}

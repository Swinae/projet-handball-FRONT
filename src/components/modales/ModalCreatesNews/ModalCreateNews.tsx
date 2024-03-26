export function ModalCreateNews(){
  return(
    <>
      <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" className="bg-custom-FF7D00 text-white rounded-lg p-2 mb-6" type="button">
        Créer une nouvelle actualité
      </button>

      <div id="crud-modal" tab-index="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                  <form className="p-4 md:p-5">
                      <div className="grid gap-4 mb-4 grid-cols-2">
                          <div className="col-span-2">
                            <img id="img" src="/img_actu_defaut.jpg" alt="image de l'actualité"></img>
                          </div>
                          <div className="col-span-2 sm:col-span-1">
                              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titre</label>
                              <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Titre de l'actualité" required/>
                          </div>
                          <div className="col-span-2">
                              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                              <textarea id="description" name="decription" rows={10} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description de l'actualité" required></textarea>                    
                          </div>
                      </div>

                      <div className="flex justify-end">
                        <button type="button" className="bg-red-800 text-white rounded-md p-2 mr-4" data-modal-toggle="crud-modal">
                          Annuler
                        </button>

                        <button type="submit" className="text-white bg-custom-15616D rounded-md p-2">
                          Publier
                        </button>
                      </div>
                  </form>

              </div>
          </div>
      </div> 
    </>
  )
}
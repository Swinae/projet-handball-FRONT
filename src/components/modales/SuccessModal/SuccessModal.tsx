export function SuccessModal(){
  return(
    <div>
      <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="hidden w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
      </button>

      <div id="popup-modal" data-modal-placement="popu-modal" tab-index="-1" className="fixed top-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative w-1/6 max-w-2xl max-h-full mx-auto">
              <div className="relative h-20 bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Opération validé</h3>
                      <button data-modal-hide="popup-modal" type="button" className="text-white bg-custom-15616D focus:ring-4 focus:outline-none dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                        ok
                      </button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}
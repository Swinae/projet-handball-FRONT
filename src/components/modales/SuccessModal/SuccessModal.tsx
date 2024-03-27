export function SuccessModal(){
  return(
    <>
      <button data-modal-target="top-center-modal" data-modal-show="top-center-modal" data-modal-toggle="top-center-modal" type="button">
      </button>

      <div id="top-center-modal" data-modal-placement="top-center" tab-index="-1" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="p-4 md:p-5 text-center">
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Opération validé</h3>
                      <button data-modal-hide="top-center-modal" type="button" className="text-white bg-custom-15616D focus:ring-4 focus:outline-none focus:ring-orange-500 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                        ok
                      </button>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}
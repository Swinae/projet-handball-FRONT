export function BtnLogin({statut="Se connecter"}){

  return(
      <button
        data-modal-target="authentication-modal" 
        data-modal-toggle="authentication-modal"
        className="btn-login block text-white bg-custom-FF7D00 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-3 mb-3 mr-14"
        type="button">
          {statut}
      </button>
  )
}
import './BtnLoginDisconect.css';

export function BtnLoginDisconect({statut="Se connecter"}){
  return(
      <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="btn-login-disconect block text-white bg-custom-FF7D00 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-3 mb-3" type="button">{statut}</button>
  )
}
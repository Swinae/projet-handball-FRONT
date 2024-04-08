interface BtnProps{
  statut:string;
}

export function BtnLogin(props:BtnProps){
  const {statut}=props;
  return(
      <button
        data-modal-target="authentication-modal" 
        data-modal-toggle="authentication-modal"
        className="btn-login block text-white bg-custom-FF7D00 font-medium rounded-full text-sm px-5 py-2.5 text-center my-3 w-32"
        type="button">
          {statut}
      </button>
  )
}
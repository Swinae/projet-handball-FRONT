import { Footer, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from 'flowbite-react';
import { ClubIdentity } from '../ClubIdentity/ClubIdentity';

export function FooterDown() {
  return (
    <Footer container className='bg-custom-15616D rounded-none'>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between ">
          <ClubIdentity/>
          <FooterLinkGroup>
            <FooterLink className='text-white' href="#">Conditions générales d'utilisation</FooterLink>
            <FooterLink className='text-white pr-12' href="#">Mentions légales</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider className="w-[92%] !my-2"/>
        <FooterCopyright className='text-white' href="#" by="NIGHT'S WATCH HANDBALL. Tous droits réservés." year={2023} />
      </div>
    </Footer>
  );
}

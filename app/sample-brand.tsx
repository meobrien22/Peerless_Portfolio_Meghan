import type {ImgHTMLAttributes} from 'react';

export const isAsterraDeck=(id:string)=>['connected-ai','ai-storytelling'].includes(id);

export function AsterraMark({className=''}:{className?:string}){return null}

export function AsterraIdentity(){return null}

export function SampleBrand({deckId}:{deckId:string}){
  return isAsterraDeck(deckId)?<span className="sample-brand"><AsterraIdentity/><span>Fictional company concept</span></span>:null;
}

export function SampleSlide({deckId,...props}:ImgHTMLAttributes<HTMLImageElement>&{deckId:string}){
  return <span className="sample-slide"><img {...props}/></span>;
}

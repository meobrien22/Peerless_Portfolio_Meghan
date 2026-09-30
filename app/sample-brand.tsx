import type {ImgHTMLAttributes} from 'react';

export const isAsterraDeck=(id:string)=>['connected-ai','ai-storytelling'].includes(id);

export function AsterraMark({className=''}:{className?:string}){
  return <svg className={className} viewBox="0 0 36 36" width="28" height="28" fill="none" aria-hidden="true"><path d="M5 29 17.8 6 31 29" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 23.5c7-7.5 12-7.5 20-3.5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/><circle cx="29" cy="8" r="3" fill="currentColor"/></svg>
}

export function AsterraIdentity(){return <span className="asterra-identity"><AsterraMark/><strong>Asterra</strong></span>}

export function SampleBrand({deckId}:{deckId:string}){
  return isAsterraDeck(deckId)?<span className="sample-brand"><AsterraIdentity/><span>Fictional company concept</span></span>:null;
}

export function SampleSlide({deckId,...props}:ImgHTMLAttributes<HTMLImageElement>&{deckId:string}){
  return <span className="sample-slide"><img {...props}/>{isAsterraDeck(deckId)&&<span className="sample-slide-logo" aria-label="Asterra fictional company"><AsterraIdentity/></span>}</span>;
}

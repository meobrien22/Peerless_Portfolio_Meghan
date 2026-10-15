import {ArrowUpRight} from 'lucide-react';
import {projects} from './projects';
import {SampleSlide} from './sample-brand';
import DeckViewer from './deck-viewer';

const base = '/__GITHUB_PAGES_BASE__';
const featured = ['ai-storytelling', 'connected-ai'];

export function HeroPreviews(){return <div className="hero-projects" aria-label="Preview the work">
  <div className="hero-projects-heading"><span className="folio-eyebrow">A LOOK AT THE WORK</span><a href="#work">All 6 projects <ArrowUpRight size={15}/></a></div>
  <div className="hero-project-row">{featured.map(id=>{const p=projects.find(p=>p.id===id)!;return <a className="hero-project" href={base+'/work/'+id+'/'} key={id}>
    <SampleSlide deckId={id} src={p.image} alt={p.name+' — actual slide from the portfolio concept'} loading="eager" width={1600} height={900}/>
    <span className="hero-project-title">{p.name}<ArrowUpRight size={16}/></span><span className="hero-project-label">{p.label}</span>
  </a>})}<a className="hero-project" href={base+'/work/product-launch-tool/'}><span className="sample-slide"><img src={base+'/images/launch-preview.webp'} alt="Existing reconstructed launch workspace showing readiness and next steps" loading="eager" width={1200} height={675}/></span><span className="hero-project-title">Product launch tool<ArrowUpRight size={16}/></span><span className="hero-project-label">Fictional company reconstruction</span></a></div>
</div>}

export function SelectedWork(){return <section className="selected-work" id="work" aria-labelledby="work-title">
  <div className="work-heading"><div><p className="folio-eyebrow">SELECTED WORK / 6 PROJECTS</p><h2 id="work-title">Explore the thinking.<br/><em>See the work.</em></h2></div><p>From the business question to the finished experience: the decision, my contribution and the artifact you can explore.</p></div>
  <p className="work-context">The projects below are labeled portfolio concepts and reconstructions. They demonstrate my approach without exposing confidential client work or implying measured client outcomes.</p>
  <div className="project-grid">
    {[projects[2],projects[0]].map(p=><article className="project-card" key={p.id}>
      <a className="project-artifact" href={base+'/work/'+p.id+'/'} aria-label={'Read case study: '+p.name}><SampleSlide deckId={p.id} src={p.image} alt={p.name+' presentation slide preview'} loading="lazy" width={1600} height={900}/></a>
      <div className="project-body"><p className="project-context">{p.label}</p><h3>{p.name}</h3><dl><div><dt>THE BUSINESS QUESTION</dt><dd>{p.brief}</dd></div><div><dt>MY ROLE</dt><dd>{p.role}</dd></div><div><dt>THE OUTPUT</dt><dd>{p.result}</dd></div></dl><div className="project-actions"><a href={base+'/work/'+p.id+'/'}>Read case study <ArrowUpRight size={16}/></a><DeckViewer id={p.id} triggerClassName="project-slides" buttonLabel={'View slides: '+p.name}>View slides <ArrowUpRight size={16}/></DeckViewer></div></div>
    </article>)}
    <article className="project-card"><a className="project-artifact project-launch" href={base+'/work/product-launch-tool/'} aria-label="Read case study: Product launch tool"><img src={base+'/images/launch-preview.webp'} alt="Existing reconstructed launch workspace showing planning readiness and next review steps" loading="lazy" width={1200} height={675}/></a><div className="project-body"><p className="project-context">Fictional company reconstruction</p><h3>Product launch tool</h3><dl><div><dt>THE BUSINESS QUESTION</dt><dd>What is blocked, who owns it, and what needs to happen before a launch commitment?</dd></div><div><dt>MY ROLE</dt><dd>UX lead with two junior UX teammates; partnership with developers through sprint and release planning.</dd></div><div><dt>THE OUTPUT</dt><dd>A reconstructed before-and-after workflow and interactive dashboard. No measured improvement is claimed.</dd></div></dl><div className="project-actions"><a href={base+'/work/product-launch-tool/'}>Read case study <ArrowUpRight size={16}/></a><a href={base+'/work/product-launch-tool/#launch-experience'}>Explore prototype <ArrowUpRight size={16}/></a></div></div></article>
    <article className="project-card"><a className="project-artifact workshop-artifact" href={base+'/work/agent-workshop/'} aria-label="Read case study: Right gear. Ready on time."><img src={base+'/images/workshop-preview.webp'} alt="Existing Northstar Outfitters workshop: workflow and decision map for a human-reviewed production plan" loading="lazy" width={1200} height={675}/></a><div className="project-body"><p className="project-context">Illustrative workshop · fictional manufacturer</p><h3>Right gear. Ready on time.</h3><dl><div><dt>THE BUSINESS QUESTION</dt><dd>How can production, inventory and quality teams agree a dependable recovery plan for a size-specific shortage?</dd></div><div><dt>MY ROLE</dt><dd>JTBD framing, cross-team facilitation, agent experience design, interactive prototyping and data storytelling.</dd></div><div><dt>THE OUTPUT</dt><dd>A planning assistant concept with traceable evidence and human review. Research, data and results are simulated.</dd></div></dl><div className="project-actions"><a href={base+'/work/agent-workshop/'}>Read case study <ArrowUpRight size={16}/></a><a href={base+'/workshop/explore/#chapter-3'}>Explore workshop <ArrowUpRight size={16}/></a></div></div></article>
    {[projects[1],projects[3]].map(p=><article className="project-card" key={p.id}>
      <a className="project-artifact" href={base+'/work/'+p.id+'/'} aria-label={'Read case study: '+p.name}><SampleSlide deckId={p.id} src={p.image} alt={p.name+' presentation slide preview'} loading="lazy" width={1600} height={900}/></a>
      <div className="project-body"><p className="project-context">{p.label}</p><h3>{p.name}</h3><dl><div><dt>THE BUSINESS QUESTION</dt><dd>{p.brief}</dd></div><div><dt>MY ROLE</dt><dd>{p.role}</dd></div><div><dt>THE OUTPUT</dt><dd>{p.result}</dd></div></dl><div className="project-actions"><a href={base+'/work/'+p.id+'/'}>Read case study <ArrowUpRight size={16}/></a><DeckViewer id={p.id} triggerClassName="project-slides" buttonLabel={'View slides: '+p.name}>View slides <ArrowUpRight size={16}/></DeckViewer></div></div>
    </article>)}
  </div>
</section>}

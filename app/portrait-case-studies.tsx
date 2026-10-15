'use client';

import {ArrowUpRight, ChartNoAxesCombined, Network, Presentation} from 'lucide-react';
import {Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger} from '@/components/ui/dialog';

const base = '/__GITHUB_PAGES_BASE__';
const stories = [
  {key:'story', icon:Presentation, label:'Executive storytelling', first:'Executive', second:'storytelling', title:'The Human Story Behind AI', context:'Fictional Asterra company concept', image:'/decks/ai-storytelling/001.webp', alt:'The Human Story Behind AI: original concept presentation cover', href:'/work/ai-storytelling/', question:'Help leaders see the human value behind complex AI capabilities and understand what the technology makes possible.', role:'Executive narrative, art direction and presentation design.', output:'A 21-slide concept presentation connecting AI capabilities to everyday work and executive decisions.'},
  {key:'data', icon:ChartNoAxesCombined, label:'Data made meaningful', first:'Data made', second:'meaningful', title:'Product launch tool', context:'Fictional company reconstruction', image:'/images/launch-preview.webp', alt:'Reconstructed launch workspace showing readiness, ownership and next review steps', href:'/work/product-launch-tool/', question:'What is blocked, who owns it, and what needs to happen before a launch commitment?', role:'UX lead with two junior UX teammates, partnering with developers through sprint and release planning.', output:'A reconstructed workflow and interactive dashboard that brings readiness and next steps into one view. No measured improvement is claimed.'},
  {key:'ai', icon:Network, label:'Human-centered AI & design', first:'Human-centered', second:'AI & design', title:'Right gear. Ready on time.', context:'Illustrative workshop · fictional manufacturer', image:'/images/workshop-preview.webp', alt:'Northstar Outfitters workshop decision map with a human-reviewed production plan', href:'/work/agent-workshop/', question:'How can production, inventory and quality teams agree a dependable recovery plan for a size-specific shortage?', role:'Jobs to Be Done framing, cross-team facilitation, agent experience design, interactive prototyping and data storytelling.', output:'A planning assistant concept with traceable evidence and human review. Research, data and results are simulated.'},
];

export function PortraitCaseStudies(){return <figure className="ae-portrait">
  {stories.map(({icon:Icon,...story})=><Dialog key={story.key}>
    <DialogTrigger asChild><button type="button" className={'ae-hero-skill ae-skill-'+story.key} aria-label={story.label+': open case study'}><Icon size={24}/><span>{story.first}<br/><strong>{story.second}</strong></span><ArrowUpRight size={14}/></button></DialogTrigger>
    <DialogContent className="portfolio-popout portrait-case-popout">
      <p className="portrait-case-label">{story.context}</p>
      <DialogTitle>{story.title}</DialogTitle>
      <DialogDescription>{story.question}</DialogDescription>
      <img className="portrait-case-image" src={base+story.image} alt={story.alt} width={1600} height={900}/>
      <dl><div><dt>MY ROLE</dt><dd>{story.role}</dd></div><div><dt>THE OUTPUT</dt><dd>{story.output}</dd></div></dl>
      <a className="portfolio-button" href={base+story.href}>Read case study <ArrowUpRight size={16}/></a>
    </DialogContent>
  </Dialog>)}
  <div className="ae-portrait-space"><img className="ae-portrait-photo" src={base+'/images/meghan-portrait.png'} alt="Meghan Fasano in her office" width={1638} height={2048} loading="eager"/></div>
  <figcaption><strong>Meghan Fasano</strong><span>Executive storyteller. Design leader.<br/>Translator between business and technology.</span></figcaption>
</figure>}

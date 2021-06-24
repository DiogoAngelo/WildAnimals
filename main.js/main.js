(()=>{"use strict";function t(t,e){const i=document.documentElement;function s(o){t.contains(o.target)||(i.removeEventListener("click",s),t.removeAttribute("data-outside"),e())}t.hasAttribute("data-outside")||setTimeout((()=>{i.addEventListener("click",s)})),t.setAttribute("data-outside"," ")}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollSuave=this.scrollSuave.bind(this)}scrollSuave(t){t.preventDefault();const e=t.target.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollSuave)}))}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}('a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="ativo"}toggleAccordion(t){t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}('[data-anime="accordion"] dt').init(),new class{constructor(t,e){this.imgs=document.querySelectorAll(t),this.descripts=document.querySelectorAll(e)}openDescription(t){this.descripts.forEach((t=>{t.classList.remove("ativo")}));const e=this.descripts[t].dataset.anime;this.descripts[t].classList.add("ativo",e)}addEvent(){this.imgs.forEach(((t,e)=>{t.addEventListener("click",(()=>{this.openDescription(e)}))}))}init(){return this.imgs.length&&this.descripts.length&&(this.openDescription(0),this.addEvent()),this}}('[data-tab="lista"] li','[data-tab="content"] section').init(),new class{constructor(t,e,i){this.modalBox=document.querySelector(t),this.fechar=document.querySelector(e),this.login=document.querySelector(i),this.eventToggleModal=this.eventToggleModal.bind(this),this.clicaFora=this.clicaFora.bind(this)}toggleModal(){this.modalBox.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}clicaFora(t){t.target===this.modalBox&&this.toggleModal(t)}addEventModal(){this.modalBox.addEventListener("click",this.clicaFora),this.fechar.addEventListener("click",this.eventToggleModal),this.login.addEventListener("click",this.eventToggleModal)}init(){return this.modalBox&&this.fechar&&this.login&&this.addEventModal(),this}}('[data-modal="container"]','[data-modal="fechar"]','[data-modal="abrir"]').init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this)}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+20}px`,t.pageX+200>window.innerWidth?this.tooltipBox.style.left=t.pageX-180+"px":this.tooltipBox.style.left=`${t.pageX+20}px`}onMouseLeave(t){this.tooltipBox.remove(),t.currentTarget.removeEventListener("mouseLEave",this.onMouseLeave),t.currentTarget.removeEventListener("mousemove",this.onMouseMove)}criarToolTipBox(t){const e=document.createElement("div"),i=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=i,document.body.appendChild(e),this.tooltipBox=e}onMouseOver(t){this.criarToolTipBox(t.currentTarget),t.currentTarget.addEventListener("mousemove",this.onMouseMove),t.currentTarget.addEventListener("mouseleave",this.onMouseLeave)}addTooltipsEvent(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltips.length&&this.addTooltipsEvent(),this}}("[data-tooltip").init(),new class{constructor(t,e,i){this.numeros=document.querySelectorAll(t),this.watchChanges=this.watchChanges.bind(this),this.animaNumeros=this.animaNumeros.bind(this),this.obsercerClass=e,this.observerTarget=document.querySelector(i)}animaNumeros(){this.numeros.forEach((t=>{const e=+t.innerText,i=Math.floor(e/100);let s=0;const o=setInterval((()=>{s+=i,t.innerText=s,s>e&&clearInterval(o)}),50*Math.random())}))}watchChanges(t){t[0].target.classList.contains(this.obsercerClass)&&this.animaNumeros()}initObserver(){this.observer=new MutationObserver(this.watchChanges),this.observer.observe(this.observerTarget,{attributes:!0})}init(){return this.numeros.length&&this.observerTarget&&this.initObserver(),this}}("[data-numero]","ativo",".numeros").init(),new class{constructor(t,e){this.fetchApi=fetch(t),this.selection=document.querySelector(e)}async obterApi(){const t=await this.fetchApi,e=await t.json();this.valor=(1e3/e.BRL.sell).toFixed(4),this.addValue()}addValue(){this.selection.innerText=this.valor}init(){return this.obterApi(),this}}("https://www.blockchain.com/ticker",".btc-preco").init(),function(){const t=document.querySelectorAll('[data-anima="scroll"]'),e=.6*window.innerHeight;t[0].classList.add("ativo"),window.addEventListener("scroll",(function(){t.forEach((t=>{t.getBoundingClientRect().top<=e&&(t.classList.contains("ativo")||t.classList.add("ativo"))}))}))}(),document.querySelector("[data-dropdown]").addEventListener("click",(function(e){e.preventDefault(),this.classList.add("ativo"),t(this,(()=>{this.classList.remove("ativo")}))})),function(){const e=document.querySelector('[data-menu="button"]'),i=document.querySelector('[data-menu="list"]');e.addEventListener("click",(function(){this.classList.add("ativo"),i.classList.add("ativo"),t(i,(()=>{e.classList.remove("ativo"),i.classList.remove("ativo")}))}))}()})();
import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";const c="/goit-js-hw-10/assets/error-d5cf2823.svg",m="/goit-js-hw-10/assets/success-b99a4624.svg";document.querySelector('[type="number"]');document.querySelector('[value="fulfilled]');document.querySelector('[value="rejected"]');document.querySelector('[type="submit"]');const r=document.querySelector(".form");r.addEventListener("submit",o=>{o.preventDefault();const t=new FormData(r),e={delay:t.get("delay"),state:t.get("state")};u(e.delay,e.state).then(()=>{setTimeout(()=>s.success({class:"msg-scs",title:"OK",titleColor:"#fff",iconUrl:m,messageColor:"#fff",message:`Fulfilled promise in ${e.delay}ms`,backgroundColor:"#59a10d;",timeout:5e3,position:"topRight"}),e.delay)}).catch(()=>{setTimeout(()=>s.error({class:"msg-err",title:"Error",titleColor:"#fff",messageColor:"#fff",iconUrl:c,message:`Rejected promise in ${e.delay}ms`,backgroundColor:"red",timeout:5e3,position:"topRight"}),e.delay)})});function u(o,t){return new Promise((i,l)=>{setTimeout(()=>{t==="fulfilled"?i():l()})},o)}
//# sourceMappingURL=commonHelpers2.js.map

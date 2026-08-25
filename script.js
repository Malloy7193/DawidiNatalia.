document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll("[data-edit]").forEach(el=>{
    const key=el.dataset.edit;
    if(CONFIG[key]!==undefined) el.innerHTML=CONFIG[key];
  });

  const services=document.getElementById("serviceCards");
  services.innerHTML=CONFIG.services.map(s=>`
    <article class="card"><div class="icon">${s.icon}</div><h3>${s.title}</h3><p>${s.text}</p><div class="price">${s.price}</div></article>
  `).join("");

  document.getElementById("featureCards").innerHTML=CONFIG.features.map(f=>`
    <article class="feature"><h3>${f.title}</h3><p>${f.text}</p></article>
  `).join("");

  document.title=CONFIG.brand;
  document.querySelector(".menu").addEventListener("click",()=>document.querySelector(".nav nav").classList.toggle("open"));

  document.getElementById("contactForm").addEventListener("submit",e=>{
    e.preventDefault();
    const data=new FormData(e.currentTarget);
    const subject=encodeURIComponent("Wiadomość ze strony - "+data.get("name"));
    const body=encodeURIComponent(`Imię: ${data.get("name")}\nE-mail: ${data.get("email")}\n\n${data.get("message")}`);
    location.href=`mailto:${CONFIG.formRecipient}?subject=${subject}&body=${body}`;
  });
});
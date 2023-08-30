export const Modal = {
     pagina: document.querySelector(".pagina"),
     sol: document.querySelector(".sol"),
     lua: document.querySelector(".lua"),
     numero: document.querySelector(".numero"),
     

     open (){
        Modal.pagina.classList.toggle("light2")
        Modal.numero.classList.toggle("light2")
        Modal.sol.classList.toggle("light")
        Modal.lua.classList.toggle("light")
     },

}

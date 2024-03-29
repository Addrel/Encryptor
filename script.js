
const texto=document.querySelector("#textoIngresado");
const bottonEncriptar=document.querySelector(".encriptar");
const bottonDesencriptar=document.querySelector(".desencriptar");
const ventana=document.querySelector(".mensaje");
const noText=ventana.innerHTML;
const clave={
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};
function verificar(texto){
    let codigo;
    for(let i=0;i<texto.length;i++){
        codigo=texto.charCodeAt(i);
        if((codigo<97||codigo>122)&&codigo!=32){
            return false;
        }
    }
    return true;
}
function transformarTexto(){
    let valor=texto.value;
    if(valor!=""){
        if(verificar(valor)){
            for(const property in clave){
                if(this.value=="Encriptar"){
                    valor=valor.replaceAll(property,clave[property]);
                }
                else{
                    valor=valor.replaceAll(clave[property],property);
                }
                ventana.classList.remove('mensaje');
                ventana.innerHTML=`<p id="clip">${valor}</p>
                <button id="copiar"><img src="images/image2.png"></button>`;
                ventana.classList.add('grid');
                const botonCopiar=document.querySelector("#copiar");
                botonCopiar.addEventListener('click',copiarTexto);
            }
        }else{
            ventana.innerHTML=`<img src="images/prohibido.webp">
            <h2>Los valores ingresados no son permitidos</h2>`
        }     
    }else if(ventana.innerHTML!=noText){
        ventana.classList.remove('grid');
        ventana.innerHTML=noText;
        ventana.classList.add('mensaje');
    }
}
function copiarTexto(){
    const copyText=document.querySelector("#clip").innerText;
    navigator.clipboard.writeText(copyText);
}
bottonEncriptar.addEventListener('click',transformarTexto);
bottonDesencriptar.addEventListener('click',transformarTexto);


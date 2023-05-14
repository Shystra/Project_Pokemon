// just geting button theme 


const buttonChangeTheme = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");
const imageButtonChangeTheme = document.querySelector(".imagem-botao");




buttonChangeTheme.addEventListener("click", () => {

    const darkModeActtive = body.classList.contains("dark-mode-background");
        body.classList.toggle("dark-mode-background");

    if(darkModeActtive){
        imageButtonChangeTheme.setAttribute("src", "./imagens/sun.png");

    } else {
        imageButtonChangeTheme.setAttribute("src", "./imagens/moon.png");
    };

        
        
        
            

           
            





});

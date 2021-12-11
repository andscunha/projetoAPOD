// Parte do Menu Mobile

const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();

    const nav = document.getElementById('nav')
    nav.classList.toggle('active')

    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active);

    if(active){ 
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    }else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }

}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)


//Execução do API

let botao = $('#botao')

botao.on('click',()=>{
    $.ajax({url:`https://api.nasa.gov/planetary/apod?api_key=zWE14xjDLkHUsGzoGuurWgKewmgY2M2Scqk2ofTI&date=${date.value}`,
        success: function(result){

            $('#title').html(`${result.title}`)

            $('#imagem').attr('src',(result.hdurl))

            $('#texto').html(`${result.explanation}`)

            $('#autor').html(` ~ ${result.copyright}`)

            console.log(result)

     }
    });
  });
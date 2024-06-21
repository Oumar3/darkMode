
var theme = localStorage.getItem('theme')
var btn = document.querySelector('button')
if(theme && theme==="sombre"){
    modeSombre()
}


function modeSombre(){
    document.body.classList.add('dark')
    btn.classList.remove('dark')
    localStorage.setItem('theme','sombre')

}

btn.addEventListener('click',()=>{
    if(document.body.classList.contains('dark')){
        document.body.classList.remove('dark')
        btn.classList.add('dark')
        localStorage.setItem('theme','clair')
    }else{
        modeSombre()
    }
})
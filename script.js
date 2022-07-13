var lista = [1,2,3,4,5,6,7,8]
var res = document.getElementById('res')
var botao = document.getElementById('sort')
var img = document.createElement('img')
img.setAttribute('src', 'costas.png')
res.appendChild(img)
function sortear(){
    var sorte = Math. floor(Math. random() * lista. length)
    
        
        if(lista[sorte]==1){
            img.setAttribute('src' , 'maisalto.png')
        }else if(lista[sorte]==2){
            img.setAttribute('src' , 'maisbaixo.png')
        }else if(lista[sorte]==3){
            img.setAttribute('src' , 'paifilho.png')
        }else if(lista[sorte]==4){
            img.setAttribute('src' , 'piada.png')
        }else if(lista[sorte]==5){
            img.setAttribute('src' , 'relogio.png')
        }else if(lista[sorte]==6){
            img.setAttribute('src' , 'setadir.png')
        }else if(lista[sorte]==7){
            img.setAttribute('src' , 'setaesq.png')
        }else if(lista[sorte]==8){
            img.setAttribute('src' , 'sovc.png')
        }



          res.innerHTML=(``)   
          res.appendChild(img)
          res.style.textAlign = 'center'
         
        } 
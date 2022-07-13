var lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
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
        }else if(lista[sorte]==9){
            img.setAttribute('src', 'bebado.png')
        }else if(lista[sorte]==10){
            img.setAttribute('src', 'boi.png')
        }else if(lista[sorte]==11){
            img.setAttribute('src', 'comilão.png')
        }else if(lista[sorte]==12){
            img.setAttribute('src', 'foto.png')
        }else if(lista[sorte]==13){
            img.setAttribute('src', 'ideia.png')
        }else if(lista[sorte]==14){
            img.setAttribute('src', 'pare.png')
        } 



          res.innerHTML=(``)   
          res.appendChild(img)
          res.style.textAlign = 'center'
         
        } 
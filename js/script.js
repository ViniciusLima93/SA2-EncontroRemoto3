//Coleta o valor no campo de buscar

function selectorSearch () {
    let find = document.getElementById('search').value;
    if (!find) {
        alert('Digite um item para pesquisar')
    } else {
        alert(`Você pesquisará sobre ${find}`)
    }
    
    
}




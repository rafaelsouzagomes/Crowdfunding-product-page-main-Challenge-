const bookmarkBtn = document.getElementById('btn-bookmark');

const succesModalId = document.getElementById('sucessModalAside');
const succesModalClass = document.getElementsByClassName('sucess-modal');

const btn_gotIt = document.getElementById('btn_gotIt');
const modalSelection = document.getElementsByClassName('selection-modal'); 

const allCardsPricesSelections = document.getElementsByClassName('selection-card');
const closeBtn  = document.getElementById('close-selection-modal');
const closeMenu = document.getElementById('closeMenuIcon');

const menu = document.getElementById('menuIcon');
const menuMobile = document.getElementById('menu-mobile');


document.body.addEventListener('click', function(event){

    if(closeMenu.contains(event.target)){
        closeMenu.style.setProperty('display', 'none');
        menu.style.setProperty('display','block');
        menuMobile.style.setProperty('display', 'none');
        document.getElementsByTagName('header')[0].style.setProperty('filter', 'none');
        document.getElementsByTagName('main')[0].style.setProperty('filter', 'none');
    }

    if(menu.contains(event.target)){
      
       
       closeMenu.style.setProperty('display', 'block');
       menu.style.setProperty('display', 'none');
       menuMobile.style.setProperty('display', 'block');
       document.getElementsByTagName('header')[0].style.setProperty('filter', 'brightness(50%)');
       document.getElementsByTagName('main')[0].style.setProperty('filter', 'brightness(50%)');
    }

    if(closeBtn.contains(event.target)){
        modalSelection[0].classList.add('hide');
        document.getElementsByTagName('header')[0].style.setProperty('filter', 'none');
        document.getElementsByTagName('main')[0].style.setProperty('filter', 'none');
    }

    if(btn_gotIt.contains(event.target)){
        succesModalClass[0].classList.add('hide');
        modalSelection[0].classList.remove('hide');
    } 
      
    if(bookmarkBtn.contains(event.target)){
        succesModalClass[0].classList.remove('hide');      
        succesModalClass[0].style.setProperty('backdrop', 'static');
        succesModalClass[0].style.setProperty('keyboard', 'false');
        document.getElementsByTagName('header')[0].style.setProperty('filter', 'brightness(50%)');
        document.getElementsByTagName('main')[0].style.setProperty('filter', 'brightness(50%)');
    } 
    else if(!succesModalId.contains(event.target)  && !succesModalClass[0].classList.contains('hide')){
        succesModalClass[0].classList.add('hide');
        modalSelection[0].classList.add('hide');
        document.getElementsByTagName('header')[0].style.setProperty('filter', 'none');
        document.getElementsByTagName('main')[0].style.setProperty('filter', 'none');
    }
});

function handleClick(options) {
    Array.prototype.forEach.call(allCardsPricesSelections, function(el) {
        el.classList.remove('border-green');
        el.getElementsByClassName('finish-select')[0].setAttribute("style", "display:none;");
    });
    allCardsPricesSelections[options.value].classList.add('border-green');
    allCardsPricesSelections[options.value].getElementsByClassName('finish-select')[0].style.setProperty('display', 'flex');
}

        
    
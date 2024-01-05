let tabs = document.querySelectorAll('.tab__item');
let tabcontent = document.querySelectorAll('.tab__item-content');
let territorytabs = document.querySelectorAll('.territory-tab-item');
let territorytabcontent = document.querySelectorAll('.territory-tabs-content');
let territoryslider = document.querySelectorAll('.territory-slider');
let progresstabs = document.querySelectorAll('.construction-tab__item');
let progressdeadline = document.querySelectorAll('.deadline-block');
for (let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click', () => {
        tabs[i].classList.add('active-tab');
        tabcontent[i].classList.add('active-tab-content');
        for(let k=0; k<tabs.length; k++){
            if (i!=k){
                tabs[k].classList.remove('active-tab');
                tabcontent[k].classList.remove('active-tab-content');
            } 
        }
    })   
};


for(let i = 0; i< territorytabs.length; i++){
    territorytabs[i].addEventListener('click', () => {
        territorytabs[i].classList.add('active-t-tab');
        territorytabcontent[i].classList.add('active-t-tab-content');
        territoryslider[i].classList.add('show-slider');
        for(let n=0; n<territorytabs.length; n++){
            if (i!=n){
                territorytabs[n].classList.remove('active-t-tab');
                territorytabcontent[n].classList.remove('active-t-tab-content');
                territoryslider[n].classList.remove('show-slider');
            } 
        }
    })
}

for(let i=0; i<progresstabs.length; i++){
    progresstabs[i].addEventListener('click', () => {
        progresstabs[i].classList.add('construction-tab__active');
        progressdeadline[i].classList.add('show-deadline-block');
        for(let n=0; n<progresstabs.length; n++){
            if (i!=n){
                progresstabs[n].classList.remove('construction-tab__active');
                progressdeadline[n].classList.remove('show-deadline-block');
            } 
        }
    })
}

let screenWidth = window.screen.width
console.log(screenWidth);
if (screenWidth<960){
    let mobiletabs = document.querySelectorAll('.places-mobile-tab__item');
    let mobiletabcontents = document.querySelectorAll('.places-mobile-tab__item-content');
    for(let i=0; i<mobiletabs.length; i++){
        mobiletabs[i].addEventListener('click', () => {
            mobiletabs[i].classList.add('places-mobile-tab__item-active');
            mobiletabcontents[i].classList.add('places-mobile-tab__item-content-show');
            for (let n=0; n<mobiletabs.length; n++){
                if (i!=n){
                    mobiletabs[n].classList.remove('places-mobile-tab__item-active');
                    mobiletabcontents[n].classList.remove('places-mobile-tab__item-content-show');
                } 
            }
        })
    }
    let inframobiletabs = document.querySelectorAll('.infra-mobile-tab__item');
    let inframobiletabcontent = document.querySelectorAll('.infra-mobile-tab-content');
    for (let i=0; i<inframobiletabs.length; i++){
        inframobiletabs[i].addEventListener('click',() => {
            inframobiletabs[i].classList.add('infra-mobile-tab__item-active');
            inframobiletabcontent[i].classList.add('infra-mobile-tab-content-show');
            for (let j=0; j<inframobiletabs.length; j++){
                if (i!=j){
                    inframobiletabs[j].classList.remove('infra-mobile-tab__item-active');
                    inframobiletabcontent[j].classList.remove('infra-mobile-tab-content-show');
                }
            }
        })
    }
    let constructionmobiletabs = document.querySelectorAll('.construction-mobile-tab-item');
    let constructionmobiledeadline = document.querySelectorAll('.construction-mobile-tab-content-item');
    for (let i=0; i<constructionmobiletabs.length; i++){
        constructionmobiletabs[i].addEventListener('click',() => {
            constructionmobiletabs[i].classList.add('construction-mobile-tab-item-active');
            constructionmobiledeadline[i].classList.add('construction-mobile-tab-content-item-show');
            for (let j=0; j<constructionmobiletabs.length; j++){
                if (i!=j){
                    constructionmobiletabs[j].classList.remove('construction-mobile-tab-item-active');
                    constructionmobiledeadline[j].classList.remove('construction-mobile-tab-content-item-show');
                }
            }
        })
    }
}
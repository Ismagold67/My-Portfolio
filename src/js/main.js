import { showProjects, showProjectsBackEnd } from "./dataConnection.js";
const projectsPortfolio = document.querySelector('.projects-portfolio');
const header = document.querySelector('.header');

async function apperHeaderBackgroundGradient(){
    window.addEventListener('scroll', () => {
        const y = window.pageYOffset;
        if(y >= 100){
            header.classList.add('gradient-header');
        }else {
            header.classList.remove('gradient-header');
        };
    });
};

async function constructorDiv(){
    var i = 0
    for(i; i < 6; i++){
        const divCard = document.createElement('div');
        const divAbout = document.createElement("div");
        const divView = document.createElement("div");
        const divBefore = document.createElement("div");
        const p = document.createElement('p');
        p.textContent = `Clique no card para ser redirecionado!`;
        p.classList.add(`ins${i + 1}`);
        p.classList.add(`instruction`);
    
        divCard.classList.add("card-portfolio");
        divAbout.classList.add(`proj${i + 1}`);
        divView.classList.add(`proj${i + 1}`);
        divAbout.classList.add("about-project");
        divView.classList.add("view-project");
        divBefore.classList.add("before");
        divView.appendChild(p);
    
        divView.appendChild(divBefore);
        divCard.appendChild(divAbout);
        divCard.appendChild(divView);
        projectsPortfolio.appendChild(divCard);
    }    
}

async function linkToNetworkHeader(){
    const networks = document.querySelectorAll('.network-icons .fa-brands')
    networks.forEach(network => {
        network.addEventListener('click', () => {
            const netArray = [
                    'instagram',
                    'ismagold67',
                    'github',
                    'ismagold67',
                    'twitter',
                    'ismelbateraa2',
                    'linkedin',
                    'in/ismael-roberto-586361212/',
                    'youtube',
                    'channel/UC_ghm_PU3W8dpa_4Jmk5saw'
                    ];
            const classNetwork = network.getAttribute('class');
            for(var i = 0; i < netArray.length; i++){
                if(classNetwork.includes(netArray[i])){
                    window.location.href = `https://www.${netArray[i]}.com/${netArray[i + 1]}`;
                };
            };
        });
    });
};

async function changeAProjectType(){
    const front = document.querySelector('#front');
    const back = document.querySelector('#back');

    front.addEventListener('click', () => {
        projectsPortfolio.innerHTML = ''
        constructorDiv(); 
        showProjects();
    })
    back.addEventListener('click', () => {
        projectsPortfolio.innerHTML = ''
        constructorDiv(); 
        showProjectsBackEnd();
    })
}

async function init(){
    apperHeaderBackgroundGradient();
    constructorDiv(); 
    showProjects();
    changeAProjectType();
    linkToNetworkHeader();
}
init();

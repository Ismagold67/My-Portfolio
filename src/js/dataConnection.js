export async function showProjects() {
    const aboutProject = document.querySelectorAll('.about-project');
    const videoViewProject = document.querySelectorAll('.view-project');
    
    try {
        const response = await fetch("./src/js/dados.json");
        const datas = await response.json();

        for (const dataVideo of datas.videosProject) {
            showContentProject(dataVideo, aboutProject);
            showVideoProject(dataVideo, videoViewProject);
        };
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    };
};

export async function showProjectsBackEnd() {
    const aboutProject = document.querySelectorAll('.about-project');
    const videoViewProject = document.querySelectorAll('.view-project');
    
    try {
        const response = await fetch("./src/js/dados.json");
        const datas = await response.json();

        for (const dataVideo of datas.videosProjectBackEnd) {
            showContentProject(dataVideo, aboutProject);
            showVideoProject(dataVideo, videoViewProject);
        };
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    };
};

async function showContentProject(dataVideo, aboutProject) {
    aboutProject.forEach(element => {
        const h1 = document.createElement("h1");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");

        if (element.classList.contains(dataVideo.id)) {
            h1.textContent = `Projeto ${dataVideo.id[4]}`;
            h2.textContent = dataVideo.nomeProjeto;
            p.textContent = dataVideo.description;

            element.appendChild(h1);
            element.appendChild(h2);
            element.appendChild(p);
        };
    });
};

async function showVideoProject(dataVideo, videoViewProject) {
    videoViewProject.forEach(element => {
        const video = document.createElement('video');
        const instruction = document.querySelectorAll('.instruction');
        video.src = `${dataVideo.path}.mp4`;
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.onclick = redirectToDeploy;
        video.onmouseover = showInstructionMessage;
        video.onmouseout = removeInstructionMessage;
        
        if (element.classList.contains(dataVideo.id)) {
            element.appendChild(video);
        };

        function redirectToDeploy() {
            window.location.href = dataVideo.deploy;
        };

        function showInstructionMessage() {
            instruction.forEach(element => {
                const ins = element.getAttribute('class');
                if (ins[3] === dataVideo.id[4]) {
                    element.style.display = 'flex';
                };
            });
        };

        function removeInstructionMessage() {
            instruction.forEach(element => {
                const ins = element.getAttribute('class');
                if (ins[3] === dataVideo.id[4]) {
                    element.style.display = 'none';
                };
            });
        };
    });
};

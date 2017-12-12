import quitIcon from '../../imgs/close.png'


export function addProject(settings,lang) {
    const projectSection = document.getElementById('projects'),
        projectElem = document.createElement('div'),
        projectName = document.createElement('h3'),
        imageBox = document.createElement('div'),
        projectImage = document.createElement('img'),
        projectDescription = document.createElement('div'),
        liveLink = document.createElement('a'),
        codeLink = document.createElement('a'),
        descriptionHandler = document.createElement('span'),
        descriptionQuit = document.createElement('img');


    projectName.innerHTML = settings.name;
    projectDescription.innerHTML = settings.description[lang];
    liveLink.innerHTML = 'live';
    codeLink.innerHTML = 'code';
    descriptionHandler.innerHTML = 'show description'

    projectImage.setAttribute('src',settings.imgPath);
    descriptionQuit.setAttribute('src',quitIcon);
    liveLink.setAttribute('href',settings.liveLink);
    codeLink.setAttribute('href',settings.codeLink);
    liveLink.setAttribute('target','_blank');
    codeLink.setAttribute('target','_blank');


    projectElem.classList.add('projectElem');
    projectName.classList.add('secondaryTitle')
    imageBox.classList.add('pictureBox');
    projectImage.classList.add('projectImage')
    projectDescription.classList.add('projectDescription','pageText')
    liveLink.classList.add('projectLink');
    codeLink.classList.add('projectLink');
    descriptionHandler.classList.add('toggleDescription');
    descriptionQuit.classList.add('hideDescription');

    projectElem.appendChild(projectName);
    projectElem.appendChild(descriptionHandler);
    projectElem.appendChild(imageBox);
    imageBox.appendChild(projectImage);
    imageBox.appendChild(projectDescription);
    projectDescription.appendChild(descriptionQuit);
    projectElem.appendChild(liveLink);
    projectElem.appendChild(codeLink);

    console.log(lang)
    projectSection.appendChild(projectElem);

}
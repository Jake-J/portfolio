export const addProject = function(settings) {
    const projectSection = document.getElementById('projects'),
        projectElem = document.createElement('div'),
        projectName = document.createElement('h3'),
        imageBox = document.createElement('div'),
        projectImage = document.createElement('img'),
        projectDescription = document.createElement('div'),
        liveLink = document.createElement('a'),
        codeLink = document.createElement('a')


    projectName.innerHTML = settings.name;
    projectDescription.innerHTML = settings.description;
    liveLink.innerHTML = 'live';
    codeLink.innerHTML = 'code';

    projectImage.setAttribute('src',settings.imgPath);
    liveLink.setAttribute('href',settings.liveLink);
    codeLink.setAttribute('href',settings.codeLink);
    liveLink.setAttribute('target','_blank');
    codeLink.setAttribute('target','_blank');


    projectElem.classList.add('projectElem');
    projectName.classList.add('secondaryTitle')
    imageBox.classList.add('pictureBox');
    projectImage.classList.add('projectImage')
    projectDescription.classList.add('projectDescription')
    liveLink.classList.add('projectLink');
    codeLink.classList.add('projectLink');


    projectElem.appendChild(projectName);
    projectElem.appendChild(imageBox);
    imageBox.appendChild(projectImage);
    imageBox.appendChild(projectDescription);
    projectElem.appendChild(liveLink);
    projectElem.appendChild(codeLink);


    projectSection.append(projectElem);

}
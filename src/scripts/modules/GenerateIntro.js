export function generateIntro(settings){

    const container = document.getElementById('intro');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    const inner = document.createElement('div'),
          arrowLink = document.createElement('a'),
          arrowDiv = document.createElement('div'),
          head = document.createElement('h1'),
          paragraphs = ['about','projects','skillset','contact'];
  
    const paragraphsElements = paragraphs.map((item,idx)=>{

        const elem  = document.createElement('p'),
                anchor = document.createElement('a');

        elem.classList.add('navItem','pageText',item);
        anchor.dataset.scrollto = item;
        anchor.classList.add('navLink');
        elem.appendChild(anchor); 
        return elem
    })


    inner.classList.add('inner','alignVertically');
    arrowLink.classList.add('navLink');
    arrowDiv.classList.add('arrowDown');
    head.classList.add('hi','title');

    paragraphsElements[0].childNodes[0].innerText = settings.about;
    paragraphsElements[1].childNodes[0].innerText = settings.project;
    head.innerHTML = settings.head;
    paragraphsElements[2].childNodes[0].innerText = settings.skills;
    paragraphsElements[3].childNodes[0].innerText = settings.contact;

    inner.appendChild(paragraphsElements[0]);
    inner.appendChild(paragraphsElements[1]);
    inner.appendChild(head);
    inner.appendChild(paragraphsElements[2]);
    inner.appendChild(paragraphsElements[3]);


    arrowLink.dataset.scrollto = 'about';
    arrowLink.appendChild(arrowDiv);

    console.log(paragraphsElements);

    container.appendChild(inner);
    container.appendChild(arrowLink);
}
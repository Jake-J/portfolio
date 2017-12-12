export function generateAbout(settings) {
    const container = document.getElementById('about'),
          head = document.createElement('h2'),
          para = document.createElement('p')

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    head.classList.add('title');
    head.innerText = settings.title;
    para.innerText = settings.text;

    container.appendChild(head);
    container.appendChild(para);
}
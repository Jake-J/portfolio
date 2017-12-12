// import styles 
import _normalize from "../styles/_normalize.css"; 
import styles from "../styles/main.sass";
import media from "../styles/media.scss"
//import images
import todoimg from '../imgs/todoapp2.jpg';
import weatherimg from '../imgs/weathercheck2.jpg';
import htmlIcon from '../imgs/skillsIcons/html.png';
import cssIcon from '../imgs/skillsIcons/css.png';
import sassIcon from '../imgs/skillsIcons/sass.png';
import jsIcon from '../imgs/skillsIcons/js.png';
import jqueryIcon from '../imgs/skillsIcons/jquery.png';
import reactIcon from '../imgs/skillsIcons/react.png';
import samanticIcon from '../imgs/skillsIcons/samantic.png';
import psIcon from '../imgs/skillsIcons/ps.png';
import nodeIcon from '../imgs/skillsIcons/node.png';
import bootstrapIcon from '../imgs/skillsIcons/bootstrap.png';
import gitIcon from '../imgs/skillsIcons/github.png';
import phpIcon from '../imgs/skillsIcons/php.png';
import expressIcon from '../imgs/skillsIcons/express.png';
import vueIcon from '../imgs/skillsIcons/vue.png';
import mongoIcon from '../imgs/skillsIcons/mongo.png';
// import modules
import {addProject} from './modules/GenerateProject';
import {addSkillIcon} from './modules/GenerateIcon';
import {generateIntro} from './modules/GenerateIntro';
import {generateAbout} from './modules/GenerateAbout';


(()=> { 
   const appData = {
        skills: {
            skillsHeaders:{
                en:['I feel good at:','I know basics of:','I am planning to learn:'],
                pl:['Czuje że dobrze znam:',"Znam podstawy:","Planuje się nauczyć:"]
            },
            skillIcons:[
            {list:'goodat',imgPath:htmlIcon},
            {list:'goodat',imgPath:cssIcon},
            {list:'goodat',imgPath:sassIcon},
            {list:'goodat',imgPath:jsIcon},
            {list:'goodat',imgPath:jqueryIcon},
            {list:'goodat',imgPath:reactIcon},
            {list:'basics',imgPath:samanticIcon},
            {list:'basics',imgPath:psIcon},
            {list:'basics',imgPath:nodeIcon},
            {list:'basics',imgPath:bootstrapIcon},
            {list:'basics',imgPath:gitIcon},
            {list:'basics',imgPath:phpIcon},
            {list:'planning',imgPath:expressIcon},
            {list:'planning',imgPath:vueIcon},
            {list:'planning',imgPath:mongoIcon}
            ]
        },
        projects:[
            {
                name: "todo app",
                imgPath:todoimg,
                description:{
                    en:"My first project, as not many people need such lists , it was made in thoughts of checking my self with react knowledge. Made from scratch (without PSD) as mentioned before created with react library.",
                    pl:"Mój pierwszy projekt , jako iż niewiele ludzi używa takich list , moim głównym założeniem było sprawdzenie swojej wiedzy z biblioteki react. Stworzone od zera (bez szablonu PSD) z pomocą reacta jak już wspomniałem."
                },
                liveLink: 'https://jake-j.github.io/TODO-APP/',
                codeLink: 'https://github.com/Jake-J/TODO-APP'
            },
            {
                name: "weather app",
                imgPath:weatherimg,
                description:{
                    en:"My second project , which took me while and few brought few new challanges such as working with much data , where you have to think how to display it on the screen. Made from scratch (started with creating PSD) with usage of react.",
                    pl:"Mój drugi projekt , który zajął mi trochę czasu i przyniósł kilka nowych wyzwań takich jak na przykład pracowanie z duża ilością danych , które sprawia ze trzeba myśleć jak rozmieścić je na ekranie. Wykonane od podstaw(Zacząłem od stworzenia PSD) z wykorzystaniem biblioteki react."
                },
                liveLink: 'https://jake-j.github.io/weatherAPP/',
                codeLink: 'https://github.com/Jake-J/weatherAPP'
            }
        ],
        intro:{
            pl:{
                about:'o mnie',
                project:'moje projekty',
                head:`Cześć mam na imię Jakub,  </br> i zajmuje się </br> front-endem`,
                skills:'technologie które znam',
                contact:'kontakt'
            },
            en:{
                about:'about me',
                project:'my works',
                head:`Hi my name is Jakub, </br> and I am </br> front-end dev`,
                skills:'technologies I use',
                contact:'get in touch'
            }
        },
        about:{
            pl:{
                title: 'o mnie',
                text: 'Jestem studentem uniwersytetu warminsko-mazurskiego , obecnie jestem na drugim roku i studiuje analize i kreowanie trendow.Od dwoch lat w czasie wolny glownie zajmuje sie nauka programowania , poprzez tworzenie witryn internetowych , aplikacji oraz zagłebiania się w algorytmike. Z checia pracuje w grupie , dbam o punktualnosc oraz sumiennie wykonuje swoja prace.'
            },
            en:{
                title: 'about me',
                text: 'I am student of creating and anylizing trends at UWM and in the meantime I learn web  development , by bulidng websites , creating web applications and struggling with algorithms solving. I enjoy working in group , taking care about being punctual and trying me best to complete my work.'
            }
        }
   }    
    
    function generateElements(elementsArr){
        if(elementsArr[0]){
            for(let element of elementsArr){
                if(element.name){ // projects objects contains name property 
                    addProject(element);
                }else{
                    addSkillIcon(element);
                }
            }
        }
    } 
    function generateSkillset(skills,lang){
        const container = document.getElementById('skillset'),
              mainHead = document.createElement('h2'),
              iconSections = ['goodat','basics','planning'];

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        mainHead.classList.add('title');
        mainHead.innerText = appData.intro[lang].skills;

        const iconDivs = iconSections.map((item)=>{

            const section = document.createElement('div'),
                    sectionHead = document.createElement('h3'),
                    list = document.createElement('ul');

            sectionHead.classList.add('secondaryTitle')
            list.classList.add('skillIcons')
            if(item === 'goodat'){
                section.classList.add('goodat');
                sectionHead.innerText =  appData.skills.skillsHeaders[lang][0];
                list.classList.add('goodatList');
            }else if(item === 'basics'){
                section.classList.add('basics');
                sectionHead.innerText =  appData.skills.skillsHeaders[lang][1];
                list.classList.add('basicsList');
            }else if(item === "planning"){
                section.classList.add('planning','spaceBottom');
                sectionHead.innerText =  appData.skills.skillsHeaders[lang][2];
                list.classList.add('planningList');
            }

            section.appendChild(sectionHead);
            section.appendChild(list);

            return section
        })

        container.appendChild(mainHead);
        iconDivs.forEach((item)=>{
            container.appendChild(item);
        })



        for(let element of skills){
                addSkillIcon(element);
        }
    }
    function generateProjects(projects,lang){
        const head = document.createElement('h2'),
              container = document.getElementById('projects');

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        head.classList.add('title');
        console.log(lang)
        head.innerText = appData.intro[lang].project 
        container.appendChild(head);
        //description changed
        //descriptionEN, descriptionPL
        //undefined print 


        for(let element of projects){
            addProject(element,lang);
        }

    }
    function assignEventListeners(collection,fun){
        Array.from(collection).forEach((item) =>{
            item.addEventListener('click', fun);
          });
    }
    function moveTo(e) {

        e.preventDefault();

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }
        function elmYPosition(eID) {
            const elm = document.getElementById(eID);
            let y = elm.offsetTop,
                node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }
        function smoothScroll(eID) {
            let startY = currentYPosition(),
                stopY = elmYPosition(eID),
                distance = stopY > startY ? stopY - startY : startY - stopY;
            if (distance < 100) {
                scrollTo(0, stopY); return;
            }
            let speed = Math.round(distance / 100);
            if (speed >= 20) speed = 20;
            let step = Math.round(distance / 25),
                leapY = stopY > startY ? startY + step : startY - step,
                timer = 0;
            if (stopY > startY) {
                for (let i=startY; i<stopY; i+=step ) {
                    setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                    leapY += step; if (leapY > stopY) leapY = stopY; timer++;
                } return;
            }
            for (let i=startY; i>stopY; i-=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
            }
        }

        smoothScroll(this.dataset.scrollto);

    }
    function hideDescription() {
        this.parentNode.style = 'visibility: hidden';
        this.parentNode.offsetParent.previousElementSibling.innerText = 'show description';
    }
    function toggleDescription(){
        if(this.innerHTML === "show description"){
            this.innerHTML = "hide description";
            console.log(this.nextElementSibling.childNodes[1])
            this.nextElementSibling.childNodes[1].style = 'visibility: visible';
        }else{
            this.innerHTML = "show description"
            this.nextElementSibling.childNodes[1].style = 'visibility: hidden';
        }
    }
    function generatePortfolio(e,language = 'pl'){
        let lang;
        e !== undefined ? lang = e.target.dataset.lang : lang = language

        generateIntro(appData.intro[lang]);
        generateAbout(appData.about[lang]);
        generateProjects(appData.projects,lang);
        generateSkillset(appData.skills.skillIcons,lang);
        // console.log(document.getElementById('contact').childNodes[1]);
        document.getElementById('contact').childNodes[1].innerText = appData.intro[lang].contact;

        const toggleSpanCollection = document.getElementsByClassName('toggleDescription'),
              quitCross = document.getElementsByClassName('hideDescription'),
              navLinks = document.getElementsByClassName('navLink'),
              flags = document.getElementsByClassName('flag');

        assignEventListeners(toggleSpanCollection,toggleDescription);
        assignEventListeners(quitCross,hideDescription);
        assignEventListeners(navLinks,moveTo);
        assignEventListeners(flags,generatePortfolio);
    }

    generatePortfolio();

    


})();
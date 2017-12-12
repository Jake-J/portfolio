export function addSkillIcon(settings){
    const goodatList = document.getElementsByClassName('goodatList'),
          basicsList = document.getElementsByClassName('basicsList'),
          planningList = document.getElementsByClassName('planningList'),
          li = document.createElement('li'),
          icon = document.createElement('img')


    icon.setAttribute('src',settings.imgPath)
    li.appendChild(icon)
    li.classList.add('skillIcon')
    if(settings.list === 'goodat'){
        goodatList[0].appendChild(li);
    }else if(settings.list === 'basics'){
        basicsList[0].appendChild(li);
    }else{
        planningList[0].appendChild(li);
    }
}
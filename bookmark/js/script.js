const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu')
const logo = document.getElementById('logo')

const navToggle = () =>{
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');

    if(menu.classList.contains('flex')){
        logo.setAttribute('src','./images/logo-bookmark-footer.svg')
    }
    else{
        logo.setAttribute('src','./images/logo-bookmark.svg')
    }
}
const onTabClick = (event) =>{
    //deactivate all tabs
    tabs.forEach((tab)=>{
        return tab.children[0].classList.remove(
            'border-softRed',
            'border-b-4',
            'md:border-b-0'
        )
    })

    //hide all panels
    panels.forEach((panel)=>{
        return panel.classList.add('hidden')
    });

    //activate a new tab and panel based on the target
    event.target.classList.add(
        'border-softRed',
        'border-b-4'
    );
    const classString = event.target.getAttribute('data-target');
    document
    .getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden');
}

tabs.forEach((tab)=>{
    return tab.addEventListener('click',onTabClick);
})

btn.addEventListener('click', navToggle);
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', ()=> {
    document.body.classList.toggle('dark-theme');
});

const langOptions = document.querySelectorAll('.lang-option');

langOptions.forEach(Option =>{
    Option.addEventListener('click', () => {

        langOptions.forEach(opt => opt.classList.remove('active'));
        Option.classList.add('active');
        const selectedLang = Option.getAttribute('data-lang');
        console.log("Обрана мова", selectedLang);
    })
});

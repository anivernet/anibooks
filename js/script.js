const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

themeToggle.addEventListener('click', ()=> {
    document.body.classList.toggle('dark-theme');

    const isDark = document.body.classList.contains('dark-theme');
    themeIcon.src = isDark ? 'icons/theme-swicher-to-dark.svg' : 'icons-dark-theme/theme-swicher-to-light.svg';
    themeIcon.alt = isDark ? 'Темна тема': 'Світла тема';
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

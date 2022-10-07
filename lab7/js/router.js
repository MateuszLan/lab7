let pageUrls = {
    about: '/index.html?about',
    contact:'/index.html?contact'
    }
    function OnStartUp(params) {
    popStateHandler();
    }
    OnStartUp();
    document.querySelector('#about-link').addEventListener('click', (event) => {
    let stateObj = {
    page: 'about'
    }
    document.title = 'About';
    history.pushState(stateObj, "about", "?about");
    RenderAboutPage();
    });
    document.querySelector('#contact-link').addEventListener('click', (event) => {
    let stateObj = {
    page: 'contact'
    }
    document.title = 'Contact';
    history.pushState(stateObj, "contact", "?contact");
    RenderContactPage();
    });
    function RenderAboutPage(params) {
    document.querySelector('main').innerHTML =
    `<h1 class="title">O kursie</h1>
    <p> Nauczymy Cię wszystkiego</p>`;
    }
    function RenderContactPage(params) {
    document.querySelector('main').innerHTML =
    `<h1 class="title">Kontakt</h1>
    <p> W celu zaczęcia kursu skontaktuj się z nami pod adres email darmmowy.kurs@wroc.pl</p>`;
    }
    function popStateHandler(event) {
    loc = window.location.href.toString().split(window.location.host)[1];
    if (loc === pageUrls.contact){
    RenderContactPage();
    }
    if(loc === pageUrls.about){
    RenderAboutPage();
    }
    }
    window.onpopstate =popStateHandler;
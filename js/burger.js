function burger() {

    var burger = {
        navToggle: document.querySelector('#burger-toggle'),
        nav: document.querySelector('.header--menu'),

        doToggle: function(e) {
            e.preventDefault();
            this.nav.classList.toggle('open');
        }
    };

    burger.navToggle.addEventListener('click', function(e) {  burger.doToggle(e); });
    burger.nav.addEventListener('click', function(e) { burger.doToggle(e); });

};

export default burger;
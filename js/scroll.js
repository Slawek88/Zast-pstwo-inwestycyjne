window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000,
    delay: 1000,
    origin: 'bottom' /*direction*/
})
/*Do sprwia ruchome np menu*/
sr.reveal('.showcase-left', {
    /*zmiana nazwy classy lub id*/
    duration: 2000,
    /* duration - czas*/
    origin: 'left',
    distance: '300px' /*odleglosc do pokonania*/
})
sr.reveal('.showcase-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
})
sr.reveal('hr', {
    duration: 2000,
    delay: 2000,
    origin: 'bottom'
})

sr.reveal('#about-info div', {
    duration: 2000,
    origin: 'bottom'
})
sr.reveal('.info-left', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
})
sr.reveal('.info-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px',
    viewFactor: 0.2
})
sr.reveal('.info-center', {
    duration: 2000,
    delay: 1000,
    origin: 'bottom'
})
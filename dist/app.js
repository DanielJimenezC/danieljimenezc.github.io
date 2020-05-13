new fullpage('#fullpage', {

    //Licencia
    licenseKey: 'OpenSource',

    //Navigation
    anchors: ['Home', 'About', 'Technologies', 'Certifications'],
    navigation: true,
    loopBottom: true,

    //Scrolling
    touchSensitivity: 15,
    autoScrolling: true,
    scrollOverflow: true,

    //Design
    sectionsColor: ['#1c1c1c', '#dedede', '#1c1c1c', '#dedede'],

    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector("h1");
        const tl = new TimelineMax({ delay: 0.5 });
        tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });

        if (destination.index === 0) {
            var subtitle = document.querySelectorAll('.body-subtitle');
            tl.fromTo(subtitle, 0.3, { y: "20", opacity: 0 }, { y: 0, opacity: 1 });
        }
        if (destination.index === 1) {
            var about = document.querySelectorAll('.about-text-bold');
            var about_ligth = document.querySelectorAll('.about-text');
            var text = document.querySelectorAll('.fp-right');
            var profile = document.querySelectorAll('.profile');
            tl
              .fromTo(about, 0.3, { x: "-50", opacity: 0 }, { x: 0, opacity: 1 })
              .fromTo(about_ligth, 0.3, { x: "-50", opacity: 0 }, { x: 0, opacity: 1 })
              .fromTo(profile, 0.5, { x: "50", opacity: 0}, { x: 0, opacity: 1 });
        }
        if (destination.index === 2) {
            var tech1 = document.querySelectorAll('.image-1');
            var tech2 = document.querySelectorAll('.image-2');
            var tech3 = document.querySelectorAll('.image-3');
            tl.fromTo(tech1, 0.3, { y: "30", opacity: 0 }, { y: 0, opacity: 1 })
              .fromTo(tech2, 0.3, { y: "30", opacity: 0 }, { y: 0, opacity: 1 })
              .fromTo(tech3, 0.3, { y: "30", opacity: 0 }, { y: 0, opacity: 1 });
        }
    }
});
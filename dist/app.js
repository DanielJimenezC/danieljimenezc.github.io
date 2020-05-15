new fullpage('#fullpage', {

    //Licencia
    licenseKey: '15560068-077B4EC4-B9C3AECE-631A2B58',

    //Navigation
    anchors: ['Home', 'About', 'Technologies', 'Certifications', 'Contact'],
    navigation: true,
    loopBottom: true,

    //Scrolling
    touchSensitivity: 15,
    autoScrolling: true,
    scrollOverflow: true,

    //Design
    sectionsColor: ['#1c1c1c', '#dedede', '#1c1c1c', '#dedede', '#1c1c1c'],
    
    afterRender() {
        var sec1 = document.querySelectorAll('.s1');
        var t1 = document.querySelectorAll('.t1');
        var t2 = document.querySelectorAll('.t2');
        const avi = new TimelineMax({ delay: 0.1 });
        avi.fromTo(sec1, 1, { y: "150", opacity: 0 }, { y: 0, opacity: 1 })
           .fromTo(t1, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 })
           .fromTo(t2, 0.3, { y: "20", opacity: 0 }, { y: 0, opacity: 1 });
        console.log("Se renderizo");
    },

    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector("h1");
        var sec1 = document.querySelectorAll('.s1');
        const tl = new TimelineMax({ delay: 0.5 });
        if (destination.index === 0) {
            tl.fromTo(sec1, 1, { y: "150", opacity: 0 }, { y: 0, opacity: 1 });
        }
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
            tl.fromTo(tech1, 0.4, { y: "30", opacity: 0 }, { y: 0, opacity: 0.5 })
              .fromTo(tech2, 0.4, { y: "30", opacity: 0 }, { y: 0, opacity: 0.5 })
              .fromTo(tech3, 0.4, { y: "30", opacity: 0 }, { y: 0, opacity: 0.5 });
        }
        if (destination.index === 3) {
            var cert = document.querySelectorAll('.cert-1');
            tl.fromTo(cert, 0.4, { y: "30", opacity: 0 }, { y: 0, opacity: 0.7 });
        }
        if (destination.index === 4) {
            var contc1 = document.querySelectorAll('.contact-1');
            var contc2 = document.querySelectorAll('.contact-2');
            var credits = document.querySelectorAll('.credits');
            tl.fromTo(contc1, 0.4, { y: "30", opacity: 0 }, { y: 0, opacity: 0.5 })
              .fromTo(contc2, 0.4, { y: "30", opacity: 0 }, { y: 0, opacity: 0.5 })
              .fromTo(credits, 0.4, {  y: "30", opacity: 0 }, { y: 0, opacity: 1 })
        }
    }
});
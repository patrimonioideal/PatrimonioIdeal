    // SCROLL REVEAL
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
        }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.politics-card, .numero-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // TRANSLATIONS
    const translations = {
        es: {
        navManifesto: "Manifiesto",
        navPolicies: "Políticas",
        navFounder: "Fundadora",
        navJoin: "Únete",

        heroTag: "Por una mejor Colombia",
        heroTitle: "Por un <em>Patrimonio</em> que sea de todos.",
        heroSubtitle:
            "Un partido que nace de la academia, la calle y la convicción: Colombia merece justicia social, libertad económica y futuro verde.",

        manifestoBtn: "Nuestro manifiesto",
        joinBtn: "Únete ahora",

        slogan: '"El progreso verdadero no deja a nadie atrás."',

        ticker: [
            "Socialismo",
            "Socialdemocracia",
            "Progresivismo",
            "Libre Comercio",
            "Conservadurismo Económico",
            "Liberalismo Social",
            "Ambientalismo",
            "Feminismo",
            "Todo por Colombia"
        ],

        manifestoTitle: "Manifiesto",

        manifesto1:
            "Creemos que <strong>Colombia merece algo mejor</strong>: un país donde la economía trabaje para las personas y no al revés, donde los derechos no sean privilegios y donde el planeta que habitamos sea tratado con respeto.",

        manifesto2:
            "Somos un partido que entiende que el mercado y el Estado no son enemigos, sino herramientas. Que el progresismo no riñe con la responsabilidad fiscal. Que el feminismo es también económico, y el ambientalismo también es justicia.",

        manifesto3:
            "Nacemos desde abajo, desde las aulas, la realidad en que vive Colombia y las redes. Somos el partido de quienes <strong>creen que cambiar las cosas es posible</strong>.",

        policiesTitle: "Nuestras Políticas",

        policies: [
            {
            title: "Socialismo",
            text: "Redistribución justa de la riqueza. Servicios públicos de calidad para todas las personas, sin excepción."
            },
            {
            title: "Socialdemocracia",
            text: "Estado de bienestar robusto. Educación, salud y pensiones como derechos fundamentales, no mercancías."
            },
            {
            title: "Progresivismo",
            text: "Avanzar hacia una Colombia más igualitaria, plural e inclusiva. El progreso es para todos y todas."
            },
            {
            title: "Libre Comercio",
            text: "Apertura económica responsable que impulse la competitividad colombiana en el mundo con reglas claras."
            },
            {
            title: "Responsabilidad Fiscal",
            text: "Gasto público eficiente. Finanzas sanas como base para la justicia social sostenida en el largo plazo."
            },
            {
            title: "Liberalismo Social",
            text: "Respeto absoluto a las libertades individuales. El Estado fuera de la vida privada de las personas."
            },
            {
            title: "Ambientalismo",
            text: "Transición ecológica justa. La biodiversidad colombiana es nuestro mayor patrimonio: hay que protegerla."
            },
            {
            title: "Feminismo",
            text: "Igualdad real entre géneros en salarios, representación y seguridad. Los derechos de las mujeres no son negociables."
            }
        ],

        founderTag: "Fundadora",

        founderTitle:
            "<em>Camila Lucía</em><br>Caleon-Duque",

        founder1:
            "Estudiante de bachillerato con la convicción de que la política colombiana necesita voces nuevas, jóvenes y valientes. Pronto, estudiante de Ingeniería Informática.",

        founder2:
            "Camila fundó Patrimonio Ideal desde la certeza de que la tecnología, la equidad y la democracia van de la mano. Que ser joven no es un obstáculo para transformar el país, sino exactamente la razón para hacerlo.",

        founder3:
            "Su visión une el rigor analítico de las ciencias exactas con el compromiso humano de la política. <strong>Patrimonio Ideal es un legado en construcción.</strong>",

        stats: [
            "Ejes Programáticos",
            "Partido con Visión",
            "Colombianos por Convencer"
        ],

        joinTitle:
            "¿Listo para cambiar<br><em>Colombia</em>?",

        joinText:
            "Déjanos tu correo y te contamos cómo ser parte del movimiento que está construyendo el futuro que el país merece.",

        joinPlaceholder: "tu@correo.com",
        joinAction: "Únete",

        footerPress: "Prensa",
        footerContact: "Contacto",

        success:
            "¡Gracias! Pronto te escribimos. 💜",

        invalid:
            "Por favor ingresa un correo válido"
        },

        en: {
        navManifesto: "Manifesto",
        navPolicies: "Policies",
        navFounder: "Founder",
        navJoin: "Join",

        heroTag: "For a better Colombia",
        heroTitle:
            "For a <em>Heritage</em> that belongs to everyone.",

        heroSubtitle:
            "A party born from academia, the streets, and conviction: Colombia deserves social justice, economic freedom, and a green future.",

        manifestoBtn: "Our manifesto",
        joinBtn: "Join now",

        slogan:
            '"True progress leaves no one behind."',

        ticker: [
            "Socialism",
            "Social Democracy",
            "Progressivism",
            "Free Trade",
            "Economic Conservatism",
            "Social Liberalism",
            "Environmentalism",
            "Feminism",
            "Everything for Colombia"
        ],

        manifestoTitle: "Manifesto",

        manifesto1:
            "We believe that <strong>Colombia deserves better</strong>: a country where the economy works for people and not the other way around, where rights are not privileges, and where the planet we inhabit is treated with respect.",

        manifesto2:
            "We are a party that understands that the market and the state are not enemies, but tools. That progressivism is compatible with fiscal responsibility. That feminism is also economic, and environmentalism is also justice.",

        manifesto3:
            "We are born from below — from classrooms, Colombia’s lived reality, and the internet. We are the party of those who <strong>believe change is possible</strong>.",

        policiesTitle: "Our Policies",

        policies: [
            {
            title: "Socialism",
            text: "Fair redistribution of wealth. High-quality public services for everyone, without exception."
            },
            {
            title: "Social Democracy",
            text: "A strong welfare state. Education, healthcare, and pensions as fundamental rights, not commodities."
            },
            {
            title: "Progressivism",
            text: "Moving toward a more equal, plural, and inclusive Colombia. Progress must belong to everyone."
            },
            {
            title: "Free Trade",
            text: "Responsible economic openness that boosts Colombian competitiveness globally through clear rules."
            },
            {
            title: "Fiscal Responsibility",
            text: "Efficient public spending. Healthy finances as the basis for long-term social justice."
            },
            {
            title: "Social Liberalism",
            text: "Absolute respect for individual freedoms. The state should stay out of people’s private lives."
            },
            {
            title: "Environmentalism",
            text: "A fair ecological transition. Colombia’s biodiversity is our greatest heritage and must be protected."
            },
            {
            title: "Feminism",
            text: "Real gender equality in wages, representation, and safety. Women's rights are non-negotiable."
            }
        ],

        founderTag: "Founder",

        founderTitle:
            "<em>Camila Lucía</em><br>Caleon-Duque",

        founder1:
            "A high school student convinced that Colombian politics needs new, young, and courageous voices. Soon to be a Computer Engineering student.",

        founder2:
            "Camila founded Patrimonio Ideal with the certainty that technology, equality, and democracy go hand in hand. That being young is not an obstacle to transforming the country, but precisely the reason to do so.",

        founder3:
            "Her vision combines the analytical rigor of the exact sciences with the human commitment of politics. <strong>Patrimonio Ideal is a legacy under construction.</strong>",

        stats: [
            "Programmatic Axes",
            "Party with Vision",
            "Colombians to Convince"
        ],

        joinTitle:
            "Ready to change<br><em>Colombia</em>?",

        joinText:
            "Leave us your email and discover how to become part of the movement building the future this country deserves.",

        joinPlaceholder: "you@email.com",
        joinAction: "Join",

        footerPress: "Press",
        footerContact: "Contact",

        success:
            "Thank you! We will contact you soon. 💜",

        invalid:
            "Please enter a valid email"
        }
    };

    let currentLang = 'es';

    // LANGUAGE SWITCHER
    function setLanguage(lang) {
        currentLang = lang;

        document.documentElement.lang = lang;

        // NAV
        document.querySelectorAll('.nav-links a')[0].innerHTML = translations[lang].navManifesto;
        document.querySelectorAll('.nav-links a')[1].innerHTML = translations[lang].navPolicies;
        document.querySelectorAll('.nav-links a')[2].innerHTML = translations[lang].navFounder;
        document.querySelectorAll('.nav-links a')[3].innerHTML = translations[lang].navJoin;

        // HERO
        document.querySelector('.hero-tag').innerHTML = translations[lang].heroTag;
        document.querySelector('.hero-title').innerHTML = translations[lang].heroTitle;
        document.querySelector('.hero-subtitle').innerHTML = translations[lang].heroSubtitle;

        document.querySelector('.btn-primary').innerHTML = translations[lang].manifestoBtn;
        document.querySelector('.btn-outline').innerHTML = translations[lang].joinBtn;

        document.querySelector('.hero-slogan-block p').innerHTML = translations[lang].slogan;

        // TICKER
        const tickerHTML = translations[lang].ticker
        .concat(translations[lang].ticker)
        .map(item => `<span>${item}</span>`)
        .join('');

        document.querySelector('.ticker-inner').innerHTML = tickerHTML;

        // MANIFESTO
        document.querySelector('.manifiesto-label h2').innerHTML =
        translations[lang].manifestoTitle;

        const manifestoParagraphs =
        document.querySelectorAll('.manifiesto-content p');

        manifestoParagraphs[0].innerHTML =
        translations[lang].manifesto1;

        manifestoParagraphs[1].innerHTML =
        translations[lang].manifesto2;

        manifestoParagraphs[2].innerHTML =
        translations[lang].manifesto3;

        // POLICIES
        document.querySelector('#politicas .section-header h2').innerHTML =
        translations[lang].policiesTitle;

        const policyCards =
        document.querySelectorAll('.politics-card');

        policyCards.forEach((card, index) => {
        card.querySelector('h3').innerHTML =
            translations[lang].policies[index].title;

        card.querySelector('p').innerHTML =
            translations[lang].policies[index].text;
        });

        // FOUNDER
        document.querySelector('.fundadora-text .tag').innerHTML =
        translations[lang].founderTag;

        document.querySelector('.fundadora-text h2').innerHTML =
        translations[lang].founderTitle;

        const founderParagraphs =
        document.querySelectorAll('.fundadora-text p');

        founderParagraphs[1].innerHTML =
        translations[lang].founder1;

        founderParagraphs[2].innerHTML =
        translations[lang].founder2;

        founderParagraphs[3].innerHTML =
        translations[lang].founder3;

        // STATS
        const stats =
        document.querySelectorAll('.numero-item .label');

        stats.forEach((stat, index) => {
        stat.innerHTML = translations[lang].stats[index];
        });

        // JOIN
        document.querySelector('#unete h2').innerHTML =
        translations[lang].joinTitle;

        document.querySelector('#unete p').innerHTML =
        translations[lang].joinText;

        document.querySelector('.join-form input').placeholder =
        translations[lang].joinPlaceholder;

        document.querySelector('.join-form button').innerHTML =
        translations[lang].joinAction;

        // FOOTER
        const footerLinks =
        document.querySelectorAll('.footer-links a');

        footerLinks[0].innerHTML = translations[lang].navManifesto;
        footerLinks[1].innerHTML = translations[lang].navPolicies;
        footerLinks[2].innerHTML = translations[lang].navFounder;
        footerLinks[3].innerHTML = translations[lang].footerPress;
        footerLinks[4].innerHTML = translations[lang].footerContact;

        // ACTIVE BUTTONS
        document.getElementById('lang-es')
        .classList.toggle('active', lang === 'es');

        document.getElementById('lang-en')
        .classList.toggle('active', lang === 'en');
    }

    // BUTTONS
    document.getElementById('lang-es')
        .addEventListener('click', () => {
        setLanguage('es');
        });

    document.getElementById('lang-en')
        .addEventListener('click', () => {
        setLanguage('en');
        });

    // JOIN FORM
    document.querySelector('.join-form button')
        .addEventListener('click', () => {

        const input =
            document.querySelector('.join-form input');

        if (input.value && input.value.includes('@')) {

            input.value =
            translations[currentLang].success;

            input.style.color =
            'var(--pink-pastel)';

            input.disabled = true;

        } else {

            input.style.borderColor =
            '#ff6b9d';

            input.placeholder =
            translations[currentLang].invalid;
        }
        });
(function () {
  'use strict';

  var SUPPORTED = [
    { code: 'en', flag: '🇬🇧', label: 'EN' },
    { code: 'fr', flag: '🇫🇷', label: 'FR' },
    { code: 'es', flag: '🇪🇸', label: 'ES' },
    { code: 'it', flag: '🇮🇹', label: 'IT' },
    { code: 'de', flag: '🇩🇪', label: 'DE' },
    { code: 'pt', flag: '🇵🇹', label: 'PT' }
  ];

  var I18N = {

    /* ═══════════════ ENGLISH ═══════════════ */
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.experience': 'Experience',
      'nav.contact': 'Contact',

      'hero.status': 'Available for work',
      'hero.greeting': "Hello, I'm",
      'hero.tagline': 'Senior Full Stack Developer & Tech Lead - building scalable Java/Spring microservices, modern Angular/React UIs, and cross-platform Rust/Tauri apps.',
      'hero.cta_projects': 'View Projects',
      'hero.cta_contact': 'Get in Touch',

      'about.heading': 'About',
      'about.heading_accent': 'Me',
            'about.body': '5+ years building scalable Java/Spring microservices, Angular/React UIs and cross-platform Rust/Tauri apps. Currently Tech Lead on 6 parallel applications at <strong class="glow-accent font-semibold">Capgemini</strong> for the <strong class="glow-accent font-semibold">French Ministries (Division Numérique)</strong>, after delivering enterprise systems for <strong class="glow-accent font-semibold">Pelayo Seguros</strong>, <strong class="glow-accent font-semibold">SFR</strong>, <strong class="glow-accent font-semibold">Deutsche Bank</strong>, <strong class="glow-accent font-semibold">Covestro</strong>, <strong class="glow-accent font-semibold">Siemens</strong> and <strong class="glow-accent font-semibold">Atos</strong>. Multilingual, hands-on, from legacy monoliths to modern microservices.',
      'about.body2': 'Disciplined on schedules and deliveries, flexible on the approach. Easy communication with clients, colleagues, anyone really. A bit of dry humor, always respectful, conscientious about the craft. On the side, a long-running obsession with <strong class="glow-cyan">futuristic and cyberpunk aesthetics</strong> that constantly bleeds into my game design and UI work.',
      'about.lang.fr': 'French',
      'about.lang.en': 'English',
      'about.lang.es': 'Spanish',
      'about.lang.ru': 'Russian',
      'about.level.native': 'Native',
      'about.level.near_native': 'Near Native',
      'about.level.fluent': 'Fluent',
      'about.level.conversational': 'Conversational',

      'projects.heading': 'Featured',
      'projects.heading_accent': 'Projects',
      'projects.yucast': 'Streaming & broadcasting platform - real-time media delivery, user interfaces, and backend architecture for live content.',
      'projects.orring': 'Product landing page for Orring - modern responsive design, brand identity, and conversion-focused layout showcasing the app.',
      'projects.patotube': 'Cross-platform media app (Windows, Linux, Android) - video discovery and playback experience with a custom-built UI and native packaging.',
      'projects.n3': 'Custom AI agent paired with a learning environment - personalized assistant, knowledge ingestion, and an integrated school module to train, test and grow the model.',
      'projects.listoria': 'Full 2D RPG - weapons, magic spells, enemy AI, particle effects, upgrade system, and original soundtrack.',
      'projects.ecom.title': 'E-Commerce Platform',
      'projects.ecom.desc': 'Full-stack e-commerce solution featuring product catalog, shopping cart, blog engine, user authentication, and payment flow.',
      'common.view_landing': 'View Landing',

      'skills.heading': 'Skills &',
      'skills.heading_accent': 'Mastery',
      'skills.tagline': '// the full toolbox',
      'skills.cat.languages': 'Languages',
      'skills.cat.frontend': 'Frontend',
      'skills.cat.crossplatform': 'Cross-Platform & Mobile',
      'skills.cat.backend': 'Backend & Frameworks',
      'skills.cat.data': 'Data & Messaging',
      'skills.cat.devops': 'DevOps & CI/CD',
      'skills.cat.observability': 'Observability',
      'skills.cat.architecture': 'Architecture & Patterns',
      'skills.cat.security': 'Security & Systems',
      'skills.cat.creative': 'Creative & Game Dev',

      'exp.heading': 'Career',
      'exp.heading_accent': 'Journey',
      'exp.tagline': '// 5+ years • click any role to expand',
      'exp.current_pill': 'CURRENT',
      'exp.certifications': '// Certifications',
      'exp.daily_arsenal': 'Daily Arsenal',
      'exp.six_apps_tag': '// 6 applications - concurrent ownership',
      'exp.app': 'Application',
      'exp.capgemini.client': 'French Government',
      'exp.capgemini.role': 'Senior Full Stack Developer • Tech Lead • 6 parallel applications across 4 ministries',
      'exp.capgemini.intro': 'Lead developer on <strong class="glow-accent">6 concurrent enterprise applications</strong> for the French government. Daily juggling between <em>legacy Java monoliths</em> and <em>modern microservices</em>, owning full lifecycle from feature design to production deployment, observability and incident response.',
      'exp.client.public': 'Ministère Public',
      'exp.client.sante': 'Ministère Santé',
      'exp.client.travail': 'Ministère Travail',
      'exp.client.division': 'Division Numérique',
      'exp.period.capgemini': '2025 - Present',
      'exp.period.pelayo': 'Jun - Nov 2025',
      'exp.period.sfr': 'Apr 2024 - Apr 2025',
      'exp.period.piercingxxl': 'Aug 2023 - Apr 2024',
      'exp.period.atos_digital': 'Oct 2022 - Jun 2023',
      'exp.period.covestro': 'Dec 2021 - Sep 2022',
      'exp.period.db': 'Jan - Nov 2021',
      'exp.period.atos_tenerife': 'Jan - Oct 2020',
      'exp.period.bragginn': 'Apr - Aug 2017',

      'exp.ach.pelayo':
        '<li>Designed and built a <strong class="glow-accent">centralized communication manager</strong> in Java/Spring Boot integrating Pelayo’s internal APIs and proprietary libraries with PostgreSQL.</li>' +
        '<li>Established a <strong class="glow-accent">3-layer hexagonal architecture</strong> with full use-case implementation, ensuring separation of concerns and maintainability.</li>' +
        '<li>Built communication services for the automotive insurance sector - client notifications, email flows and system alerts.</li>' +
        '<li>Integrated Pelayo’s specific <strong class="glow-accent">Oracle JDBC connector</strong> for bidirectional comms with legacy DB systems.</li>' +
        '<li>Designed and optimized the database schema - performant tables, data migration and conversion.</li>' +
        '<li>Implemented a <strong class="glow-accent">Kafka-orchestrated tracking system</strong> guaranteeing traceability and resilience across microservices.</li>' +
        '<li>Adapted quickly to Pelayo’s technical standards - legacy code, internal libraries, custom annotations.</li>',
      'exp.ach.sfr':
        '<li>Delivered end-to-end solutions covering <strong class="glow-accent">security</strong> and seamless SQL integration.</li>' +
        '<li>Built scalable systems optimizing front-end / back-end communication for efficiency and performance.</li>' +
        '<li>Established front-end architecture for <strong class="glow-accent">network & microwave communication</strong> web apps - responsive Angular/TS/HTML/CSS UIs.</li>' +
        '<li>Implemented robust security systems and network visualization solutions, integrating modern UIs with legacy Java backends via JPA.</li>' +
        '<li>Managed project collaboration through Git/GitLab, translating complex client requirements into technical specs.</li>' +
        '<li>Improved system response times via <strong class="glow-accent">query refactoring</strong> and caching strategies for several batch jobs.</li>',
      'exp.ach.piercingxxl':
        '<li>Managed and maintained the <strong class="glow-accent">PiercingXXL e-commerce platform</strong> - daily back/front-end updates in Python & Liquid (Shopify).</li>' +
        '<li>Built internal admin tools with <strong class="glow-accent">Python-Django and PHP-Laravel</strong> for customer data management and querying.</li>' +
        '<li>Administered MySQL databases, implementing complex data sequences and optimizing DB performance.</li>' +
        '<li>Collaborated with the design team to improve UX and implement responsive design across the platform.</li>' +
        '<li>Translated complex client requirements into technical specifications while proactively improving UI/UX.</li>',
      'exp.ach.atos_digital':
        '<li>Developed a <strong class="glow-accent">document management platform</strong> using Java 17 + Spring Boot, continuing the Atos enterprise collaboration.</li>' +
        '<li>Built backend components for digital document processing/storage via RESTful APIs.</li>' +
        '<li>Created reusable Angular 14 components for document visualization and management.</li>' +
        '<li>Worked with PostgreSQL for structured metadata and <strong class="glow-accent">MongoDB</strong> for unstructured document content.</li>' +
        '<li>Integrated third-party services for automated document conversion and processing.</li>' +
        '<li>Refactored SQL queries to optimize system response times.</li>' +
        '<li>Worked in 2-week sprints (agile), daily stand-ups and task planning.</li>' +
        '<li>Implemented JUnit unit tests and integration tests; used <strong class="glow-accent">Docker + GitLab CI</strong> for consistent dev environments.</li>',
      'exp.ach.covestro':
        '<li>Built a <strong class="glow-accent">data-analysis platform for the financial sector</strong> with Java 17, Spring Boot and microservices.</li>' +
        '<li>Implemented advanced authentication with <strong class="glow-accent">OAuth 2.0 + JWT</strong>, integrating third-party verification across multiple layers.</li>' +
        '<li>Designed and developed interactive Angular 14 dashboards for real-time financial data visualization.</li>' +
        '<li>Optimized complex SQL queries - <strong class="glow-accent">60% response-time reduction</strong> via advanced indexing and partitioning.</li>' +
        '<li>Wrote Python automation scripts for historical data migration and validation.</li>' +
        '<li>Implemented CI/CD pipelines using <strong class="glow-accent">Jenkins + Docker</strong>, significantly reducing deployment time.</li>' +
        '<li>Collaborated with international teams in Scrum - weekly stand-ups and sprint planning.</li>',
      'exp.ach.db':
        '<li>Built and maintained the <strong class="glow-accent">StockYou online order-management application</strong>.</li>' +
        '<li>Joined the design & dev team on the server side - Java SE 8 + Spring Boot.</li>' +
        '<li>Contributed to the software architecture, ensuring stability and performance.</li>' +
        '<li>Implemented mechanisms to <strong class="glow-accent">protect sensitive data</strong> and restrict access to authorized users only.</li>' +
        '<li>Optimized and cached SQL queries - pagination and index optimization.</li>' +
        '<li>Contributed to order-process automation and workflow optimization.</li>',
      'exp.ach.atos_tenerife':
        '<li>Built server-side parts of a scalable order-management system with <strong class="glow-accent">Java 11 + Spring Boot</strong> - microservices architecture, RESTful API design.</li>' +
        '<li>Designed the <strong class="glow-accent">security infrastructure</strong> with Spring Security - multi-layer authentication and role-based authorization.</li>' +
        '<li>Used Spring Data JPA + Hibernate for efficient DB interactions - query optimization, robust persistence.</li>' +
        '<li>Contributed to front-end development with modern JS frameworks.</li>' +
        '<li>Worked in an agile environment with sprint planning and daily stand-ups.</li>',
      'exp.ach.bragginn':
        '<li>Set up and maintained wired network systems and hardware in the restaurant.</li>' +
        '<li>Developed the <strong class="glow-accent">backend architecture for employee account administration</strong>.</li>' +
        '<li>Implemented optimized relational database systems for various operations.</li>' +
        '<li>Improved data retrieval/update processes, significantly increasing system response times.</li>' +
        '<li>Contributed to automated workflows for employee onboarding and account management.</li>',

      'contact.heading': "Let's",
      'contact.heading_accent': 'Connect',
      'contact.subheading': 'Ready to work together?',
      'contact.body': "Multilingual and immediately available, I'm ready to bring my diverse skill set to your next project. Let's build something great.",
      'contact.location': 'France',
      'contact.form.name': 'Your Name',
      'contact.form.email': 'Your Email',
      'contact.form.message': 'Your Message',
      'contact.send': 'Send Message',

      'footer.copy': '&copy; 2026 Ilya Alexeev. All rights reserved.'
    },

    /* ═══════════════ FRANÇAIS ═══════════════ */
    fr: {
      'nav.home': 'Accueil',
      'nav.about': 'À propos',
      'nav.projects': 'Projets',
      'nav.skills': 'Compétences',
      'nav.experience': 'Expérience',
      'nav.contact': 'Contact',

      'hero.status': 'Disponible pour des missions',
      'hero.greeting': 'Bonjour, je suis',
      'hero.tagline': 'Senior Full Stack Developer & Tech Lead - conception de microservices Java/Spring scalables, interfaces modernes Angular/React et applications cross-platform Rust/Tauri.',
      'hero.cta_projects': 'Voir mes projets',
      'hero.cta_contact': 'Me contacter',

      'about.heading': 'À propos',
      'about.heading_accent': 'de moi',
            'about.body': '5 ans et plus à concevoir des microservices Java/Spring scalables, des interfaces Angular/React et des applications cross-platform Rust/Tauri. Actuellement Tech Lead sur 6 applications en parallèle chez <strong class="glow-accent font-semibold">Capgemini</strong> pour les <strong class="glow-accent font-semibold">Ministères Français (Division Numérique)</strong>, après avoir livré des systèmes d’entreprise pour <strong class="glow-accent font-semibold">Pelayo Seguros</strong>, <strong class="glow-accent font-semibold">SFR</strong>, <strong class="glow-accent font-semibold">Deutsche Bank</strong>, <strong class="glow-accent font-semibold">Covestro</strong>, <strong class="glow-accent font-semibold">Siemens</strong> et <strong class="glow-accent font-semibold">Atos</strong>. Multilingue, hands-on, des monolithes legacy aux microservices modernes.',
      'about.body2': 'Discipliné sur les horaires et les livraisons, flexible sur l’approche. Communication très aisée avec les clients, les collègues, et à peu près n’importe qui. Une pointe d’humour pince-sans-rire, toujours respectueux et consciencieux du travail. À côté, une obsession de longue date pour les <strong class="glow-cyan">esthétiques futuristes et cyberpunk</strong> qui déteint en permanence sur mes designs de jeux vidéo et mes UI.',
      'about.lang.fr': 'Français',
      'about.lang.en': 'Anglais',
      'about.lang.es': 'Espagnol',
      'about.lang.ru': 'Russe',
      'about.level.native': 'Natif',
      'about.level.near_native': 'Quasi natif',
      'about.level.fluent': 'Courant',
      'about.level.conversational': 'Conversationnel',

      'projects.heading': 'Projets',
      'projects.heading_accent': 'phares',
      'projects.yucast': 'Plateforme de streaming & broadcasting - diffusion média temps réel, interfaces utilisateurs et architecture backend pour contenu live.',
      'projects.orring': 'Landing page produit pour Orring - design responsive moderne, identité de marque et mise en page orientée conversion mettant en valeur l’app.',
      'projects.patotube': 'Application média cross-platform (Windows, Linux, Android) - découverte et lecture de vidéos avec UI sur-mesure et packaging natif.',
      'projects.n3': 'Agent IA personnalisé couplé à un environnement d’apprentissage - assistant personnel, ingestion de connaissances et module école intégré pour entraîner, tester et faire grandir le modèle.',
      'projects.listoria': 'RPG 2D complet - armes, sorts magiques, IA d’ennemis, effets de particules, système d’amélioration et bande originale.',
      'projects.ecom.title': 'Plateforme E-Commerce',
      'projects.ecom.desc': 'Solution e-commerce full-stack avec catalogue produits, panier, moteur de blog, authentification utilisateurs et tunnel de paiement.',
      'common.view_landing': 'Voir la landing',

      'skills.heading': 'Compétences &',
      'skills.heading_accent': 'maîtrises',
      'skills.tagline': '// la boîte à outils complète',
      'skills.cat.languages': 'Langages',
      'skills.cat.frontend': 'Frontend',
      'skills.cat.crossplatform': 'Cross-Platform & Mobile',
      'skills.cat.backend': 'Backend & Frameworks',
      'skills.cat.data': 'Données & Messaging',
      'skills.cat.devops': 'DevOps & CI/CD',
      'skills.cat.observability': 'Observabilité',
      'skills.cat.architecture': 'Architecture & Patterns',
      'skills.cat.security': 'Sécurité & Systèmes',
      'skills.cat.creative': 'Créatif & Game Dev',

      'exp.heading': 'Parcours',
      'exp.heading_accent': 'professionnel',
      'exp.tagline': '// 5+ ans • cliquer sur un poste pour le déplier',
      'exp.current_pill': 'ACTUEL',
      'exp.certifications': '// Certifications',
      'exp.daily_arsenal': 'Arsenal quotidien',
      'exp.six_apps_tag': '// 6 applications - en charge simultanée',
      'exp.app': 'Application',
      'exp.capgemini.client': 'Gouvernement Français',
      'exp.capgemini.role': 'Senior Full Stack Developer • Tech Lead • 6 applications en parallèle sur 4 ministères',
      'exp.capgemini.intro': 'Lead developer sur <strong class="glow-accent">6 applications d’entreprise en simultané</strong> pour le gouvernement français. Jonglage quotidien entre <em>monolithes Java legacy</em> et <em>microservices modernes</em>, prise en charge du cycle complet : conception, déploiement en production, observabilité et gestion d’incidents.',
      'exp.client.public': 'Ministère Public',
      'exp.client.sante': 'Ministère de la Santé',
      'exp.client.travail': 'Ministère du Travail',
      'exp.client.division': 'Division Numérique',
      'exp.period.capgemini': '2025 - Aujourd’hui',
      'exp.period.pelayo': 'Juin - Nov. 2025',
      'exp.period.sfr': 'Avril 2024 - Avril 2025',
      'exp.period.piercingxxl': 'Août 2023 - Avril 2024',
      'exp.period.atos_digital': 'Oct. 2022 - Juin 2023',
      'exp.period.covestro': 'Déc. 2021 - Sept. 2022',
      'exp.period.db': 'Jan. - Nov. 2021',
      'exp.period.atos_tenerife': 'Jan. - Oct. 2020',
      'exp.period.bragginn': 'Avril - Août 2017',

      'exp.ach.pelayo':
        '<li>Conception et développement d’un <strong class="glow-accent">gestionnaire de communication centralisé</strong> en Java/Spring Boot intégrant les APIs internes et les librairies propriétaires de Pelayo avec PostgreSQL.</li>' +
        '<li>Mise en place d’une <strong class="glow-accent">architecture hexagonale en 3 couches</strong> avec implémentation complète des use cases, garantissant la séparation des responsabilités et la maintenabilité du code.</li>' +
        '<li>Développement de services de communication pour le secteur automobile - notifications client, flux d’emails et alertes système.</li>' +
        '<li>Intégration du <strong class="glow-accent">connecteur JDBC Oracle spécifique de Pelayo</strong> pour assurer la communication bidirectionnelle avec les systèmes legacy.</li>' +
        '<li>Conception et optimisation du schéma de base - tables performantes, migration et conversion des données existantes.</li>' +
        '<li>Mise en place d’un <strong class="glow-accent">système de suivi orchestré par Kafka</strong> garantissant la traçabilité et la résilience entre microservices.</li>' +
        '<li>Adaptation rapide aux standards techniques de Pelayo - code legacy, librairies internes, annotations personnalisées.</li>',
      'exp.ach.sfr':
        '<li>Livraison de solutions de bout en bout couvrant la <strong class="glow-accent">sécurité</strong> et l’intégration SQL fluide.</li>' +
        '<li>Mise en place de systèmes scalables optimisant la communication front-end / back-end pour l’efficacité et la performance.</li>' +
        '<li>Architecture front-end pour applications web de <strong class="glow-accent">communication réseau & micro-ondes</strong> - UIs responsives Angular/TS/HTML/CSS.</li>' +
        '<li>Implémentation de systèmes de sécurité robustes et de solutions de visualisation réseau, intégrant des UIs modernes avec des backends Java legacy via JPA.</li>' +
        '<li>Collaboration projet via Git/GitLab, traduction d’exigences clients complexes en spécifications techniques.</li>' +
        '<li>Amélioration des temps de réponse via <strong class="glow-accent">refactoring de requêtes</strong> et stratégies de cache sur plusieurs jobs.</li>',
      'exp.ach.piercingxxl':
        '<li>Gestion et maintenance de la <strong class="glow-accent">plateforme e-commerce PiercingXXL</strong> - mises à jour quotidiennes back/front en Python & Liquid (Shopify).</li>' +
        '<li>Développement d’outils admin internes en <strong class="glow-accent">Python-Django et PHP-Laravel</strong> pour la gestion des données client.</li>' +
        '<li>Administration de bases MySQL, séquences de données complexes et optimisation des performances.</li>' +
        '<li>Collaboration avec l’équipe design pour améliorer l’UX et implémenter un design responsive sur toute la plateforme.</li>' +
        '<li>Traduction des exigences clients complexes en spécifications techniques tout en améliorant proactivement l’UI/UX.</li>',
      'exp.ach.atos_digital':
        '<li>Développement d’une <strong class="glow-accent">plateforme de gestion documentaire</strong> avec Java 17 + Spring Boot, dans la continuité de la collaboration Atos.</li>' +
        '<li>Composants backend pour le traitement et le stockage de documents via APIs RESTful.</li>' +
        '<li>Composants Angular 14 réutilisables pour la visualisation et la gestion documentaire.</li>' +
        '<li>Utilisation de PostgreSQL pour les métadonnées structurées et de <strong class="glow-accent">MongoDB</strong> pour le contenu non structuré.</li>' +
        '<li>Intégration de services tiers pour la conversion et le traitement automatisés.</li>' +
        '<li>Refactoring de requêtes SQL pour optimiser les temps de réponse.</li>' +
        '<li>Sprints agiles de 2 semaines, dailies et planification.</li>' +
        '<li>Tests unitaires JUnit et tests d’intégration ; <strong class="glow-accent">Docker + GitLab CI</strong> pour des environnements cohérents.</li>',
      'exp.ach.covestro':
        '<li>Développement d’une <strong class="glow-accent">plateforme d’analyse de données pour le secteur financier</strong> avec Java 17, Spring Boot et microservices.</li>' +
        '<li>Authentification avancée <strong class="glow-accent">OAuth 2.0 + JWT</strong>, intégrant des services tiers de vérification multi-couches.</li>' +
        '<li>Dashboards Angular 14 interactifs pour la visualisation de données financières en temps réel.</li>' +
        '<li>Optimisation de requêtes SQL complexes - <strong class="glow-accent">réduction de 60% du temps de réponse</strong> via indexation avancée et partitionnement.</li>' +
        '<li>Scripts Python d’automatisation pour la migration et la validation de données historiques.</li>' +
        '<li>Pipelines CI/CD <strong class="glow-accent">Jenkins + Docker</strong>, réduisant significativement le temps de déploiement.</li>' +
        '<li>Collaboration avec des équipes internationales en Scrum - dailies hebdomadaires et planification de sprints.</li>',
      'exp.ach.db':
        '<li>Développement et maintenance de l’application <strong class="glow-accent">StockYou</strong> de gestion de commandes en ligne.</li>' +
        '<li>Intégration de l’équipe design & dev côté serveur - Java SE 8 + Spring Boot.</li>' +
        '<li>Contribution à l’architecture logicielle, garantissant stabilité et performance.</li>' +
        '<li>Mise en place de mécanismes pour <strong class="glow-accent">protéger les données sensibles</strong> et restreindre l’accès aux utilisateurs autorisés.</li>' +
        '<li>Optimisation et mise en cache de requêtes SQL - pagination et optimisation des index.</li>' +
        '<li>Contribution à l’automatisation des processus de commande et à l’optimisation des flux.</li>',
      'exp.ach.atos_tenerife':
        '<li>Développement côté serveur d’un système de gestion de commandes scalable avec <strong class="glow-accent">Java 11 + Spring Boot</strong> - architecture microservices, design d’APIs RESTful.</li>' +
        '<li>Conception de l’<strong class="glow-accent">infrastructure de sécurité</strong> avec Spring Security - authentification multi-couches et autorisation basée sur les rôles.</li>' +
        '<li>Utilisation de Spring Data JPA + Hibernate pour des interactions DB efficaces - optimisation des requêtes, persistance robuste.</li>' +
        '<li>Contribution au développement front-end avec des frameworks JS modernes.</li>' +
        '<li>Environnement agile avec planification de sprints et dailies.</li>',
      'exp.ach.bragginn':
        '<li>Mise en place et maintenance des systèmes réseau filaires et du matériel du restaurant.</li>' +
        '<li>Développement de l’<strong class="glow-accent">architecture backend pour l’administration des comptes employés</strong>.</li>' +
        '<li>Implémentation de bases relationnelles optimisées pour différentes opérations.</li>' +
        '<li>Amélioration des processus de récupération/mise à jour de données, augmentant significativement les temps de réponse.</li>' +
        '<li>Contribution à des workflows automatisés pour l’onboarding employé et la gestion de comptes.</li>',

      'contact.heading': 'Restons',
      'contact.heading_accent': 'en contact',
      'contact.subheading': 'Prêt à collaborer ?',
      'contact.body': 'Multilingue et immédiatement disponible, je suis prêt à mettre mon éventail de compétences au service de votre prochain projet. Construisons quelque chose de génial.',
      'contact.location': 'France',
      'contact.form.name': 'Votre nom',
      'contact.form.email': 'Votre email',
      'contact.form.message': 'Votre message',
      'contact.send': 'Envoyer le message',

      'footer.copy': '&copy; 2026 Ilya Alexeev. Tous droits réservés.'
    },

    /* ═══════════════ ESPAÑOL ═══════════════ */
    es: {
      'nav.home': 'Inicio',
      'nav.about': 'Sobre mí',
      'nav.projects': 'Proyectos',
      'nav.skills': 'Habilidades',
      'nav.experience': 'Experiencia',
      'nav.contact': 'Contacto',

      'hero.status': 'Disponible para trabajar',
      'hero.greeting': 'Hola, soy',
      'hero.tagline': 'Senior Full Stack Developer & Tech Lead - construyendo microservicios escalables Java/Spring, UIs modernas Angular/React y aplicaciones multiplataforma Rust/Tauri.',
      'hero.cta_projects': 'Ver proyectos',
      'hero.cta_contact': 'Contactar',

      'about.heading': 'Sobre',
      'about.heading_accent': 'mí',
            'about.body': '5+ años construyendo microservicios escalables Java/Spring, UIs Angular/React y aplicaciones multiplataforma Rust/Tauri. Actualmente Tech Lead en 6 aplicaciones en paralelo en <strong class="glow-accent font-semibold">Capgemini</strong> para los <strong class="glow-accent font-semibold">Ministerios Franceses (División Digital)</strong>, tras entregar sistemas empresariales para <strong class="glow-accent font-semibold">Pelayo Seguros</strong>, <strong class="glow-accent font-semibold">SFR</strong>, <strong class="glow-accent font-semibold">Deutsche Bank</strong>, <strong class="glow-accent font-semibold">Covestro</strong>, <strong class="glow-accent font-semibold">Siemens</strong> y <strong class="glow-accent font-semibold">Atos</strong>. Multilingüe, hands-on, desde monolitos legacy hasta microservicios modernos.',
      'about.body2': 'Disciplinado con los horarios y las entregas, flexible en el enfoque. Comunicación muy fluida con clientes, compañeros y prácticamente cualquiera. Un toque de humor seco, siempre respetuoso y concienzudo con el trabajo. Aparte, una obsesión de larga data por las <strong class="glow-cyan">estéticas futuristas y cyberpunk</strong> que se cuela constantemente en mis diseños de videojuegos y mis UIs.',
      'about.lang.fr': 'Francés',
      'about.lang.en': 'Inglés',
      'about.lang.es': 'Español',
      'about.lang.ru': 'Ruso',
      'about.level.native': 'Nativo',
      'about.level.near_native': 'Casi nativo',
      'about.level.fluent': 'Fluido',
      'about.level.conversational': 'Conversacional',

      'projects.heading': 'Proyectos',
      'projects.heading_accent': 'destacados',
      'projects.yucast': 'Plataforma de streaming y broadcasting - entrega de medios en tiempo real, interfaces de usuario y arquitectura backend para contenido en directo.',
      'projects.orring': 'Landing page de producto para Orring - diseño responsivo moderno, identidad de marca y layout orientado a la conversión que muestra la app.',
      'projects.patotube': 'App de medios multiplataforma (Windows, Linux, Android) - descubrimiento y reproducción de vídeos con UI a medida y empaquetado nativo.',
      'projects.n3': 'Agente de IA personalizado emparejado con un entorno de aprendizaje - asistente personal, ingesta de conocimiento y módulo de escuela integrado para entrenar, probar y hacer crecer el modelo.',
      'projects.listoria': 'RPG 2D completo - armas, hechizos, IA de enemigos, efectos de partículas, sistema de mejoras y banda sonora original.',
      'projects.ecom.title': 'Plataforma E-Commerce',
      'projects.ecom.desc': 'Solución e-commerce full-stack con catálogo de productos, carrito de compra, motor de blog, autenticación y flujo de pago.',
      'common.view_landing': 'Ver landing',

      'skills.heading': 'Habilidades y',
      'skills.heading_accent': 'dominio',
      'skills.tagline': '// la caja de herramientas completa',
      'skills.cat.languages': 'Lenguajes',
      'skills.cat.frontend': 'Frontend',
      'skills.cat.crossplatform': 'Multiplataforma & Móvil',
      'skills.cat.backend': 'Backend & Frameworks',
      'skills.cat.data': 'Datos & Messaging',
      'skills.cat.devops': 'DevOps & CI/CD',
      'skills.cat.observability': 'Observabilidad',
      'skills.cat.architecture': 'Arquitectura & Patrones',
      'skills.cat.security': 'Seguridad & Sistemas',
      'skills.cat.creative': 'Creativo & Game Dev',

      'exp.heading': 'Trayectoria',
      'exp.heading_accent': 'profesional',
      'exp.tagline': '// 5+ años • clic en cualquier puesto para desplegar',
      'exp.current_pill': 'ACTUAL',
      'exp.certifications': '// Certificaciones',
      'exp.daily_arsenal': 'Arsenal diario',
      'exp.six_apps_tag': '// 6 aplicaciones - a cargo en paralelo',
      'exp.app': 'Aplicación',
      'exp.capgemini.client': 'Gobierno Francés',
      'exp.capgemini.role': 'Senior Full Stack Developer • Tech Lead • 6 aplicaciones en paralelo en 4 ministerios',
      'exp.capgemini.intro': 'Lead developer en <strong class="glow-accent">6 aplicaciones empresariales simultáneas</strong> para el gobierno francés. Malabarismo diario entre <em>monolitos Java legacy</em> y <em>microservicios modernos</em>, asumiendo el ciclo completo: diseño de features, despliegue en producción, observabilidad y respuesta a incidentes.',
      'exp.client.public': 'Ministerio Público',
      'exp.client.sante': 'Ministerio de Sanidad',
      'exp.client.travail': 'Ministerio de Trabajo',
      'exp.client.division': 'División Digital',
      'exp.period.capgemini': '2025 - Presente',
      'exp.period.pelayo': 'Jun - Nov 2025',
      'exp.period.sfr': 'Abr 2024 - Abr 2025',
      'exp.period.piercingxxl': 'Ago 2023 - Abr 2024',
      'exp.period.atos_digital': 'Oct 2022 - Jun 2023',
      'exp.period.covestro': 'Dic 2021 - Sep 2022',
      'exp.period.db': 'Ene - Nov 2021',
      'exp.period.atos_tenerife': 'Ene - Oct 2020',
      'exp.period.bragginn': 'Abr - Ago 2017',

      'exp.ach.pelayo':
        '<li>Diseño y construcción de un <strong class="glow-accent">gestor de comunicación centralizado</strong> en Java/Spring Boot integrando APIs internas y librerías propietarias de Pelayo con PostgreSQL.</li>' +
        '<li>Implementación de una <strong class="glow-accent">arquitectura hexagonal en 3 capas</strong> con cobertura completa de casos de uso, garantizando separación de responsabilidades y mantenibilidad.</li>' +
        '<li>Servicios de comunicación para el sector de automóviles - notificaciones a clientes, flujos de email y alertas del sistema.</li>' +
        '<li>Integración del <strong class="glow-accent">conector JDBC Oracle específico de Pelayo</strong> para comunicación bidireccional con sistemas legacy.</li>' +
        '<li>Diseño y optimización del esquema de base de datos - tablas performantes, migración y conversión de datos.</li>' +
        '<li>Sistema de seguimiento <strong class="glow-accent">orquestado con Kafka</strong> garantizando trazabilidad y resiliencia entre microservicios.</li>' +
        '<li>Adaptación rápida a los estándares técnicos de Pelayo - código legacy, librerías internas, anotaciones personalizadas.</li>',
      'exp.ach.sfr':
        '<li>Entrega de soluciones end-to-end cubriendo <strong class="glow-accent">seguridad</strong> e integración SQL fluida.</li>' +
        '<li>Sistemas escalables optimizando la comunicación front-end / back-end para eficiencia y rendimiento.</li>' +
        '<li>Arquitectura front-end para aplicaciones web de <strong class="glow-accent">comunicación de redes y microondas</strong> - UIs responsivas Angular/TS/HTML/CSS.</li>' +
        '<li>Sistemas de seguridad robustos y soluciones de visualización de redes, integrando UIs modernas con backends Java legacy vía JPA.</li>' +
        '<li>Colaboración del proyecto vía Git/GitLab, traducción de requisitos complejos de clientes en especificaciones técnicas.</li>' +
        '<li>Mejora de tiempos de respuesta mediante <strong class="glow-accent">refactorización de queries</strong> y estrategias de caché en varios jobs.</li>',
      'exp.ach.piercingxxl':
        '<li>Gestión y mantenimiento de la <strong class="glow-accent">plataforma e-commerce PiercingXXL</strong> - actualizaciones diarias back/front en Python & Liquid (Shopify).</li>' +
        '<li>Herramientas internas de administración con <strong class="glow-accent">Python-Django y PHP-Laravel</strong> para gestión y consulta de datos de clientes.</li>' +
        '<li>Administración de bases MySQL, secuencias de datos complejas y optimización del rendimiento.</li>' +
        '<li>Colaboración con el equipo de diseño para mejorar la UX e implementar diseño responsivo en toda la plataforma.</li>' +
        '<li>Traducción de requisitos complejos de clientes en especificaciones técnicas mejorando proactivamente la UI/UX.</li>',
      'exp.ach.atos_digital':
        '<li>Desarrollo de una <strong class="glow-accent">plataforma de gestión documental</strong> con Java 17 + Spring Boot, continuando la colaboración Atos.</li>' +
        '<li>Componentes backend para procesamiento/almacenamiento de documentos vía APIs RESTful.</li>' +
        '<li>Componentes Angular 14 reutilizables para visualización y gestión documental.</li>' +
        '<li>PostgreSQL para metadatos estructurados y <strong class="glow-accent">MongoDB</strong> para contenido no estructurado.</li>' +
        '<li>Integración de servicios de terceros para conversión y procesamiento automatizados.</li>' +
        '<li>Refactor de queries SQL para optimizar los tiempos de respuesta.</li>' +
        '<li>Sprints ágiles de 2 semanas, dailies y planificación de tareas.</li>' +
        '<li>Pruebas unitarias JUnit e integración; <strong class="glow-accent">Docker + GitLab CI</strong> para entornos consistentes.</li>',
      'exp.ach.covestro':
        '<li>Desarrollo de una <strong class="glow-accent">plataforma de análisis de datos para el sector financiero</strong> con Java 17, Spring Boot y microservicios.</li>' +
        '<li>Autenticación avanzada con <strong class="glow-accent">OAuth 2.0 + JWT</strong>, integrando servicios de terceros para verificación multi-capa.</li>' +
        '<li>Dashboards interactivos Angular 14 para visualización de datos financieros en tiempo real.</li>' +
        '<li>Optimización de queries SQL complejas - <strong class="glow-accent">reducción del 60% del tiempo de respuesta</strong> vía indexación avanzada y particionamiento.</li>' +
        '<li>Scripts Python de automatización para migración y validación de datos históricos.</li>' +
        '<li>Pipelines CI/CD con <strong class="glow-accent">Jenkins + Docker</strong>, reduciendo significativamente el tiempo de despliegue.</li>' +
        '<li>Colaboración con equipos internacionales en Scrum - reuniones semanales y planificación de sprints.</li>',
      'exp.ach.db':
        '<li>Desarrollo y mantenimiento de la aplicación <strong class="glow-accent">StockYou</strong> de gestión de pedidos online.</li>' +
        '<li>Integración en el equipo de diseño y desarrollo del lado servidor - Java SE 8 + Spring Boot.</li>' +
        '<li>Contribución a la arquitectura de software, asegurando estabilidad y rendimiento.</li>' +
        '<li>Mecanismos para <strong class="glow-accent">proteger datos sensibles</strong> y restringir el acceso solo a usuarios autorizados.</li>' +
        '<li>Optimización y caché de queries SQL - paginación y optimización de índices.</li>' +
        '<li>Contribución a la automatización de procesos de pedidos y optimización del flujo de trabajo.</li>',
      'exp.ach.atos_tenerife':
        '<li>Desarrollo del lado servidor de un sistema escalable de gestión de pedidos con <strong class="glow-accent">Java 11 + Spring Boot</strong> - arquitectura de microservicios, diseño de APIs RESTful.</li>' +
        '<li>Diseño de la <strong class="glow-accent">infraestructura de seguridad</strong> con Spring Security - autenticación multi-capa y autorización basada en roles.</li>' +
        '<li>Spring Data JPA + Hibernate para interacciones DB eficientes - optimización de queries y persistencia robusta.</li>' +
        '<li>Contribución al desarrollo front-end con frameworks JS modernos.</li>' +
        '<li>Entorno ágil con planificación de sprints y dailies.</li>',
      'exp.ach.bragginn':
        '<li>Instalación y mantenimiento de sistemas de red cableada y hardware del restaurante.</li>' +
        '<li>Desarrollo de la <strong class="glow-accent">arquitectura backend para la administración de cuentas de empleados</strong>.</li>' +
        '<li>Sistemas de bases de datos relacionales optimizados para varias operaciones.</li>' +
        '<li>Mejora de los procesos de recuperación/actualización de datos, aumentando significativamente los tiempos de respuesta.</li>' +
        '<li>Contribución a flujos automatizados para onboarding y gestión de cuentas de empleados.</li>',

      'contact.heading': 'Hablemos',
      'contact.heading_accent': 'y conectemos',
      'contact.subheading': '¿Listo para trabajar juntos?',
      'contact.body': 'Multilingüe e inmediatamente disponible, listo para aportar mi variado set de habilidades a tu próximo proyecto. Construyamos algo grande.',
      'contact.location': 'Francia',
      'contact.form.name': 'Tu nombre',
      'contact.form.email': 'Tu email',
      'contact.form.message': 'Tu mensaje',
      'contact.send': 'Enviar mensaje',

      'footer.copy': '&copy; 2026 Ilya Alexeev. Todos los derechos reservados.'
    },

    /* ═══════════════ ITALIANO ═══════════════ */
    it: {
      'nav.home': 'Home',
      'nav.about': 'Chi sono',
      'nav.projects': 'Progetti',
      'nav.skills': 'Competenze',
      'nav.experience': 'Esperienza',
      'nav.contact': 'Contatti',

      'hero.status': 'Disponibile per lavoro',
      'hero.greeting': 'Ciao, sono',
      'hero.tagline': 'Senior Full Stack Developer & Tech Lead - microservizi Java/Spring scalabili, UI moderne Angular/React e app cross-platform Rust/Tauri.',
      'hero.cta_projects': 'Vedi i progetti',
      'hero.cta_contact': 'Contattami',

      'about.heading': 'Chi',
      'about.heading_accent': 'sono',
            'about.body': '5+ anni a costruire microservizi Java/Spring scalabili, UI Angular/React e app cross-platform Rust/Tauri. Attualmente Tech Lead su 6 applicazioni in parallelo presso <strong class="glow-accent font-semibold">Capgemini</strong> per i <strong class="glow-accent font-semibold">Ministeri Francesi (Divisione Digitale)</strong>, dopo aver consegnato sistemi enterprise per <strong class="glow-accent font-semibold">Pelayo Seguros</strong>, <strong class="glow-accent font-semibold">SFR</strong>, <strong class="glow-accent font-semibold">Deutsche Bank</strong>, <strong class="glow-accent font-semibold">Covestro</strong>, <strong class="glow-accent font-semibold">Siemens</strong> e <strong class="glow-accent font-semibold">Atos</strong>. Multilingue, hands-on, dai monoliti legacy ai microservizi moderni.',
      'about.body2': 'Disciplinato su orari e consegne, flessibile nell’approccio. Comunicazione molto fluida con clienti, colleghi e praticamente chiunque. Una punta di humor secco, sempre rispettoso e coscienzioso nel lavoro. A parte, un’ossessione di lunga data per le <strong class="glow-cyan">estetiche futuristiche e cyberpunk</strong> che si infiltra costantemente nei miei design di videogiochi e nelle mie UI.',
      'about.lang.fr': 'Francese',
      'about.lang.en': 'Inglese',
      'about.lang.es': 'Spagnolo',
      'about.lang.ru': 'Russo',
      'about.level.native': 'Madrelingua',
      'about.level.near_native': 'Quasi madrelingua',
      'about.level.fluent': 'Fluente',
      'about.level.conversational': 'Conversazionale',

      'projects.heading': 'Progetti',
      'projects.heading_accent': 'in evidenza',
      'projects.yucast': 'Piattaforma di streaming e broadcasting - distribuzione media in tempo reale, interfacce utente e architettura backend per contenuti live.',
      'projects.orring': 'Landing page di prodotto per Orring - design responsivo moderno, identità di brand e layout orientato alla conversione che presenta l’app.',
      'projects.patotube': 'App media cross-platform (Windows, Linux, Android) - scoperta e riproduzione video con UI custom e packaging nativo.',
      'projects.n3': 'Agente AI personalizzato accoppiato a un ambiente di apprendimento - assistente personale, ingestione di conoscenza e modulo scuola integrato per allenare, testare e far crescere il modello.',
      'projects.listoria': 'RPG 2D completo - armi, incantesimi, IA nemica, effetti particellari, sistema di upgrade e colonna sonora originale.',
      'projects.ecom.title': 'Piattaforma E-Commerce',
      'projects.ecom.desc': 'Soluzione e-commerce full-stack con catalogo prodotti, carrello, motore di blog, autenticazione utenti e flusso di pagamento.',
      'common.view_landing': 'Vedi landing',

      'skills.heading': 'Competenze e',
      'skills.heading_accent': 'padronanza',
      'skills.tagline': '// la cassetta degli attrezzi completa',
      'skills.cat.languages': 'Linguaggi',
      'skills.cat.frontend': 'Frontend',
      'skills.cat.crossplatform': 'Cross-Platform & Mobile',
      'skills.cat.backend': 'Backend & Framework',
      'skills.cat.data': 'Dati & Messaging',
      'skills.cat.devops': 'DevOps & CI/CD',
      'skills.cat.observability': 'Osservabilità',
      'skills.cat.architecture': 'Architettura & Pattern',
      'skills.cat.security': 'Sicurezza & Sistemi',
      'skills.cat.creative': 'Creativo & Game Dev',

      'exp.heading': 'Percorso',
      'exp.heading_accent': 'professionale',
      'exp.tagline': '// 5+ anni • clicca un ruolo per espanderlo',
      'exp.current_pill': 'ATTUALE',
      'exp.certifications': '// Certificazioni',
      'exp.daily_arsenal': 'Arsenale quotidiano',
      'exp.six_apps_tag': '// 6 applicazioni - responsabilità in parallelo',
      'exp.app': 'Applicazione',
      'exp.capgemini.client': 'Governo Francese',
      'exp.capgemini.role': 'Senior Full Stack Developer • Tech Lead • 6 applicazioni in parallelo su 4 ministeri',
      'exp.capgemini.intro': 'Lead developer su <strong class="glow-accent">6 applicazioni enterprise in simultanea</strong> per il governo francese. Equilibrio quotidiano tra <em>monoliti Java legacy</em> e <em>microservizi moderni</em>, gestendo l’intero ciclo di vita: design delle feature, deploy in produzione, osservabilità e risposta agli incidenti.',
      'exp.client.public': 'Ministero della Giustizia',
      'exp.client.sante': 'Ministero della Salute',
      'exp.client.travail': 'Ministero del Lavoro',
      'exp.client.division': 'Divisione Digitale',
      'exp.period.capgemini': '2025 - Presente',
      'exp.period.pelayo': 'Giu - Nov 2025',
      'exp.period.sfr': 'Apr 2024 - Apr 2025',
      'exp.period.piercingxxl': 'Ago 2023 - Apr 2024',
      'exp.period.atos_digital': 'Ott 2022 - Giu 2023',
      'exp.period.covestro': 'Dic 2021 - Set 2022',
      'exp.period.db': 'Gen - Nov 2021',
      'exp.period.atos_tenerife': 'Gen - Ott 2020',
      'exp.period.bragginn': 'Apr - Ago 2017',

      'exp.ach.pelayo':
        '<li>Progettato e costruito un <strong class="glow-accent">gestore di comunicazioni centralizzato</strong> in Java/Spring Boot integrando le API interne e le librerie proprietarie di Pelayo con PostgreSQL.</li>' +
        '<li>Stabilita un’<strong class="glow-accent">architettura esagonale a 3 livelli</strong> con implementazione completa degli use case, garantendo separazione delle responsabilità e manutenibilità.</li>' +
        '<li>Servizi di comunicazione per il settore automotive - notifiche clienti, flussi email e alert di sistema.</li>' +
        '<li>Integrato il <strong class="glow-accent">connettore JDBC Oracle specifico di Pelayo</strong> per comunicazione bidirezionale con i sistemi legacy.</li>' +
        '<li>Progettato e ottimizzato lo schema del database - tabelle performanti, migrazione e conversione dei dati.</li>' +
        '<li>Sistema di tracciamento <strong class="glow-accent">orchestrato con Kafka</strong> garantendo tracciabilità e resilienza tra i microservizi.</li>' +
        '<li>Rapido adattamento agli standard tecnici di Pelayo - codice legacy, librerie interne, annotazioni personalizzate.</li>',
      'exp.ach.sfr':
        '<li>Consegnate soluzioni end-to-end che coprono <strong class="glow-accent">sicurezza</strong> e integrazione SQL fluida.</li>' +
        '<li>Sistemi scalabili che ottimizzano la comunicazione front-end / back-end per efficienza e prestazioni.</li>' +
        '<li>Architettura front-end per app web di <strong class="glow-accent">comunicazione di rete e microonde</strong> - UI responsive Angular/TS/HTML/CSS.</li>' +
        '<li>Sistemi di sicurezza robusti e soluzioni di visualizzazione di rete, integrando UI moderne con backend Java legacy tramite JPA.</li>' +
        '<li>Collaborazione di progetto tramite Git/GitLab, traduzione di requisiti cliente complessi in specifiche tecniche.</li>' +
        '<li>Migliorati i tempi di risposta tramite <strong class="glow-accent">refactoring delle query</strong> e strategie di cache su diversi job.</li>',
      'exp.ach.piercingxxl':
        '<li>Gestita e mantenuta la <strong class="glow-accent">piattaforma e-commerce PiercingXXL</strong> - aggiornamenti giornalieri back/front in Python & Liquid (Shopify).</li>' +
        '<li>Tool admin interni con <strong class="glow-accent">Python-Django e PHP-Laravel</strong> per la gestione dei dati cliente.</li>' +
        '<li>Amministrazione di database MySQL, sequenze di dati complesse e ottimizzazione delle prestazioni.</li>' +
        '<li>Collaborazione con il team di design per migliorare l’UX e implementare design responsivo su tutta la piattaforma.</li>' +
        '<li>Traduzione di requisiti cliente complessi in specifiche tecniche migliorando proattivamente UI/UX.</li>',
      'exp.ach.atos_digital':
        '<li>Sviluppata una <strong class="glow-accent">piattaforma di gestione documentale</strong> con Java 17 + Spring Boot, continuando la collaborazione Atos.</li>' +
        '<li>Componenti backend per il processing/storage di documenti tramite API RESTful.</li>' +
        '<li>Componenti Angular 14 riutilizzabili per visualizzazione e gestione documentale.</li>' +
        '<li>PostgreSQL per metadati strutturati e <strong class="glow-accent">MongoDB</strong> per contenuti non strutturati.</li>' +
        '<li>Integrazione di servizi di terzi per conversione e processing automatizzati.</li>' +
        '<li>Refactor di query SQL per ottimizzare i tempi di risposta.</li>' +
        '<li>Sprint agili di 2 settimane, daily stand-up e planning.</li>' +
        '<li>Test unitari JUnit e di integrazione; <strong class="glow-accent">Docker + GitLab CI</strong> per ambienti consistenti.</li>',
      'exp.ach.covestro':
        '<li>Sviluppata una <strong class="glow-accent">piattaforma di analisi dati per il settore finanziario</strong> con Java 17, Spring Boot e microservizi.</li>' +
        '<li>Autenticazione avanzata con <strong class="glow-accent">OAuth 2.0 + JWT</strong>, integrando servizi di terzi per verifica multi-livello.</li>' +
        '<li>Dashboard Angular 14 interattive per la visualizzazione di dati finanziari in tempo reale.</li>' +
        '<li>Ottimizzazione di query SQL complesse - <strong class="glow-accent">riduzione del 60% del tempo di risposta</strong> tramite indicizzazione avanzata e partizionamento.</li>' +
        '<li>Script Python di automazione per migrazione e validazione di dati storici.</li>' +
        '<li>Pipeline CI/CD con <strong class="glow-accent">Jenkins + Docker</strong>, riducendo significativamente il tempo di deploy.</li>' +
        '<li>Collaborazione con team internazionali in Scrum - stand-up settimanali e sprint planning.</li>',
      'exp.ach.db':
        '<li>Costruita e mantenuta l’applicazione <strong class="glow-accent">StockYou</strong> di gestione ordini online.</li>' +
        '<li>Integrazione nel team design & dev lato server - Java SE 8 + Spring Boot.</li>' +
        '<li>Contributo all’architettura software, garantendo stabilità e prestazioni.</li>' +
        '<li>Meccanismi per <strong class="glow-accent">proteggere i dati sensibili</strong> e restringere l’accesso ai soli utenti autorizzati.</li>' +
        '<li>Ottimizzazione e cache di query SQL - paginazione e ottimizzazione degli indici.</li>' +
        '<li>Contributo all’automazione dei processi d’ordine e all’ottimizzazione del flusso di lavoro.</li>',
      'exp.ach.atos_tenerife':
        '<li>Sviluppo lato server di un sistema scalabile di gestione ordini con <strong class="glow-accent">Java 11 + Spring Boot</strong> - architettura a microservizi, design di API RESTful.</li>' +
        '<li>Progettata l’<strong class="glow-accent">infrastruttura di sicurezza</strong> con Spring Security - autenticazione multi-livello e autorizzazione basata sui ruoli.</li>' +
        '<li>Spring Data JPA + Hibernate per interazioni DB efficienti - ottimizzazione delle query e persistenza robusta.</li>' +
        '<li>Contributo allo sviluppo front-end con framework JS moderni.</li>' +
        '<li>Ambiente agile con sprint planning e daily stand-up.</li>',
      'exp.ach.bragginn':
        '<li>Installati e mantenuti i sistemi di rete cablata e l’hardware del ristorante.</li>' +
        '<li>Sviluppata l’<strong class="glow-accent">architettura backend per l’amministrazione degli account dipendenti</strong>.</li>' +
        '<li>Sistemi di database relazionali ottimizzati per diverse operazioni.</li>' +
        '<li>Miglioramento dei processi di recupero/aggiornamento dei dati, aumentando significativamente i tempi di risposta.</li>' +
        '<li>Contributo a workflow automatizzati per onboarding e gestione degli account.</li>',

      'contact.heading': 'Mettiamoci',
      'contact.heading_accent': 'in contatto',
      'contact.subheading': 'Pronto a lavorare insieme?',
      'contact.body': 'Multilingue e immediatamente disponibile, sono pronto a portare il mio set di competenze sul tuo prossimo progetto. Costruiamo qualcosa di grande.',
      'contact.location': 'Francia',
      'contact.form.name': 'Il tuo nome',
      'contact.form.email': 'La tua email',
      'contact.form.message': 'Il tuo messaggio',
      'contact.send': 'Invia messaggio',

      'footer.copy': '&copy; 2026 Ilya Alexeev. Tutti i diritti riservati.'
    },

    /* ═══════════════ DEUTSCH ═══════════════ */
    de: {
      'nav.home': 'Start',
      'nav.about': 'Über mich',
      'nav.projects': 'Projekte',
      'nav.skills': 'Skills',
      'nav.experience': 'Erfahrung',
      'nav.contact': 'Kontakt',

      'hero.status': 'Verfügbar für Aufträge',
      'hero.greeting': 'Hallo, ich bin',
      'hero.tagline': 'Senior Full Stack Developer & Tech Lead - skalierbare Java/Spring-Microservices, moderne Angular/React-UIs und plattformübergreifende Rust/Tauri-Anwendungen.',
      'hero.cta_projects': 'Projekte ansehen',
      'hero.cta_contact': 'Kontaktieren',

      'about.heading': 'Über',
      'about.heading_accent': 'mich',
            'about.body': '5+ Jahre Erfahrung im Aufbau skalierbarer Java/Spring-Microservices, Angular/React-UIs und plattformübergreifender Rust/Tauri-Apps. Aktuell Tech Lead für 6 parallele Anwendungen bei <strong class="glow-accent font-semibold">Capgemini</strong> für die <strong class="glow-accent font-semibold">französischen Ministerien (Division Numérique)</strong>, nach Enterprise-Systemen für <strong class="glow-accent font-semibold">Pelayo Seguros</strong>, <strong class="glow-accent font-semibold">SFR</strong>, <strong class="glow-accent font-semibold">Deutsche Bank</strong>, <strong class="glow-accent font-semibold">Covestro</strong>, <strong class="glow-accent font-semibold">Siemens</strong> und <strong class="glow-accent font-semibold">Atos</strong>. Mehrsprachig, hands-on, von Legacy-Monolithen bis zu modernen Microservices.',
      'about.body2': 'Diszipliniert bei Zeitplänen und Lieferungen, flexibel im Ansatz. Sehr unkomplizierte Kommunikation mit Kunden, Kollegen und eigentlich jedem. Eine Prise trockener Humor, stets respektvoll und gewissenhaft bei der Arbeit. Nebenbei eine langjährige Obsession für <strong class="glow-cyan">futuristische und Cyberpunk-Ästhetiken</strong>, die ständig in meine Game-Designs und UIs einfließt.',
      'about.lang.fr': 'Französisch',
      'about.lang.en': 'Englisch',
      'about.lang.es': 'Spanisch',
      'about.lang.ru': 'Russisch',
      'about.level.native': 'Muttersprache',
      'about.level.near_native': 'Fast muttersprachlich',
      'about.level.fluent': 'Fließend',
      'about.level.conversational': 'Gesprächssicher',

      'projects.heading': 'Ausgewählte',
      'projects.heading_accent': 'Projekte',
      'projects.yucast': 'Streaming- und Broadcasting-Plattform - Echtzeit-Medienauslieferung, Benutzeroberflächen und Backend-Architektur für Live-Inhalte.',
      'projects.orring': 'Produkt-Landingpage für Orring - modernes responsives Design, Markenidentität und konversionsorientiertes Layout, das die App präsentiert.',
      'projects.patotube': 'Plattformübergreifende Medien-App (Windows, Linux, Android) - Video-Entdeckung und Wiedergabe mit individueller UI und nativem Packaging.',
      'projects.n3': 'Eigener KI-Agent kombiniert mit einer Lernumgebung - persönlicher Assistent, Wissensaufnahme und integriertes Schulmodul, um das Modell zu trainieren, zu testen und wachsen zu lassen.',
      'projects.listoria': 'Vollwertiges 2D-RPG - Waffen, Zaubersprüche, Gegner-KI, Partikeleffekte, Upgrade-System und originaler Soundtrack.',
      'projects.ecom.title': 'E-Commerce-Plattform',
      'projects.ecom.desc': 'Full-Stack-E-Commerce-Lösung mit Produktkatalog, Warenkorb, Blog-Engine, Benutzerauthentifizierung und Bezahlvorgang.',
      'common.view_landing': 'Landing ansehen',

      'skills.heading': 'Skills &',
      'skills.heading_accent': 'Mastery',
      'skills.tagline': '// die komplette Toolbox',
      'skills.cat.languages': 'Sprachen',
      'skills.cat.frontend': 'Frontend',
      'skills.cat.crossplatform': 'Cross-Platform & Mobile',
      'skills.cat.backend': 'Backend & Frameworks',
      'skills.cat.data': 'Daten & Messaging',
      'skills.cat.devops': 'DevOps & CI/CD',
      'skills.cat.observability': 'Observability',
      'skills.cat.architecture': 'Architektur & Pattern',
      'skills.cat.security': 'Sicherheit & Systeme',
      'skills.cat.creative': 'Kreativ & Game Dev',

      'exp.heading': 'Beruflicher',
      'exp.heading_accent': 'Werdegang',
      'exp.tagline': '// 5+ Jahre • Rolle anklicken zum Aufklappen',
      'exp.current_pill': 'AKTUELL',
      'exp.certifications': '// Zertifizierungen',
      'exp.daily_arsenal': 'Tägliches Arsenal',
      'exp.six_apps_tag': '// 6 Anwendungen - gleichzeitige Verantwortung',
      'exp.app': 'Anwendung',
      'exp.capgemini.client': 'Französische Regierung',
      'exp.capgemini.role': 'Senior Full Stack Developer • Tech Lead • 6 parallele Anwendungen in 4 Ministerien',
      'exp.capgemini.intro': 'Lead Developer für <strong class="glow-accent">6 gleichzeitige Enterprise-Anwendungen</strong> der französischen Regierung. Täglicher Spagat zwischen <em>Legacy-Java-Monolithen</em> und <em>modernen Microservices</em>, Verantwortung für den gesamten Lebenszyklus: Feature-Design, Produktionsdeployment, Observability und Incident-Response.',
      'exp.client.public': 'Justizministerium',
      'exp.client.sante': 'Gesundheitsministerium',
      'exp.client.travail': 'Arbeitsministerium',
      'exp.client.division': 'Digitalabteilung',
      'exp.period.capgemini': '2025 - Heute',
      'exp.period.pelayo': 'Jun - Nov 2025',
      'exp.period.sfr': 'Apr 2024 - Apr 2025',
      'exp.period.piercingxxl': 'Aug 2023 - Apr 2024',
      'exp.period.atos_digital': 'Okt 2022 - Jun 2023',
      'exp.period.covestro': 'Dez 2021 - Sep 2022',
      'exp.period.db': 'Jan - Nov 2021',
      'exp.period.atos_tenerife': 'Jan - Okt 2020',
      'exp.period.bragginn': 'Apr - Aug 2017',

      'exp.ach.pelayo':
        '<li>Entwurf und Implementierung eines <strong class="glow-accent">zentralen Kommunikations-Managers</strong> in Java/Spring Boot mit Integration der internen APIs und proprietären Bibliotheken von Pelayo mit PostgreSQL.</li>' +
        '<li>Etablierte eine <strong class="glow-accent">dreischichtige hexagonale Architektur</strong> mit vollständiger Use-Case-Umsetzung für klare Trennung der Verantwortlichkeiten und Wartbarkeit.</li>' +
        '<li>Kommunikationsdienste für den Kfz-Versicherungssektor - Kundenbenachrichtigungen, E-Mail-Flows und Systemalarme.</li>' +
        '<li>Integration des Pelayo-spezifischen <strong class="glow-accent">Oracle-JDBC-Connectors</strong> für bidirektionale Kommunikation mit Legacy-DB-Systemen.</li>' +
        '<li>Entwurf und Optimierung des DB-Schemas - performante Tabellen, Migration und Konvertierung der Bestandsdaten.</li>' +
        '<li>Implementierung eines <strong class="glow-accent">Kafka-orchestrierten Tracking-Systems</strong> für Nachvollziehbarkeit und Resilienz zwischen Microservices.</li>' +
        '<li>Schnelle Anpassung an die technischen Standards von Pelayo - Legacy-Code, interne Bibliotheken, individuelle Annotations.</li>',
      'exp.ach.sfr':
        '<li>End-to-End-Lösungen mit <strong class="glow-accent">Sicherheit</strong> und nahtloser SQL-Integration umgesetzt.</li>' +
        '<li>Skalierbare Systeme mit optimierter Front-End-/Back-End-Kommunikation für Effizienz und Performance.</li>' +
        '<li>Front-End-Architektur für Web-Apps der <strong class="glow-accent">Netzwerk- und Mikrowellen-Kommunikation</strong> - responsive Angular/TS/HTML/CSS-UIs.</li>' +
        '<li>Robuste Sicherheitssysteme und Netzwerk-Visualisierungen, moderne UIs an Legacy-Java-Backends via JPA angebunden.</li>' +
        '<li>Projekt-Kollaboration via Git/GitLab, komplexe Kundenanforderungen in technische Spezifikationen übersetzt.</li>' +
        '<li>Antwortzeiten durch <strong class="glow-accent">Query-Refactoring</strong> und Caching für mehrere Batch-Jobs verbessert.</li>',
      'exp.ach.piercingxxl':
        '<li>Verwaltung und Wartung der <strong class="glow-accent">PiercingXXL-E-Commerce-Plattform</strong> - tägliche Back-/Front-End-Updates in Python & Liquid (Shopify).</li>' +
        '<li>Interne Admin-Tools mit <strong class="glow-accent">Python-Django und PHP-Laravel</strong> für Kundendaten-Management.</li>' +
        '<li>Administration von MySQL-Datenbanken, komplexe Datensequenzen und Performance-Optimierung.</li>' +
        '<li>Zusammenarbeit mit dem Design-Team zur UX-Verbesserung und Umsetzung responsiven Designs.</li>' +
        '<li>Komplexe Kundenanforderungen in technische Spezifikationen übersetzt mit proaktiver UI/UX-Verbesserung.</li>',
      'exp.ach.atos_digital':
        '<li>Entwicklung einer <strong class="glow-accent">Dokumenten-Management-Plattform</strong> mit Java 17 + Spring Boot, Fortsetzung der Atos-Kollaboration.</li>' +
        '<li>Backend-Komponenten für Dokumentenverarbeitung und -speicherung via RESTful APIs.</li>' +
        '<li>Wiederverwendbare Angular-14-Komponenten für Dokumentenvisualisierung und -verwaltung.</li>' +
        '<li>PostgreSQL für strukturierte Metadaten und <strong class="glow-accent">MongoDB</strong> für unstrukturierten Inhalt.</li>' +
        '<li>Integration von Drittanbieter-Services für automatisierte Konvertierung und Verarbeitung.</li>' +
        '<li>Refactoring von SQL-Queries zur Optimierung der Antwortzeiten.</li>' +
        '<li>2-Wochen-Sprints (Agile), Daily-Stand-ups und Task-Planning.</li>' +
        '<li>JUnit-Unit- und Integrationstests; <strong class="glow-accent">Docker + GitLab CI</strong> für konsistente Dev-Umgebungen.</li>',
      'exp.ach.covestro':
        '<li>Entwicklung einer <strong class="glow-accent">Datenanalyse-Plattform für den Finanzsektor</strong> mit Java 17, Spring Boot und Microservices.</li>' +
        '<li>Fortgeschrittene Authentifizierung mit <strong class="glow-accent">OAuth 2.0 + JWT</strong>, mehrschichtige Drittanbieter-Verifikation integriert.</li>' +
        '<li>Interaktive Angular-14-Dashboards für Echtzeit-Visualisierung von Finanzdaten.</li>' +
        '<li>Optimierung komplexer SQL-Queries - <strong class="glow-accent">60% schnellere Antwortzeit</strong> durch erweiterte Indexierung und Partitionierung.</li>' +
        '<li>Python-Automatisierungsskripte für Migration und Validierung historischer Daten.</li>' +
        '<li>CI/CD-Pipelines mit <strong class="glow-accent">Jenkins + Docker</strong>, deutliche Verkürzung der Deployment-Zeit.</li>' +
        '<li>Zusammenarbeit mit internationalen Teams in Scrum - wöchentliche Stand-ups und Sprint-Planning.</li>',
      'exp.ach.db':
        '<li>Aufbau und Wartung der <strong class="glow-accent">StockYou-Online-Bestellverwaltung</strong>.</li>' +
        '<li>Mitarbeit im Design- & Dev-Team auf der Serverseite - Java SE 8 + Spring Boot.</li>' +
        '<li>Beitrag zur Software-Architektur mit Fokus auf Stabilität und Performance.</li>' +
        '<li>Mechanismen zum <strong class="glow-accent">Schutz sensibler Daten</strong> und Zugriffsbeschränkung auf autorisierte Nutzer.</li>' +
        '<li>Optimierung und Caching von SQL-Queries - Pagination und Index-Optimierung.</li>' +
        '<li>Beitrag zur Automatisierung der Bestellprozesse und Workflow-Optimierung.</li>',
      'exp.ach.atos_tenerife':
        '<li>Server-seitige Entwicklung eines skalierbaren Bestellsystems mit <strong class="glow-accent">Java 11 + Spring Boot</strong> - Microservice-Architektur, RESTful-API-Design.</li>' +
        '<li>Entwurf der <strong class="glow-accent">Sicherheits-Infrastruktur</strong> mit Spring Security - mehrschichtige Authentifizierung und rollenbasierte Autorisierung.</li>' +
        '<li>Spring Data JPA + Hibernate für effiziente DB-Interaktionen - Query-Optimierung und robuste Persistenz.</li>' +
        '<li>Beitrag zur Front-End-Entwicklung mit modernen JS-Frameworks.</li>' +
        '<li>Agiles Umfeld mit Sprint-Planning und Daily-Stand-ups.</li>',
      'exp.ach.bragginn':
        '<li>Einrichtung und Wartung kabelgebundener Netzwerksysteme und Hardware im Restaurant.</li>' +
        '<li>Entwicklung der <strong class="glow-accent">Backend-Architektur zur Verwaltung der Mitarbeiterkonten</strong>.</li>' +
        '<li>Optimierte relationale Datenbanksysteme für diverse Operationen.</li>' +
        '<li>Datenabruf/-aktualisierung verbessert, deutlich kürzere Antwortzeiten.</li>' +
        '<li>Beitrag zu automatisierten Workflows für Mitarbeiter-Onboarding und Kontoverwaltung.</li>',

      'contact.heading': 'Lass uns',
      'contact.heading_accent': 'verbinden',
      'contact.subheading': 'Bereit für die Zusammenarbeit?',
      'contact.body': 'Mehrsprachig und sofort verfügbar, bereit, mein vielfältiges Skillset in dein nächstes Projekt einzubringen. Bauen wir etwas Großes.',
      'contact.location': 'Frankreich',
      'contact.form.name': 'Dein Name',
      'contact.form.email': 'Deine E-Mail',
      'contact.form.message': 'Deine Nachricht',
      'contact.send': 'Nachricht senden',

      'footer.copy': '&copy; 2026 Ilya Alexeev. Alle Rechte vorbehalten.'
    },

    /* ═══════════════ PORTUGUÊS ═══════════════ */
    pt: {
      'nav.home': 'Início',
      'nav.about': 'Sobre',
      'nav.projects': 'Projetos',
      'nav.skills': 'Skills',
      'nav.experience': 'Experiência',
      'nav.contact': 'Contacto',

      'hero.status': 'Disponível para trabalhar',
      'hero.greeting': 'Olá, sou',
      'hero.tagline': 'Senior Full Stack Developer & Tech Lead - microsserviços Java/Spring escaláveis, UIs modernas Angular/React e apps multiplataforma Rust/Tauri.',
      'hero.cta_projects': 'Ver projetos',
      'hero.cta_contact': 'Falar comigo',

      'about.heading': 'Sobre',
      'about.heading_accent': 'mim',
            'about.body': '5+ anos a construir microsserviços Java/Spring escaláveis, UIs Angular/React e apps multiplataforma Rust/Tauri. Atualmente Tech Lead em 6 aplicações em paralelo na <strong class="glow-accent font-semibold">Capgemini</strong> para os <strong class="glow-accent font-semibold">Ministérios Franceses (Divisão Digital)</strong>, depois de entregar sistemas empresariais para <strong class="glow-accent font-semibold">Pelayo Seguros</strong>, <strong class="glow-accent font-semibold">SFR</strong>, <strong class="glow-accent font-semibold">Deutsche Bank</strong>, <strong class="glow-accent font-semibold">Covestro</strong>, <strong class="glow-accent font-semibold">Siemens</strong> e <strong class="glow-accent font-semibold">Atos</strong>. Multilíngue, hands-on, de monólitos legacy a microsserviços modernos.',
      'about.body2': 'Disciplinado em horários e entregas, flexível na abordagem. Comunicação muito fluida com clientes, colegas e praticamente qualquer pessoa. Uma pitada de humor seco, sempre respeitoso e consciencioso no trabalho. À parte, uma obsessão de longa data pelas <strong class="glow-cyan">estéticas futuristas e cyberpunk</strong> que escorre constantemente para os meus designs de videojogos e UIs.',
      'about.lang.fr': 'Francês',
      'about.lang.en': 'Inglês',
      'about.lang.es': 'Espanhol',
      'about.lang.ru': 'Russo',
      'about.level.native': 'Nativo',
      'about.level.near_native': 'Quase nativo',
      'about.level.fluent': 'Fluente',
      'about.level.conversational': 'Conversacional',

      'projects.heading': 'Projetos',
      'projects.heading_accent': 'em destaque',
      'projects.yucast': 'Plataforma de streaming e broadcasting - entrega de média em tempo real, interfaces de utilizador e arquitetura backend para conteúdos ao vivo.',
      'projects.orring': 'Landing page de produto para a Orring - design responsivo moderno, identidade de marca e layout orientado à conversão a mostrar a app.',
      'projects.patotube': 'App de média multiplataforma (Windows, Linux, Android) - descoberta e reprodução de vídeo com UI à medida e packaging nativo.',
      'projects.n3': 'Agente de IA personalizado em conjunto com um ambiente de aprendizagem - assistente pessoal, ingestão de conhecimento e módulo escola integrado para treinar, testar e fazer crescer o modelo.',
      'projects.listoria': 'RPG 2D completo - armas, magias, IA de inimigos, efeitos de partículas, sistema de upgrades e banda sonora original.',
      'projects.ecom.title': 'Plataforma E-Commerce',
      'projects.ecom.desc': 'Solução e-commerce full-stack com catálogo de produtos, carrinho, motor de blog, autenticação de utilizadores e fluxo de pagamento.',
      'common.view_landing': 'Ver landing',

      'skills.heading': 'Skills &',
      'skills.heading_accent': 'domínio',
      'skills.tagline': '// a caixa de ferramentas completa',
      'skills.cat.languages': 'Linguagens',
      'skills.cat.frontend': 'Frontend',
      'skills.cat.crossplatform': 'Multiplataforma & Mobile',
      'skills.cat.backend': 'Backend & Frameworks',
      'skills.cat.data': 'Dados & Messaging',
      'skills.cat.devops': 'DevOps & CI/CD',
      'skills.cat.observability': 'Observabilidade',
      'skills.cat.architecture': 'Arquitetura & Padrões',
      'skills.cat.security': 'Segurança & Sistemas',
      'skills.cat.creative': 'Criativo & Game Dev',

      'exp.heading': 'Percurso',
      'exp.heading_accent': 'profissional',
      'exp.tagline': '// 5+ anos • clica num cargo para expandir',
      'exp.current_pill': 'ATUAL',
      'exp.certifications': '// Certificações',
      'exp.daily_arsenal': 'Arsenal diário',
      'exp.six_apps_tag': '// 6 aplicações - responsabilidade em paralelo',
      'exp.app': 'Aplicação',
      'exp.capgemini.client': 'Governo Francês',
      'exp.capgemini.role': 'Senior Full Stack Developer • Tech Lead • 6 aplicações em paralelo em 4 ministérios',
      'exp.capgemini.intro': 'Lead developer em <strong class="glow-accent">6 aplicações empresariais em simultâneo</strong> para o governo francês. Equilíbrio diário entre <em>monólitos Java legacy</em> e <em>microsserviços modernos</em>, com o ciclo completo: design de features, deploy em produção, observabilidade e resposta a incidentes.',
      'exp.client.public': 'Ministério Público',
      'exp.client.sante': 'Ministério da Saúde',
      'exp.client.travail': 'Ministério do Trabalho',
      'exp.client.division': 'Divisão Digital',
      'exp.period.capgemini': '2025 - Presente',
      'exp.period.pelayo': 'Jun - Nov 2025',
      'exp.period.sfr': 'Abr 2024 - Abr 2025',
      'exp.period.piercingxxl': 'Ago 2023 - Abr 2024',
      'exp.period.atos_digital': 'Out 2022 - Jun 2023',
      'exp.period.covestro': 'Dez 2021 - Set 2022',
      'exp.period.db': 'Jan - Nov 2021',
      'exp.period.atos_tenerife': 'Jan - Out 2020',
      'exp.period.bragginn': 'Abr - Ago 2017',

      'exp.ach.pelayo':
        '<li>Desenho e construção de um <strong class="glow-accent">gestor de comunicação centralizado</strong> em Java/Spring Boot integrando APIs internas e bibliotecas proprietárias da Pelayo com PostgreSQL.</li>' +
        '<li>Definição de uma <strong class="glow-accent">arquitetura hexagonal em 3 camadas</strong> com implementação completa de use cases, garantindo separação de responsabilidades e manutenibilidade.</li>' +
        '<li>Serviços de comunicação para o setor automóvel - notificações a clientes, fluxos de email e alertas do sistema.</li>' +
        '<li>Integração do <strong class="glow-accent">conector JDBC Oracle específico da Pelayo</strong> para comunicação bidirecional com sistemas legacy.</li>' +
        '<li>Desenho e otimização do esquema de base de dados - tabelas performantes, migração e conversão de dados.</li>' +
        '<li>Sistema de rastreio <strong class="glow-accent">orquestrado por Kafka</strong> garantindo rastreabilidade e resiliência entre microsserviços.</li>' +
        '<li>Adaptação rápida aos padrões técnicos da Pelayo - código legacy, bibliotecas internas, anotações personalizadas.</li>',
      'exp.ach.sfr':
        '<li>Soluções end-to-end com <strong class="glow-accent">segurança</strong> e integração SQL fluida.</li>' +
        '<li>Sistemas escaláveis a otimizar a comunicação front-end / back-end para eficiência e performance.</li>' +
        '<li>Arquitetura front-end para apps web de <strong class="glow-accent">comunicação de redes e micro-ondas</strong> - UIs responsivas Angular/TS/HTML/CSS.</li>' +
        '<li>Sistemas de segurança robustos e soluções de visualização de redes, integrando UIs modernas com backends Java legacy via JPA.</li>' +
        '<li>Colaboração do projeto via Git/GitLab, tradução de requisitos complexos em especificações técnicas.</li>' +
        '<li>Tempos de resposta melhorados via <strong class="glow-accent">refactor de queries</strong> e estratégias de cache em vários jobs.</li>',
      'exp.ach.piercingxxl':
        '<li>Gestão e manutenção da <strong class="glow-accent">plataforma e-commerce PiercingXXL</strong> - atualizações diárias back/front em Python & Liquid (Shopify).</li>' +
        '<li>Ferramentas admin internas com <strong class="glow-accent">Python-Django e PHP-Laravel</strong> para gestão de dados de clientes.</li>' +
        '<li>Administração de bases MySQL, sequências de dados complexas e otimização do desempenho.</li>' +
        '<li>Colaboração com a equipa de design para melhorar a UX e implementar design responsivo em toda a plataforma.</li>' +
        '<li>Tradução de requisitos complexos em especificações técnicas com melhoria proativa da UI/UX.</li>',
      'exp.ach.atos_digital':
        '<li>Desenvolvimento de uma <strong class="glow-accent">plataforma de gestão documental</strong> com Java 17 + Spring Boot, continuando a colaboração Atos.</li>' +
        '<li>Componentes backend para processamento/armazenamento de documentos via APIs RESTful.</li>' +
        '<li>Componentes Angular 14 reutilizáveis para visualização e gestão documental.</li>' +
        '<li>PostgreSQL para metadados estruturados e <strong class="glow-accent">MongoDB</strong> para conteúdo não estruturado.</li>' +
        '<li>Integração de serviços de terceiros para conversão e processamento automatizados.</li>' +
        '<li>Refactor de queries SQL para otimizar tempos de resposta.</li>' +
        '<li>Sprints ágeis de 2 semanas, dailies e planeamento.</li>' +
        '<li>Testes unitários JUnit e de integração; <strong class="glow-accent">Docker + GitLab CI</strong> para ambientes consistentes.</li>',
      'exp.ach.covestro':
        '<li>Desenvolvimento de uma <strong class="glow-accent">plataforma de análise de dados para o setor financeiro</strong> com Java 17, Spring Boot e microsserviços.</li>' +
        '<li>Autenticação avançada com <strong class="glow-accent">OAuth 2.0 + JWT</strong>, integrando serviços de terceiros para verificação multi-camada.</li>' +
        '<li>Dashboards interativos Angular 14 para visualização de dados financeiros em tempo real.</li>' +
        '<li>Otimização de queries SQL complexas - <strong class="glow-accent">redução de 60% no tempo de resposta</strong> via indexação avançada e particionamento.</li>' +
        '<li>Scripts Python de automação para migração e validação de dados históricos.</li>' +
        '<li>Pipelines CI/CD com <strong class="glow-accent">Jenkins + Docker</strong>, reduzindo significativamente o tempo de deploy.</li>' +
        '<li>Colaboração com equipas internacionais em Scrum - stand-ups semanais e planeamento de sprints.</li>',
      'exp.ach.db':
        '<li>Construção e manutenção da aplicação <strong class="glow-accent">StockYou</strong> de gestão de encomendas online.</li>' +
        '<li>Integração na equipa de design & dev do lado servidor - Java SE 8 + Spring Boot.</li>' +
        '<li>Contributo para a arquitetura de software, assegurando estabilidade e performance.</li>' +
        '<li>Mecanismos para <strong class="glow-accent">proteger dados sensíveis</strong> e restringir o acesso a utilizadores autorizados.</li>' +
        '<li>Otimização e cache de queries SQL - paginação e otimização de índices.</li>' +
        '<li>Contributo para a automação dos processos de encomenda e otimização do fluxo de trabalho.</li>',
      'exp.ach.atos_tenerife':
        '<li>Desenvolvimento do lado servidor de um sistema escalável de gestão de encomendas com <strong class="glow-accent">Java 11 + Spring Boot</strong> - arquitetura de microsserviços, design de APIs RESTful.</li>' +
        '<li>Desenho da <strong class="glow-accent">infraestrutura de segurança</strong> com Spring Security - autenticação multi-camada e autorização baseada em roles.</li>' +
        '<li>Spring Data JPA + Hibernate para interações DB eficientes - otimização de queries e persistência robusta.</li>' +
        '<li>Contributo para o desenvolvimento front-end com frameworks JS modernos.</li>' +
        '<li>Ambiente ágil com planeamento de sprints e dailies.</li>',
      'exp.ach.bragginn':
        '<li>Instalação e manutenção de sistemas de rede cablada e hardware do restaurante.</li>' +
        '<li>Desenvolvimento da <strong class="glow-accent">arquitetura backend para administração de contas de empregados</strong>.</li>' +
        '<li>Sistemas de bases de dados relacionais otimizados para várias operações.</li>' +
        '<li>Melhoria dos processos de obtenção/atualização de dados, aumentando significativamente os tempos de resposta.</li>' +
        '<li>Contributo para fluxos automatizados de onboarding e gestão de contas.</li>',

      'contact.heading': 'Vamos',
      'contact.heading_accent': 'conectar',
      'contact.subheading': 'Pronto para trabalharmos juntos?',
      'contact.body': 'Multilíngue e imediatamente disponível, pronto a trazer o meu conjunto variado de competências para o teu próximo projeto. Vamos construir algo grande.',
      'contact.location': 'França',
      'contact.form.name': 'O teu nome',
      'contact.form.email': 'O teu email',
      'contact.form.message': 'A tua mensagem',
      'contact.send': 'Enviar mensagem',

      'footer.copy': '&copy; 2026 Ilya Alexeev. Todos os direitos reservados.'
    }
  };

  function detectLang() {
    var stored = null;
    try { stored = localStorage.getItem('lang'); } catch (e) {}
    if (stored && I18N[stored]) return stored;
    var nav = (navigator.language || navigator.userLanguage || 'en').slice(0, 2).toLowerCase();
    return I18N[nav] ? nav : 'en';
  }

  function findLang(code) {
    for (var i = 0; i < SUPPORTED.length; i++) {
      if (SUPPORTED[i].code === code) return SUPPORTED[i];
    }
    return SUPPORTED[0];
  }

  function applyLang(code) {
    var dict = I18N[code] || I18N.en;
    var fallback = I18N.en;

    function val(key) {
      return dict[key] !== undefined ? dict[key] : fallback[key];
    }

    // Text content
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n');
      var v = val(key);
      if (v !== undefined) els[i].textContent = v;
    }

    // HTML content
    var htmlEls = document.querySelectorAll('[data-i18n-html]');
    for (var j = 0; j < htmlEls.length; j++) {
      var hKey = htmlEls[j].getAttribute('data-i18n-html');
      var hv = val(hKey);
      if (hv !== undefined) htmlEls[j].innerHTML = hv;
    }

    // Attribute content (placeholder, title, aria-label, etc.)
    var attrEls = document.querySelectorAll('[data-i18n-attr]');
    for (var k = 0; k < attrEls.length; k++) {
      var spec = attrEls[k].getAttribute('data-i18n-attr');
      var pairs = spec.split(',');
      for (var p = 0; p < pairs.length; p++) {
        var bits = pairs[p].split(':');
        var attr = (bits[0] || '').trim();
        var aKey = (bits[1] || '').trim();
        var av = val(aKey);
        if (attr && av !== undefined) attrEls[k].setAttribute(attr, av);
      }
    }

    // Update <html lang>
    document.documentElement.setAttribute('lang', code);

    // Persist
    try { localStorage.setItem('lang', code); } catch (e) {}

    // Update toggle UI
    var lang = findLang(code);
    var curFlag = document.getElementById('langCurrentFlag');
    var curLabel = document.getElementById('langCurrentLabel');
    if (curFlag) curFlag.textContent = lang.flag;
    if (curLabel) curLabel.textContent = lang.label;

    var options = document.querySelectorAll('[data-lang-option]');
    for (var o = 0; o < options.length; o++) {
      options[o].classList.toggle('active', options[o].getAttribute('data-lang-option') === code);
    }
  }

  function initToggle() {
    var toggle = document.getElementById('langToggle');
    var menu = document.getElementById('langMenu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target) && e.target !== toggle && !toggle.contains(e.target)) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    var options = menu.querySelectorAll('[data-lang-option]');
    for (var i = 0; i < options.length; i++) {
      options[i].addEventListener('click', function () {
        var code = this.getAttribute('data-lang-option');
        applyLang(code);
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    }
  }

  function init() {
    applyLang(detectLang());
    initToggle();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

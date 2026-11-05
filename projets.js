// scripts pour la page projets
document.addEventListener('DOMContentLoaded', () => {

    /* ============================================================
       DATA : Liste complète des projets
    ============================================================ */

    const projets = [
        {
            id: "p1",
            title: "Sensibilisation à l’hygiène informatique & cybersécurité",
            tags: ["Cybersécurité", "Prévention", "Analyse"],
            full: `
<strong>Objectifs du projet :</strong><br>
Analyser plusieurs cyberattaques récentes (2022–2024), comprendre leurs mécanismes
et vulgariser les risques avec un contenu pédagogique structuré.<br><br>

<strong>Ce que j’ai réalisé :</strong><br>
• Analyse de 10 cyberattaques majeures<br>
• Schéma explicatif détaillé<br>
• Vidéo de sensibilisation<br>
• Tableau synthèse + restitution orale<br><br>

<strong>Compétences développées :</strong><br>
Analyse, vulgarisation, communication, structuration pédagogique.<br><br>

<strong>Livrables :</strong><br>
<a href="SAE11/SAE11_Présentation.pdf" target="_blank">Voir le diaporama</a><br>
<a href="SAE11/SAE11_Tableau_Synthèse.pdf" target="_blank">Tableau des cyberattaques</a>
`
        },

        {
            id: "p2",
            title: "Système de prise de photos pour banc avionique",
            tags: ["Raspberry Pi", "Électronique", "MariaDB", "Télécoms"],
            full: `
<strong>Contexte :</strong><br>
Projet universitaire réalisé en collaboration avec Thales Alenia Space. Objectif :
développer un système embarqué capable de prendre des photos automatiques/manuelles
d’un banc avionique avant chaque test.<br><br>

<strong>Partie électronique :</strong><br>
• Montage LED + LDR pour mesurer la luminosité<br>
• Calcul des résistances avec loi d’Ohm<br>
• Intégration stable sur Raspberry Pi Pico WH<br><br>

<strong>Développement logiciel :</strong><br>
• Interface web locale en HTML/CSS/JS/PHP<br>
• Stockage des photos / logs / utilisateurs en MariaDB<br>
• Gestion de l’historique et consultation des images via interface web<br><br>

<strong>Fonctionnalités :</strong><br>
• Capture planifiée toutes les 24h<br>
• Capture manuelle depuis le site web<br>
• Ajustement automatique via LED<br>
• Journalisation complète<br><br>

<strong>Gestion de projet :</strong><br>
• Organisation, communication, répartition des tâches<br>
• Documentation claire et structurée<br><br>

<strong>Livrable :</strong><br>
<a href="SAE15/Thales_07_SAE23_24_rapport.pdf" target="_blank">Voir le rapport</a>
`
        },

        {
            id: "p3",
            title: "Portfolio web personnel",
            tags: ["HTML", "CSS", "Responsive", "Web"],
            full: `
<strong>Objectif :</strong><br>
Créer un portfolio professionnel entièrement codé (HTML/CSS/JS),
modernisé et responsive.<br><br>

<strong>Travail effectué :</strong><br>
• Architecture complète des pages<br>
• Design propre et lisible<br>
• Version mobile / tablette<br>
• Navigation fluide et ergonomique<br><br>

<strong>Compétences :</strong><br>
Design UI/UX, structuration de pages, responsive design.
`
        },

        {
            id: "p4",
            title: "Analyse d’un réseau domestique",
            tags: ["Réseaux", "Wireshark", "Diagnostic"],
            full: `
<strong>Objectif :</strong><br>
Analyser un réseau réel (box + routeur + terminaux) et en comprendre
le fonctionnement complet.<br><br>

<strong>Étapes réalisées :</strong><br>
• Analyse des équipements<br>
• Tests ping / traceroute / débits<br>
• Analyse de paquets Wireshark<br>
• Schématisation complète<br>
• Étude consommation énergétique<br><br>

<strong>Livrables :</strong><br>
<a href="SAE12/rapport_SAE12.pdf" target="_blank">Voir le rapport</a><br>
<a href="SAE12/video_SAE12.mp4" target="_blank">Voir la vidéo</a>
`
        },

        {
            id: "p5",
            title: "Introduction à l’e-réputation",
            tags: ["Prévention", "Éducation", "Cyber"],
            full: `
<strong>Ce que contient le projet :</strong><br>
• Analyse des risques liés à l’e-réputation<br>
• Création de supports pédagogiques<br>
• Intervention destinée aux collégiens / lycéens<br><br>

<strong>Livrables :</strong><br>
<a href="/SAE14/e-reputation.pdf" target="_blank">Diaporama documentaire</a><br>
<a href="/SAE14/Les Dangers d’internet.pdf" target="_blank">Présentation d'intervention</a><br>
<a href="/SAE14/JeuReputation.pdf" target="_blank">Jeu de cartes</a>
`
        },

        {
            id: "p6",
            title: "Analyse d’un câble coaxial",
            tags: ["Télécoms", "Signal", "Mesures"],
            full: `
<strong>Contenu :</strong><br>
Étude physique du câble coaxial : atténuation, fréquence, impédance,
propagation du signal.<br><br>

<strong>Travaux effectués :</strong><br>
• Mesures labo<br>
• Utilisation Matlab/Octave<br>
• Analyse critique des résultats<br><br>

<a href="/SAE13/Badaoui_W-SAE13-Rapport.pdf" target="_blank">Voir le rapport</a>
`
        },

        {
            id: "p7",
            title: "Infrastructure réseau PME",
            tags: ["Cisco", "VLAN", "ASA", "Réseaux"],
            full: `
<strong>Objectif :</strong><br>
Construire une infrastructure réseau complète pour une PME.<br><br>

<strong>Réalisation :</strong><br>
• VLAN<br>
• DHCP / DNS / HTTP<br>
• Routage dynamique<br>
• Firewall ASA<br>
• Mise en place DMZ<br><br>

<a href="/SAE21/SAE21_GRP30.pdf" target="_blank">Voir le rapport</a>
`
        },

        {
            id: "p8",
            title: "Système de télésurveillance LoRa",
            tags: ["LoRa", "Arduino", "Portée"],
            full: `
<strong>Objectif :</strong><br>
Étudier les performances d’un système LoRa (portée, pertes, SF/BW).<br><br>

<strong>Travaux réalisés :</strong><br>
• Mesures intérieur / extérieur<br>
• Analyse des pertes de signal<br>
• Manipulations C/C++ sur Arduino<br><br>

<em>Aucun livrable disponible</em>
`
        }
    ];

    /* ============================================================
       MODALE
    ============================================================ */

    const modalOverlay = document.getElementById("modalOverlay");
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalContent = document.getElementById("modalContent");
    const modalTags = document.getElementById("modalTags");
    const closeModal = document.getElementById("closeModal");

    function openModal(id) {
        const p = projets.find(x => x.id === id);
        if (!p) return;

        modalTitle.innerHTML = p.title;

        // Tags
        modalTags.innerHTML = "";
        p.tags.forEach(t => {
            const span = document.createElement("span");
            span.classList.add("tag");
            span.innerText = t;
            modalTags.appendChild(span);
        });

        // Contenu
        modalContent.innerHTML = `<div class="modal-scroll">${p.full}</div>`;

        modalOverlay.style.display = "flex";
        modalOverlay.setAttribute('aria-hidden', 'false');
        modal.style.display = "block";
        modal.setAttribute('aria-hidden', 'false');

        // focus trap simple: focus close button
        if (closeModal && typeof closeModal.focus === 'function') closeModal.focus();
    }

    /* Fermeture */
    const close = () => {
        modalOverlay.style.display = "none";
        modalOverlay.setAttribute('aria-hidden', 'true');
        modal.style.display = "none";
        modal.setAttribute('aria-hidden', 'true');
    };

    if (closeModal) {
        closeModal.addEventListener('click', close);
    }

    modalOverlay.addEventListener('click', e => {
        if (e.target === modalOverlay) close();
    });

    // close with ESC key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') close();
    });

    /* ============================================================
       FILTRES
    ============================================================ */

    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            document.querySelectorAll(".filter-btn")
                .forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            document.querySelectorAll(".project-card").forEach(card => {
                const cat = card.dataset.category;
                card.style.display = (filter === "all" || filter === cat)
                    ? "block"
                    : "none";
            });
        });
    });

    /* ============================================================
       CLICK OUVERTURE MODALE
    ============================================================ */
    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener('click', () => {
            openModal(card.dataset.id);
        });
        // keyboard accessibility: open with Enter
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(card.dataset.id);
            }
        });
        // make cards focusable
        card.setAttribute('tabindex', '0');
    });

});
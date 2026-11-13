
/* ---- Skills logic ---- */

/* DATA MODALES (Avec tableaux "projects" prêts à être remplis) */
const skillsDetails = {
  python: {
    title: "Python", tags: ["Automatisation", "Scripting", "POO"],
    html: "<strong>Contexte :</strong><br>Outil indispensable pour l'automatisation de mes tâches et le CTF.<br><br><strong>Ce que je fais :</strong><br>• Création de scripts pour automatiser la reconnaissance.<br>• Manipulation de données (fichiers logs, JSON).<br>• Écriture d'exploits customisés.",
    projects: [
      { name: "Projet SAE 1.05", link: "#projets", desc: "Scripting pour automatiser le traitement de données réseaux." }
    ]
  },
  java: {
    title: "Java", tags: ["POO", "Algorithmique", "Logiciel"],
    html: "<strong>Contexte :</strong><br>Langage principal abordé lors du cursus BUT pour comprendre la structure logicielle profonde.<br><br><strong>Ce que je fais :</strong><br>• Développement orienté objet (héritage, polymorphisme, interfaces).<br>• Création d'applications avec des structures de données complexes.",
    projects: [
      { name: "Application de gestion (SAE)", link: "#projets", desc: "Développement du back-end robuste en Java." }
    ]
  },
  php: {
    title: "PHP (Back-end)", tags: ["Back-end", "Sessions", "Sécurité Front"],
    html: "<strong>Contexte :</strong><br>Langage utilisé pour lier mes bases de données à mes interfaces web.<br><br><strong>Ce que je fais :</strong><br>• Traitement PHP sécurisé côté serveur (sessions, prévention injections SQL).<br>• Création d'API basiques et de systèmes d'authentification.",
    projects: [
      { name: "Plateforme Web", link: "#projets", desc: "Création de la logique de connexion et du traitement des formulaires." }
    ]
  },
  mysql: {
    title: "MySQL / MariaDB", tags: ["SQL", "Modélisation", "Bases de données"],
    html: "<strong>Contexte :</strong><br>Indispensable pour le stockage persistant dans mes projets web.<br><br><strong>Ce que je fais :</strong><br>• Modélisation MCD/MLD propre et normalisée.<br>• Requêtes complexes avec jointures et sous-requêtes.<br>• Sensibilisation aux attaques de type SQL Injection.",
    projects: [
      { name: "Base de données E-commerce", link: "#projets", desc: "Conception du schéma relationnel complet." }
    ]
  },
  reseaux: {
    title: "Configuration d'équipements réseaux", tags: ["Cisco", "VLAN / Routage", "Pare-feu"],
    html: "<strong>Contexte :</strong><br>Travaux pratiques intensifs et SAE (Projet PME).<br><br><strong>Ce que je fais :</strong><br>• Design et déploiement d'architectures réseau segmentées (multi-VLAN).<br>• Configuration avancée de routeurs et switchs (Cisco, EIGRP/OSPF).<br>• Sécurisation périmétrique via pare-feu (ASA) et création de DMZ.",
    projects: [
      { name: "Infrastructure PME (SAE 21)", link: "#projets", desc: "Mise en place de l'architecture complète, de l'adressage au routage." }
    ]
  },
  linux: {
    title: "Administration Linux", tags: ["Debian / Kali", "Bash", "Services"],
    html: "<strong>Contexte :</strong><br>Environnement de travail quotidien, que ce soit pour l'administration ou les attaques.<br><br><strong>Ce que je fais :</strong><br>• Gestion stricte des utilisateurs, groupes et permissions.<br>• Déploiement et sécurisation de services vitaux (Apache, SSH).<br>• Automatisation système via des scripts Bash.",
    projects: []
  },
  recon: {
    title: "Reconnaissance & Footprinting", tags: ["Nmap", "OSINT", "Vuln Assessment"],
    html: "<strong>Contexte :</strong><br>La phase la plus cruciale du Penetration Testing Process.<br><br><strong>Ce que je fais :</strong><br>• Information gathering passif (OSINT) et actif (Scans Nmap poussés).<br>• Cartographie de la surface d'attaque et identification des services exposés.<br>• Évaluation de vulnérabilités (Vulnerability Assessment).",
    projects: [
      { name: "HackTheBox / CTF", link: "#projets", desc: "Phase initiale systématique sur chaque machine affrontée." }
    ]
  },
  webpentest: {
    title: "Exploitation Web", tags: ["SQLi / XSS", "Burp Suite", "Web App"],
    html: "<strong>Contexte :</strong><br>Audits applicatifs sur des environnements d'entraînement dédiés.<br><br><strong>Ce que je fais :</strong><br>• Interception, analyse et manipulation de requêtes HTTP avec Burp Suite.<br>• Exploitation de failles d'injection (SQLi, Command Injection).<br>• Recherche de failles logiques, contournement d'authentification et XSS.",
    projects: []
  },
  shells: {
    title: "Payloads, Shells & Cracking", tags: ["Reverse Shell", "Hashcat / John", "PrivEsc"],
    html: "<strong>Contexte :</strong><br>L'accès initial et la post-exploitation sur les machines cibles.<br><br><strong>Ce que je fais :</strong><br>• Génération de payloads pour contourner les défenses et obtenir des reverse shells.<br>• Craquage de mots de passe (attaques par dictionnaire, règles) avec Hashcat.<br>• Escalade de privilèges (PrivEsc) sous Linux (SUID, sudoers, PATH hijack).",
    projects: []
  },
  perseverance: {
    title: "Persévérance", tags: ["Détermination", "Résolution"],
    html: "<strong>Mentalité :</strong><br>Je cherche à comprendre la cause d'un problème avant de proposer une solution. En cybersécurité, cette méthode améliore la qualité des analyses.",
    projects: []
  },
  organisation: {
    title: "Organisation & Priorisation", tags: ["Planification", "Gestion du temps"],
    html: "<strong>Mentalité :</strong><br>Je planifie mes objectifs techniques, répartis les étapes et respecte les échéances importantes. La régularité me permet de progresser.",
    projects: []
  },
  rigueur: {
    title: "Rigueur & Deadlines", tags: ["Fiabilité", "Gestion du stress"],
    html: "<strong>Mentalité :</strong><br>La formation m'impose de gérer un flux massif de projets simultanés. J'ai appris à encaisser cette pression en respectant strictement les deadlines sans jamais sacrifier la qualité finale du livrable.",
    projects: []
  },
  curiosite: {
    title: "Curiosité & Veille", tags: ["HackTheBox", "Auto-formation"],
    html: "<strong>Mentalité :</strong><br>La technologie évolue vite, les failles encore plus. Ma formation ne s'arrête pas à la porte de l'IUT : je pratique sur des plateformes d'entraînement et consulte de la documentation technique pour approfondir mes connaissances.",
    projects: []
  },
  equipe: {
    title: "Synergie d'Équipe", tags: ["Collaboration", "Projets BUT"],
    html: "<strong>Mentalité :</strong><br>Le BUT R&T est construit autour des projets de groupe (SAE). J'ai l'habitude de composer avec différentes personnalités, de diviser intelligemment le travail, de versionner nos codes (Git) et de synchroniser nos efforts.",
    projects: []
  }
};

/* Fiches de compétences harmonisées et alignées sur les modules HTB explicitement terminés.
   Le parcours CPTS est en progression : ne pas présenter les modules restants comme acquis. */
Object.assign(skillsDetails, {
  "python": {
    "title": "Python",
    "tags": [
      "Scripting",
      "Automatisation",
      "POO"
    ],
    "html": "<strong>Développement :</strong><br>Scripts d'automatisation et manipulation de données techniques.<br>Programmation orientée objet, analyse de fichiers et outillage dans un cadre de laboratoire.",
    "projects": []
  },
  "java": {
    "title": "Java",
    "tags": [
      "POO",
      "Android",
      "Algorithmique"
    ],
    "html": "<strong>Développement :</strong><br>Applications orientées objet et outils de traitement.<br>Interface Android Java et échanges avec des API pour des projets pédagogiques.",
    "projects": []
  },
  "php": {
    "title": "PHP",
    "tags": [
      "API",
      "PDO",
      "Sessions"
    ],
    "html": "<strong>Développement serveur :</strong><br>Création d'API et traitement de formulaires côté serveur.<br>Connexion d'applications à des bases de données et gestion de requêtes HTTP.",
    "projects": []
  },
  "mysql": {
    "title": "MySQL / MariaDB",
    "tags": [
      "SQL",
      "Modélisation",
      "Requêtes"
    ],
    "html": "<strong>Données :</strong><br>Conception de tables relationnelles et exploitation de requêtes SQL.<br>Intégration à des applications web et systèmes d'information.",
    "projects": []
  },
  "reseaux": {
    "title": "Administration des réseaux",
    "tags": [
      "VLAN / OSPF",
      "HSRP",
      "Cisco ASA"
    ],
    "html": "<strong>Infrastructure :</strong><br>Segmentation VLAN, configuration de commutateurs et routeurs Cisco.<br>Routage, haute disponibilité et règles de sécurité sur des topologies d'entraînement.",
    "projects": []
  },
  "linux": {
    "title": "Administration Linux",
    "tags": [
      "Debian / Kali",
      "Bash",
      "Services"
    ],
    "html": "<strong>Systèmes :</strong><br>Administration de services, comptes utilisateurs et permissions.<br>Scripting Bash et utilisation d'environnements Debian et Kali.",
    "projects": []
  },
  "recon": {
    "title": "Reconnaissance & énumération",
    "tags": [
      "Nmap",
      "Footprinting",
      "OSINT"
    ],
    "html": "<strong>Parcours HTB Academy — modules terminés :</strong><br>Network Enumeration with Nmap.<br>Footprinting.<br>Information Gathering - Web Edition.<br>Pratique de la cartographie des services et de l'identification des points d'entrée.",
    "projects": []
  },
  "webpentest": {
    "title": "Reconnaissance des applications web",
    "tags": [
      "Web Recon",
      "Énumération",
      "HTTP"
    ],
    "html": "<strong>Parcours HTB Academy — module terminé :</strong><br>Information Gathering - Web Edition.<br>Collecte d'informations et identification de surfaces d'attaque web.<br>Les modules SQLi, XSS et les autres attaques web ne sont pas présentés ici comme terminés.",
    "projects": []
  },
  "shells": {
    "title": "Accès initial & exploitation",
    "tags": [
      "Shells",
      "Metasploit",
      "File Transfers"
    ],
    "html": "<strong>Parcours HTB Academy — modules terminés :</strong><br>Getting Started.<br>File Transfers.<br>Shells & Payloads.<br>Using the Metasploit Framework.<br>Manipulation de sessions et compréhension des mécanismes d'accès initial en laboratoire.",
    "projects": []
  },
  "vulns": {
    "title": "Analyse des vulnérabilités",
    "tags": [
      "Vulnerability Assessment",
      "Analyse",
      "Risques"
    ],
    "html": "<strong>Parcours HTB Academy — module terminé :</strong><br>Vulnerability Assessment.<br>Identifier et caractériser les vulnérabilités connues d'un environnement de test.<br>Distinguer découverte technique, impact et priorisation des risques.",
    "projects": []
  },
  "passwords": {
    "title": "Sécurité des authentifications",
    "tags": [
      "Password Attacks",
      "Authentification",
      "Dictionnaires"
    ],
    "html": "<strong>Parcours HTB Academy — module terminé :</strong><br>Password Attacks.<br>Étude des mécanismes d'authentification et des attaques par mots de passe.<br>Exercices et tests réalisés dans des environnements d'apprentissage autorisés.",
    "projects": []
  },
  "services": {
    "title": "Audit des services réseau",
    "tags": [
      "Common Services",
      "Énumération",
      "Protocoles"
    ],
    "html": "<strong>Parcours HTB Academy — module terminé :</strong><br>Attacking Common Services.<br>Identification des services, observation de leurs configurations et scénarios d'exploitation en laboratoire.",
    "projects": []
  },
  "pivoting": {
    "title": "Pivot réseau & tunneling",
    "tags": [
      "Pivoting",
      "Tunneling",
      "Port Forwarding"
    ],
    "html": "<strong>Parcours HTB Academy — module terminé :</strong><br>Pivoting, Tunneling, and Port Forwarding.<br>Compréhension des accès aux sous-réseaux isolés, des tunnels et des redirections de ports dans une infrastructure de test.",
    "projects": []
  },
  "adsecurity": {
    "title": "Sécurité Active Directory",
    "tags": [
      "AD Enumeration",
      "Attack Paths",
      "Windows"
    ],
    "html": "<strong>Parcours HTB Academy — module terminé :</strong><br>Active Directory Enumeration & Attacks.<br>Énumération d'environnements AD et étude des chemins d'attaque au sein d'un laboratoire Windows.",
    "projects": []
  }
});

/* Compétences supplémentaires : fiches descriptives */
Object.assign(skillsDetails, {
  adadmin: {
    title: "Administration Active Directory",
    tags: ["AD DS / DNS", "GPO / NTFS", "PowerShell"],
    html: "<strong>Administration Windows Server :</strong><br>Déploiement et administration d'un domaine Active Directory, gestion des utilisateurs, groupes et unités d'organisation.<br>Configuration des services AD DS / DNS, gestion des permissions NTFS et découverte des stratégies de groupe (GPO).<br>Automatisation de tâches d'administration à l'aide de scripts PowerShell en laboratoire.",
    projects: []
  },
  aiworkflow: {
    title: "IA appliquée aux workflows techniques",
    tags: ["Prompting", "Code assisté", "Validation"],
    html: "<strong>Usage raisonné d'assistants IA :</strong><br>Formulation de consignes structurées pour accompagner la programmation, la documentation et les tâches d'administration.<br>Assistance à la lecture de code, au diagnostic d'erreurs et au prototypage de scripts.<br><strong>Méthode :</strong> vérification des propositions par tests, relecture du code généré et attention portée à la confidentialité des données partagées avec les outils d'IA.",
    projects: []
  }
});

/* GESTION MODALE & FILTRES */
const overlay = document.getElementById("skillsModalOverlay");
const modal = document.getElementById("skillsModal");
const modalTitle = document.getElementById("modalSkillTitle");
const modalTags = document.getElementById("modalSkillTags");
const modalContent = document.getElementById("modalSkillContent");
const closeBtn = document.getElementById("closeSkillsModal");

function openSkillModal(id) {
  const data = skillsDetails[id];
  if (!data) return;
  
  // 1. Titre et tags
  modalTitle.textContent = data.title;
  modalTags.innerHTML = "";
  (data.tags || []).forEach(t => {
    const span = document.createElement("span"); span.className = "tag"; span.textContent = t; modalTags.appendChild(span);
  });
  
  // 2. Contenu principal
  let htmlContent = `<div>${data.html}</div>`;
  
  // 3. Bloc "Projets liés" s'il y en a
  if (data.projects && data.projects.length > 0) {
    let projectsList = data.projects.map(p => `<li><a href="${p.link}">${p.name}</a> : ${p.desc}</li>`).join("");
    htmlContent += `
      <div class="linked-projects">
        <div class="linked-projects-title">Projets liés</div>
        <ul>${projectsList}</ul>
      </div>
    `;
  }
  
  modalContent.innerHTML = htmlContent;
  
  // 4. Affichage
  overlay.style.display = "flex"; 
  modal.style.display = "block";
  
  // Petit hack d'accessibilité pour forcer l'affichage correct du z-index
  setTimeout(() => { closeBtn.focus(); }, 10);
}

function closeSkillModal() {
  overlay.style.display = "none"; 
  modal.style.display = "none";
}

// BINDINGS FERMETURE
closeBtn.addEventListener("click", closeSkillModal);
overlay.addEventListener("click", e => { if (e.target === overlay) closeSkillModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSkillModal(); });

// BINDINGS CARTES
document.querySelectorAll(".skill-card").forEach(card => {
  card.addEventListener('click', () => { const id = card.dataset.id; if (id) openSkillModal(id); });
  card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); } });
});

// FILTRES
const filterButtons = document.querySelectorAll(".skill-filter-btn");
filterButtons.forEach(b => b.setAttribute("aria-pressed", String(b.classList.contains("active"))));
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    filterButtons.forEach(b => { b.classList.remove("active"); b.setAttribute("aria-pressed","false"); }); btn.classList.add("active"); btn.setAttribute("aria-pressed","true");
    document.querySelectorAll(".skill-card").forEach(card => {
      const cat = (card.dataset.category || "").split(" ");
      const visible = filter === "all" || cat.includes(filter) || (filter === "soft" && card.classList.contains('soft-card'));
      card.style.display = visible ? "flex" : "none";
    });
  });
});

/* ---- Projects logic ---- */

/* DATA: Les descriptions des projets */
document.addEventListener('DOMContentLoaded', () => {

  const projets = [
    {
      id: "p11",
      title: "Pentest Black Box",
      tags: ["Cyber Kill Chain", "Pivoting", "Metasploit", "PrivEsc"],
      full: `
<p><strong>Contexte du projet :</strong><br>
Réalisation d'un audit de sécurité en condition de "Boîte Noire" sur une infrastructure d'entreprise virtualisée et segmentée. L'objectif était de compromettre la cible finale isolée en appliquant une méthodologie stricte la Cyber Kill Chain.</p>

<button class="btn-read-more" onclick="document.getElementById('details-p11').style.display='block'; this.style.display='none';">Voir le déroulement de l'attaque ▼</button>

<div id="details-p11" style="display: none; margin-top: 15px; padding-top: 15px; border-top: 1px dashed #EBCB3C;">
    <p>
    L'audit a débuté par une phase de reconnaissance au cours de laquelle une cartographie réseau via Nmap a permis d'identifier un serveur frontal Samba obsolète 4.6.3 exposant un partage anonyme inscriptible. Cette faille a été exploitée grâce à la vulnérabilité CVE-2017-7494 SambaCry via Metasploit, permettant d'obtenir un premier accès root. La découverte d'une seconde interface réseau Dual-Homed sur ce serveur compromis a ensuite initié une phase de mouvement latéral pivoting. L'upgrade de la session vers Meterpreter a permis de mettre en place un Port Forwarding afin d'atteindre un serveur Web isolé DVWA, initialement inaccessible depuis l'extérieur. L'attaque s'est poursuivie par une compromission applicative : la protection anti-CSRF à jetons dynamiques a été contournée en scriptant une chaîne d'authentification complète avec curl et grep, ouvrant la voie à l'exploitation d'une RCE pour obtenir un reverse shell en tant qu'utilisateur www-data. Enfin, la phase d'élévation de privilèges a mis en évidence une mauvaise configuration du fichier sudoers (NOPASSWD sur /bin/nc), exploitée par Binary Hijacking pour basculer root. L'opération s'est conclue par la création d'un relais TCP via mkfifo sur le pivot Samba, centralisant ainsi le contrôle de la cible finale directement sur la machine d'attaque Kali.</p>

</div>

<p style="margin-top: 15px;"><strong>Livrable :</strong><br>
<a href="SAE34/SAE34_BADAOUI.pdf" target="_blank" rel="noopener noreferrer">Voir le rapport d'audit complet</a></p>
`
    },
    {
      id: "p1",
      title: "Analyse & Sensibilisation Cybersécurité",
      tags: ["Cybersécurité", "Prévention", "Analyse d'incidents"],
      full: `
<p><strong>Contexte du projet :</strong><br>
Projet réalisé dans le cadre d’une SAE de cybersécurité visant à analyser des cyberattaques récentes et à produire un contenu de sensibilisation destiné au grand public. 
L’objectif principal était de comprendre les mécanismes des attaques modernes, leurs impacts, et de vulgariser les bonnes pratiques d’hygiène numérique.</p>

<p><strong>Travaux réalisés :</strong><br>
• Analyse approfondie de <strong>10 cyberattaques majeures de 2022 à 2024</strong> (Microsoft, Bank of America, Free, Rockstar Games, etc.).<br>
• Comparaison détaillée : contexte, motivations, techniques d’intrusion, dommages.<br>
• Étude complète du cycle d’attaque : phishing, exploitation, infiltration, extraction de données.<br>
• Rédaction d’un <strong>tableau de synthèse</strong> : causes, impacts, réponses et mesures correctives.<br>
• Conception d’un <strong>schéma pédagogique</strong> expliquant le déroulement d’une attaque type.<br>
• Réalisation d’une vidéo de sensibilisation destinée à un public non technique.</p>

<p><strong>Enseignements tirés :</strong><br>
• Compréhension du fonctionnement réel des attaques modernes (ransomware, exfiltration, compromission DNS…).<br>
• Développement de compétences en <strong>vulgarisation cyber</strong> et en pédagogie.</p>

<p><strong>Livrables :</strong><br>
<span>Présentation complète : document non disponible</span><br>
<a href="SAE11/SAE11_Tableau_Synthèse.pdf" target="_blank" rel="noopener noreferrer">Tableau synthèse des 10 cyberattaques</a></p>
`
    },
    {
      id: "p9",
      title: "Application Mobile : Scanner de Vulnérabilités",
      tags: ["Android (Java)", "API REST (PHP/PDO)", "Retrofit", "Réseau"],
      full: `
<p><strong>Contexte du projet :</strong><br>
Projet de développement full-stack visant à créer une solution complète d'audit réseau. L'objectif était de scanner un réseau, de stocker les vulnérabilités découvertes en base de données, et de fournir une interface mobile fluide pour consulter ces alertes. Pour cela il fallait relier le moteur java, la BdD, l'API et l'application Android.</p>

<p><strong>Architecture technique :</strong><br>
• <strong>Logique Réseau sur Java :</strong> Calcul des plages IP à l'aide d'opérations binaires sur les masques de sous-réseau et balayage pour identifier les hôtes actifs.<br>
• <strong>Back-end & API (PHP / PDO) :</strong> Création d'une API RESTful sécurisée communiquant avec une base MariaDB/MySQL. Génération et distribution des données au format JSON avec gestion rigoureuse des headers HTTP (CORS).<br>
• <strong>Application Mobile (Android / Java) :</strong> Développement de l'interface utilisateur. Utilisation de la librairie <em>Retrofit</em> pour consommer l'API de manière asynchrone, et implémentation d'un <em>RecyclerView</em> pour un affichage optimisé des adresses IP et de leurs failles associées.</p>

<p><strong>Compétences démontrées :</strong><br>
• Développement orienté objet sur environnement mobile : Android Studio.<br>
• Conception, requêtage et consommation d'une API REST.<br>
• Traitement asynchrone des données réseau (Callbacks, gestion des permissions Android).<br>
• Programmation en Java et PHP faisant appels aux concepts de POO.</p>

<p><strong>Livrables :</strong><br>
<span>Code source privé — présentation du projet possible sur demande.</span><br>
`
    },
    {
      id: "p10",
      title: "Conception & Sécurisation d'Infrastructure d'entreprise",
      tags: ["Cisco ASA", "HSRP / OSPF", "VPN IPsec/SSL", "Switch Hardening"],
      full: `
<p><strong>Contexte du projet :</strong><br>
Projet d'ingénierie (SAE 3.Cyber.03) consistant à concevoir et déployer l'architecture réseau d'un nouveau site d'entreprise. L'enjeu majeur était d'assurer une <strong>connectivité totale</strong> entre les différents sites et utilisateurs distants, tout en garantissant une forte <strong>redondance</strong> (HSRP/OSPF) pour éviter toute coupure de service, et une <strong>sécurité</strong> en profondeur (pare-feu ASA, VPN, Hardening) contre les menaces internes et externes.</p>

<button class="btn-read-more" onclick="document.getElementById('details-p10').style.display='block'; this.style.display='none';">En savoir plus sur l'architecture ▼</button>

<div id="details-p10" style="display: none; margin-top: 15px; padding-top: 15px; border-top: 1px dashed #EBCB3C;">
    <p><strong>Haute Disponibilité & Routage :</strong><br>
    • <strong>Redondance L3 (HSRP) :</strong> Configuration en Active/Active par VLAN pour répartir la charge, avec préemption et tracking des interfaces WAN.<br>
    • <strong>Redondance L2 (Rapid-PVST+) :</strong> Élection stratégique des Root Bridges alignés avec les passerelles HSRP pour optimiser les flux et garantir une convergence &lt; 1 seconde.<br>
    • <strong>Routage (OSPF) :</strong> Architecture backbone OSPF (Aire 0) avec sécurisation passive-interface pour le silence réseau et routes statiques flottantes (AD 200) pour un basculement automatique en cas de crash du protocole.</p>

    <p><strong>Sécurité en Profondeur :</strong><br>
    • <strong>Périmétrique (Firewalling ASA 5505) :</strong> Segmentation stricte en 3 zones (Inside 100, DMZ 50, Outside 0). Mise en place du NAT/PAT, de l'inspection de paquets (DNS, FTP) et d'ACLs strictes empêchant les rebonds de la DMZ vers le réseau interne.<br>
    • <strong>Accès (Switch Hardening) :</strong> Verrouillage des ports utilisateurs (Port-Security restrict, max 3), protection contre les serveurs pirates (DHCP Snooping), blocage du MITM (Dynamic ARP Inspection) et mitigation du VLAN Hopping (isolation du VLAN natif 999).<br>
    • <strong>Cryptographie (VPN) :</strong> Interconnexion sécurisée des sites via VPN IPsec (Site-à-Site avec chiffrement AES-256, SHA-HMAC, PFS Group 2) et accès distant nomade via VPN SSL (Cisco AnyConnect) avec allocation de pools IP dédiés en dehors du LAN.</p>

    <p><strong>Compétences démontrées :</strong><br>
    • Conception d'une architecture réseau de bout en bout (IRB, routage, switching & sécurité).<br>
    • Application du principe de moindre privilège et de défense en profondeur contre de multiples attaques réseau.<br>
    • Travail d'équipe collaboratif (répartition des tâches, versions via Onedrive pour le partage des fichiers .pkt).</p>
</div>

<p style="margin-top: 15px;"><strong>Livrable :</strong><br>
<a href="SAE33/SAE3_Cyber_03_Dossier_Technique_Site_C.xlsx" target="_blank" rel="noopener noreferrer">Voir le dossier d'architecture technique</a></p>
`
    },
    {
      id: "p2",
      title: "Système Photo Automatisé (Projet Thales)",
      tags: ["Raspberry Pi", "Électronique", "MariaDB", "Back-end"],
      full: `
<p><strong>Contexte du projet :</strong><br>
Ce projet a été réalisé dans le cadre d’un partenariat pédagogique avec Thales Alenia Space.
L’objectif était de concevoir un système embarqué complet capable de photographier automatiquement et manuellement un banc avionique pour assurer la traçabilité des tests.</p>

<p><strong>Architecture générale :</strong><br>
• <strong>Raspberry Pi 3</strong> (Cœur) : héberge le site web (Apache2), gère la base MariaDB, stocke les photos et assure l’authentification et les logs.<br>
• <strong>Raspberry Pi Pico WH</strong> (Matériel) : gère l'éclairage LED et le capteur de luminosité BH1750 via MicroPython.</p>

<p><strong>Développement logiciel & Sécurité :</strong><br>
• Interface web en HTML/CSS/JS/PHP (login, galerie de consultation, logs admin).<br>
• Base de données MariaDB pour la persistance des accès et des métadonnées.<br>
• Gestion stricte de 3 rôles utilisateurs (Super Admin, Admin, Opérateur) avec politique de mot de passe et hashage robuste.</p>

<p><strong>Livrable :</strong><br>
<a href="SAE15/Thales_07_SAE23_24_rapport.pdf" target="_blank" rel="noopener noreferrer">Voir le rapport technique complet</a></p>
`
    },
    {
      id: "p3",
      title: "Portfolio Web Custom",
      tags: ["HTML/CSS/JS", "UI/UX", "Front-end Development"],
      full: `
<p><strong>Contexte du projet :</strong><br>
Développement de mon propre portfolio professionnel pour présenter mes compétences et projets de manière élégante. Le site est développé from scratch (sans framework) pour garantir une maîtrise totale du code et des performances.</p>

<p><strong>Réalisations techniques :</strong><br>
• Architecture modulaire et design 100% responsive (Flexbox, CSS Grid).<br>
• Création d'une identité visuelle cohérente (Glassmorphism, gradients fluides).<br>
• Développement de composants interactifs en Vanilla JS (système de filtrage dynamique, modales d'informations complexes).<br>
• Optimisation de l'expérience utilisateur (UX) via des animations fluides et une hiérarchie visuelle claire.</p>

<p><strong>Compétences démontrées :</strong><br>
• Maîtrise des standards du web et de l'accessibilité.<br>
• Capacité à gérer un projet de bout en bout, de la maquette au déploiement.</p>
`
    },
    {
      id: "p4",
      title: "Diagnostic d'un Réseau Domestique",
      tags: ["Réseaux", "Wireshark", "Analyse de trames"],
      full: `
<p><strong>Contexte du projet :</strong><br>
Analyse approfondie d'un réseau local réel pour décortiquer les mécanismes fondamentaux d’Internet (adressage, routage, DNS, NAT) et comprendre le cheminement de la donnée.</p>

<p><strong>Analyse et expérimentations :</strong><br>
• <strong>Réseau Local :</strong> Analyse de la configuration IP (IPv4, masque, passerelle) et des rôles de la box (NAT, DHCP, DNS).<br>
• <strong>Capture de trafic (Wireshark) :</strong> Observation des requêtes ARP, résolution DNS complexes et analyse des sessions TCP/TLS.<br>
• <strong>Routage Externe :</strong> Utilisation de Traceroute pour cartographier le chemin vers les serveurs de Google (AS15169), identification des AS traversés et lecture des annonces BGP basiques.</p>

<p><strong>Étude énergétique :</strong><br>
• Mesure de la consommation électrique du matériel informatique et calcul de l'impact carbone selon le mix énergétique du pays.</p>

<p><strong>Livrables :</strong><br>
<a href="SAE12/rapport_SAE12.pdf" target="_blank" rel="noopener noreferrer">Voir le rapport complet</a><br>
<span>Vidéo de démonstration : non disponible</span></p>
`
    },
    {
      id: "p5",
      title: "Atelier de Sensibilisation à l'E-réputation",
      tags: ["Prévention", "Ingénierie Sociale", "Pédagogie"],
      full: `
<p><strong>Contexte :</strong><br>
Création et animation d'un atelier de sensibilisation destiné à des collégiens (classes de 5ème). L'objectif était de les éduquer sur les dangers liés à leur exposition numérique (cyberharcèlement, fuite de données personnelles, ingénierie sociale basique).</p>

<p><strong>Conception Pédagogique :</strong><br>
• Création d’un diaporama structuré présentant les risques et les chiffres clés de manière accessible.<br>
• Animation d'un brainstorming interactif pour libérer la parole.<br>
• Conception d'un jeu de cartes de mise en situation "Situations & Solutions" basé sur des cas concrets (ex: demandes de photos inappropriées, gestion de la pression sociale en ligne).</p>

<p><strong>Livrables pédagogiques :</strong><br>
<a href="/SAE14/e-reputation.pdf" target="_blank" rel="noopener noreferrer">Dossier de recherche</a><br>
<a href="/SAE14/Les Dangers d’internet.pdf" target="_blank" rel="noopener noreferrer">Diaporama d'intervention</a><br>
<span>Jeu de cartes interactif : document non disponible</span></p>
`
    },
    {
      id: "p6",
      title: "Étude Physique & Mesures : Câble Coaxial",
      tags: ["Télécoms", "Propagation de signaux", "Mesures Labo"],
      full: `
<p><strong>Objectif du projet :</strong><br>
Comprendre le fonctionnement physique d'un support de transmission filaire classique (le câble coaxial), ses caractéristiques de propagation et valider la théorie par des mesures réelles au laboratoire.</p>

<p><strong>Travaux réalisés :</strong><br>
• <strong>Théorie :</strong> Modélisation de la ligne de transmission (R, L, C, G), calcul de l'impédance caractéristique et compréhension des phénomènes d'atténuation (effet de peau, pertes diélectriques).<br>
• <strong>Expérimentation :</strong> Mesures en laboratoire sur un câble KX22A de grandes longueurs. Extraction des données et traçage des courbes d'atténuation en fonction de la fréquence via MATLAB/Octave.<br>
• <strong>Conclusion :</strong> Déduction d'une loi de comportement empirique validant les données constructeur.</p>

<p><strong>Livrable :</strong><br>
<a href="/SAE13/Badaoui_W-SAE13-Rapport.pdf" target="_blank" rel="noopener noreferrer">Voir le rapport d'étude complet</a></p>
`
    },
    {
      id: "p7",
      title: "Déploiement d'Architecture Réseau PME",
      tags: ["Cisco Packet Tracer", "VLAN / Routage", "Sécurité Périmétrique"],
      full: `
<p><strong>Contexte :</strong><br>
Simulation d'une mission d'ingénierie réseau : concevoir, configurer et sécuriser l’infrastructure complète d’une petite entreprise sous Cisco Packet Tracer.</p>

<p><strong>Implémentation technique :</strong><br>
• <strong>Switching & Routage :</strong> Segmentation rigoureuse en VLANs (RH, Serveurs, Utilisateurs), configuration STP (PVST) et routage inter-VLAN via un commutateur multicouche (MLS).<br>
• <strong>Services :</strong> Mise en place d'un serveur DHCP centralisé et de la résolution DNS interne.<br>
• <strong>Sécurité & DMZ :</strong> Déploiement d'un firewall Cisco ASA 5506 pour cloisonner le réseau (zones Inside, Outside, DMZ). Création de règles d'accès strictes (ACLs) et configuration du NAT (statique pour l'hébergement web externe, dynamique pour le trafic sortant).<br>
• <strong>Interconnexion :</strong> Configuration du routage dynamique EIGRP pour relier l'infrastructure au réseau du FAI simulé.</p>

<p><strong>Livrable :</strong><br>
<a href="/SAE21/SAE21_GRP30.pdf" target="_blank" rel="noopener noreferrer">Voir le dossier d'architecture</a></p>
`
    },
    
    {
      id: "p8",
      title: "Étude d'un Système IoT LoRa",
      tags: ["IoT / LoRaWAN", "Calculs RF", "Basse consommation"],
      full: `
<p><strong>Contexte du projet :</strong><br>
Étude de faisabilité et configuration théorique d'une liaison radio LoRa pour un système de télésurveillance économique et autonome, destiné au maintien à domicile des personnes isolées.</p>

<p><strong>Analyse technique :</strong><br>
• <strong>Contraintes :</strong> Nécessité d'une grande portée (pénétration des murs), d'un débit ultra-faible (1 trame/jour d'activité) et d'une autonomie sur batterie de plusieurs mois.<br>
• <strong>Ingénierie RF :</strong> Calcul de la taille du payload, simulation du débit nécessaire et sélection des couples Spreading Factor / Bandwidth (SF/BW) optimaux pour maximiser la portée tout en limitant le temps dans l'air (Time On Air).<br>
• <strong>Bilan énergétique :</strong> Étude précise de la consommation électrique dans les différents états du module (émission, réception, veille prolongée) pour valider l'autonomie du système.</p>

<p><em>Aucun livrable PDF associé. Documentation technique interne uniquement.</em></p>
`
    }
    ,{
      id: "p12",
      title: "Télédiffusion & Lecteur Multimédia",
      tags: ["Télécoms DVB-T/S", "Analyse RF", "Python & GStreamer", "Traitement du Signal"],
      full: `
<p><strong>Contexte du projet :</strong><br>
Cette SAE se divise en deux volets complémentaires alliant l'étude physique des signaux de télédiffusion et la manipulation logicielle de flux multimédias.</p>

<button class="btn-read-more" onclick="document.getElementById('details-p12').style.display='block'; this.style.display='none';">Voir les détails techniques ▼</button>

<div id="details-p12" style="display: none; margin-top: 15px; padding-top: 15px; border-top: 1px dashed #EBCB3C;">
    <p>Ce projet s'articule autour de deux axes complémentaires : l'analyse physique des signaux RF et le développement logiciel multimédia. La première phase a consisté en une campagne de mesures sur le terrain à l'aide d'un mesureur de champ le Televes H30FLEX ciblant les signaux de télédiffusion Satellite DVB-S et Terrestre la TNT / DVB-T. Elle a impliqué une analyse spectrale détaillée (relevés de puissances, largeurs de bande UHF), l'évaluation de la robustesse du signal via l'étude des métriques SNR, MER et BER (avant et après correction VBER), ainsi que l'interprétation de l'impact du bruit sur la dispersion des symboles d'un diagramme de constellation 64-QAM. Dans un second temps, le projet a abouti au développement Python du lecteur audio interactif « CodecPlayer ». Conçue via l'environnement Jupyter (ipywidgets), cette interface repose sur la puissante librairie GStreamer pour le décodage fluide de flux haute qualité (WAV, FLAC, MP3) et sur Mutagen pour l'extraction dynamique des métadonnées (tags ID3, pochettes d'album en temps réel). L'ingénierie UI/UX a également été soignée afin d'y intégrer un égaliseur graphique, un spectrogramme en temps réel et un gestionnaire automatisé de playlists. Ce double travail démontre à la fois une maîtrise pointue de la couche physique des réseaux de diffusion multiplexage OFDM, modulation QAM, une grande rigueur dans l'interprétation des métriques télécoms, et une solide aptitude à programmer des solutions de traitement de flux complexes.</p>

</div>

<p style="margin-top: 15px;"><strong>Compétences démontrées :</strong><br>
• Compréhension de la couche physique des réseaux de diffusion (RF, multiplexage OFDM, modulation QAM).<br>
• Programmation logicielle appliquée au traitement de flux multimédias complexes.<br>
• Rigueur dans le relevé et l'interprétation de métriques télécoms.</p>

<p style="margin-top: 15px;"><strong>Livrables :</strong><br>
<a href="SAE31/CR_saé31.pdf" target="_blank" rel="noopener noreferrer">Voir le compte rendu de Télédiffusion</a></p>
`
    }
    ,{
      id: "p13",
      title: "Automatisation Active Directory & PowerShell",
      tags: ["PowerShell", "Active Directory", "Windows Server 2025", "Sécurité NTFS"],
      full: `
<p><strong>Contexte et Déploiement :</strong><br>
L'objectif de ce projet d'administration système était de déployer une infrastructure réseau fonctionnelle, puis d'en automatiser entièrement la gestion. J'ai mis en place un laboratoire comprenant un contrôleur de domaine sous Windows Server 2025 et un poste client Windows 11. Toute la préparation du serveur (promotion du domaine <code>rt.local</code>, installation des rôles AD DS, DNS et DHCP, configuration du pare-feu et intégration du poste) a été réalisée exclusivement via des commandes PowerShell.</p>

<p><strong>Scripting d'Automatisation :</strong><br>
Pour gérer le cycle de vie des employés, j'ai développé un outil centralisé et paramétrable (<code>Manage-ADUsers.ps1</code>) capable de traiter des données issues de fichiers CSV. Ce script automatise deux phases critiques :<br>
• <strong>Onboarding sécurisé :</strong> Création des comptes avec changement de mot de passe obligatoire. Les dossiers personnels sont générés avec un durcissement NTFS strict (cassage de l'héritage et contrôle total exclusif à l'utilisateur et aux administrateurs).<br>
• <strong>Offboarding et Rétention :</strong> Lors d'un départ, le script sécurise les données en créant une archive ZIP horodatée du répertoire. Il force ensuite la suppression du dossier original et du compte AD de manière totalement transparente.</p>

<p><strong>Fiabilisation et tests du script :</strong><br>
Afin de rendre cet outil fiable pour un environnement de production, j'ai intégré une gestion préventive des erreurs et verrouillé les arguments d'entrée (via <code>[ValidateSet]</code>). Le script intègre également un "Safe-Mode" (grâce au paramètre <code>-WhatIf</code>) permettant de simuler son exécution sans altérer l'infrastructure. Enfin, une fonction personnalisée assure une traçabilité complète en générant des retours console colorés et en consignant chaque action dans un fichier de logs horodaté (<code>historique.log</code>).</p>

<p style="margin-top: 15px;"><strong>Livrable :</strong><br>
<a href="R405/R405_BADAOUI_1B.pdf" target="_blank" rel="noopener noreferrer">Voir le rapport d'architecture et de scripting</a></p>
`
    }
  ];

  /* MODAL LOGIC */
  const modalOverlay = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');
  const modalTags = document.getElementById('modalTags');
  const closeModalBtn = document.getElementById('closeModal');

  function openModal(id){
    const p = projets.find(x => x.id === id);
    if(!p) return;
    
    modalTitle.innerHTML = p.title;
    modalTags.innerHTML = '';
    (p.tags || []).forEach(t => {
      const s = document.createElement('span');
      s.className = 'tag';
      s.innerText = t;
      modalTags.appendChild(s);
    });
    
    modalContent.innerHTML = p.full;
    
    modalOverlay.style.display = 'flex';
    // Petit délai pour l'accessibilité et les animations
    setTimeout(() => {
        modalOverlay.setAttribute('aria-hidden', 'false');
        closeModalBtn.focus();
    }, 10);
  }

  const close = () => {
    modalOverlay.style.display = 'none';
    modalOverlay.setAttribute('aria-hidden', 'true');
  };

  // Bindings fermeture
  closeModalBtn.addEventListener('click', close);
  
  // Fermer au clic sur l'overlay sombre
  modalOverlay.addEventListener('click', (e) => { 
      if (e.target === modalOverlay) close(); 
  });
  
  // Fermer avec Echap
  document.addEventListener('keydown', (e) => { 
      if(e.key === 'Escape' && modalOverlay.style.display === 'flex') close(); 
  });

  /* FILTERS */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      document.querySelectorAll('.project-card').forEach(card => {
        const categories = card.dataset.category.split(' ');
        if (filter === 'all' || categories.includes(filter)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
      });
    });
  });

  /* CLICK & KEYBOARD to open modal */
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.id));
    card.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' ') { 
          e.preventDefault(); 
          openModal(card.dataset.id); 
      }
    });
  });

  // Focus trap pour garder la navigation clavier dans la modale quand elle est ouverte
  document.addEventListener('focus', function(event) {
    if (modalOverlay.getAttribute('aria-hidden') === 'false' && !document.getElementById('projectModal').contains(event.target)) {
      event.stopPropagation();
      closeModalBtn.focus();
    }
  }, true);

});

/* ---- Contact logic ---- */

/* GitHub Pages est statique : le formulaire prépare un courriel, sans prétendre l'envoyer. */
document.querySelector('.contact-form')?.addEventListener('submit',function(event){
  event.preventDefault();
  if(!this.reportValidity())return;
  const nom=this.querySelector('#name').value.trim();
  const email=this.querySelector('#email').value.trim();
  const sujet=this.querySelector('#subject').value.trim();
  const message=this.querySelector('#message').value.trim();
  const corps='Nom : '+nom+'\nE-mail : '+email+'\n\n'+message;
  window.location.href='mailto:walid.badaoui@etu.unice.fr?subject='+encodeURIComponent(sujet)+'&body='+encodeURIComponent(corps);
});


/* Page unique : animations, menu mobile et navigation synchronisée. */
(()=>{
 const menu=document.getElementById("site-nav"),btn=document.querySelector(".menu-toggle");
 btn?.addEventListener("click",()=>{const open=btn.getAttribute("aria-expanded")==="true";btn.setAttribute("aria-expanded",String(!open));menu.classList.toggle("is-open",!open);btn.setAttribute("aria-label",open?"Ouvrir le menu":"Fermer le menu")});
 const anchors=[...document.querySelectorAll(".site-nav a[href^='#']")], sections=[...document.querySelectorAll(".onepage-section")];
 anchors.forEach(a=>a.addEventListener("click",()=>{menu?.classList.remove("is-open");btn?.setAttribute("aria-expanded","false")}));
 document.addEventListener("keydown",ev=>{if(ev.key==="Escape"){menu?.classList.remove("is-open");btn?.setAttribute("aria-expanded","false")}});
 const setActive=id=>{anchors.forEach(a=>{let match=a.getAttribute("href")==="#"+id;a.classList.toggle("active",match);if(match)a.setAttribute("aria-current","location");else a.removeAttribute("aria-current")})};
 if("IntersectionObserver" in window){const o=new IntersectionObserver(entries=>{const v=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(v)setActive(v.target.id)},{rootMargin:"-18% 0px -55% 0px",threshold:[0,.2,.6]});sections.forEach(s=>o.observe(s))}
 else window.addEventListener("scroll",()=>{let id="accueil";for(let s of sections)if(s.getBoundingClientRect().top<window.innerHeight*.42)id=s.id;setActive(id)},{passive:true});
})();

/* Demande explicite de CV : seulement un message, pas de téléchargement. */
(()=>{
 const cvNav=document.getElementById('request-cv-trigger');
 const subject=document.getElementById('subject');
 const message=document.getElementById('message');
 const contact=document.getElementById('contact');
 function prepareCV(){
   if(subject && !subject.value.trim()) subject.value='Demande d’accès au CV';
   if(message && !message.value.trim()) message.value='Bonjour, je souhaite recevoir votre CV dans le cadre de : ';
   contact?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
   subject?.focus({preventScroll:true});
 }
 cvNav?.addEventListener('click',()=>setTimeout(prepareCV,60));
})();

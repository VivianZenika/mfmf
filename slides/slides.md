---
background: "./images/zenika-stary-night-background.png"
class: text-center
highlighter: shiki
lineNumbers: false
transition: slide-left
title: Micro FrontEnd with the Module Federation Pattern
---

# MF x MF

Micro FrontEnd with the Module Federation Pattern

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Ready? <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: image-right
image: ./images/profile-bis.jpg

---

# Vivian SARAZIN

<v-clicks>

- Développeur consultant

- Formateur Vue

- TypeScript enthousiast

- Zenika Brest
  
- En mission [@InVivo](https://www.invivo-group.com/)
  
</v-clicks>

<div class="pt-72 text-xs text-right">
  <carbon:camera class="inline" /> Alex Palma
</div>

---
layout: default
level: 1
---

# Sommaire

<Toc minDepth="2"></Toc>

---
layout: cover
level: 2
---

# Micro FrontEnd c'est quoi ?

Le micro frontend est une approche de développement web consistant à **diviser une interface utilisateur en composants indépendants et autonomes**, facilitant ainsi la gestion, la mise à jour et le déploiement de chaque partie de manière isolée.

---
layout: default
level: 2
---

# Why?

## Contexte professionnel

<v-clicks>

- Désendettement

- Migration vers Vue3

- PoC

</v-clicks>


---
layout: default
level: 2
---

# Techniques

- Server-side template composition
- Build-time integration
- Run-time integration via iframes
- Run-time integration via Web Components
- **Run-time integration via JavaScript**

Source: **https://martinfowler.com/articles/micro-frontends.html**

---
layout: cover
level: 2
---

# Module Federation c'est quoi ?

Le Module Federation est une fonctionnalité de Webpack qui permet **le partage dynamique de modules JavaScript entre différentes applications front-end**, facilitant ainsi la création d'architectures de type micro frontend, où des parties distinctes de l'interface utilisateur sont développées et déployées indépendamment.

=> aussi disponible sur Vite. Je ne perçois pas trop Module Federation comme étant couplé à un bundler spécifique. J'ai plus l'impression qu'il s'agit d'un "standard", un "protocole", comme le montre le site https://module-federation.io/ qui ne mentionne pas forcément webpack.

---
layout: cover
level: 3
---

# Avantages

<v-clicks>

- **Indépendance et Isolation** : Permet le développement, le déploiement et la mise à jour indépendants de différentes parties de l'interface utilisateur, facilitant la gestion des équipes et la maintenance.

- **Réutilisabilité des Compétences** : Les équipes peuvent travailler sur des technologies frontales spécifiques, favorisant la réutilisabilité des compétences et permettant l'utilisation des frameworks les mieux adaptés à chaque composant. => à mitiger par les pbs de performance qu'induit l'utilisation de frameworks différents sur une même application.

- **Évolutivité Facilitée** : La conception modulaire du micro frontend facilite l'ajout de nouvelles fonctionnalités, la mise à l'échelle et la modification de parties spécifiques de l'application sans perturber l'ensemble.

- **Partage Dynamique de Modules** : Permet le partage de modules JavaScript entre différentes applications, réduisant la redondance du code et facilitant la gestion des dépendances.

- **Flexibilité dans le Choix des Technologies** : Offre la possibilité d'utiliser différentes technologies frontales au sein d'une même application, favorisant la flexibilité et la réutilisation des composants. 

=> j'ajouterai aussi que le découpage d'une app en microfront diminue la complexité pour chaque équipe de développement, car celles-ci ne raisonnent pas forcément sur l'application globale mais plutôt sur un microfrontend, un domaine spécifique. ça réduit la charge cognitive, même s'il est important que chaque équipe connaisse à minima l'application host qui englobe tous ces microfront.


</v-clicks>

---
layout: cover
level: 3
---

# Inconvénients

<v-clicks>

- **Complexité Accrue** : La gestion de multiples technologies frontend et la coordination entre les micro frontends peuvent entraîner une complexité accrue, nécessitant une bonne planification et une compréhension approfondie de l'architecture.

- **Problèmes de Communication Inter-Composants** : La communication entre les micro frontends peut parfois poser des défis, nécessitant des solutions spécifiques pour assurer une coordination efficace et éviter les problèmes de compatibilité. => peut-être mentionner l'importance d'éviter le couplage entre les microfrontend. chaque microfront doit dans l'idéal être indépendant des autres microfront.

- **Surcoût Initial** : La mise en place d'une architecture micro frontend peut entraîner un surcoût initial en raison de la configuration complexe, de la formation nécessaire et de la mise en œuvre de bonnes pratiques pour assurer la cohérence et la maintenabilité du système. => mentionner les coûts d'infrastructure, de CI qui sont certainement plus importants car il y a une CI/CD à faire tourner par microfront

- **Complexité de Configuration** : La configuration du Module Federation peut être complexe, nécessitant une compréhension approfondie du bundler et des ajustements pour répondre aux besoins spécifiques du projet.

=> j'ajouterai en inconvénient les éventuels pbs de perf si utilisation de plusieurs frameworks


</v-clicks>


---
layout: end
level: 2
---

# Show time!

perso, je trouverai aussi intéressant de mentionner les termes host et remote, qui sont des termes clé pour comprendre le Module Federation.

Aussi, je trouverais intéressant pour jeter les bases de compréhension des microfront de parler du découpage vertical (un microfront par page) ou du découpage horizontal (plusieurs microfronts par page). horizontal split vs vertical split. ça répond pas forcément aux mêmes problématiques et les défis / difficultés / enjeux qu'apportent ces différentes approches ne sont pas les mêmes
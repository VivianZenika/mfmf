---
background: "./images/zenika-stary-night-background.png"
class: text-center
highlighter: shiki
lineNumbers: false
transition: slide-left
title: Micro Frontend with the Module Federation Pattern
---

# MF x MF

Micro Frontend with the Module Federation Pattern

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

- Développeur / Consultant

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

# Micro Frontend c'est quoi ?

Le micro frontend est une approche de développement web consistant à **diviser une interface utilisateur en composants indépendants et autonomes**, facilitant ainsi la gestion, la mise à jour et le déploiement de chaque partie de manière isolée.

> Les micro frontend sont l'équivalent des micro services côté front.

---
layout: image
image: "./images/horizontal-vs-vertical.jpeg"
backgroundSize: contain
level: 2

---

# Horizontal x Vertical


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
layout: image-right
level: 2
image: https://martinfowler.com/articles/micro-frontends/deployment.png
backgroundSize: contain
---

# Techniques

- Server-side template composition
- Build-time integration
- Run-time integration via iframes
- Run-time integration via Web Components
- **Run-time integration via JavaScript**

*"Just as with microservices, independent deployability of micro frontends is key."*

Source: **https://martinfowler.com/articles/micro-frontends.html**

---
layout: cover
level: 2
---

# Module Federation

Le Module Federation est à l'origine une fonctionnalité de Webpack qui permet **le partage dynamique de modules JavaScript entre différentes applications front-end**, facilitant ainsi la création d'architectures de type micro frontend, où des parties distinctes de l'interface utilisateur sont développées et déployées indépendamment.

> Cette fonctionnalité existe dorénavant pour Vite via un community plugin.

---
layout: cover
level: 3
---

# Avantages

<v-clicks>

- **Indépendance et Isolation** : Permet le développement, le déploiement et la mise à jour indépendants de différentes parties de l'interface utilisateur, facilitant la gestion des équipes et la maintenance.

- **Évolutivité Facilitée** : La conception modulaire du micro frontend facilite l'ajout de nouvelles fonctionnalités, la mise à l'échelle et la modification de parties spécifiques de l'application sans perturber l'ensemble.

- **Partage Dynamique de Modules** : Permet le partage de modules JavaScript entre différentes applications, réduisant la redondance du code et facilitant la gestion des dépendances.

- **Flexibilité dans le Choix des Technologies** : Offre la possibilité d'utiliser différentes technologies frontales au sein d'une même application, favorisant la flexibilité et la réutilisation des composants.

- **Diminution de la charge cognitive** : Lorsque les différentes applications sont logiquement découpées, les équipes ont des périmètres plus restreints à gérer.


</v-clicks>

---
layout: cover
level: 3
---

# Inconvénients

<v-clicks>

- **Complexité Accrue** : La gestion de multiples technologies frontales et la coordination entre les micro frontends peuvent entraîner une complexité accrue, nécessitant une bonne planification et une compréhension approfondie de l'architecture.

- **Problèmes de Communication Inter-Composants** : La communication entre les micro frontends peut parfois poser des défis, nécessitant des solutions spécifiques pour assurer une coordination efficace et éviter les problèmes de compatibilité.

- **Surcoût Initial** : La mise en place d'une architecture micro frontend peut entraîner un surcoût initial en raison de la configuration complexe, de la formation nécessaire et de la mise en œuvre de bonnes pratiques.

- **Complexité de Configuration** : La configuration du Module Federation peut être complexe, nécessitant une compréhension approfondie du *bundler* et des ajustements pour répondre aux besoins spécifiques du projet.

- **Performance** : Lorsque plusieurs frameworks sont fédérés la taille du bundle de production grandit et affecte les performances.

- **Surcoût de CI** : Le découpage induit des déploiements indépendants ce qui augmente grandement les temps de CI.

</v-clicks>


---
layout: end
level: 2
---

# Show time!


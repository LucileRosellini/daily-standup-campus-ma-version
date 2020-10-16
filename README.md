
### Ressources

* L'API, déployée ici : [https://daily-standup-campus.herokuapp.com/](https://daily-standup-campus.herokuapp.com/)

* La documentation d'utilisation de l'API Daily Stand Up : [https://github.com/le-campus-numerique/daily-standup-api](https://github.com/le-campus-numerique/daily-standup-api)

  avec des infos sur le projet, les règles etc…

* [https://angular.io/](https://angular.io/)

* [https://openclassrooms.com/courses/developpez-avec-angular/titre-de-votre-premier-chapitre-176](https://openclassrooms.com/courses/developpez-avec-angular/titre-de-votre-premier-chapitre-176)

* Module de local storage : [https://www.npmjs.com/package/@ngx-pwa/local-storage](https://www.npmjs.com/package/@ngx-pwa/local-storage)


# App web de Daily Stand-Up - Angular
# ProjetAngularOctobre

Ce projet a pour objectif de permettre l’acquisition de compétences avancées en Javascript, Typescript & Angular dernière version.

>This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

Ce document décrit les attentes fonctionnelles autour de ce projet.


**Il n’a pas vocation à être exhaustif et les fonctionnalités décrites dans ce document peuvent être complétées à votre guise.**

### Cahier des charges


On veut disposer d’un outil permettant de créer et visualiser les notes (reports) des Daily Stand-Ups de tous les projets.


- Il y a un report par jour et par projet possible.
- Il y a des projets avec un créateur et un ou plusieurs utilisateurs
- Seuls les utilisateurs d’un projet peuvent modifier la note (reports) du jour de leur projet.
- Une API est mise à votre disposition. Voir la section #ressources.


**NOTE : la liste des écrans (composants) à créer et leur enchaînement est de votre responsabilité. Vous pouvez faire comme cela vous conviendra.**


## Spécifications
## Running unit tests

### Itération 0  :

Presentation d'Angular :
 Angular, React et Vuejs ont besoin tous trois de Node.js.
 Node.js est un environnement d’exécution JavaScript construit sur le moteur JavaScript V8 de Chrome.
 Node.js est le point central qui va permettre d'exécuter des programmes écrits en javascript côté serveur.
Le site officiel est ici https://nodejs.org/fr/ 



**Utiliser GIT !**
## Running end-to-end tests

- Faire ce tutoriel Angular : [https://angular.io/guide/quickstart](https://angular.io/guide/quickstart)




*ngFor => Pour parcourir la liste prédéfinie de produits


*ngIf => utilisez une directive afin qu'Angular ne crée l' élément que si le produit actuel a une description.*ngIf
  <p *ngIf="product.description">
    Description: {{ product.description }}
  </p>

Interpolation {{ }} => Pour afficher les noms des produits, utilisez la syntaxe d'interpolation {{ }}

  Description: {{ product.description }}

Liaison de propriété [ ]=>Pour faire de chaque nom de produit un lien vers les détails du produit, 

<a [title]="product.name + ' details'">
      {{ product.name }}
    </a>


Liaison d'événement ( )Liez un click événement du bouton à la méthode (ex ; share)
<button (click)="share()">
    Partager avec un ami
  </button>

VOIR AUTRES MANIPULATIONS: https://angular.io/guide/architecture-components#template-syntax

RELATIONS ENTRES COMPOSANTS =>  https://angular.io/guide/component-interaction









--------------------------------------------------------------------------

-[X] Comprendre l’arborescence d’un projet.


3 principaux types de NgModules :

des modules de pages (le minimum!)
des modules de services globaux 
des modules de composants d’UI réutilisables.

----

//!!! Chaque composant doit avoir une seule responsabilité. !!!//


Les modules de page: 
Les modules de pages sont les modules avec routing. Ils servent à séparer et organiser les différentes parties de votre application.
Ce sont les premiers composants a ajouter dans l'application, et chacun correspondra à une page dans notre application. Ils sont les composants les plus haut dans notre arborescence de composants.
Par contre, ces composants risquent d’être trop long, si nous plaçons tout le code nécessaire à l’affichage et à la gestion d’une page au sein d’un seul composant. Nous devons les redécouper en composants smart et dumb. 
----
Les modules de services globaux : dit "smart" ,composants intelligents 

Les composants smart sont situés juste en dessous des composants de page. Il s’agit de composants intelligents, dans le sens qu’ils s’occupent eux-mêmes de faire le chef d’orchestre pour récupérer les données fournies par un service.

Les composants smart sont plus orientés sur la partie données et service.
----
Les composants idiots 
En règle générale, le composant le plus en bas de l’arborescence sera celui avec le moins de logique métier. Il s’occupera donc seulement d’afficher des données, sans se soucier de leur provenance. Ils ne font donc jamais directement appel à un service. 

Les composants dumb permettent d’alléger les composants plus haut dans l’arborescence, en s’occupant exclusivement de la logique d’affichage. 
----

Decomposition de l'arborescence: 
- Dans e2e => Fichier de configuration du projet 
- Dans node_modules => Dépendendance externes du projets (librairie javascript et CSS)
- Dans app =>Logique applicative du projet, les composants, les services. exemple de nom des fichiers que l'on mettra dedans: 
      -app.component.css, app.component.html, app.component.ts, app.module.ts...
- assets => Definition laissé de côté pour l'instant
-Environments => Code source relatif à mon projet.
- Le reste ; Fichier de configuration du projet. 

---------------------------------------------------------

Divers; 
Les tests unitaires utilisent
Karma
Jasmine
Les tests end-to-end utilisent
Protractor
--------------------------------------------------------------------------




--------------------------------------------------------------------------


- [X] Comprendre webpack et son utilité.

Webpack est un bundle utilisé par Angular, il permet de compiler les fichiers TypeScript de notre application en javascript. Il existe une grande variété de plugins Webpack permettant de customiser la compilation.  https://medium.com/@BiigDigital/angular-et-la-configuration-webpack-1f9398313e43 

Note!:Installation de Angular-builders installé de mon côté.
--------------------------------------------------------------------------


-[X] Apprendre Angular Cli : ng


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.==> http://localhost:4200/

Run `ng serve --open` ouvre directement sur http > http://localhost:4200/

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

Run `ng --version` test de version installée (https://www.ganatan.com/tutorials/demarrer-avec-angular-cli).

Run `npm install -g @angular/cli` pour installer (https://www.ganatan.com/tutorials/demarrer-avec-angular-cli).

Run `npm uninstall -g @angular/cli` pour desinstaller (https://www.ganatan.com/tutorials/demarrer-avec-angular-cli).

Run `ng new [nom_du_projet]` pour generer un projet avec gestion manuelle des options (https://www.ganatan.com/tutorials/demarrer-avec-angular-cli).

Run `ng new [nom_du_projet] --routing` pour generer un projet avec routes (https://www.ganatan.com/tutorials/demarrer-avec-angular-cli).

Run `ng new [nom_du_projet] --defaults`  pour generer un projet avec options par defaut (https://www.ganatan.com/tutorials/demarrer-avec-angular-cli).

Run `ng generate component [home... ou autre]`  Création d'un composant home dans app (https://www.ganatan.com/tutorials/demarrer-avec-angular-cli).

Run `ng generate component modules/[contact... ou autre]`  Création d'un composant contact dans app/modules (https://www.ganatan.com/tutorials/demarrer-avec-angular-cli).

Run `ng generate module [home... ou autre]`  Création d'un module homme dans app (https://www.ganatan.com/tutorials/demarrer-avec-angular-cli).

Run `ng generate module modules/[contact... ou autre]`  Création d'un module contact dans app/modules (https://www.ganatan.com/tutorials/demarrer-avec-angular-cli).

Run `ng generate class [data... ou autre]`  Création d'une classe data dans app/modules (https://www.ganatan.com/tutorials/demarrer-avec-angular-cli).


To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

--------------------------------------------------------------------------



https://cli.angular.io/

https://www.ganatan.com/tutorials/demarrer-avec-angular-cli

- si besoin faire le tutoriel avancé : https://angular.io/tutorial

### Itération 1 :

Découvrir et comprendre le modèle de données du projet : voir l’API et la documentation d'utilisation de l'API Daily Stand Up. Cf #ressources

**Utiliser GIT !**

* [X]Installer l’environnement Angular avec NPM

* [X]Créer le projet avec utilisation de Sass : c’est un paramètre de commande ng (--style=scss)

* [X]Installer le module Angular Material et configurer pour un affichage agréable : https://material.angular.io/guide/getting-started

**Utiliser GIT !, et ne pas versioner les modules node.**



#### 1.1 Apprendre à manipuler l’API **avec Postman ou soft équivalent**

Petit point sur Postman: 

Il s’agit d’un client Web api proposé par Google. Mais depuis de nombreuses fonctionnalités se sont ajoutées. Par exemple:
- Tests unitaires
- Documentation automatique des Api (payant)
- Serveur bouchon (proxy, mock server)
- Sauvegarde et synchronisation de votre configuration sur le cloud
- Possibilité de travail en équipe (version payante)
- Surveillance d’Api (payant)

**ATTENTION :** Pour simplifier les choses, l’API  permet de créer votre utilisateur avec un access_token “spécial” (voir la doc de l’API).

* Créer votre utilisateur avec un rôle admin et un autre avec un rôle user
curl -X POST https://daily-standup-campus.herokuapp.com/api/users -i -d "email=test@example.com&password=123456&access_token="masterKey"

* Créer des projets

* Lister des projets

* Créer des reports et lister des reports

* Supprimer des projets et reports

#### 1.2 Interface avec Angular

L'interface contiendra différents composants afin de créer les affichages suivants :
- login
- logout
- liste des projets
- détail d'un projet
  - titre
  - date
  - detail en texte
- liste des reports d'un projet trié par date
  - date
  - contenu txt
- ajouter un report
- modifier un report


##### A - Ecran de connexion utilisateur :

  - Créer un composant avec ng pour l’écran de login.

  - Créer un formulaire en utilisant ngForm et la méthode template avec un champs login et un champ password comme expliqué ici : [https://openclassrooms.com/courses/4668271-developpez-des-applications-web-avec-angular/5089516-ecoutez-lutilisateur-avec-les-forms-methode-template](https://openclassrooms.com/courses/4668271-developpez-des-applications-web-avec-angular/5089516-ecoutez-lutilisateur-avec-les-forms-methode-template)

  - Gérer la validation du formulaire (voir la doc angular: [https://angular.io/guide/forms](https://angular.io/guide/forms) ) :

    - Désactiver le bouton tant que les deux champs ne sont pas remplis avec [disabled]=...

    - Afficher ou cacher un div pour afficher un message d’erreur si les champs sont vides avec [hidden]=... pour le champs password et *ngIf pour le champs login.

##### B - Routing : ajouter le module de routing et créer les routes utiles: login, logout, projets, projet/:id

##### C - Créer un service pour les appels API avec ng.

  - Importer HttpClient et HttpHeaders

  - Créer une méthode pour construire le header de type “Authorization : Basic” avec le login et le mot de passe en base64. (la fonction `btoa()` sera votre amie).

  - Créer une méthode pour construire le header de type ‘Authorization: Bearer.’ pour envoyer le token plus tard.

  - Créer les méthodes d’authentification en POST et récupération du token renvoyé par l’API. Stocker le token en localstorage : [https://www.npmjs.com/package/@ngx-pwa/local-storage](https://www.npmjs.com/package/@ngx-pwa/local-storage)


  - Utiliser httpClient avec les méthode get ou post.([https://angular.io/guide/http](https://angular.io/guide/http) )

##### D - Créer un composant de logout qui supprime le token stoker en local.

##### E - Créer un composant pour l’affichage de la liste de tous les projets de l’utilisateur

  - Liste des projets de l’utilisateur

  - Lien ou bouton vers le détail sur projet

  - Lien ou bouton pour supprimer un projet

##### F - Créer un composant pour l’affichage du détail d’un projet. Cette route sera accessible avec un clic sur le nom du projet dans la liste des projets précédente.

**Utiliser GIT !**

### Itération 2

**Utiliser GIT !**

##### A - Créer un composant avec un formulaire pour créer un projet. Ajouter les méthodes dans le service qui gère l’API. Ajouter la route.

##### B - Page détail d’un projet

  - Affichage de tous les reports, formater la date avec un “pipe” angular
  - Permettre le tri par date des reports via l’API

##### C - Création de reports dans un projet

  - Si projet de l’utilisateur
  - Permettre d'ajouter le report du jour
  - Permettre de modifier le report du jour

### Itération 3 - Calendrier 

**Utiliser GIT !**

* Utiliser un module calendrier de votre choix
* Afficher la présence de reports sur un calendrier
* Sélectionner un jour sur le calendrier et afficher tous les reports de ce jour

### Itération 4 - Gestion des utilisateurs (BONUS)

**Utiliser GIT !**

* Le créateur peut ajouter d'autres utilisateur à ses projets
* Lister les projets de l'utilisateur connecté et lui permettre d'ajouter un utilisateur parmis une liste à son projet.

###


## Livrable

* La webapp qui tourne avec le serveur local angular et l’API.


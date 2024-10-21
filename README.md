# Starter Angular

Ce projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 18.2.9.

## Introduction

Angular est un framework JavaScript open-source utilisé pour développer des applications web. Il utilise TypeScript pour structurer le code et propose des outils puissants pour le développement de composants, la gestion de la navigation et des services.

### Créer un projet Angular

Pour créer un nouveau projet Angular, assurez-vous d'avoir installé Angular CLI. Ensuite, utilisez la commande suivante dans votre terminal :

```bash
ng new nom-du-projet
```

Cela va créer une structure de base pour votre projet Angular.

### Créer un composant Angular

Un composant est une partie essentielle d'une application Angular. Pour créer un composant, utilisez la commande suivante :

```bash
ng g c nom-du-composant
```

Par exemple, pour créer un composant appelé `exemple`, utilisez :

```bash
ng g c exemple
```

Cette commande génère plusieurs fichiers : le fichier HTML, CSS, TypeScript, et un fichier de test.

## Serveur de développement

Exécutez `ng serve` pour lancer un serveur de développement. Accédez à `http://localhost:4200/`. L'application se rechargera automatiquement lorsque vous modifiez les fichiers source.

## Génération de composants

Exécutez `ng generate component nom-du-composant` pour générer un nouveau composant. Vous pouvez également utiliser `ng generate directive|pipe|service|class|guard|interface|enum|module` pour créer d'autres entités.

## Compilation du projet

Exécutez `ng build` pour compiler le projet. Les artefacts de compilation seront stockés dans le répertoire `dist/`.

## Tests unitaires

Exécutez `ng test` pour exécuter les tests unitaires via [Karma](https://karma-runner.github.io).

## Tests end-to-end

Exécutez `ng e2e` pour exécuter les tests end-to-end via une plateforme de votre choix. Pour utiliser cette commande, vous devez d'abord ajouter un package qui implémente des capacités de tests end-to-end.

## Aide supplémentaire

Pour plus d'aide sur Angular CLI, exécutez `ng help` ou consultez la page [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
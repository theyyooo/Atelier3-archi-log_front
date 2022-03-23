# Atelier3-archi-log


## Qu’est ce que le CROSS ORIGIN ? 

Le CROSS ORIGIN est un mécanisme qui consiste à ajouter des en-têtes HTTP afin de permettre à un agent utilisateur d'accéder à des ressources d'un serveur situé sur une autre origine que le site courant. Un agent utilisateur réalise une requête HTTP multi-origine (cross-origin) lorsqu'il demande une ressource provenant d'un domaine, d'un protocole ou d'un port différent de ceux utilisés pour la page courante.

## En quoi cela est-il dangereux ?

En principe, une Cross-Origin Request est une requête HTTP. Certaines méthodes ne posent en principe aucun problème. GET et HEAD ne peuvent pas modifier les données et ne sont donc généralement pas perçus comme un risque lié à la sécurité. La situation est différente avec PATCH, PUT ou DELETE : ils permettent d'effectuer des interventions nuisibles. Par conséquent, le Cross-Origin Resource Sharing doit également être activé à cette fin. Cela signifie que CORS peut contenir non seulement des informations sur la source autorisée, mais aussi sur les requêtes HTTP autorisées par la source.

## Comment REACTJS fait-il pour afficher rapidement les modifications sur les composants ?

En créant un DOM virtuel, REACT vient modifier la branche nécessaire sur celui-ci, puis vient calquer la branche modifiée du DOM virtuel sur le DOM "réel".

## Quelle est la fonction essentielle de REACTJS ?

La réalisation d'une SPA (single page application) : il s'agit d'une application web accessible via une page web unique. Le but est d'éviter le chargement d'une nouvelle page à chaque action demandée, et de fluidifier ainsi l'expérience utilisateur.

## Quelle est la fonction essentielle de FLUX ?

Flux comporte 4 concepts :

- Les actions, qu'elles proviennent du serveur ou d'une interaction utilisateur.
- Le dispatcher dans lequel sont envoyées les actions que ce dernier transmet à qui veut, un peu comme un EventEmitter global.
- Les stores, qui sont l'équivalent du model de l'architecture MVC, ils contiennent les données, et réagissent aux actions que le dispatcher leur transmet.
- Les views, qui s'occupent du rendu des données dans le DOM, et de lancer des actions lorsque l'utilisateur effectue certaines actions.

## Qu’est ce que REDUX ?

REDUX est une bibliothèque open-source JavaScript de gestion d'état pour applications web. Elle est plus couramment utilisée avec des bibliothèques comme React ou Angular pour la construction d'interfaces utilisateur, REDUX est très semblable à l'architecture FLUX.

## Comment faire pour exporter un composant REACTJS ?

Pour exporter un composant REACTJS, nous pouvons utiliser *export* pour exporter spécifiquement ce composant ou bien *export default*.

## Quelle est la différence entre un test fonctionnel et un test unitaire ?

La principale différence entre les tests unitaires et les tests fonctionnels réside dans le fait que les tests unitaires contrôlent les modules individuels ou les unités du système, tandis que les tests fonctionnels vérifient les fonctionnalités ou les fonctionnalités du système. En bref, le test unitaire est un type de test fonctionnel.

## A quoi sert la couverture de code ?

La couverture de code est une mesure utilisée pour décrire le taux de code source exécuté d'un programme quand une suite de test est lancée. Un programme avec une haute couverture de code, mesurée en pourcentage, a davantage de code exécuté durant les tests ce qui laisse à penser qu'il a moins de chance de contenir de bugs logiciels non détectés.

## Qu’est ce qu’un test de non régression ?

Un test de régression, ou test de non-régression, est un test ayant pour but de détecter les régressions introduites dans un logiciel après un changement effectué dans celui-ci.

## A quoi sert-t-il ?

Il sert à vérifier les regressions de code. Par exemple lors d'une modification d'un élément, il faut s'assurer que la modification n'entraine pas d'autres problèmes.

## Expliquer le principe de développement « test driven » ?

Le "test driven" est une méthode de développement logiciel. Cette dernière consiste à concevoir un logiciel pas à pas en corrigeant les anomalies au fur et à mesure du développement.

## Quels intérêts présentent les micros services comparés aux architecture SOA ?

Les intérêts sont les suivants : 
- Réduire le temps de développement applicatif.
- Accélérer le déploiement des correctifs.
- Isoler les microservices (si l'un tombe en panne, l'application reste fonctionnelle).

## Quelles sont les différences entre les micros services et le SOA ?

| Tableau comparatif    |          Microservice          |         SOA         |
| :---------- | :--------------------------: | :----------------------: |
| Architecture | Accueille des services autonomes | Partage les ressources entre les services  |
| Partage de composants | Généralement pas de partage entre les composants | Partage de composants |
| Granularité | Pour les petits services, peu modulaires | Pour les grands services, très modulaires |
| Stockage des données | Chaque services dispose d'un stockage indépendant | Partage du stockage entre les services |
| Gouvernance | Besoin d'une collaboration entre les équipes | Nécessite un protocole de gouvernance commun entre les équipes |
| Taille et portée | Pour les applications WEB de petite taille | Pour une intégration à grande échelle |
| Communication | Communique par API | Communique par ESB |
| Couplage et cohésion | Utilise le couplage | Utilise le partage des ressources |
| Service à distance | REST/JMS | SOAP/AMQP |
| Déploiement | Déploiement rapide | Déploiement plus long |


## Quel intérêt présente l’usage de docker et des micro-services ?

L'intérêt est :
- Facilite le travail en équipe.
- Augmente la qualité globale des applications.
- Permet d'utiliser le meilleur langage de programmation en fonction de la problématique.
- Permet d'automatiser les tests et le déploiement.
- Augmente la robustesse de l'architecture.

## Qu’est-ce que docker ?

Docker est une plateforme permettant de créer des conteneurs logiciels. L'intérêt des conteneurs est de regrouper le code d'une application ainsi que ses dépendances au sein d'une même unité.

## En quoi diffère-t-il des méthodes de virtualisation dites classiques (vmware, virtualbox) ?

Les différences sont :
- Partage du système d'exploitation hôte : conteneurs légers et plus rapides.
- Convient à la situation ou l'on souhaite exécuter plusieurs applications sur un seul noyau de système d'exploitation.

## Quelle organisation en équipe permet la mise en œuvre de micro services ?

Les microservices conviennent parfaitement à la méthode "Agile" d'une équipe. Etant donné que les services sont indépendants les uns des autres, chaque équipe est assigné à un microservice.

## Que permet de faire l’outil SonarQube ?

SonarQube est un logiciel inspectant la qualité du code continuellement.

## Qu’est ce que l’intégration continue ?

L'intégration continue correspond à un ensemble de méthodes consistant à tester de manière automatisée le code avant de le déployer en production.

## Quels avantages/contraintes présentent cette organisation ?

Avantages et inconvénients que présente l'organisation "Agile" :

- Gagner plus de contrôle sur le produit final.
- Augmenter l’efficacité.
- Assurer des livraisons de haute qualité.
- Accroître la satisfaction des utilisateurs.
- Générer un retour sur investissement plus élevé

- La minimisation de la documentation dans un développement agile.
- La complexité de l’adoption de la culture agile.
- Le manque de prévisibilité de l’approche Agile.
- La difficulté d'implémentation pour des projets complexes et des entreprises à grande échelle.
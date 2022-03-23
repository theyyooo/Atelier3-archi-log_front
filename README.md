# Atelier3-archi-log


## Qu’est ce que le CROSS ORIGIN ? 
## En quoi cela est-il dangereux ?
## Comment REACTJS fait-il pour afficher rapidement les modifications sur les composants ?
## Quelle est la fonction essentielle de REACTJS ?
## Quelle est la fonction essentielle de FLUX ?
## Qu’est ce que REDUX ?
## Comment faire pour exporter un composant REACTJS ?
## Quelle est la différence entre un test fonctionnel et un test unitaire ?
## A quoi sert la couverture de code ?
## Qu’est ce qu’un test de non régression ?
## A quoi sert-t-il ?

Il sert à vérifier les regressions de code. Par exemple lors d'une modification d'un élément, il faut s'assurer que la modification n'entraine pas d'autres problèmes.

## Expliquer le principe de développement « test driven » ?

Le "test driven" est une méthode de développement logiciel. Cette dernière consiste à concevoir un logiciel pas à pas en corrigeant les anomalies au fur et à mesure du développement.

## Quels intérêts présentent les micros services comparés aux architecture SOA ?

Les intérêts sont les suivants : 
- Réduire le temps de développement applicatif
- Accélérer le déploiement des correctifs
- Isoler les microservices (si l'un tombe en panne, l'application reste fonctionnelle)

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
- Facilite le travail en équipe
- Augmente la qualité globale des applications
- Permet d'utiliser le meilleur langage de programmation en fonction de la problématique.
- Permet d'automatiser les tests et le déploiement.
- Augmente la robustesse de l'architecture

## Qu’est-ce que docker ?

Docker est une plateforme permettant de créer des conteneurs logiciels. L'intérêt des conteneurs est de regrouper le code d'une application ainsi que ses dépendances au sein d'une même unité.

## En quoi diffère-t-il des méthodes de virtualisation dites classiques (vmware, virtualbox) ?

Les différences sont :
- Partage du système d'exploitation hôte : conteneurs légers + rapides
- Convient à la situation ou l'on souhaite exécuter plusieurs applications sur un seul noyau de système d'exploitation.

## Quelle organisation en équipe permet la mise en œuvre de micro services ?

Les microservices conviennent parfaitement à la méthode "Agile" d'une équipe. Etant donné que les services sont indépendants les uns des autres, chaque équipe est assigné à un microservice.

## Que permet de faire l’outil SonarQube ?

SonarQube est un logiciel inspectant la qualité du code continuellement.

## Qu’est ce que l’intégration continue ?

L'intégration continue correspond à un ensemble de méthodes consistant à tester de manière automatisée le code avant de le déployer en production.

## Quels avantages/contraintes présentent cette organisation ?


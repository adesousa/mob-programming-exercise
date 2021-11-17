# Mob-programming-exercise Repo

Exercice pour pratiquer le Mob Programming

## Objectif

Développer un jeu type Trivia basé sur des images et leurs mots-clés associés respectant le mob programming

## Règles

- Langage HTML/CSS/Javascript + Api Pixabay
- On essaye de faire quelque chose de joli
- Mise en place d'un board agile avec le backlog
- Mise à jour en temps réel du board
- Roulement toutes les x minutes (temps à définir par équipe, recommandé: entre 8 et 12 minutes pour cet exercice)
- Utilisation de 2 écrans 27': un pour le code, l'autre pour la documentation/recherches web

# Utilisation de l'API Pixabay
1. Aller sur le site de l'API Pixabay: https://pixabay.com/api/docs/
2. Créer votre compte développeurs en cliquant sur le bouton join
3. Une fois connecté sur la page de la documentation vous aurez accès à votre clé d'API
4. Vous renseignez cette clé d'api dans votre fichier api.js (API_KEY)
5. Lire la documentation pour comprendre comment appeler l'api et obtenir les images que vous souhaitez

## Product Backlog

### Story 1 : Page de choix du style de jeu : Aléatoire / Catégorie

Critères D'acceptation

- Moyen de choisir entre les 2 styles de jeu puis rediriger ver la page correspondante du jeu

### Story 2 : La page de jeu Aléatoire

Critères d'acceptation

- Dérouler les photos aléatoires l'une après l'autre, pour chaque photo, il faut taper un mot-clé lié à la photo, si le mot-clé est un des mots-clés de la photo on compte un point sinon 0.
- On déclenche un timer	
- On affiche 10 photos puis on passe aux résultats

### Story 3 : La page de jeu par catégorie 

Critères d'acceptation

- On choisi une catégorie parmi 3 catégories aléatoires récupérées depuis l'API Pixabay	
- Dérouler les photos de la catégorie l'une après l'autre, pour chaque photo, il faut taper un mot-clé lié à la photo, si le mot-clé est un des mots-clés de la photo on compte un point sinon 0.
- On déclenche un timer
- On affiche 10 photos puis on passe aux résultats

### Story 4 : La page des résultats du jeu 

Critères d'acceptation

- On affiche le total de points	
- On indique le temps réalisé

### Story Bonus : Revert Style

Critères d'acceptation

- Ajouter le style de jeu "revert" dans la page de choix du style de jeu
- Créer une page pour ce jeu, ou l'on affiche 4 images par page et un mot-clé et à vous de cliquer sur l'image que vous pensez correspondre au mot clé	
- On déclenche un timer	
- On affiche 10 photos puis on passe aux résultats


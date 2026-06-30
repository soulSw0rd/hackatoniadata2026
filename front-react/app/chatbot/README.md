# Chatbot TechCorp

Robot 3D (Three.js) dont **l'écran du ventre** héberge l'interface du chatbot.
L'UI de chat est en place ; la connexion au serveur d'inférence (Ollama / Triton /
serveur maison) sera branchée plus tard dans la fonction `sendToModel()` de
`public/chatbot/index.html`.

## Route Next.js

La page Next.js est disponible sur :

```text
/chatbot
```

Elle affiche l'interface originale en plein écran depuis :

```text
/public/chatbot/index.html
```

> Une connexion internet est requise (Three.js est chargé via CDN jsDelivr).

## Brancher le modèle plus tard

Dans `public/chatbot/index.html`, remplacer le corps de `sendToModel(question)`
par un appel à l'API déployée par l'équipe INFRA. Exemple Ollama
(`http://localhost:11434/api/chat`) fourni en commentaire juste au-dessus de la
fonction. Penser à activer CORS côté serveur, ou à servir l'interface derrière le
même origine que l'API.

## Statut de connexion

Le bandeau de l'écran affiche l'état (`Hors-ligne` tant que l'API n'est pas branchée ;
passer `#chat-head` en classe `online` et mettre à jour `#chat-status` une fois connecté).

# Chatbot TechCorp

Robot 3D (Three.js) dont **l'écran du ventre** héberge l'interface du chatbot.
L'UI de chat est en place ; la connexion au serveur d'inférence (Ollama / Triton /
serveur maison) est branchée dans la fonction `sendToModel()` de
`public/chatbot/app.js`.

## Route Next.js

La page Next.js est disponible sur :

```text
/chatbot
```

Elle affiche l'interface originale en plein écran depuis :

```text
/public/chatbot/index.html
```

Organisation des fichiers statiques :

```text
public/chatbot/index.html   # structure HTML
public/chatbot/styles.css   # styles de l'interface
public/chatbot/app.js       # scène Three.js, chat, boutique
public/chatbot/dizzy.mp3    # son du mode vertige
```

> Une connexion internet est requise (Three.js est chargé via CDN jsDelivr).

## Modèle

Le chatbot appelle la route Next.js `/api/chat`, qui relaie vers Ollama :

```text
http://178.170.25.232:11434/api/chat
```

Modèle utilisé par défaut :

```text
phi3.5-finance
```

Variables configurables :

```bash
OLLAMA_CHAT_URL=http://178.170.25.232:11434/api/chat
OLLAMA_MODEL=phi3.5-finance
```

## Statut de connexion

Le bandeau de l'écran affiche l'état de la route `/api/chat`.

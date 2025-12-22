# Yoxo API Server SDK Factory

Ce dépôt contient l'usine logicielle permettant de générer automatiquement les SDKs (Java, Python, TypeScript) pour l'API Yoxo.

## Architecture

Le projet utilise **OpenAPI Generator** combiné à un pattern d'**Overlay** pour injecter proprement la logique d'authentification OAuth2 (`client_credentials`) sans modifier les templates du générateur.

- `specs/` : Contient la spécification OpenAPI (`openapi.json`).
- `configs/` : Fichiers de configuration pour chaque langage.
- `overlays/` : Code manuel (Wrappers, Interceptors) injecté après la génération.
- `clients/` : Dossier de sortie (ignoré par git sauf pour le déploiement).
- `scripts/` : Scripts d'automatisation.

## Commandes

*   **Installer les dépendances** : `npm install`
*   **Récupérer la dernière spec** : `npm run fetch-spec`
*   **Générer les SDKs** : `npm run generate:all` (Inclut la phase `enhance`)

## Authentification Automatique

Les SDKs générés incluent une surcouche `YoxoClient` qui gère automatiquement :
1.  L'obtention du token via `client_id` et `client_secret`.
2.  Le stockage et la vérification de l'expiration.
3.  Le rafraîchissement transparent du token.

### Exemple d'utilisation (TypeScript)
```typescript
import { YoxoClient } from '@yoxo/client';

const client = new YoxoClient('mon_id', 'mon_secret');
const data = await client.java.getCountry('fr');
```

### Exemple d'utilisation (Java)
```java
import software.yoxo.client.YoxoClient;

YoxoClient client = new YoxoClient("mon_id", "mon_secret");
var data = client.java().getCountry("fr");
```

### Exemple d'utilisation (Python)
```python
from yoxo_client.client import YoxoClient

client = YoxoClient('mon_id', 'mon_secret')
data = client.java.get_country('fr')
```

## CI/CD

Le workflow GitHub Actions `.github/workflows/sdk-factory.yml` tourne quotidiennement pour :
1.  Vérifier les changements dans l'API.
2.  Régénérer les clients.
3.  Publier les paquets sur GitHub Packages.

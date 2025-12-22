# Yoxo API Server SDKs

Ce dépôt permet de générer et distribuer automatiquement les SDKs (Java, Python, TypeScript) pour l'API Yoxo.

## 🚀 Installation & Utilisation

### 📦 TypeScript / Node.js
Le SDK TypeScript est distribué via une branche dédiée.

**Installation :**
```bash
npm install github:YoxoProject/ApiServerSdk#release/typescript
```

**Utilisation :**
```typescript
import { YoxoClient } from '@yoxoproject/yoxo-api-client';

// L'authentification OAuth2 est gérée automatiquement
const client = new YoxoClient('CLIENT_ID', 'CLIENT_SECRET');

async function demo() {
    const response = await client.java.getCountry('2025-12-25', 'red');
    console.log(response.data.data[0]);
}
```

---

### ☕ Java
Le SDK Java est publié sur un repo maven

**Configuration Gradle (`build.gradle`) :**
```groovy
repositories {
    mavenCentral()
    maven {
        url "https://maven.romaindu35.fr/releases"
    }
}

dependencies {
    implementation 'software.yoxo:yoxo-api-client:1.0-SNAPSHOT' // Remplacez par la version actuelle
}
```

**Utilisation :**
```java
import software.yoxo.client.YoxoClient;
import software.yoxo.client.invoker.ApiException;
import java.time.LocalDate;

public class Main {
    public static void main(String[] args) throws ApiException {
        YoxoClient client = new YoxoClient("CLIENT_ID", "CLIENT_SECRET");
        var response = client.java().getCountry(LocalDate.now(), "red");
        assert response.getData() != null;
        System.out.println(response.getData().getFirst());
    }
}
```

---

### 🐍 Python
Le SDK Python est disponible directement via Git sur une branche dédiée.

**Installation :**
```bash
pip install git+https://github.com/YoxoProject/ApiServerSdk.git@release/python
```

**Utilisation :**
```python
from yoxo_api_client.client import YoxoClient

client = YoxoClient(client_id="CLIENT_ID", client_secret="CLIENT_SECRET")

# Utilisation des méthodes générées (snake_case)
response = client.java.get_country("2025-12-25", "red")
print(response.data[0])
```

## 🛠️ Fonctionnement de l'Usine (SDK Factory)

1.  **Génération** : Le code est généré via `OpenAPI Generator` à partir de la spec officielle.
2.  **Patching** : Un script (`scripts/patch_spec.js`) résout automatiquement les dépendances circulaires complexes.
3.  **Surcouche (Overlay)** : Nous injectons une classe `YoxoClient` dans chaque langage. Cette classe contient un intercepteur qui :
    *   Récupère un Access Token via `client_credentials`.
    *   Gère le cache du token en mémoire.
    *   Rafraîchit le token 60 secondes avant son expiration.
4.  **Distribution** : 
    *   Les clients TS/Python sont poussés sur des branches `release/*` isolées.
    *   Le client Java est déployé sur `maven.romaindu35.fr`.

## 🔄 Automatisation
Le pipeline GitHub Actions se déclenche automatiquement après chaque déploiement de l'API Server, garantissant des SDKs toujours à jour avec les dernières routes et modèles.
# PlayerListEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Le pseudonyme du joueur | [optional] [default to undefined]
**country** | **string** | Le pays du joueur, écrit en toutes lettres. Si le joueur est sans pays, la chaine retourné sera vide | [optional] [default to undefined]
**power** | **number** | Le power actuel du joueur | [optional] [default to undefined]
**powerMax** | **number** | Le power maximum atteignable par le joueur | [optional] [default to undefined]
**playtime** | **number** | Le temps de jeu total du joueur sur le serveur (en secondes) | [optional] [default to undefined]
**lastLogin** | **number** | Le timestamp de la dernière connexion du joueur. Le timestamp est ici exprimé en secondes et correspond au nombre de secondes écoulées depuis le 1er janvier 1970, minuit UTC | [optional] [default to undefined]

## Example

```typescript
import { PlayerListEntry } from '@yoxoproject/client';

const instance: PlayerListEntry = {
    name,
    country,
    power,
    powerMax,
    playtime,
    lastLogin,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

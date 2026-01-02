# WarMissile

Détails d\'un missile lancé

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**launchedAt** | **number** | Timestamp (ms) du lancement du missile | [optional] [default to undefined]
**missile** | **string** | Type de missile lancé | [optional] [default to undefined]
**missilePoints** | **number** | Points de missile consommés pour ce lancement | [optional] [default to undefined]
**launcher** | **string** | Joueur ayant lancé le missile | [optional] [default to undefined]
**launcherCountry** | **string** | Pays du joueur ayant lancé le missile | [optional] [default to undefined]

## Example

```typescript
import { WarMissile } from '@yoxoproject/yoxo-api-client';

const instance: WarMissile = {
    launchedAt,
    missile,
    missilePoints,
    launcher,
    launcherCountry,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

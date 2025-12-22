# NewMemberEntry

Détail sur la formation d\'un nouveau joueur

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pseudo** | **string** | Pseudo du nouveau joueur | [optional] [default to undefined]
**playedTime** | **number** | Temps de jeu sur le serveur (en secondes) | [optional] [default to undefined]
**rewardPower** | **number** | Récompenses de power débloquées par la formation du joueur | [optional] [default to undefined]
**rewardPowerMax** | **number** | Récompenses de power maximale espérable par la formation du joueur (déjà obtenu et à venir) | [optional] [default to undefined]
**rewardMoney** | **number** | Récompenses en dollard débloquées par la formation du joueur | [optional] [default to undefined]
**rewardMoneyMax** | **number** | Récompenses en dollard maximale espérable par la formation du joueur (déjà obtenu et à venir) | [optional] [default to undefined]
**step** | **number** | Étape de formation actuelle du joueur | [optional] [default to undefined]

## Example

```typescript
import { NewMemberEntry } from '@yoxoproject/client';

const instance: NewMemberEntry = {
    pseudo,
    playedTime,
    rewardPower,
    rewardPowerMax,
    rewardMoney,
    rewardMoneyMax,
    step,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

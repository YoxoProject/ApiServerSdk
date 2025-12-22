# EnterpriseBetItem

Pari proposé par une entreprise

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deadlineTime** | **number** | Timestamp de fin du pari | [optional] [default to undefined]
**minBet** | **number** | Mise minimale (en dollar) | [optional] [default to undefined]
**numberOfPlayers** | **number** | Nombre de joueurs ayant parié | [optional] [default to undefined]
**title** | **string** | Titre du pari | [optional] [default to undefined]
**option1** | **string** | Première option | [optional] [default to undefined]
**option2** | **string** | Deuxième option | [optional] [default to undefined]
**status** | **string** | Statut du pari | [optional] [default to undefined]

## Example

```typescript
import { EnterpriseBetItem } from '@yoxoproject/yoxo-api-client';

const instance: EnterpriseBetItem = {
    deadlineTime,
    minBet,
    numberOfPlayers,
    title,
    option1,
    option2,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

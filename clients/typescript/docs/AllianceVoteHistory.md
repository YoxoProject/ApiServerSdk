# AllianceVoteHistory

Historique d\'un vote

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Le type de vote | [optional] [default to undefined]
**initiator** | **string** | Le joueur ayant déclenché le vote | [optional] [default to undefined]
**initiatorCountry** | **string** | Le pays du joueur qui a initié le vote | [optional] [default to undefined]
**timestamp** | **number** | Le timestamp de création du vote | [optional] [default to undefined]
**message** | **string** | Le message du vote tel qu\&#39;indiqué en jeu | [optional] [default to undefined]
**oldValue** | **string** | Donnée optionnelle, dans certains vote, montre la valeur avant l\&#39;acceptation du vote | [optional] [default to undefined]
**newValue** | **string** | Donnée optionnelle, montre la valeur validé ou refusé par le résultat du vote | [optional] [default to undefined]
**targetCountry** | **string** | Indique qui est concerné par le résultat du vote. Peut-être le nom d\&#39;un pays ou alors le nom de l\&#39;alliance | [optional] [default to undefined]
**yesVotes** | **number** | Le nombre de vote oui | [optional] [default to undefined]
**noVotes** | **number** | Le nombre de vote non | [optional] [default to undefined]

## Example

```typescript
import { AllianceVoteHistory } from '@yoxoproject/yoxo-api-client';

const instance: AllianceVoteHistory = {
    type,
    initiator,
    initiatorCountry,
    timestamp,
    message,
    oldValue,
    newValue,
    targetCountry,
    yesVotes,
    noVotes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

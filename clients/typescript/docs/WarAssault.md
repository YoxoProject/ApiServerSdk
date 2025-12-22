# WarAssault

Détails d\'un assaut au sein de la guerre

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startAt** | **number** | Timestamp (ms) du début de l\&#39;assaut | [optional] [default to undefined]
**winner** | **string** | Nom du pays vainqueur de l\&#39;assaut | [optional] [default to undefined]
**looser** | **string** | Nom du pays perdant de l\&#39;assaut | [optional] [default to undefined]
**mmrWinner** | **number** | MMR gagné par le pays vainqueur suite à sa victoire sur l\&#39;assaut | [optional] [default to undefined]
**mmrLooser** | **number** | MMR perdu par le pays perdant suite à sa défaite sur l\&#39;assaut. Attention, pour signifier la perte, le nombre est négatif. | [optional] [default to undefined]
**winnerHelpers** | **Array&lt;string&gt;** | Liste des pays ayant aidé le vainqueur | [optional] [default to undefined]
**looserHelpers** | **Array&lt;string&gt;** | Liste des pays ayant aidé le perdant | [optional] [default to undefined]

## Example

```typescript
import { WarAssault } from '@yoxo/client';

const instance: WarAssault = {
    startAt,
    winner,
    looser,
    mmrWinner,
    mmrLooser,
    winnerHelpers,
    looserHelpers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

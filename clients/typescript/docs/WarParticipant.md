# WarParticipant

Détails d\'un pays participant à la guerre

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **string** | Nom du pays participant | [optional] [default to undefined]
**remainingMissilesPoints** | **number** | Points de missile restants utilisables par le pays | [optional] [default to undefined]
**inactivity** | **number** | Pourcentage d\&#39;inactivité du pays. Augmente de 3% si les critères de connexion ne sont pas remplis pendant 2h | [optional] [default to undefined]
**progress** | **number** | Pourcentage de progression vers la validation des conditions de victoire (0-100%). À 100%, le pays gagne | [optional] [default to undefined]
**condition** | [**WarCondition**](WarCondition.md) |  | [optional] [default to undefined]

## Example

```typescript
import { WarParticipant } from '@yoxo/client';

const instance: WarParticipant = {
    country,
    remainingMissilesPoints,
    inactivity,
    progress,
    condition,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

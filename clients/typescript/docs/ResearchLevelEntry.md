# ResearchLevelEntry

Configuration d\'un niveau de R&D

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | **number** | Numéro du niveau | [optional] [default to undefined]
**duration** | **number** | Durée de la recherche (en secondes) | [optional] [default to undefined]
**conditions** | **Array&lt;string&gt;** | Liste des conditions requises pour débloquer ce niveau | [optional] [default to undefined]
**rewards** | **Array&lt;string&gt;** | Liste des récompenses obtenues en complétant ce niveau | [optional] [default to undefined]

## Example

```typescript
import { ResearchLevelEntry } from '@yoxoproject/yoxo-api-client';

const instance: ResearchLevelEntry = {
    level,
    duration,
    conditions,
    rewards,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

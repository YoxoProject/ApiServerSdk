# ResearchConfigEntry

Configuration d\'une branche de R&D sur ses différents niveaux

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Nom de la branche R&amp;D | [optional] [default to undefined]
**maxLevel** | **number** | Nombre de niveaux dans la branche | [optional] [default to undefined]
**description** | **string** | Description de la branche | [optional] [default to undefined]
**levels** | [**Array&lt;ResearchLevelEntry&gt;**](ResearchLevelEntry.md) | Configuration des différents niveaux (conditions et récompenses) | [optional] [default to undefined]

## Example

```typescript
import { ResearchConfigEntry } from '@yoxoproject/client';

const instance: ResearchConfigEntry = {
    name,
    maxLevel,
    description,
    levels,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

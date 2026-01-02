# CountryResearchEntry

Données de R&D pour un pays

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **string** | Nom du pays | [optional] [default to undefined]
**researchesLevels** | **{ [key: string]: number; }** | Niveaux actuels de R&amp;D par branche | [optional] [default to undefined]
**lastResearch** | [**LastResearchEntry**](LastResearchEntry.md) |  | [optional] [default to undefined]
**researchesConditionsValues** | **{ [key: string]: number; }** | Valeurs actuelles des conditions de recherche. Celles-ci sont globales | [optional] [default to undefined]

## Example

```typescript
import { CountryResearchEntry } from '@yoxoproject/yoxo-api-client';

const instance: CountryResearchEntry = {
    country,
    researchesLevels,
    lastResearch,
    researchesConditionsValues,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

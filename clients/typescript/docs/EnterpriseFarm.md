# EnterpriseFarm

Entreprise agricole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**histories** | **{ [key: string]: { [key: string]: number; }; }** | Historiques des ventes par céréale et date | [optional] [default to undefined]
**totalCollected** | **number** | Poids total de céréale vendu depuis la création de l\&#39;entreprise (en kg) | [optional] [default to undefined]
**collectedCereal** | **{ [key: string]: number; }** | Poids total de céréales collectées (pour chaque céréale) | [optional] [default to undefined]

## Example

```typescript
import { EnterpriseFarm } from '@yoxo/client';

const instance: EnterpriseFarm = {
    histories,
    totalCollected,
    collectedCereal,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

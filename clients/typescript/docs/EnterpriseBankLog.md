# EnterpriseBankLog

Transaction dans les logs de l\'entreprise

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Type de transaction | [optional] [default to undefined]
**amount** | **number** | Montant de la transaction (positif si ajout d\&#39;argent, négatif si retrait)  | [optional] [default to undefined]
**timestamp** | **number** | Timestamp de la transaction | [optional] [default to undefined]

## Example

```typescript
import { EnterpriseBankLog } from '@yoxo/client';

const instance: EnterpriseBankLog = {
    name,
    amount,
    timestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

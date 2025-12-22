# CountryBankEntry

Banque du pays

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance** | **number** | Argent dans la banque de pays | [optional] [default to undefined]
**owners** | **Array&lt;string&gt;** | Propriétaires de la banque | [optional] [default to undefined]
**members** | **Array&lt;string&gt;** | Membres ayant accès à la banque | [optional] [default to undefined]
**logs** | [**Array&lt;BankLogEntry&gt;**](BankLogEntry.md) | Logs bancaires | [optional] [default to undefined]

## Example

```typescript
import { CountryBankEntry } from '@yoxoproject/client';

const instance: CountryBankEntry = {
    balance,
    owners,
    members,
    logs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

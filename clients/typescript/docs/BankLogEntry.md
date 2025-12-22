# BankLogEntry

Log bancaire

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Montant de la transaction | [optional] [default to undefined]
**timestamp** | **number** | Timestamp de la transaction | [optional] [default to undefined]
**pseudo** | **string** | Joueur ayant effectué la transaction | [optional] [default to undefined]

## Example

```typescript
import { BankLogEntry } from '@yoxoproject/yoxo-api-client';

const instance: BankLogEntry = {
    amount,
    timestamp,
    pseudo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

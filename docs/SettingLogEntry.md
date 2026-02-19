# SettingLogEntry

Log de pays

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | **string** | Joueur ayant effectué l\&#39;action | [optional] [default to undefined]
**action** | **string** | Action effectuée | [optional] [default to undefined]
**target** | **string** | Joueur cible de l\&#39;action (par exemple lors d\&#39;une expulsion) | [optional] [default to undefined]
**timestamp** | **number** | Timestamp de l\&#39;action | [optional] [default to undefined]

## Example

```typescript
import { SettingLogEntry } from '@yoxoproject/yoxo-api-client';

const instance: SettingLogEntry = {
    user,
    action,
    target,
    timestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

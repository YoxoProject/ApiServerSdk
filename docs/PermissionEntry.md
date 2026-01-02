# PermissionEntry

Permission de pays

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Nom de la permission | [optional] [default to undefined]
**description** | **string** | Description de la permission | [optional] [default to undefined]
**leader** | **boolean** | Permission accordée au leader | [optional] [default to undefined]
**officer** | **boolean** | Permission accordée aux officiers | [optional] [default to undefined]
**member** | **boolean** | Permission accordée aux membres | [optional] [default to undefined]
**recruit** | **boolean** | Permission accordée aux recrues | [optional] [default to undefined]
**ally** | **boolean** | Permission accordée aux alliés | [optional] [default to undefined]
**neutral** | **boolean** | Permission accordée aux pays sans relation particulière | [optional] [default to undefined]
**enemy** | **boolean** | Permission accordée aux ennemis | [optional] [default to undefined]

## Example

```typescript
import { PermissionEntry } from '@yoxoproject/yoxo-api-client';

const instance: PermissionEntry = {
    name,
    description,
    leader,
    officer,
    member,
    recruit,
    ally,
    neutral,
    enemy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

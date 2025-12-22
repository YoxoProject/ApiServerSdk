# EnterprisePermission

Les permission associé à une entreprise

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Nom de la permission | [optional] [default to undefined]
**owner** | **boolean** | Si le chef de l\&#39;entreprise peut utiliser cette permission | [optional] [default to undefined]
**cadre** | **boolean** | Si les cadres peuvent utiliser cette permission | [optional] [default to undefined]
**employee** | **boolean** | Si les employés peuvent utiliser cette permission | [optional] [default to undefined]

## Example

```typescript
import { EnterprisePermission } from '@yoxo/client';

const instance: EnterprisePermission = {
    name,
    owner,
    cadre,
    employee,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

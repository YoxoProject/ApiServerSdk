# EnterpriseBasic

Entreprise basique (sans données spécifiques)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type d\&#39;entreprise | [optional] [default to undefined]
**name** | **string** | Nom de l\&#39;entreprise | [optional] [default to undefined]
**age** | **number** | Âge de l\&#39;entreprise en jours | [optional] [default to undefined]
**description** | **string** | Description de l\&#39;entreprise | [optional] [default to undefined]
**services** | **string** | Services proposés | [optional] [default to undefined]
**owner** | **string** | Propriétaire de l\&#39;entreprise | [optional] [default to undefined]
**flag** | **string** | Drapeau de l\&#39;entreprise, sous la forme d\&#39;image en Base64 | [optional] [default to undefined]
**cadres** | **Array&lt;string&gt;** | Liste des cadres de l\&#39;entreprise | [optional] [default to undefined]
**employees** | **Array&lt;string&gt;** | Liste des employés de l\&#39;entreprise | [optional] [default to undefined]
**contractsDone** | **number** | Nombre de contrats réalisés | [optional] [default to undefined]
**disputes** | **number** | Nombre de litiges | [optional] [default to undefined]
**contractsSuccess** | **number** | Taux de réussite des contrats (pourcentage) | [optional] [default to undefined]
**turnover** | **number** | Chiffre d\&#39;affaires total | [optional] [default to undefined]
**permissions** | [**Array&lt;EnterprisePermission&gt;**](EnterprisePermission.md) | Permissions de l\&#39;entreprise | [optional] [default to undefined]
**bank** | [**EnterpriseBank**](EnterpriseBank.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EnterpriseBasic } from '@yoxoproject/client';

const instance: EnterpriseBasic = {
    type,
    name,
    age,
    description,
    services,
    owner,
    flag,
    cadres,
    employees,
    contractsDone,
    disputes,
    contractsSuccess,
    turnover,
    permissions,
    bank,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

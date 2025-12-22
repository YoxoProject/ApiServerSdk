# EnterpriseBank

Informations bancaires d\'une entreprise

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank** | **number** | Solde bancaire actuel (positif ou nul) | [optional] [default to undefined]
**flux14Days** | **number** | Flux bancaire des 14 derniers jours | [optional] [default to undefined]
**inProgressContracts** | **number** | Montant des contrats en cours (positif ou nul) | [optional] [default to undefined]
**salaries14Days** | **number** | Salaires versés sur 14 jours (négatif ou nul) | [optional] [default to undefined]
**taxes14Days** | **number** | Taxes payées sur 14 jours (négatif ou nul) | [optional] [default to undefined]
**logs** | [**Array&lt;EnterpriseBankLog&gt;**](EnterpriseBankLog.md) | Historique des transactions | [optional] [default to undefined]

## Example

```typescript
import { EnterpriseBank } from '@yoxo/client';

const instance: EnterpriseBank = {
    bank,
    flux14Days,
    inProgressContracts,
    salaries14Days,
    taxes14Days,
    logs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# CountryActionsEntry

Actions du pays

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalDividendes** | **number** | Total des dividendes perçus | [optional] [default to undefined]
**availableActions** | **number** | Nombre d\&#39;actions disponibles à l\&#39;achat | [optional] [default to undefined]
**actionPrice** | **number** | Prix d\&#39;une action | [optional] [default to undefined]
**dividendesClassement** | [**Array&lt;DividendeClassementEntry&gt;**](DividendeClassementEntry.md) | Total des dividendes perçus détaillés par pays | [optional] [default to undefined]
**dividendesHistory** | [**Array&lt;DividendeHistoryEntry&gt;**](DividendeHistoryEntry.md) | Historique des dividendes perçus | [optional] [default to undefined]
**actions** | [**Array&lt;ActionEntry&gt;**](ActionEntry.md) | Les 8 actions du pays | [optional] [default to undefined]

## Example

```typescript
import { CountryActionsEntry } from '@yoxo/client';

const instance: CountryActionsEntry = {
    totalDividendes,
    availableActions,
    actionPrice,
    dividendesClassement,
    dividendesHistory,
    actions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

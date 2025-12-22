# EnterpriseBet

Entreprise de paris

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bets** | [**Array&lt;EnterpriseBetItem&gt;**](EnterpriseBetItem.md) | Liste des paris actifs | [optional] [default to undefined]
**betsRewardRedistributed** | **number** | L\&#39;argent redistribuées suite aux paris | [optional] [default to undefined]
**betTotal** | **number** | Nombre total de paris réalisés | [optional] [default to undefined]
**betActive** | **number** | Nombre de paris actuellement actifs | [optional] [default to undefined]

## Example

```typescript
import { EnterpriseBet } from '@yoxo/client';

const instance: EnterpriseBet = {
    bets,
    betsRewardRedistributed,
    betTotal,
    betActive,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

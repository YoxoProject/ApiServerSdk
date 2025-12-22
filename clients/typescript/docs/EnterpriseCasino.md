# EnterpriseCasino

Entreprise casino

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**history** | **{ [key: string]: number; }** | Historique des bénéfices du casino par date | [optional] [default to undefined]
**benefAverage** | **number** | Bénéfice moyen (par jours) | [optional] [default to undefined]
**totalPlay** | **number** | Sommes totale jouée | [optional] [default to undefined]
**winPercent** | **number** | Taux de redistribution des gains (en pourcentage) | [optional] [default to undefined]
**totalWin** | **number** | Somme totale des gains distribuées aux joueurs | [optional] [default to undefined]

## Example

```typescript
import { EnterpriseCasino } from '@yoxo/client';

const instance: EnterpriseCasino = {
    history,
    benefAverage,
    totalPlay,
    winPercent,
    totalWin,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

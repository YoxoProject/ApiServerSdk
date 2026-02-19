# AllianceTaxes

Taxes de l\'alliance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hdvTax** | **number** | La taxe en pourcentage appliqué à chaque vente réalisé par un membre de l\&#39;alliance à l\&#39;hotel des ventes | [optional] [default to undefined]
**weeklySalary** | **number** | Le salaire hebdomadaire données automatiquement à tous les pays membres chaque semaine. L\&#39;argent est prélevé dans le compte bloqué | [optional] [default to undefined]
**stationTicket** | **number** | Le cout de téléportation à la station spatiale pour les personnes extérieur à l\&#39;alliance | [optional] [default to undefined]
**notationTax** | **number** | La taxe en pourcentage prélevé chaque semaine sur les notation des pays membres | [optional] [default to undefined]
**joinTax** | **number** | Le prix demandé aux pays souhaitant rejoindre l\&#39;alliance | [optional] [default to undefined]
**moonTeleportCost** | **number** | Prix de la téléportation vers la lune. Accessible uniquement si l\&#39;alliance à construit le statioport lunaire | [optional] [default to undefined]
**fuelCost** | **number** | Tarif d\&#39;achat de 100L de pétrole à l\&#39;alliance, par un pays membre | [optional] [default to undefined]

## Example

```typescript
import { AllianceTaxes } from '@yoxoproject/yoxo-api-client';

const instance: AllianceTaxes = {
    hdvTax,
    weeklySalary,
    stationTicket,
    notationTax,
    joinTax,
    moonTeleportCost,
    fuelCost,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

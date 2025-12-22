# EnterprisePetrol

Entreprise pétrolière

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**historyGenerated** | **{ [key: string]: number; }** | Historique du pétrole vendue | [optional] [default to undefined]
**historyCollected** | **{ [key: string]: number; }** | Historique du pétrole collectée | [optional] [default to undefined]
**total** | **number** | Total du pétrole distribué (L) | [optional] [default to undefined]
**available** | **number** | Pétrole disponible (L) | [optional] [default to undefined]
**allowCountry** | **boolean** | Autoriser la vente au pays | [optional] [default to undefined]
**allowAlly** | **boolean** | Autoriser la vente aux alliés | [optional] [default to undefined]
**allowAll** | **boolean** | Autoriser la vente à tous | [optional] [default to undefined]
**associatedCountry** | **string** | Pays associé (semble être le pays du chef de l\&#39;entreprise) | [optional] [default to undefined]
**price** | **number** | Prix actuel du pétrole ($/100L) | [optional] [default to undefined]
**priceAverage** | **number** | Prix moyen, à l\&#39;échelle du serveur ($/100L) | [optional] [default to undefined]

## Example

```typescript
import { EnterprisePetrol } from '@yoxo/client';

const instance: EnterprisePetrol = {
    historyGenerated,
    historyCollected,
    total,
    available,
    allowCountry,
    allowAlly,
    allowAll,
    associatedCountry,
    price,
    priceAverage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

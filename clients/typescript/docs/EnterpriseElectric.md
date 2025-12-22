# EnterpriseElectric

Entreprise électrique

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | Électricité totale distribué (MJ) | [optional] [default to undefined]
**available** | **number** | Électricité disponible (MJ) | [optional] [default to undefined]
**allowCountry** | **boolean** | Autoriser la vente au pays | [optional] [default to undefined]
**allowAlly** | **boolean** | Autoriser la vente aux alliés | [optional] [default to undefined]
**allowAll** | **boolean** | Autoriser la vente à tous | [optional] [default to undefined]
**associatedCountry** | **string** | Pays associé (semble être le pays du chef de l\&#39;entreprise) | [optional] [default to undefined]
**price** | **number** | Prix actuel de l\&#39;électricité ($/GJ) | [optional] [default to undefined]
**priceAverage** | **number** | Prix moyen, à l\&#39;échelle du serveur ($/GJ) | [optional] [default to undefined]
**countriesSell** | **{ [key: string]: number; }** | Ventes par pays | [optional] [default to undefined]
**historyGenerated** | **{ [key: string]: number; }** | Historique de l\&#39;électricité vendue | [optional] [default to undefined]
**historyCollected** | **{ [key: string]: number; }** | Historique de l\&#39;électricité générée/collectée par les collecteurs | [optional] [default to undefined]

## Example

```typescript
import { EnterpriseElectric } from '@yoxo/client';

const instance: EnterpriseElectric = {
    total,
    available,
    allowCountry,
    allowAlly,
    allowAll,
    associatedCountry,
    price,
    priceAverage,
    countriesSell,
    historyGenerated,
    historyCollected,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

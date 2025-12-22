# EnterpriseElectric

Entreprise électrique

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

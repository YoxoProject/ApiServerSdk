# CerealGlobalMarketEntry

Données du marché global des céréales.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pricesTexture** | **string** | Le graphique de l\&#39;évolution des prix des céréales au cours des 7 derniers jours au format base64. | [optional] [default to undefined]
**salesTexture** | **string** | Le graphique des ventes des différents céréales au cours des 7 derniers jours au format base64. | [optional] [default to undefined]
**stocksTexture** | **string** | Le graphique de l\&#39;évolution des stocks des différents céréales au cours des 7 derniers jours au format base64. | [optional] [default to undefined]
**pricesHistory** | **{ [key: string]: { [key: string]: number; }; }** | L\&#39;historique des prix des différentes céréales sur le marché global au cours des 7 derniers jours. | [optional] [default to undefined]
**salesHistory** | **{ [key: string]: { [key: string]: number; }; }** | L\&#39;historique des ventes des différentes céréales sur le marché global au cours des 7 derniers jours. | [optional] [default to undefined]
**stocksHistory** | **{ [key: string]: { [key: string]: number; }; }** | L\&#39;historique des stocks des différentes céréales sur le marché global au cours des 7 derniers jours. | [optional] [default to undefined]
**cerealsPrice** | **{ [key: string]: number; }** | Les prix actuels des différentes céréales disponibles sur le marché global. | [optional] [default to undefined]

## Example

```typescript
import { CerealGlobalMarketEntry } from '@yoxo/client';

const instance: CerealGlobalMarketEntry = {
    pricesTexture,
    salesTexture,
    stocksTexture,
    pricesHistory,
    salesHistory,
    stocksHistory,
    cerealsPrice,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

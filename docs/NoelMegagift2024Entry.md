# NoelMegagift2024Entry

Données d\'un tirage du méga cadeau de Noël 2024

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **string** | Le pseudo du joueur ayant réalisé le tirage | [optional] [default to undefined]
**server** | **string** | Le serveur sur lequel le méga cadeau a été ouvert | [optional] [default to undefined]
**timestamp** | **number** | Timestamp du moment où le tirage a été effectué (en ms) | [optional] [default to undefined]
**loots** | **Array&lt;string&gt;** | Liste des items obtenus par le joueur lors du tirage | [optional] [default to undefined]

## Example

```typescript
import { NoelMegagift2024Entry } from '@yoxoproject/yoxo-api-client';

const instance: NoelMegagift2024Entry = {
    username,
    server,
    timestamp,
    loots,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

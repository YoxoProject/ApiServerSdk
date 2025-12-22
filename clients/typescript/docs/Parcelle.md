# Parcelle

Parcelle immobilière

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Nom de la parcelle | [optional] [default to undefined]
**clientName** | **string** | Nom du locataire | [optional] [default to undefined]
**isStaff** | **boolean** |  | [optional] [default to undefined]
**price** | **number** | Prix de location (par jour) | [optional] [default to undefined]
**signCoords** | [**Coords**](Coords.md) |  | [optional] [default to undefined]
**status** | **string** | Statut de location de la parcelle | [optional] [default to undefined]
**daysRent** | **number** | Nombre de jours de location restants | [optional] [default to undefined]

## Example

```typescript
import { Parcelle } from '@yoxoproject/client';

const instance: Parcelle = {
    name,
    clientName,
    isStaff,
    price,
    signCoords,
    status,
    daysRent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

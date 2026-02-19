# PillageCountryEntry

Données d\'un pays en pillage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Le nom du pays | [optional] [default to undefined]
**level** | **number** | Le niveau du pays | [optional] [default to undefined]
**players** | **number** | Le nombre de joueur total dans le pays | [optional] [default to undefined]
**notationPosition** | **number** | La position dans le classement du serveur aux dernières notation | [optional] [default to undefined]
**power** | **number** | Le power actuel du pays | [optional] [default to undefined]
**powerMax** | **number** | Le power max du pays | [optional] [default to undefined]

## Example

```typescript
import { PillageCountryEntry } from '@yoxoproject/yoxo-api-client';

const instance: PillageCountryEntry = {
    name,
    level,
    players,
    notationPosition,
    power,
    powerMax,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# AlliancePrimeBoost

Prime Boost de l\'alliance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hasBoostActive** | **boolean** | Si l\&#39;alliance possède le boost premium (+20% de joueur premium) | [optional] [default to undefined]
**boostPercent** | **number** | Le pourcentage de joueur premium dans l\&#39;alliance | [optional] [default to undefined]
**boostPoints** | **number** | Le nombre de joueurs premium (en réalité, les joueurs premium_plus compte comme 2 joueurs) | [optional] [default to undefined]
**primeBoosters** | [**Array&lt;AlliancePrimeBooster&gt;**](AlliancePrimeBooster.md) | La liste de TOUS les membres de l\&#39;alliance (premium ou non) | [optional] [default to undefined]

## Example

```typescript
import { AlliancePrimeBoost } from '@yoxoproject/yoxo-api-client';

const instance: AlliancePrimeBoost = {
    hasBoostActive,
    boostPercent,
    boostPoints,
    primeBoosters,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

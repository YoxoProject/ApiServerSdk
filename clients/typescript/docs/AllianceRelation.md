# AllianceRelation

Relation entre alliances

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Le nom de l\&#39;alliance concerné par la relation | [optional] [default to undefined]
**relation** | **string** | Le type de relation (neutral/enemy) | [optional] [default to undefined]
**surchargeValueFrom** | **number** | Le pourcentage de surcharge appliqué par l\&#39;alliance de la relation sur l\&#39;alliance dont l\&#39;export est fait | [optional] [default to undefined]
**hasEmbargoFrom** | **boolean** | Si l\&#39;alliance de la relation a appliqué un embargo sur l\&#39;alliance dont l\&#39;export est fait | [optional] [default to undefined]
**surchargeValueTo** | **number** | Le pourcentage de surcharge appliqué par l\&#39;alliance dont l\&#39;export est fait sur l\&#39;alliance de la relation | [optional] [default to undefined]
**hasEmbargoTo** | **boolean** | Si l\&#39;alliance dont l\&#39;export est fait a appliqué un embargo sur l\&#39;alliance de la relation | [optional] [default to undefined]

## Example

```typescript
import { AllianceRelation } from '@yoxoproject/yoxo-api-client';

const instance: AllianceRelation = {
    name,
    relation,
    surchargeValueFrom,
    hasEmbargoFrom,
    surchargeValueTo,
    hasEmbargoTo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

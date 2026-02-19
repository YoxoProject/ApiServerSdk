# AllianceModule

Module de la station spatiale

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | L\&#39;id du module | [optional] [default to undefined]
**direction** | **string** | La direction dans laquelle est orienté le module | [optional] [default to undefined]
**coordinates** | [**AllianceModuleCoordinates**](AllianceModuleCoordinates.md) |  | [optional] [default to undefined]
**name** | **string** | Le nom du module | [optional] [default to undefined]
**description** | **string** | La description du module | [optional] [default to undefined]

## Example

```typescript
import { AllianceModule } from '@yoxoproject/yoxo-api-client';

const instance: AllianceModule = {
    id,
    direction,
    coordinates,
    name,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

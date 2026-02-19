# ArchitectureEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terraforming** | **number** | Terraforming (entre 0 et 2) | [optional] [default to undefined]
**coherenceStyle** | **number** | Cohérence du style (entre 0 et 2) | [optional] [default to undefined]
**activiteRecente** | **number** | Activité récente (entre 0 et 4) | [optional] [default to undefined]
**blocsCatalogue** | **number** | Utilisation de blocs du catalogue (entre 0 et 2) | [optional] [default to undefined]
**trouMissiles** | **number** | Présence de trous de missiles (entre 0 et -4) | [optional] [default to undefined]
**beauteGenerale** | **number** | Beauté générale du pays (entre 0 et 4) | [optional] [default to undefined]
**habitabiliteMaison** | **number** | Habitabilité des maisons (entre 0 et 2) | [optional] [default to undefined]
**biomeCoherent** | **number** | Cohérence avec le biome (entre 0 et 1) | [optional] [default to undefined]
**batimentsAbandonnes** | **number** | Absence de bâtiments abandonnés (1 si aucun, 0 sinon) | [optional] [default to undefined]
**utilisationSchematica** | **number** | Utilisation de schematica (0 si non, -1 si oui) | [optional] [default to undefined]
**coherenceLumieres** | **number** | Cohérence des lumières (entre 0 et 1) | [optional] [default to undefined]
**roleplayPays** | **number** | Respect du roleplay du pays (entre 0 et 1) | [optional] [default to undefined]
**organics** | **number** | Présence d\&#39;organics (entre 0 et 1) | [optional] [default to undefined]
**surfaceConstruite** | **number** | Multiplicateur de surface construite (entre x0 et x2.0) | [optional] [default to undefined]
**staff** | **string** | Le username du staff qui a noté le pays | [optional] [default to undefined]

## Example

```typescript
import { ArchitectureEntry } from '@yoxoproject/yoxo-api-client';

const instance: ArchitectureEntry = {
    terraforming,
    coherenceStyle,
    activiteRecente,
    blocsCatalogue,
    trouMissiles,
    beauteGenerale,
    habitabiliteMaison,
    biomeCoherent,
    batimentsAbandonnes,
    utilisationSchematica,
    coherenceLumieres,
    roleplayPays,
    organics,
    surfaceConstruite,
    staff,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

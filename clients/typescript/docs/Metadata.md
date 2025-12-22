# Metadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataType** | **string** | Le type de données (researches, skill, enterprise, ...) | [optional] [default to undefined]
**server** | **string** | Le serveur duquel est issue les données. Dans le cas de données issue d\&#39;un évènement interserveur, le serveur sera \&#39;event\&#39; | [optional] [default to undefined]
**timestamp** | **number** | Timestamp auquel les données ont été scrap. Le timestamp est ici exprimé en milliseconde et correspond au nombre de milliseconde écoulées depuis le 1er janvier 1970, minuit UTC | [optional] [default to undefined]
**date** | **string** | La date auquel les données ont été scrap, au format ISO | [optional] [default to undefined]
**source** | **string** | Le chemin d\&#39;accès du fichier dans le bucket S3 | [optional] [default to undefined]
**cacheSource** | **string** | La source des données: S3 (sans cache), L1 (cache Caffeine, en mémoire), L2 (cache Redis) | [optional] [default to undefined]
**executionTimeMs** | **number** | Le temps d\&#39;exécution de la requête, en millisecondes | [optional] [default to undefined]
**totalCount** | **number** | Si filtrage possible, nombre d\&#39;éléments avant le filtrage | [optional] [default to undefined]
**filteredCount** | **number** | Si filtrage possible, nombre d\&#39;éléments après le filtrage | [optional] [default to undefined]
**currentPage** | **number** | Si pagination, le page actuel | [optional] [default to undefined]
**pageSize** | **number** | Si pagination, le nombre d\&#39;éléments par pages | [optional] [default to undefined]
**totalPages** | **number** | Si pagination, le nombre total de pages. La première page est la page 1 | [optional] [default to undefined]

## Example

```typescript
import { Metadata } from '@yoxoproject/yoxo-api-client';

const instance: Metadata = {
    dataType,
    server,
    timestamp,
    date,
    source,
    cacheSource,
    executionTimeMs,
    totalCount,
    filteredCount,
    currentPage,
    pageSize,
    totalPages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

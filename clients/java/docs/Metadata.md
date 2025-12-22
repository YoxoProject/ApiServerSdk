

# Metadata


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**dataType** | **String** | Le type de données (researches, skill, enterprise, ...) |  [optional] |
|**server** | **String** | Le serveur duquel est issue les données. Dans le cas de données issue d&#39;un évènement interserveur, le serveur sera &#39;event&#39; |  [optional] |
|**timestamp** | **Long** | Timestamp auquel les données ont été scrap. Le timestamp est ici exprimé en milliseconde et correspond au nombre de milliseconde écoulées depuis le 1er janvier 1970, minuit UTC |  [optional] |
|**date** | **String** | La date auquel les données ont été scrap, au format ISO |  [optional] |
|**source** | **String** | Le chemin d&#39;accès du fichier dans le bucket S3 |  [optional] |
|**cacheSource** | **String** | La source des données: S3 (sans cache), L1 (cache Caffeine, en mémoire), L2 (cache Redis) |  [optional] |
|**executionTimeMs** | **Long** | Le temps d&#39;exécution de la requête, en millisecondes |  [optional] |
|**totalCount** | **Integer** | Si filtrage possible, nombre d&#39;éléments avant le filtrage |  [optional] |
|**filteredCount** | **Integer** | Si filtrage possible, nombre d&#39;éléments après le filtrage |  [optional] |
|**currentPage** | **Integer** | Si pagination, le page actuel |  [optional] |
|**pageSize** | **Integer** | Si pagination, le nombre d&#39;éléments par pages |  [optional] |
|**totalPages** | **Integer** | Si pagination, le nombre total de pages. La première page est la page 1 |  [optional] |




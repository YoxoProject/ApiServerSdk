# Metadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **str** | Le type de données (researches, skill, enterprise, ...) | [optional] 
**server** | **str** | Le serveur duquel est issue les données. Dans le cas de données issue d&#39;un évènement interserveur, le serveur sera &#39;event&#39; | [optional] 
**timestamp** | **int** | Timestamp auquel les données ont été scrap. Le timestamp est ici exprimé en milliseconde et correspond au nombre de milliseconde écoulées depuis le 1er janvier 1970, minuit UTC | [optional] 
**var_date** | **str** | La date auquel les données ont été scrap, au format ISO | [optional] 
**source** | **str** | Le chemin d&#39;accès du fichier dans le bucket S3 | [optional] 
**cache_source** | **str** | La source des données: S3 (sans cache), L1 (cache Caffeine, en mémoire), L2 (cache Redis) | [optional] 
**execution_time_ms** | **int** | Le temps d&#39;exécution de la requête, en millisecondes | [optional] 
**total_count** | **int** | Si filtrage possible, nombre d&#39;éléments avant le filtrage | [optional] 
**filtered_count** | **int** | Si filtrage possible, nombre d&#39;éléments après le filtrage | [optional] 
**current_page** | **int** | Si pagination, le page actuel | [optional] 
**page_size** | **int** | Si pagination, le nombre d&#39;éléments par pages | [optional] 
**total_pages** | **int** | Si pagination, le nombre total de pages. La première page est la page 1 | [optional] 

## Example

```python
from yoxo-api_client.models.metadata import Metadata

# TODO update the JSON string below
json = "{}"
# create an instance of Metadata from a JSON string
metadata_instance = Metadata.from_json(json)
# print the JSON string representation of the object
print(Metadata.to_json())

# convert the object into a dict
metadata_dict = metadata_instance.to_dict()
# create an instance of Metadata from a dict
metadata_from_dict = Metadata.from_dict(metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



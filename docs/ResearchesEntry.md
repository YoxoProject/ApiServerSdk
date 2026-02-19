# ResearchesEntry

Niveaux de recherches

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**general** | **int** | Niveau de recherche sur la branche générale | [optional] 
**resource** | **int** | Niveau de recherche sur la branche ressource | [optional] 
**military** | **int** | Niveau de recherche sur la branche militaire | [optional] 
**industry** | **int** | Niveau de recherche sur la branche industrielle | [optional] 
**technology** | **int** | Niveau de recherche sur la branche technologique | [optional] 

## Example

```python
from yoxo_api_client.models.researches_entry import ResearchesEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ResearchesEntry from a JSON string
researches_entry_instance = ResearchesEntry.from_json(json)
# print the JSON string representation of the object
print(ResearchesEntry.to_json())

# convert the object into a dict
researches_entry_dict = researches_entry_instance.to_dict()
# create an instance of ResearchesEntry from a dict
researches_entry_from_dict = ResearchesEntry.from_dict(researches_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



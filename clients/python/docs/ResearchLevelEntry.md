# ResearchLevelEntry

Configuration d'un niveau de R&D

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | **int** | Numéro du niveau | [optional] 
**duration** | **int** | Durée de la recherche (en secondes) | [optional] 
**conditions** | **List[str]** | Liste des conditions requises pour débloquer ce niveau | [optional] 
**rewards** | **List[str]** | Liste des récompenses obtenues en complétant ce niveau | [optional] 

## Example

```python
from yoxo-api_client.models.research_level_entry import ResearchLevelEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ResearchLevelEntry from a JSON string
research_level_entry_instance = ResearchLevelEntry.from_json(json)
# print the JSON string representation of the object
print(ResearchLevelEntry.to_json())

# convert the object into a dict
research_level_entry_dict = research_level_entry_instance.to_dict()
# create an instance of ResearchLevelEntry from a dict
research_level_entry_from_dict = ResearchLevelEntry.from_dict(research_level_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



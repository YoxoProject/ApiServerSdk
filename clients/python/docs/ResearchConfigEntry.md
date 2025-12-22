# ResearchConfigEntry

Configuration d'une branche de R&D sur ses différents niveaux

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Nom de la branche R&amp;D | [optional] 
**max_level** | **int** | Nombre de niveaux dans la branche | [optional] 
**description** | **str** | Description de la branche | [optional] 
**levels** | [**List[ResearchLevelEntry]**](ResearchLevelEntry.md) | Configuration des différents niveaux (conditions et récompenses) | [optional] 

## Example

```python
from yoxo-api_client.models.research_config_entry import ResearchConfigEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ResearchConfigEntry from a JSON string
research_config_entry_instance = ResearchConfigEntry.from_json(json)
# print the JSON string representation of the object
print(ResearchConfigEntry.to_json())

# convert the object into a dict
research_config_entry_dict = research_config_entry_instance.to_dict()
# create an instance of ResearchConfigEntry from a dict
research_config_entry_from_dict = ResearchConfigEntry.from_dict(research_config_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



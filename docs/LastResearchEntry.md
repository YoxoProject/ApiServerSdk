# LastResearchEntry

Dernière recherche complétée par un pays

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** | Nom de la branche | [optional] 
**level** | **int** | Niveau atteint | [optional] 
**timestamp** | **int** | Timestamp de complétion (epoch milliseconds) | [optional] 

## Example

```python
from yoxo_api_client.models.last_research_entry import LastResearchEntry

# TODO update the JSON string below
json = "{}"
# create an instance of LastResearchEntry from a JSON string
last_research_entry_instance = LastResearchEntry.from_json(json)
# print the JSON string representation of the object
print(LastResearchEntry.to_json())

# convert the object into a dict
last_research_entry_dict = last_research_entry_instance.to_dict()
# create an instance of LastResearchEntry from a dict
last_research_entry_from_dict = LastResearchEntry.from_dict(last_research_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



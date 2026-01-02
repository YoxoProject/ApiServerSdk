# DividendeHistoryEntry

Historique dividendes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pays** | **str** | Pays ayant versé les dividendes | [optional] 
**montant** | **float** | Montant des dividendes perçus de ce pays | [optional] 
**timestamp** | **int** | Timestamp du versement des dividendes | [optional] 

## Example

```python
from yoxo_api_client.models.dividende_history_entry import DividendeHistoryEntry

# TODO update the JSON string below
json = "{}"
# create an instance of DividendeHistoryEntry from a JSON string
dividende_history_entry_instance = DividendeHistoryEntry.from_json(json)
# print the JSON string representation of the object
print(DividendeHistoryEntry.to_json())

# convert the object into a dict
dividende_history_entry_dict = dividende_history_entry_instance.to_dict()
# create an instance of DividendeHistoryEntry from a dict
dividende_history_entry_from_dict = DividendeHistoryEntry.from_dict(dividende_history_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



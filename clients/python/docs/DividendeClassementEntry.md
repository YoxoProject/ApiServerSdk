# DividendeClassementEntry

Classement dividendes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pays** | **str** | Pays ayant versé les dividendes | [optional] 
**montant** | **float** | Montant des dividendes perçus de ce pays | [optional] 

## Example

```python
from yoxo_client.models.dividende_classement_entry import DividendeClassementEntry

# TODO update the JSON string below
json = "{}"
# create an instance of DividendeClassementEntry from a JSON string
dividende_classement_entry_instance = DividendeClassementEntry.from_json(json)
# print the JSON string representation of the object
print(DividendeClassementEntry.to_json())

# convert the object into a dict
dividende_classement_entry_dict = dividende_classement_entry_instance.to_dict()
# create an instance of DividendeClassementEntry from a dict
dividende_classement_entry_from_dict = DividendeClassementEntry.from_dict(dividende_classement_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



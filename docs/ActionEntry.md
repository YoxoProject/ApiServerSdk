# ActionEntry

Action détenue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner** | **str** | Pays propriétaire de l&#39;action | [optional] 
**status** | **str** | Statut de l&#39;action | [optional] 

## Example

```python
from yoxo_api_client.models.action_entry import ActionEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ActionEntry from a JSON string
action_entry_instance = ActionEntry.from_json(json)
# print the JSON string representation of the object
print(ActionEntry.to_json())

# convert the object into a dict
action_entry_dict = action_entry_instance.to_dict()
# create an instance of ActionEntry from a dict
action_entry_from_dict = ActionEntry.from_dict(action_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



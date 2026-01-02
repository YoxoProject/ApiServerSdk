# PermissionEntry

Permission de pays

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Nom de la permission | [optional] 
**description** | **str** | Description de la permission | [optional] 
**leader** | **bool** | Permission accordée au leader | [optional] 
**officer** | **bool** | Permission accordée aux officiers | [optional] 
**member** | **bool** | Permission accordée aux membres | [optional] 
**recruit** | **bool** | Permission accordée aux recrues | [optional] 
**ally** | **bool** | Permission accordée aux alliés | [optional] 
**neutral** | **bool** | Permission accordée aux pays sans relation particulière | [optional] 
**enemy** | **bool** | Permission accordée aux ennemis | [optional] 

## Example

```python
from yoxo_api_client.models.permission_entry import PermissionEntry

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionEntry from a JSON string
permission_entry_instance = PermissionEntry.from_json(json)
# print the JSON string representation of the object
print(PermissionEntry.to_json())

# convert the object into a dict
permission_entry_dict = permission_entry_instance.to_dict()
# create an instance of PermissionEntry from a dict
permission_entry_from_dict = PermissionEntry.from_dict(permission_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



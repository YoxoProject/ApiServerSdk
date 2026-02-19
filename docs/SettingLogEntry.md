# SettingLogEntry

Log de pays

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | **str** | Joueur ayant effectué l&#39;action | [optional] 
**action** | **str** | Action effectuée | [optional] 
**target** | **str** | Joueur cible de l&#39;action (par exemple lors d&#39;une expulsion) | [optional] 
**timestamp** | **int** | Timestamp de l&#39;action | [optional] 

## Example

```python
from yoxo_api_client.models.setting_log_entry import SettingLogEntry

# TODO update the JSON string below
json = "{}"
# create an instance of SettingLogEntry from a JSON string
setting_log_entry_instance = SettingLogEntry.from_json(json)
# print the JSON string representation of the object
print(SettingLogEntry.to_json())

# convert the object into a dict
setting_log_entry_dict = setting_log_entry_instance.to_dict()
# create an instance of SettingLogEntry from a dict
setting_log_entry_from_dict = SettingLogEntry.from_dict(setting_log_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



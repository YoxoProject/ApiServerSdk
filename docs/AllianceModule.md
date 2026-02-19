# AllianceModule

Module de la station spatiale

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | L&#39;id du module | [optional] 
**direction** | **str** | La direction dans laquelle est orienté le module | [optional] 
**coordinates** | [**AllianceModuleCoordinates**](AllianceModuleCoordinates.md) |  | [optional] 
**name** | **str** | Le nom du module | [optional] 
**description** | **str** | La description du module | [optional] 

## Example

```python
from yoxo_api_client.models.alliance_module import AllianceModule

# TODO update the JSON string below
json = "{}"
# create an instance of AllianceModule from a JSON string
alliance_module_instance = AllianceModule.from_json(json)
# print the JSON string representation of the object
print(AllianceModule.to_json())

# convert the object into a dict
alliance_module_dict = alliance_module_instance.to_dict()
# create an instance of AllianceModule from a dict
alliance_module_from_dict = AllianceModule.from_dict(alliance_module_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



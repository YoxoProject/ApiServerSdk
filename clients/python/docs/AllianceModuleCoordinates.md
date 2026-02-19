# AllianceModuleCoordinates

Coordonnées d'un module

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**x** | **int** |  | [optional] 
**z** | **int** |  | [optional] 

## Example

```python
from yoxo_api_client.models.alliance_module_coordinates import AllianceModuleCoordinates

# TODO update the JSON string below
json = "{}"
# create an instance of AllianceModuleCoordinates from a JSON string
alliance_module_coordinates_instance = AllianceModuleCoordinates.from_json(json)
# print the JSON string representation of the object
print(AllianceModuleCoordinates.to_json())

# convert the object into a dict
alliance_module_coordinates_dict = alliance_module_coordinates_instance.to_dict()
# create an instance of AllianceModuleCoordinates from a dict
alliance_module_coordinates_from_dict = AllianceModuleCoordinates.from_dict(alliance_module_coordinates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



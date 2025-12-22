# Coords

Coordonnées

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**x** | **int** | Coordonnée X | [optional] 
**y** | **int** | Coordonnée Y | [optional] 
**z** | **int** | Coordonnée Z | [optional] 

## Example

```python
from yoxo_client.models.coords import Coords

# TODO update the JSON string below
json = "{}"
# create an instance of Coords from a JSON string
coords_instance = Coords.from_json(json)
# print the JSON string representation of the object
print(Coords.to_json())

# convert the object into a dict
coords_dict = coords_instance.to_dict()
# create an instance of Coords from a dict
coords_from_dict = Coords.from_dict(coords_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CountryCoordinates

Coordonnées X,Z

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**x** | **int** |  | [optional] 
**z** | **int** |  | [optional] 

## Example

```python
from yoxo_api_client.models.country_coordinates import CountryCoordinates

# TODO update the JSON string below
json = "{}"
# create an instance of CountryCoordinates from a JSON string
country_coordinates_instance = CountryCoordinates.from_json(json)
# print the JSON string representation of the object
print(CountryCoordinates.to_json())

# convert the object into a dict
country_coordinates_dict = country_coordinates_instance.to_dict()
# create an instance of CountryCoordinates from a dict
country_coordinates_from_dict = CountryCoordinates.from_dict(country_coordinates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



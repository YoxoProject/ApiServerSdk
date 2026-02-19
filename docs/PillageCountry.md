# PillageCountry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PillageCountryEntry]**](PillageCountryEntry.md) |  | [optional] 
**metadata** | [**Metadata**](Metadata.md) |  | [optional] 

## Example

```python
from yoxo_api_client.models.pillage_country import PillageCountry

# TODO update the JSON string below
json = "{}"
# create an instance of PillageCountry from a JSON string
pillage_country_instance = PillageCountry.from_json(json)
# print the JSON string representation of the object
print(PillageCountry.to_json())

# convert the object into a dict
pillage_country_dict = pillage_country_instance.to_dict()
# create an instance of PillageCountry from a dict
pillage_country_from_dict = PillageCountry.from_dict(pillage_country_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



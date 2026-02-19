# PillageCountryEntry

Données d'un pays en pillage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Le nom du pays | [optional] 
**level** | **int** | Le niveau du pays | [optional] 
**players** | **int** | Le nombre de joueur total dans le pays | [optional] 
**notation_position** | **int** | La position dans le classement du serveur aux dernières notation | [optional] 
**power** | **int** | Le power actuel du pays | [optional] 
**power_max** | **int** | Le power max du pays | [optional] 

## Example

```python
from yoxo_api_client.models.pillage_country_entry import PillageCountryEntry

# TODO update the JSON string below
json = "{}"
# create an instance of PillageCountryEntry from a JSON string
pillage_country_entry_instance = PillageCountryEntry.from_json(json)
# print the JSON string representation of the object
print(PillageCountryEntry.to_json())

# convert the object into a dict
pillage_country_entry_dict = pillage_country_entry_instance.to_dict()
# create an instance of PillageCountryEntry from a dict
pillage_country_entry_from_dict = PillageCountryEntry.from_dict(pillage_country_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



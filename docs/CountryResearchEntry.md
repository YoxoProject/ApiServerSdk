# CountryResearchEntry

Données de R&D pour un pays

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | Nom du pays | [optional] 
**researches_levels** | **Dict[str, int]** | Niveaux actuels de R&amp;D par branche | [optional] 
**last_research** | [**LastResearchEntry**](LastResearchEntry.md) |  | [optional] 
**researches_conditions_values** | **Dict[str, float]** | Valeurs actuelles des conditions de recherche. Celles-ci sont globales | [optional] 

## Example

```python
from yoxo_api_client.models.country_research_entry import CountryResearchEntry

# TODO update the JSON string below
json = "{}"
# create an instance of CountryResearchEntry from a JSON string
country_research_entry_instance = CountryResearchEntry.from_json(json)
# print the JSON string representation of the object
print(CountryResearchEntry.to_json())

# convert the object into a dict
country_research_entry_dict = country_research_entry_instance.to_dict()
# create an instance of CountryResearchEntry from a dict
country_research_entry_from_dict = CountryResearchEntry.from_dict(country_research_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



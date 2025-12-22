# ResearchServer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[CountryResearchEntry]**](CountryResearchEntry.md) |  | [optional] 
**metadata** | [**Metadata**](Metadata.md) |  | [optional] 

## Example

```python
from yoxo-api_client.models.research_server import ResearchServer

# TODO update the JSON string below
json = "{}"
# create an instance of ResearchServer from a JSON string
research_server_instance = ResearchServer.from_json(json)
# print the JSON string representation of the object
print(ResearchServer.to_json())

# convert the object into a dict
research_server_dict = research_server_instance.to_dict()
# create an instance of ResearchServer from a dict
research_server_from_dict = ResearchServer.from_dict(research_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



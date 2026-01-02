# ResearchConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Dict[str, ResearchConfigEntry]**](ResearchConfigEntry.md) |  | [optional] 
**metadata** | [**Metadata**](Metadata.md) |  | [optional] 

## Example

```python
from yoxo_api_client.models.research_config import ResearchConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ResearchConfig from a JSON string
research_config_instance = ResearchConfig.from_json(json)
# print the JSON string representation of the object
print(ResearchConfig.to_json())

# convert the object into a dict
research_config_dict = research_config_instance.to_dict()
# create an instance of ResearchConfig from a dict
research_config_from_dict = ResearchConfig.from_dict(research_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



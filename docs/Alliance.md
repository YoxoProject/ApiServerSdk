# Alliance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AllianceEntry]**](AllianceEntry.md) |  | [optional] 
**metadata** | [**Metadata**](Metadata.md) |  | [optional] 

## Example

```python
from yoxo_api_client.models.alliance import Alliance

# TODO update the JSON string below
json = "{}"
# create an instance of Alliance from a JSON string
alliance_instance = Alliance.from_json(json)
# print the JSON string representation of the object
print(Alliance.to_json())

# convert the object into a dict
alliance_dict = alliance_instance.to_dict()
# create an instance of Alliance from a dict
alliance_from_dict = Alliance.from_dict(alliance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



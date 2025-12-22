# Enterprise


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EnterpriseEntry]**](EnterpriseEntry.md) |  | [optional] 
**metadata** | [**Metadata**](Metadata.md) |  | [optional] 

## Example

```python
from yoxo_client.models.enterprise import Enterprise

# TODO update the JSON string below
json = "{}"
# create an instance of Enterprise from a JSON string
enterprise_instance = Enterprise.from_json(json)
# print the JSON string representation of the object
print(Enterprise.to_json())

# convert the object into a dict
enterprise_dict = enterprise_instance.to_dict()
# create an instance of Enterprise from a dict
enterprise_from_dict = Enterprise.from_dict(enterprise_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



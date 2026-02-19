# Notation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[NotationEntry]**](NotationEntry.md) |  | [optional] 
**metadata** | [**Metadata**](Metadata.md) |  | [optional] 

## Example

```python
from yoxo_api_client.models.notation import Notation

# TODO update the JSON string below
json = "{}"
# create an instance of Notation from a JSON string
notation_instance = Notation.from_json(json)
# print the JSON string representation of the object
print(Notation.to_json())

# convert the object into a dict
notation_dict = notation_instance.to_dict()
# create an instance of Notation from a dict
notation_from_dict = Notation.from_dict(notation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



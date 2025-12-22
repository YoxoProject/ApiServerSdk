# CerealGlobalMarket


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CerealGlobalMarketEntry**](CerealGlobalMarketEntry.md) |  | [optional] 
**metadata** | [**Metadata**](Metadata.md) |  | [optional] 

## Example

```python
from yoxo-api_client.models.cereal_global_market import CerealGlobalMarket

# TODO update the JSON string below
json = "{}"
# create an instance of CerealGlobalMarket from a JSON string
cereal_global_market_instance = CerealGlobalMarket.from_json(json)
# print the JSON string representation of the object
print(CerealGlobalMarket.to_json())

# convert the object into a dict
cereal_global_market_dict = cereal_global_market_instance.to_dict()
# create an instance of CerealGlobalMarket from a dict
cereal_global_market_from_dict = CerealGlobalMarket.from_dict(cereal_global_market_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



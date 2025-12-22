# EnterpriseRealEstate

Entreprise immobilière

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parcelles** | [**List[Parcelle]**](Parcelle.md) | Liste des parcelles de l&#39;entreprise | [optional] 

## Example

```python
from yoxo_client.models.enterprise_real_estate import EnterpriseRealEstate

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseRealEstate from a JSON string
enterprise_real_estate_instance = EnterpriseRealEstate.from_json(json)
# print the JSON string representation of the object
print(EnterpriseRealEstate.to_json())

# convert the object into a dict
enterprise_real_estate_dict = enterprise_real_estate_instance.to_dict()
# create an instance of EnterpriseRealEstate from a dict
enterprise_real_estate_from_dict = EnterpriseRealEstate.from_dict(enterprise_real_estate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



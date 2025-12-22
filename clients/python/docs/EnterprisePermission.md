# EnterprisePermission

Les permission associé à une entreprise

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Nom de la permission | [optional] 
**owner** | **bool** | Si le chef de l&#39;entreprise peut utiliser cette permission | [optional] 
**cadre** | **bool** | Si les cadres peuvent utiliser cette permission | [optional] 
**employee** | **bool** | Si les employés peuvent utiliser cette permission | [optional] 

## Example

```python
from yoxo_api_client.models.enterprise_permission import EnterprisePermission

# TODO update the JSON string below
json = "{}"
# create an instance of EnterprisePermission from a JSON string
enterprise_permission_instance = EnterprisePermission.from_json(json)
# print the JSON string representation of the object
print(EnterprisePermission.to_json())

# convert the object into a dict
enterprise_permission_dict = enterprise_permission_instance.to_dict()
# create an instance of EnterprisePermission from a dict
enterprise_permission_from_dict = EnterprisePermission.from_dict(enterprise_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



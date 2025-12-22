# EnterpriseFarm

Entreprise agricole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**histories** | **Dict[str, Dict[str, float]]** | Historiques des ventes par céréale et date | [optional] 
**total_collected** | **int** | Poids total de céréale vendu depuis la création de l&#39;entreprise (en kg) | [optional] 
**collected_cereal** | **Dict[str, int]** | Poids total de céréales collectées (pour chaque céréale) | [optional] 

## Example

```python
from yoxo_client.models.enterprise_farm import EnterpriseFarm

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseFarm from a JSON string
enterprise_farm_instance = EnterpriseFarm.from_json(json)
# print the JSON string representation of the object
print(EnterpriseFarm.to_json())

# convert the object into a dict
enterprise_farm_dict = enterprise_farm_instance.to_dict()
# create an instance of EnterpriseFarm from a dict
enterprise_farm_from_dict = EnterpriseFarm.from_dict(enterprise_farm_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



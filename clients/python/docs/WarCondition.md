# WarCondition

Valeurs des conditions de victoire (objectifs ou progression)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kill** | **int** | Nombre de kills effectués | [optional] 
**victory** | **int** | Nombre d&#39;assauts gagnés | [optional] 
**missile_points** | **int** | Nombre de points obtenus lors des tirs de missile | [optional] 
**assault_points** | **int** | Nombre de points obtenus lors des assauts | [optional] 
**antimatter** | **int** | Nombre d&#39;antimmater tiré | [optional] 
**redmatter** | **int** | Nombre de redmatter tiré | [optional] 

## Example

```python
from yoxo-api_client.models.war_condition import WarCondition

# TODO update the JSON string below
json = "{}"
# create an instance of WarCondition from a JSON string
war_condition_instance = WarCondition.from_json(json)
# print the JSON string representation of the object
print(WarCondition.to_json())

# convert the object into a dict
war_condition_dict = war_condition_instance.to_dict()
# create an instance of WarCondition from a dict
war_condition_from_dict = WarCondition.from_dict(war_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



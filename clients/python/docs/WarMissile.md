# WarMissile

Détails d'un missile lancé

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**launched_at** | **int** | Timestamp (ms) du lancement du missile | [optional] 
**missile** | **str** | Type de missile lancé | [optional] 
**missile_points** | **int** | Points de missile consommés pour ce lancement | [optional] 
**launcher** | **str** | Joueur ayant lancé le missile | [optional] 
**launcher_country** | **str** | Pays du joueur ayant lancé le missile | [optional] 

## Example

```python
from yoxo_client.models.war_missile import WarMissile

# TODO update the JSON string below
json = "{}"
# create an instance of WarMissile from a JSON string
war_missile_instance = WarMissile.from_json(json)
# print the JSON string representation of the object
print(WarMissile.to_json())

# convert the object into a dict
war_missile_dict = war_missile_instance.to_dict()
# create an instance of WarMissile from a dict
war_missile_from_dict = WarMissile.from_dict(war_missile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



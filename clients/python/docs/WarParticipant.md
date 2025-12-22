# WarParticipant

Détails d'un pays participant à la guerre

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | Nom du pays participant | [optional] 
**remaining_missiles_points** | **int** | Points de missile restants utilisables par le pays | [optional] 
**inactivity** | **int** | Pourcentage d&#39;inactivité du pays. Augmente de 3% si les critères de connexion ne sont pas remplis pendant 2h | [optional] 
**progress** | **float** | Pourcentage de progression vers la validation des conditions de victoire (0-100%). À 100%, le pays gagne | [optional] 
**condition** | [**WarCondition**](WarCondition.md) |  | [optional] 

## Example

```python
from yoxo_client.models.war_participant import WarParticipant

# TODO update the JSON string below
json = "{}"
# create an instance of WarParticipant from a JSON string
war_participant_instance = WarParticipant.from_json(json)
# print the JSON string representation of the object
print(WarParticipant.to_json())

# convert the object into a dict
war_participant_dict = war_participant_instance.to_dict()
# create an instance of WarParticipant from a dict
war_participant_from_dict = WarParticipant.from_dict(war_participant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



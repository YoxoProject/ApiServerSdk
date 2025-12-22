# NewMemberEntry

Détail sur la formation d'un nouveau joueur

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pseudo** | **str** | Pseudo du nouveau joueur | [optional] 
**played_time** | **int** | Temps de jeu sur le serveur (en secondes) | [optional] 
**reward_power** | **int** | Récompenses de power débloquées par la formation du joueur | [optional] 
**reward_power_max** | **int** | Récompenses de power maximale espérable par la formation du joueur (déjà obtenu et à venir) | [optional] 
**reward_money** | **int** | Récompenses en dollard débloquées par la formation du joueur | [optional] 
**reward_money_max** | **int** | Récompenses en dollard maximale espérable par la formation du joueur (déjà obtenu et à venir) | [optional] 
**step** | **int** | Étape de formation actuelle du joueur | [optional] 

## Example

```python
from yoxo_client.models.new_member_entry import NewMemberEntry

# TODO update the JSON string below
json = "{}"
# create an instance of NewMemberEntry from a JSON string
new_member_entry_instance = NewMemberEntry.from_json(json)
# print the JSON string representation of the object
print(NewMemberEntry.to_json())

# convert the object into a dict
new_member_entry_dict = new_member_entry_instance.to_dict()
# create an instance of NewMemberEntry from a dict
new_member_entry_from_dict = NewMemberEntry.from_dict(new_member_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# PlayerListEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Le pseudonyme du joueur | [optional] 
**country** | **str** | Le pays du joueur, écrit en toutes lettres. Si le joueur est sans pays, la chaine retourné sera vide | [optional] 
**power** | **int** | Le power actuel du joueur | [optional] 
**power_max** | **int** | Le power maximum atteignable par le joueur | [optional] 
**playtime** | **int** | Le temps de jeu total du joueur sur le serveur (en secondes) | [optional] 
**last_login** | **int** | Le timestamp de la dernière connexion du joueur. Le timestamp est ici exprimé en secondes et correspond au nombre de secondes écoulées depuis le 1er janvier 1970, minuit UTC | [optional] 

## Example

```python
from yoxo_client.models.player_list_entry import PlayerListEntry

# TODO update the JSON string below
json = "{}"
# create an instance of PlayerListEntry from a JSON string
player_list_entry_instance = PlayerListEntry.from_json(json)
# print the JSON string representation of the object
print(PlayerListEntry.to_json())

# convert the object into a dict
player_list_entry_dict = player_list_entry_instance.to_dict()
# create an instance of PlayerListEntry from a dict
player_list_entry_from_dict = PlayerListEntry.from_dict(player_list_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



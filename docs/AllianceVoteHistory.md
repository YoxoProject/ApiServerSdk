# AllianceVoteHistory

Historique d'un vote

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Le type de vote | [optional] 
**initiator** | **str** | Le joueur ayant déclenché le vote | [optional] 
**initiator_country** | **str** | Le pays du joueur qui a initié le vote | [optional] 
**timestamp** | **int** | Le timestamp de création du vote | [optional] 
**message** | **str** | Le message du vote tel qu&#39;indiqué en jeu | [optional] 
**old_value** | **str** | Donnée optionnelle, dans certains vote, montre la valeur avant l&#39;acceptation du vote | [optional] 
**new_value** | **str** | Donnée optionnelle, montre la valeur validé ou refusé par le résultat du vote | [optional] 
**target_country** | **str** | Indique qui est concerné par le résultat du vote. Peut-être le nom d&#39;un pays ou alors le nom de l&#39;alliance | [optional] 
**yes_votes** | **int** | Le nombre de vote oui | [optional] 
**no_votes** | **int** | Le nombre de vote non | [optional] 

## Example

```python
from yoxo_api_client.models.alliance_vote_history import AllianceVoteHistory

# TODO update the JSON string below
json = "{}"
# create an instance of AllianceVoteHistory from a JSON string
alliance_vote_history_instance = AllianceVoteHistory.from_json(json)
# print the JSON string representation of the object
print(AllianceVoteHistory.to_json())

# convert the object into a dict
alliance_vote_history_dict = alliance_vote_history_instance.to_dict()
# create an instance of AllianceVoteHistory from a dict
alliance_vote_history_from_dict = AllianceVoteHistory.from_dict(alliance_vote_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



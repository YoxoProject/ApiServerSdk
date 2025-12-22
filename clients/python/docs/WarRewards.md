# WarRewards

Récompenses accordées au pays vainqueur de la guerre

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dollars** | **int** | Montant en dollars gagné | [optional] 
**power** | **int** | Points de power gagnés | [optional] 
**claims** | **int** | Nombre de claims (territoires) gagnés | [optional] 
**peace** | **int** | Nombre de jours de trêve forcée après la guerre pendant lesquels les pays ne peuvent plus s&#39;attaquer | [optional] 

## Example

```python
from yoxo_client.models.war_rewards import WarRewards

# TODO update the JSON string below
json = "{}"
# create an instance of WarRewards from a JSON string
war_rewards_instance = WarRewards.from_json(json)
# print the JSON string representation of the object
print(WarRewards.to_json())

# convert the object into a dict
war_rewards_dict = war_rewards_instance.to_dict()
# create an instance of WarRewards from a dict
war_rewards_from_dict = WarRewards.from_dict(war_rewards_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



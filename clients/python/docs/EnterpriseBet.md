# EnterpriseBet

Entreprise de paris

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bets** | [**List[EnterpriseBetItem]**](EnterpriseBetItem.md) | Liste des paris actifs | [optional] 
**bets_reward_redistributed** | **int** | L&#39;argent redistribuées suite aux paris | [optional] 
**bet_total** | **int** | Nombre total de paris réalisés | [optional] 
**bet_active** | **int** | Nombre de paris actuellement actifs | [optional] 

## Example

```python
from yoxo_client.models.enterprise_bet import EnterpriseBet

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseBet from a JSON string
enterprise_bet_instance = EnterpriseBet.from_json(json)
# print the JSON string representation of the object
print(EnterpriseBet.to_json())

# convert the object into a dict
enterprise_bet_dict = enterprise_bet_instance.to_dict()
# create an instance of EnterpriseBet from a dict
enterprise_bet_from_dict = EnterpriseBet.from_dict(enterprise_bet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



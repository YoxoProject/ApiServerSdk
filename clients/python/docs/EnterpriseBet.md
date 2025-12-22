# EnterpriseBet

Entreprise de paris

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type d&#39;entreprise | [optional] 
**name** | **str** | Nom de l&#39;entreprise | [optional] 
**age** | **int** | Âge de l&#39;entreprise en jours | [optional] 
**description** | **str** | Description de l&#39;entreprise | [optional] 
**services** | **str** | Services proposés | [optional] 
**owner** | **str** | Propriétaire de l&#39;entreprise | [optional] 
**flag** | **str** | Drapeau de l&#39;entreprise, sous la forme d&#39;image en Base64 | [optional] 
**cadres** | **List[str]** | Liste des cadres de l&#39;entreprise | [optional] 
**employees** | **List[str]** | Liste des employés de l&#39;entreprise | [optional] 
**contracts_done** | **int** | Nombre de contrats réalisés | [optional] 
**disputes** | **int** | Nombre de litiges | [optional] 
**contracts_success** | **float** | Taux de réussite des contrats (pourcentage) | [optional] 
**turnover** | **int** | Chiffre d&#39;affaires total | [optional] 
**permissions** | [**List[EnterprisePermission]**](EnterprisePermission.md) | Permissions de l&#39;entreprise | [optional] 
**bank** | [**EnterpriseBank**](EnterpriseBank.md) |  | [optional] 
**bets** | [**List[EnterpriseBetItem]**](EnterpriseBetItem.md) | Liste des paris actifs | [optional] 
**bets_reward_redistributed** | **int** | L&#39;argent redistribuées suite aux paris | [optional] 
**bet_total** | **int** | Nombre total de paris réalisés | [optional] 
**bet_active** | **int** | Nombre de paris actuellement actifs | [optional] 

## Example

```python
from yoxo-api_client.models.enterprise_bet import EnterpriseBet

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



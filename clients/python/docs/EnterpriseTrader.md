# EnterpriseTrader

Entreprise de trading

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
**history** | **Dict[str, float]** | Historique des rendements journaliers par date | [optional] 
**total_generated** | **int** | Argent total généré | [optional] 
**sum_investment** | **float** | Somme totale investie par l&#39;ensemble des investisseurs | [optional] 
**total_investors** | **int** | Nombre total d&#39;investisseurs | [optional] 

## Example

```python
from yoxo_client.models.enterprise_trader import EnterpriseTrader

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTrader from a JSON string
enterprise_trader_instance = EnterpriseTrader.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTrader.to_json())

# convert the object into a dict
enterprise_trader_dict = enterprise_trader_instance.to_dict()
# create an instance of EnterpriseTrader from a dict
enterprise_trader_from_dict = EnterpriseTrader.from_dict(enterprise_trader_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



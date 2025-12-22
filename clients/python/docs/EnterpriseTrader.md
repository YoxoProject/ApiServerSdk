# EnterpriseTrader

Entreprise de trading

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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



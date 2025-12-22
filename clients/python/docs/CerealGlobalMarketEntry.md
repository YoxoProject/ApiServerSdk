# CerealGlobalMarketEntry

Données du marché global des céréales.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prices_texture** | **str** | Le graphique de l&#39;évolution des prix des céréales au cours des 7 derniers jours au format base64. | [optional] 
**sales_texture** | **str** | Le graphique des ventes des différents céréales au cours des 7 derniers jours au format base64. | [optional] 
**stocks_texture** | **str** | Le graphique de l&#39;évolution des stocks des différents céréales au cours des 7 derniers jours au format base64. | [optional] 
**prices_history** | **Dict[str, Dict[str, float]]** | L&#39;historique des prix des différentes céréales sur le marché global au cours des 7 derniers jours. | [optional] 
**sales_history** | **Dict[str, Dict[str, float]]** | L&#39;historique des ventes des différentes céréales sur le marché global au cours des 7 derniers jours. | [optional] 
**stocks_history** | **Dict[str, Dict[str, float]]** | L&#39;historique des stocks des différentes céréales sur le marché global au cours des 7 derniers jours. | [optional] 
**cereals_price** | **Dict[str, int]** | Les prix actuels des différentes céréales disponibles sur le marché global. | [optional] 

## Example

```python
from yoxo_client.models.cereal_global_market_entry import CerealGlobalMarketEntry

# TODO update the JSON string below
json = "{}"
# create an instance of CerealGlobalMarketEntry from a JSON string
cereal_global_market_entry_instance = CerealGlobalMarketEntry.from_json(json)
# print the JSON string representation of the object
print(CerealGlobalMarketEntry.to_json())

# convert the object into a dict
cereal_global_market_entry_dict = cereal_global_market_entry_instance.to_dict()
# create an instance of CerealGlobalMarketEntry from a dict
cereal_global_market_entry_from_dict = CerealGlobalMarketEntry.from_dict(cereal_global_market_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



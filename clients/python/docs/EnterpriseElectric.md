# EnterpriseElectric

Entreprise électrique

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **float** | Électricité totale distribué (MJ) | [optional] 
**available** | **float** | Électricité disponible (MJ) | [optional] 
**allow_country** | **bool** | Autoriser la vente au pays | [optional] 
**allow_ally** | **bool** | Autoriser la vente aux alliés | [optional] 
**allow_all** | **bool** | Autoriser la vente à tous | [optional] 
**associated_country** | **str** | Pays associé (semble être le pays du chef de l&#39;entreprise) | [optional] 
**price** | **float** | Prix actuel de l&#39;électricité ($/GJ) | [optional] 
**price_average** | **float** | Prix moyen, à l&#39;échelle du serveur ($/GJ) | [optional] 
**countries_sell** | **Dict[str, float]** | Ventes par pays | [optional] 
**history_generated** | **Dict[str, float]** | Historique de l&#39;électricité vendue | [optional] 
**history_collected** | **Dict[str, float]** | Historique de l&#39;électricité générée/collectée par les collecteurs | [optional] 

## Example

```python
from yoxo_client.models.enterprise_electric import EnterpriseElectric

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseElectric from a JSON string
enterprise_electric_instance = EnterpriseElectric.from_json(json)
# print the JSON string representation of the object
print(EnterpriseElectric.to_json())

# convert the object into a dict
enterprise_electric_dict = enterprise_electric_instance.to_dict()
# create an instance of EnterpriseElectric from a dict
enterprise_electric_from_dict = EnterpriseElectric.from_dict(enterprise_electric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



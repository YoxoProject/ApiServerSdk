# EnterprisePetrol

Entreprise pétrolière

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**history_generated** | **Dict[str, float]** | Historique du pétrole vendue | [optional] 
**history_collected** | **Dict[str, float]** | Historique du pétrole collectée | [optional] 
**total** | **int** | Total du pétrole distribué (L) | [optional] 
**available** | **int** | Pétrole disponible (L) | [optional] 
**allow_country** | **bool** | Autoriser la vente au pays | [optional] 
**allow_ally** | **bool** | Autoriser la vente aux alliés | [optional] 
**allow_all** | **bool** | Autoriser la vente à tous | [optional] 
**associated_country** | **str** | Pays associé (semble être le pays du chef de l&#39;entreprise) | [optional] 
**price** | **int** | Prix actuel du pétrole ($/100L) | [optional] 
**price_average** | **int** | Prix moyen, à l&#39;échelle du serveur ($/100L) | [optional] 

## Example

```python
from yoxo_client.models.enterprise_petrol import EnterprisePetrol

# TODO update the JSON string below
json = "{}"
# create an instance of EnterprisePetrol from a JSON string
enterprise_petrol_instance = EnterprisePetrol.from_json(json)
# print the JSON string representation of the object
print(EnterprisePetrol.to_json())

# convert the object into a dict
enterprise_petrol_dict = enterprise_petrol_instance.to_dict()
# create an instance of EnterprisePetrol from a dict
enterprise_petrol_from_dict = EnterprisePetrol.from_dict(enterprise_petrol_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



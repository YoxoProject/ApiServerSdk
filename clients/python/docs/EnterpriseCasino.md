# EnterpriseCasino

Entreprise casino

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**history** | **Dict[str, float]** | Historique des bénéfices du casino par date | [optional] 
**benef_average** | **float** | Bénéfice moyen (par jours) | [optional] 
**total_play** | **float** | Sommes totale jouée | [optional] 
**win_percent** | **float** | Taux de redistribution des gains (en pourcentage) | [optional] 
**total_win** | **float** | Somme totale des gains distribuées aux joueurs | [optional] 

## Example

```python
from yoxo_client.models.enterprise_casino import EnterpriseCasino

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCasino from a JSON string
enterprise_casino_instance = EnterpriseCasino.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCasino.to_json())

# convert the object into a dict
enterprise_casino_dict = enterprise_casino_instance.to_dict()
# create an instance of EnterpriseCasino from a dict
enterprise_casino_from_dict = EnterpriseCasino.from_dict(enterprise_casino_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



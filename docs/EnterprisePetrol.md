# EnterprisePetrol

Entreprise pétrolière

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
from yoxo_api_client.models.enterprise_petrol import EnterprisePetrol

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



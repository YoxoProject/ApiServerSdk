# EnterpriseFarm

Entreprise agricole

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
**histories** | **Dict[str, Dict[str, float]]** | Historiques des ventes par céréale et date | [optional] 
**total_collected** | **int** | Poids total de céréale vendu depuis la création de l&#39;entreprise (en kg) | [optional] 
**collected_cereal** | **Dict[str, int]** | Poids total de céréales collectées (pour chaque céréale) | [optional] 

## Example

```python
from yoxo_client.models.enterprise_farm import EnterpriseFarm

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseFarm from a JSON string
enterprise_farm_instance = EnterpriseFarm.from_json(json)
# print the JSON string representation of the object
print(EnterpriseFarm.to_json())

# convert the object into a dict
enterprise_farm_dict = enterprise_farm_instance.to_dict()
# create an instance of EnterpriseFarm from a dict
enterprise_farm_from_dict = EnterpriseFarm.from_dict(enterprise_farm_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



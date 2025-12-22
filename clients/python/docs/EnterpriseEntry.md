# EnterpriseEntry

Données d'une entreprise (différentes versions selon le type)

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
**history** | **Dict[str, float]** | Historique des rendements journaliers par date | [optional] 
**benef_average** | **float** | Bénéfice moyen (par jours) | [optional] 
**total_play** | **float** | Sommes totale jouée | [optional] 
**win_percent** | **float** | Taux de redistribution des gains (en pourcentage) | [optional] 
**total_win** | **float** | Somme totale des gains distribuées aux joueurs | [optional] 
**total** | **int** | Total du pétrole distribué (L) | [optional] 
**available** | **int** | Pétrole disponible (L) | [optional] 
**allow_country** | **bool** | Autoriser la vente au pays | [optional] 
**allow_ally** | **bool** | Autoriser la vente aux alliés | [optional] 
**allow_all** | **bool** | Autoriser la vente à tous | [optional] 
**associated_country** | **str** | Pays associé (semble être le pays du chef de l&#39;entreprise) | [optional] 
**price** | **int** | Prix actuel du pétrole ($/100L) | [optional] 
**price_average** | **int** | Prix moyen, à l&#39;échelle du serveur ($/100L) | [optional] 
**countries_sell** | **Dict[str, float]** | Ventes par pays | [optional] 
**history_generated** | **Dict[str, float]** | Historique du pétrole vendue | [optional] 
**history_collected** | **Dict[str, float]** | Historique du pétrole collectée | [optional] 
**histories** | **Dict[str, Dict[str, float]]** | Historiques des ventes par céréale et date | [optional] 
**total_collected** | **int** | Poids total de céréale vendu depuis la création de l&#39;entreprise (en kg) | [optional] 
**collected_cereal** | **Dict[str, int]** | Poids total de céréales collectées (pour chaque céréale) | [optional] 
**parcelles** | [**List[Parcelle]**](Parcelle.md) | Liste des parcelles de l&#39;entreprise | [optional] 
**total_generated** | **int** | Argent total généré | [optional] 
**sum_investment** | **float** | Somme totale investie par l&#39;ensemble des investisseurs | [optional] 
**total_investors** | **int** | Nombre total d&#39;investisseurs | [optional] 

## Example

```python
from yoxo_client.models.enterprise_entry import EnterpriseEntry

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseEntry from a JSON string
enterprise_entry_instance = EnterpriseEntry.from_json(json)
# print the JSON string representation of the object
print(EnterpriseEntry.to_json())

# convert the object into a dict
enterprise_entry_dict = enterprise_entry_instance.to_dict()
# create an instance of EnterpriseEntry from a dict
enterprise_entry_from_dict = EnterpriseEntry.from_dict(enterprise_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



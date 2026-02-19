# AllianceEntry

Données d'une alliance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Le nom de l&#39;alliance | [optional] 
**description** | **str** | La description de l&#39;alliance | [optional] 
**created_at** | **int** | Le timestamp en ms à la date dont l&#39;alliance a été créer | [optional] 
**color** | **str** | La couleur de l&#39;alliance au format héxadécimale. La couleur représente l&#39;alliance et est unique à l&#39;échelle du serveur | [optional] 
**tags** | **List[str]** | La liste des tags de l&#39;alliance | [optional] 
**discord** | **str** | Le lien menant au discord de l&#39;alliance | [optional] 
**youtube** | **str** | Le lien menant à la chaine youtube de l&#39;alliance | [optional] 
**rules** | **str** | Les règles de l&#39;alliance | [optional] 
**banner_url** | **str** | L&#39;url de la banière affiché sur la page de l&#39;alliance | [optional] 
**blazon** | **str** | Le blazon représentant l&#39;alliance. Image en base64, de dimension 78x78 | [optional] 
**ranking** | **int** | Le classement de l&#39;alliance sur le mois en cours. Calculé en fonction du nombre de points de prestiges | [optional] 
**prestige_points** | **int** | Les points de prestige de l&#39;alliance. La documentation du prestige est consultable à l&#39;adresse https://wiki.nationsglory.fr/fr/article/les-alliances-java-1ju6vju/#1-prestige-classement | [optional] 
**station_module_count** | **int** | Le nombre de module dans la station spatiale de l&#39;alliance | [optional] 
**country_count** | **int** | Le nombre de pays dans l&#39;alliance | [optional] 
**leaders** | **List[str]** | La liste des pays leader de l&#39;alliance | [optional] 
**members** | **List[str]** | La liste des pays membres de l&#39;alliance | [optional] 
**protectorats** | **List[str]** | La liste des pays sous le statut de protectorat dans l&#39;alliance | [optional] 
**claims** | **int** | Le nombre de claims cumulé des pays de l&#39;alliance | [optional] 
**count_members** | **int** | Le nombre de membres cumulés des pays de l&#39;alliance | [optional] 
**taxes** | [**AllianceTaxes**](AllianceTaxes.md) |  | [optional] 
**modules** | [**List[AllianceModule]**](AllianceModule.md) | Les modules construits dans la station spatiale | [optional] 
**bank** | [**AllianceBank**](AllianceBank.md) |  | [optional] 
**votes_history** | [**List[AllianceVoteHistory]**](AllianceVoteHistory.md) | L&#39;historique des votes de l&#39;alliance. Nécessite d&#39;être membre de l&#39;alliance pour y avoir accès | [optional] 
**relations** | [**List[AllianceRelation]**](AllianceRelation.md) | Les relations avec les autres alliances | [optional] 
**prime_boost** | [**AlliancePrimeBoost**](AlliancePrimeBoost.md) |  | [optional] 
**open** | **bool** |  | [optional] 

## Example

```python
from yoxo_api_client.models.alliance_entry import AllianceEntry

# TODO update the JSON string below
json = "{}"
# create an instance of AllianceEntry from a JSON string
alliance_entry_instance = AllianceEntry.from_json(json)
# print the JSON string representation of the object
print(AllianceEntry.to_json())

# convert the object into a dict
alliance_entry_dict = alliance_entry_instance.to_dict()
# create an instance of AllianceEntry from a dict
alliance_entry_from_dict = AllianceEntry.from_dict(alliance_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



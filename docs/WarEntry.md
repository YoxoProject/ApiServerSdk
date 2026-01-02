# WarEntry

Détails d'une guerre

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**war_id** | **str** | Identifiant unique de la guerre permettant de lier avec les données des pays | [optional] 
**war_declared_at** | **int** | Timestamp (ms) de la déclaration de guerre | [optional] 
**war_start_at** | **int** | Timestamp (ms) du début effectif de la guerre | [optional] 
**wars_initiated_by** | **str** | Joueur ayant initié la guerre via la commande /f enemy | [optional] 
**reason** | **str** | Raison de la déclaration de guerre | [optional] 
**target** | **str** | Le pays ou joueur ayant donné la raison de guerre (peut être nul selon la raison) | [optional] 
**target_grade** | **str** | Grade du joueur ayant donné la raison de guerre (au moment de la raison de la guerre) | [optional] 
**status** | **str** | Statut actuel de la guerre (ex: IN_PROGRESS, FINISHED) | [optional] 
**winner** | **str** | Le nom du pays vainqueur de la guerre (si terminée) | [optional] 
**days_before_missile_point_reset** | **int** | Nombre de jours restants avant la réinitialisation des points missile | [optional] 
**attacker** | [**WarParticipant**](WarParticipant.md) |  | [optional] 
**defender** | [**WarParticipant**](WarParticipant.md) |  | [optional] 
**conditions** | [**WarCondition**](WarCondition.md) |  | [optional] 
**condition_type** | **str** | Logique d&#39;application des conditions (AND: toutes requises, OR: une seule requise) | [optional] 
**rewards** | [**WarRewards**](WarRewards.md) |  | [optional] 
**assaults** | [**List[WarAssault]**](WarAssault.md) | Liste des assauts ayant eu lieu durant la guerre | [optional] 
**missiles** | [**List[WarMissile]**](WarMissile.md) | Liste des missiles lancés durant la guerre | [optional] 

## Example

```python
from yoxo_api_client.models.war_entry import WarEntry

# TODO update the JSON string below
json = "{}"
# create an instance of WarEntry from a JSON string
war_entry_instance = WarEntry.from_json(json)
# print the JSON string representation of the object
print(WarEntry.to_json())

# convert the object into a dict
war_entry_dict = war_entry_instance.to_dict()
# create an instance of WarEntry from a dict
war_entry_from_dict = WarEntry.from_dict(war_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



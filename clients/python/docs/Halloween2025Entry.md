# Halloween2025Entry

Statistiques individuelles d'un joueur pour l'événement Halloween 2025

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** | Le nom d&#39;utilisateur du joueur | [optional] 
**demons_killed** | **int** | Nombre de démons tués dans le Nether | [optional] 
**tickets** | **int** | Nombre de tickets obtenus pour la tombola finale. 1 ticket est obtenu toutes les 200 âmes collectées, avec des tickets bonus pour le top 10 des chasseurs d&#39;âmes | [optional] 
**lost_souls_count** | **int** | Nombre d&#39;âmes égarées retrouvées dans les capitales (/spawn) des différents serveurs | [optional] 
**extracted_souls** | **int** | Nombre de points gagnés par le joueur en battant les démons du Nether (Démon de niveau 1: 1 âme, de niveau 2: 4 âmes, de niveau 3: 40 âmes) | [optional] 
**lost_souls** | **int** | Nombre de points gagnés par le joueur en retrouvant les âmes égarées dans les capitales | [optional] 

## Example

```python
from yoxo_client.models.halloween2025_entry import Halloween2025Entry

# TODO update the JSON string below
json = "{}"
# create an instance of Halloween2025Entry from a JSON string
halloween2025_entry_instance = Halloween2025Entry.from_json(json)
# print the JSON string representation of the object
print(Halloween2025Entry.to_json())

# convert the object into a dict
halloween2025_entry_dict = halloween2025_entry_instance.to_dict()
# create an instance of Halloween2025Entry from a dict
halloween2025_entry_from_dict = Halloween2025Entry.from_dict(halloween2025_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



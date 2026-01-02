# NoelMegagift2025Entry

Données d'un tirage du méga cadeau de Noël 2025

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** | Le pseudo du joueur ayant réalisé le tirage | [optional] 
**server** | **str** | Le serveur sur lequel le méga cadeau a été ouvert | [optional] 
**timestamp** | **int** | Timestamp du moment où le tirage a été effectué (en ms) | [optional] 
**loots** | **List[str]** | Liste des items obtenus par le joueur lors du tirage | [optional] 

## Example

```python
from yoxo_api_client.models.noel_megagift2025_entry import NoelMegagift2025Entry

# TODO update the JSON string below
json = "{}"
# create an instance of NoelMegagift2025Entry from a JSON string
noel_megagift2025_entry_instance = NoelMegagift2025Entry.from_json(json)
# print the JSON string representation of the object
print(NoelMegagift2025Entry.to_json())

# convert the object into a dict
noel_megagift2025_entry_dict = noel_megagift2025_entry_instance.to_dict()
# create an instance of NoelMegagift2025Entry from a dict
noel_megagift2025_entry_from_dict = NoelMegagift2025Entry.from_dict(noel_megagift2025_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



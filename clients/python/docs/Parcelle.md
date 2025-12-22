# Parcelle

Parcelle immobilière

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Nom de la parcelle | [optional] 
**client_name** | **str** | Nom du locataire | [optional] 
**is_staff** | **bool** |  | [optional] 
**price** | **int** | Prix de location (par jour) | [optional] 
**sign_coords** | [**Coords**](Coords.md) |  | [optional] 
**status** | **str** | Statut de location de la parcelle | [optional] 
**days_rent** | **int** | Nombre de jours de location restants | [optional] 

## Example

```python
from yoxo-api_client.models.parcelle import Parcelle

# TODO update the JSON string below
json = "{}"
# create an instance of Parcelle from a JSON string
parcelle_instance = Parcelle.from_json(json)
# print the JSON string representation of the object
print(Parcelle.to_json())

# convert the object into a dict
parcelle_dict = parcelle_instance.to_dict()
# create an instance of Parcelle from a dict
parcelle_from_dict = Parcelle.from_dict(parcelle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



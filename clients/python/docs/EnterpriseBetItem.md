# EnterpriseBetItem

Pari proposé par une entreprise

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deadline_time** | **int** | Timestamp de fin du pari | [optional] 
**min_bet** | **int** | Mise minimale (en dollar) | [optional] 
**number_of_players** | **int** | Nombre de joueurs ayant parié | [optional] 
**title** | **str** | Titre du pari | [optional] 
**option1** | **str** | Première option | [optional] 
**option2** | **str** | Deuxième option | [optional] 
**status** | **str** | Statut du pari | [optional] 

## Example

```python
from yoxo_client.models.enterprise_bet_item import EnterpriseBetItem

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseBetItem from a JSON string
enterprise_bet_item_instance = EnterpriseBetItem.from_json(json)
# print the JSON string representation of the object
print(EnterpriseBetItem.to_json())

# convert the object into a dict
enterprise_bet_item_dict = enterprise_bet_item_instance.to_dict()
# create an instance of EnterpriseBetItem from a dict
enterprise_bet_item_from_dict = EnterpriseBetItem.from_dict(enterprise_bet_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# WarAssault

Détails d'un assaut au sein de la guerre

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_at** | **int** | Timestamp (ms) du début de l&#39;assaut | [optional] 
**winner** | **str** | Nom du pays vainqueur de l&#39;assaut | [optional] 
**looser** | **str** | Nom du pays perdant de l&#39;assaut | [optional] 
**mmr_winner** | **int** | MMR gagné par le pays vainqueur suite à sa victoire sur l&#39;assaut | [optional] 
**mmr_looser** | **int** | MMR perdu par le pays perdant suite à sa défaite sur l&#39;assaut. Attention, pour signifier la perte, le nombre est négatif. | [optional] 
**winner_helpers** | **List[str]** | Liste des pays ayant aidé le vainqueur | [optional] 
**looser_helpers** | **List[str]** | Liste des pays ayant aidé le perdant | [optional] 

## Example

```python
from yoxo-api_client.models.war_assault import WarAssault

# TODO update the JSON string below
json = "{}"
# create an instance of WarAssault from a JSON string
war_assault_instance = WarAssault.from_json(json)
# print the JSON string representation of the object
print(WarAssault.to_json())

# convert the object into a dict
war_assault_dict = war_assault_instance.to_dict()
# create an instance of WarAssault from a dict
war_assault_from_dict = WarAssault.from_dict(war_assault_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



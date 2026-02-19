# AlliancePrimeBoost

Prime Boost de l'alliance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_boost_active** | **bool** | Si l&#39;alliance possède le boost premium (+20% de joueur premium) | [optional] 
**boost_percent** | **float** | Le pourcentage de joueur premium dans l&#39;alliance | [optional] 
**boost_points** | **int** | Le nombre de joueurs premium (en réalité, les joueurs premium_plus compte comme 2 joueurs) | [optional] 
**prime_boosters** | [**List[AlliancePrimeBooster]**](AlliancePrimeBooster.md) | La liste de TOUS les membres de l&#39;alliance (premium ou non) | [optional] 

## Example

```python
from yoxo_api_client.models.alliance_prime_boost import AlliancePrimeBoost

# TODO update the JSON string below
json = "{}"
# create an instance of AlliancePrimeBoost from a JSON string
alliance_prime_boost_instance = AlliancePrimeBoost.from_json(json)
# print the JSON string representation of the object
print(AlliancePrimeBoost.to_json())

# convert the object into a dict
alliance_prime_boost_dict = alliance_prime_boost_instance.to_dict()
# create an instance of AlliancePrimeBoost from a dict
alliance_prime_boost_from_dict = AlliancePrimeBoost.from_dict(alliance_prime_boost_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



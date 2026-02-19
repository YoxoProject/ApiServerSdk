# AlliancePrimeBooster

Membre de l'alliance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** | Le pseudonyme du joueur | [optional] 
**boost_type** | **str** | Le type de boost | [optional] 
**boost_value** | **int** | Le nombre de joueur pour lequel compte ce joueur au total de boostPoints de AlliancePrimeBoost. | [optional] 

## Example

```python
from yoxo_api_client.models.alliance_prime_booster import AlliancePrimeBooster

# TODO update the JSON string below
json = "{}"
# create an instance of AlliancePrimeBooster from a JSON string
alliance_prime_booster_instance = AlliancePrimeBooster.from_json(json)
# print the JSON string representation of the object
print(AlliancePrimeBooster.to_json())

# convert the object into a dict
alliance_prime_booster_dict = alliance_prime_booster_instance.to_dict()
# create an instance of AlliancePrimeBooster from a dict
alliance_prime_booster_from_dict = AlliancePrimeBooster.from_dict(alliance_prime_booster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



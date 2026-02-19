# AllianceTaxes

Taxes de l'alliance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hdv_tax** | **float** | La taxe en pourcentage appliqué à chaque vente réalisé par un membre de l&#39;alliance à l&#39;hotel des ventes | [optional] 
**weekly_salary** | **float** | Le salaire hebdomadaire données automatiquement à tous les pays membres chaque semaine. L&#39;argent est prélevé dans le compte bloqué | [optional] 
**station_ticket** | **float** | Le cout de téléportation à la station spatiale pour les personnes extérieur à l&#39;alliance | [optional] 
**notation_tax** | **float** | La taxe en pourcentage prélevé chaque semaine sur les notation des pays membres | [optional] 
**join_tax** | **float** | Le prix demandé aux pays souhaitant rejoindre l&#39;alliance | [optional] 
**moon_teleport_cost** | **float** | Prix de la téléportation vers la lune. Accessible uniquement si l&#39;alliance à construit le statioport lunaire | [optional] 
**fuel_cost** | **float** | Tarif d&#39;achat de 100L de pétrole à l&#39;alliance, par un pays membre | [optional] 

## Example

```python
from yoxo_api_client.models.alliance_taxes import AllianceTaxes

# TODO update the JSON string below
json = "{}"
# create an instance of AllianceTaxes from a JSON string
alliance_taxes_instance = AllianceTaxes.from_json(json)
# print the JSON string representation of the object
print(AllianceTaxes.to_json())

# convert the object into a dict
alliance_taxes_dict = alliance_taxes_instance.to_dict()
# create an instance of AllianceTaxes from a dict
alliance_taxes_from_dict = AllianceTaxes.from_dict(alliance_taxes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



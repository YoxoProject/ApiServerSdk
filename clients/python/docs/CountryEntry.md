# CountryEntry

Données d'un pays

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Nom du pays | [optional] 
**description** | **str** | Description du pays | [optional] 
**motd** | **str** | Message du jour (MOTD) | [optional] 
**entry_msg** | **str** | Message d&#39;entrée sur le territoire | [optional] 
**age** | **int** | Âge du pays en jours | [optional] 
**count_members** | **int** | Nombre de membres | [optional] 
**count_new_members** | **int** | Nombre de nouvelles recrues | [optional] 
**fhome_coord** | [**CountryCoordinates**](CountryCoordinates.md) |  | [optional] 
**level** | **int** | Niveau du pays | [optional] 
**progress** | **int** | Progression vers le niveau suivant (en pourcentage) | [optional] 
**notations_position** | **int** | Position dans le classement des notations | [optional] 
**tags** | **List[str]** | Tags du pays | [optional] 
**discord** | **str** | Lien discord | [optional] 
**alliance_name** | **str** | Nom de l&#39;alliance | [optional] 
**mmr** | **int** | Score MMR | [optional] 
**claims** | **int** | Nombre de chunks claim | [optional] 
**power** | **int** | Power actuel | [optional] 
**max_power** | **int** | Power maximum | [optional] 
**powerboost_fixed** | **int** | Power boost fixe | [optional] 
**powerboost_warzone** | **int** | Power boost warzone | [optional] 
**powerboost_unesco** | **int** | Power boost UNESCO | [optional] 
**powerboost_new_member** | **int** | Power boost obtenu via les nouveaux membres | [optional] 
**powerboost_malus_assault** | **int** | Malus de power lié aux assauts | [optional] 
**flag** | **str** | Drapeau (en base64) | [optional] 
**leader** | **str** | Chef du pays | [optional] 
**officers** | **List[str]** | Officiers | [optional] 
**members** | **List[str]** | Membres | [optional] 
**recruits** | **List[str]** | Recrues | [optional] 
**new_members** | [**List[NewMemberEntry]**](NewMemberEntry.md) | Informations détaillé sur les nouvelles recrues | [optional] 
**researches_level** | [**ResearchesEntry**](ResearchesEntry.md) |  | [optional] 
**wars** | **List[str]** | Guerres en cours | [optional] 
**bank** | [**CountryBankEntry**](CountryBankEntry.md) |  | [optional] 
**actions** | [**CountryActionsEntry**](CountryActionsEntry.md) |  | [optional] 
**settings** | [**CountrySettingsEntry**](CountrySettingsEntry.md) |  | [optional] 
**referent** | **bool** |  | [optional] 
**restrict_assault** | **bool** |  | [optional] 
**restrict_missile** | **bool** |  | [optional] 
**top_warzone** | **bool** |  | [optional] 
**empire** | **bool** |  | [optional] 

## Example

```python
from yoxo_api_client.models.country_entry import CountryEntry

# TODO update the JSON string below
json = "{}"
# create an instance of CountryEntry from a JSON string
country_entry_instance = CountryEntry.from_json(json)
# print the JSON string representation of the object
print(CountryEntry.to_json())

# convert the object into a dict
country_entry_dict = country_entry_instance.to_dict()
# create an instance of CountryEntry from a dict
country_entry_from_dict = CountryEntry.from_dict(country_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



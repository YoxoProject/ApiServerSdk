# CountryActionsEntry

Actions du pays

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_dividendes** | **float** | Total des dividendes perçus | [optional] 
**available_actions** | **int** | Nombre d&#39;actions disponibles à l&#39;achat | [optional] 
**action_price** | **int** | Prix d&#39;une action | [optional] 
**dividendes_classement** | [**List[DividendeClassementEntry]**](DividendeClassementEntry.md) | Total des dividendes perçus détaillés par pays | [optional] 
**dividendes_history** | [**List[DividendeHistoryEntry]**](DividendeHistoryEntry.md) | Historique des dividendes perçus | [optional] 
**actions** | [**List[ActionEntry]**](ActionEntry.md) | Les 8 actions du pays | [optional] 

## Example

```python
from yoxo-api_client.models.country_actions_entry import CountryActionsEntry

# TODO update the JSON string below
json = "{}"
# create an instance of CountryActionsEntry from a JSON string
country_actions_entry_instance = CountryActionsEntry.from_json(json)
# print the JSON string representation of the object
print(CountryActionsEntry.to_json())

# convert the object into a dict
country_actions_entry_dict = country_actions_entry_instance.to_dict()
# create an instance of CountryActionsEntry from a dict
country_actions_entry_from_dict = CountryActionsEntry.from_dict(country_actions_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CountrySettingsEntry

Paramètres du pays

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invitation_needed** | **bool** | Invitation obligatoire pour rejoindre le pays | [optional] 
**recruitment_open** | **bool** | Pays ouvert aux recrutements | [optional] 
**do_kick_recruit_war_reason** | **bool** | Expulsion automatique des recrues lorsque qu&#39;elles donnent une raison de guerre | [optional] 
**do_kick_member_negative_power** | **bool** | Expulsion automatique des membres lorsque leur power devient négatif | [optional] 
**permissions** | [**List[PermissionEntry]**](PermissionEntry.md) | Permissions accordées dans le pays | [optional] 
**logs** | [**List[SettingLogEntry]**](SettingLogEntry.md) | Logs de pays | [optional] 

## Example

```python
from yoxo_client.models.country_settings_entry import CountrySettingsEntry

# TODO update the JSON string below
json = "{}"
# create an instance of CountrySettingsEntry from a JSON string
country_settings_entry_instance = CountrySettingsEntry.from_json(json)
# print the JSON string representation of the object
print(CountrySettingsEntry.to_json())

# convert the object into a dict
country_settings_entry_dict = country_settings_entry_instance.to_dict()
# create an instance of CountrySettingsEntry from a dict
country_settings_entry_from_dict = CountrySettingsEntry.from_dict(country_settings_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



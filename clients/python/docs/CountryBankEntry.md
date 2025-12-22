# CountryBankEntry

Banque du pays

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance** | **int** | Argent dans la banque de pays | [optional] 
**owners** | **List[str]** | Propriétaires de la banque | [optional] 
**members** | **List[str]** | Membres ayant accès à la banque | [optional] 
**logs** | [**List[BankLogEntry]**](BankLogEntry.md) | Logs bancaires | [optional] 

## Example

```python
from yoxo-api_client.models.country_bank_entry import CountryBankEntry

# TODO update the JSON string below
json = "{}"
# create an instance of CountryBankEntry from a JSON string
country_bank_entry_instance = CountryBankEntry.from_json(json)
# print the JSON string representation of the object
print(CountryBankEntry.to_json())

# convert the object into a dict
country_bank_entry_dict = country_bank_entry_instance.to_dict()
# create an instance of CountryBankEntry from a dict
country_bank_entry_from_dict = CountryBankEntry.from_dict(country_bank_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# BankLogEntry

Log bancaire

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Montant de la transaction | [optional] 
**timestamp** | **int** | Timestamp de la transaction | [optional] 
**pseudo** | **str** | Joueur ayant effectué la transaction | [optional] 

## Example

```python
from yoxo_api_client.models.bank_log_entry import BankLogEntry

# TODO update the JSON string below
json = "{}"
# create an instance of BankLogEntry from a JSON string
bank_log_entry_instance = BankLogEntry.from_json(json)
# print the JSON string representation of the object
print(BankLogEntry.to_json())

# convert the object into a dict
bank_log_entry_dict = bank_log_entry_instance.to_dict()
# create an instance of BankLogEntry from a dict
bank_log_entry_from_dict = BankLogEntry.from_dict(bank_log_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



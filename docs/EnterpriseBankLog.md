# EnterpriseBankLog

Transaction dans les logs de l'entreprise

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Type de transaction | [optional] 
**amount** | **float** | Montant de la transaction (positif si ajout d&#39;argent, négatif si retrait)  | [optional] 
**timestamp** | **int** | Timestamp de la transaction | [optional] 

## Example

```python
from yoxo_api_client.models.enterprise_bank_log import EnterpriseBankLog

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseBankLog from a JSON string
enterprise_bank_log_instance = EnterpriseBankLog.from_json(json)
# print the JSON string representation of the object
print(EnterpriseBankLog.to_json())

# convert the object into a dict
enterprise_bank_log_dict = enterprise_bank_log_instance.to_dict()
# create an instance of EnterpriseBankLog from a dict
enterprise_bank_log_from_dict = EnterpriseBankLog.from_dict(enterprise_bank_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



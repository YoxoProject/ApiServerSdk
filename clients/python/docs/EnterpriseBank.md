# EnterpriseBank

Informations bancaires d'une entreprise

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank** | **float** | Solde bancaire actuel (positif ou nul) | [optional] 
**flux14_days** | **float** | Flux bancaire des 14 derniers jours | [optional] 
**in_progress_contracts** | **float** | Montant des contrats en cours (positif ou nul) | [optional] 
**salaries14_days** | **float** | Salaires versés sur 14 jours (négatif ou nul) | [optional] 
**taxes14_days** | **float** | Taxes payées sur 14 jours (négatif ou nul) | [optional] 
**logs** | [**List[EnterpriseBankLog]**](EnterpriseBankLog.md) | Historique des transactions | [optional] 

## Example

```python
from yoxo-api_client.models.enterprise_bank import EnterpriseBank

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseBank from a JSON string
enterprise_bank_instance = EnterpriseBank.from_json(json)
# print the JSON string representation of the object
print(EnterpriseBank.to_json())

# convert the object into a dict
enterprise_bank_dict = enterprise_bank_instance.to_dict()
# create an instance of EnterpriseBank from a dict
enterprise_bank_from_dict = EnterpriseBank.from_dict(enterprise_bank_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



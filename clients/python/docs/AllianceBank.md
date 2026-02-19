# AllianceBank

Banque de l'alliance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_account_balance** | **float** | L&#39;argent sur le compte courant de l&#39;alliance | [optional] 
**blocked_account_balance** | **float** | L&#39;argent sur le compte bloqué de l&#39;alliance | [optional] 

## Example

```python
from yoxo_api_client.models.alliance_bank import AllianceBank

# TODO update the JSON string below
json = "{}"
# create an instance of AllianceBank from a JSON string
alliance_bank_instance = AllianceBank.from_json(json)
# print the JSON string representation of the object
print(AllianceBank.to_json())

# convert the object into a dict
alliance_bank_dict = alliance_bank_instance.to_dict()
# create an instance of AllianceBank from a dict
alliance_bank_from_dict = AllianceBank.from_dict(alliance_bank_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



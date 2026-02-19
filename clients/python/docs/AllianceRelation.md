# AllianceRelation

Relation entre alliances

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Le nom de l&#39;alliance concerné par la relation | [optional] 
**relation** | **str** | Le type de relation (neutral/enemy) | [optional] 
**surcharge_value_from** | **float** | Le pourcentage de surcharge appliqué par l&#39;alliance de la relation sur l&#39;alliance dont l&#39;export est fait | [optional] 
**has_embargo_from** | **bool** | Si l&#39;alliance de la relation a appliqué un embargo sur l&#39;alliance dont l&#39;export est fait | [optional] 
**surcharge_value_to** | **float** | Le pourcentage de surcharge appliqué par l&#39;alliance dont l&#39;export est fait sur l&#39;alliance de la relation | [optional] 
**has_embargo_to** | **bool** | Si l&#39;alliance dont l&#39;export est fait a appliqué un embargo sur l&#39;alliance de la relation | [optional] 

## Example

```python
from yoxo_api_client.models.alliance_relation import AllianceRelation

# TODO update the JSON string below
json = "{}"
# create an instance of AllianceRelation from a JSON string
alliance_relation_instance = AllianceRelation.from_json(json)
# print the JSON string representation of the object
print(AllianceRelation.to_json())

# convert the object into a dict
alliance_relation_dict = alliance_relation_instance.to_dict()
# create an instance of AllianceRelation from a dict
alliance_relation_from_dict = AllianceRelation.from_dict(alliance_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



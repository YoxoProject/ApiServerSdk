# NotationEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | Le nom du pays | [optional] 
**server** | **str** | Le serveur sur lequel est le pays | [optional] 
**var_from** | **str** | La date du début de la semaine notée (yyyy-MM-dd) | [optional] 
**to** | **str** | La date de fin de la semaine notée (yyyy-MM-dd) | [optional] 
**activity** | **float** | Activité du pays (entre 0 et 5) | [optional] 
**gestion** | **float** | Gestion du pays (entre 0 et 10) | [optional] 
**skills** | **float** | Skills du pays (entre 0 et 5) | [optional] 
**economy** | **float** | Economie du pays (entre 0 et 11) | [optional] 
**military** | **float** | Militaire du pays (entre 0 et 11) | [optional] 
**antimatter** | **int** | Possession d&#39;un missile antimatière (0 ou 2) | [optional] 
**redmatter** | **int** | Possession d&#39;un missile redmatter (0 ou 3) | [optional] 
**endbringer** | **int** | Possession d&#39;un missile endbringer (0 ou 5) | [optional] 
**spatial** | **int** | Points lié au spatiale. 1 points par planète dont il y a plus de 10 chunks. Les planète étant lune, mars et edora (entre 0 et 3) | [optional] 
**unesco** | **int** | Points lié à la possession d&#39;un batiment classé unesco. 3 points si 1 batiment, 5 points si 2 ou plus (entre 0 et 5) | [optional] 
**note_architecturale** | **float** | Note totale en architecture (entre 0 et 42) | [optional] 
**architecture** | [**ArchitectureEntry**](ArchitectureEntry.md) |  | [optional] 
**total** | **float** | Le total de la note (entre 0 et 102) | [optional] 
**rang** | **int** | Le rang du pays sur le serveur | [optional] 
**rang_interserv** | **int** | Le rang du pays à l&#39;interserveur | [optional] 
**bourse** | **float** | La bourse versée au pays | [optional] 
**bourse_unesco** | **float** | La bourse obtenue grâce aux UNESCO | [optional] 

## Example

```python
from yoxo_api_client.models.notation_entry import NotationEntry

# TODO update the JSON string below
json = "{}"
# create an instance of NotationEntry from a JSON string
notation_entry_instance = NotationEntry.from_json(json)
# print the JSON string representation of the object
print(NotationEntry.to_json())

# convert the object into a dict
notation_entry_dict = notation_entry_instance.to_dict()
# create an instance of NotationEntry from a dict
notation_entry_from_dict = NotationEntry.from_dict(notation_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ArchitectureEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terraforming** | **int** | Terraforming (entre 0 et 2) | [optional] 
**coherence_style** | **int** | Cohérence du style (entre 0 et 2) | [optional] 
**activite_recente** | **int** | Activité récente (entre 0 et 4) | [optional] 
**blocs_catalogue** | **int** | Utilisation de blocs du catalogue (entre 0 et 2) | [optional] 
**trou_missiles** | **int** | Présence de trous de missiles (entre 0 et -4) | [optional] 
**beaute_generale** | **float** | Beauté générale du pays (entre 0 et 4) | [optional] 
**habitabilite_maison** | **int** | Habitabilité des maisons (entre 0 et 2) | [optional] 
**biome_coherent** | **int** | Cohérence avec le biome (entre 0 et 1) | [optional] 
**batiments_abandonnes** | **int** | Absence de bâtiments abandonnés (1 si aucun, 0 sinon) | [optional] 
**utilisation_schematica** | **int** | Utilisation de schematica (0 si non, -1 si oui) | [optional] 
**coherence_lumieres** | **int** | Cohérence des lumières (entre 0 et 1) | [optional] 
**roleplay_pays** | **int** | Respect du roleplay du pays (entre 0 et 1) | [optional] 
**organics** | **int** | Présence d&#39;organics (entre 0 et 1) | [optional] 
**surface_construite** | **float** | Multiplicateur de surface construite (entre x0 et x2.0) | [optional] 
**staff** | **str** | Le username du staff qui a noté le pays | [optional] 

## Example

```python
from yoxo_api_client.models.architecture_entry import ArchitectureEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ArchitectureEntry from a JSON string
architecture_entry_instance = ArchitectureEntry.from_json(json)
# print the JSON string representation of the object
print(ArchitectureEntry.to_json())

# convert the object into a dict
architecture_entry_dict = architecture_entry_instance.to_dict()
# create an instance of ArchitectureEntry from a dict
architecture_entry_from_dict = ArchitectureEntry.from_dict(architecture_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



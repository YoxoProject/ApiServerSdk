# SkillEntry

Skills d'un joueur

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** | Le pseudonyme du joueur | [optional] 
**builder** | **int** | XP du joueur dans le métier de Builder. Paliers: Niveau 1: 5000 XP, Niveau 2: 20000 XP, Niveau 3: 50000 XP, Niveau 4: 100000 XP, Niveau 5: 200000 XP | [optional] 
**farmer** | **int** | XP du joueur dans le métier d&#39;Agriculteur (Farmer). Paliers: Niveau 1: 5000 XP, Niveau 2: 20000 XP, Niveau 3: 60000 XP, Niveau 4: 125000 XP, Niveau 5: 300000 XP | [optional] 
**hunter** | **int** | XP du joueur dans le métier de Chasseur (Hunter). Paliers: Niveau 1: 5000 XP, Niveau 2: 20000 XP, Niveau 3: 50000 XP, Niveau 4: 100000 XP, Niveau 5: 200000 XP | [optional] 
**lumberjack** | **int** | XP du joueur dans le métier de Bûcheron (Lumberjack). Paliers: Niveau 1: 5000 XP, Niveau 2: 20000 XP, Niveau 3: 50000 XP, Niveau 4: 100000 XP, Niveau 5: 200000 XP | [optional] 
**engineer** | **int** | XP du joueur dans le métier d&#39;Ingénieur (Engineer). Paliers: Niveau 1: 3500 XP, Niveau 2: 15000 XP, Niveau 3: 30000 XP, Niveau 4: 70000 XP, Niveau 5: 200000 XP | [optional] 
**miner** | **int** | XP du joueur dans le métier de Mineur (Miner). Paliers: Niveau 1: 5000 XP, Niveau 2: 20000 XP, Niveau 3: 75000 XP, Niveau 4: 150000 XP, Niveau 5: 400000 XP | [optional] 
**builder_position** | **int** | Position du joueur dans le classement serveur de le métier de Builder (1 &#x3D; premier du classement) | [optional] 
**farmer_position** | **int** | Position du joueur dans le classement serveur de le métier d&#39;Agriculteur (1 &#x3D; premier du classement) | [optional] 
**hunter_position** | **int** | Position du joueur dans le classement serveur de le métier de Chasseur (1 &#x3D; premier du classement) | [optional] 
**lumberjack_position** | **int** | Position du joueur dans le classement serveur de le métier de Bûcheron (1 &#x3D; premier du classement) | [optional] 
**engineer_position** | **int** | Position du joueur dans le classement serveur de le métier d&#39;Ingénieur (1 &#x3D; premier du classement) | [optional] 
**miner_position** | **int** | Position du joueur dans le classement serveur de le métier de Mineur (1 &#x3D; premier du classement) | [optional] 

## Example

```python
from yoxo_client.models.skill_entry import SkillEntry

# TODO update the JSON string below
json = "{}"
# create an instance of SkillEntry from a JSON string
skill_entry_instance = SkillEntry.from_json(json)
# print the JSON string representation of the object
print(SkillEntry.to_json())

# convert the object into a dict
skill_entry_dict = skill_entry_instance.to_dict()
# create an instance of SkillEntry from a dict
skill_entry_from_dict = SkillEntry.from_dict(skill_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)





# WarParticipant

Détails d'un pays participant à la guerre

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**country** | **String** | Nom du pays participant |  [optional] |
|**remainingMissilesPoints** | **Integer** | Points de missile restants utilisables par le pays |  [optional] |
|**inactivity** | **Integer** | Pourcentage d&#39;inactivité du pays. Augmente de 3% si les critères de connexion ne sont pas remplis pendant 2h |  [optional] |
|**progress** | **Double** | Pourcentage de progression vers la validation des conditions de victoire (0-100%). À 100%, le pays gagne |  [optional] |
|**condition** | [**WarCondition**](WarCondition.md) |  |  [optional] |




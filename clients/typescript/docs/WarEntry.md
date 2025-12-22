# WarEntry

Détails d\'une guerre

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**warId** | **string** | Identifiant unique de la guerre permettant de lier avec les données des pays | [optional] [default to undefined]
**warDeclaredAt** | **number** | Timestamp (ms) de la déclaration de guerre | [optional] [default to undefined]
**warStartAt** | **number** | Timestamp (ms) du début effectif de la guerre | [optional] [default to undefined]
**warsInitiatedBy** | **string** | Joueur ayant initié la guerre via la commande /f enemy | [optional] [default to undefined]
**reason** | **string** | Raison de la déclaration de guerre | [optional] [default to undefined]
**target** | **string** | Le pays ou joueur ayant donné la raison de guerre (peut être nul selon la raison) | [optional] [default to undefined]
**targetGrade** | **string** | Grade du joueur ayant donné la raison de guerre (au moment de la raison de la guerre) | [optional] [default to undefined]
**status** | **string** | Statut actuel de la guerre (ex: IN_PROGRESS, FINISHED) | [optional] [default to undefined]
**winner** | **string** | Le nom du pays vainqueur de la guerre (si terminée) | [optional] [default to undefined]
**daysBeforeMissilePointReset** | **number** | Nombre de jours restants avant la réinitialisation des points missile | [optional] [default to undefined]
**attacker** | [**WarParticipant**](WarParticipant.md) |  | [optional] [default to undefined]
**defender** | [**WarParticipant**](WarParticipant.md) |  | [optional] [default to undefined]
**conditions** | [**WarCondition**](WarCondition.md) |  | [optional] [default to undefined]
**conditionType** | **string** | Logique d\&#39;application des conditions (AND: toutes requises, OR: une seule requise) | [optional] [default to undefined]
**rewards** | [**WarRewards**](WarRewards.md) |  | [optional] [default to undefined]
**assaults** | [**Array&lt;WarAssault&gt;**](WarAssault.md) | Liste des assauts ayant eu lieu durant la guerre | [optional] [default to undefined]
**missiles** | [**Array&lt;WarMissile&gt;**](WarMissile.md) | Liste des missiles lancés durant la guerre | [optional] [default to undefined]

## Example

```typescript
import { WarEntry } from '@yoxoproject/client';

const instance: WarEntry = {
    warId,
    warDeclaredAt,
    warStartAt,
    warsInitiatedBy,
    reason,
    target,
    targetGrade,
    status,
    winner,
    daysBeforeMissilePointReset,
    attacker,
    defender,
    conditions,
    conditionType,
    rewards,
    assaults,
    missiles,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

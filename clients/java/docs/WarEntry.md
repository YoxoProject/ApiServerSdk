

# WarEntry

Détails d'une guerre

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**warId** | **String** | Identifiant unique de la guerre permettant de lier avec les données des pays |  [optional] |
|**warDeclaredAt** | **Long** | Timestamp (ms) de la déclaration de guerre |  [optional] |
|**warStartAt** | **Long** | Timestamp (ms) du début effectif de la guerre |  [optional] |
|**warsInitiatedBy** | **String** | Joueur ayant initié la guerre via la commande /f enemy |  [optional] |
|**reason** | [**ReasonEnum**](#ReasonEnum) | Raison de la déclaration de guerre |  [optional] |
|**target** | **String** | Le pays ou joueur ayant donné la raison de guerre (peut être nul selon la raison) |  [optional] |
|**targetGrade** | [**TargetGradeEnum**](#TargetGradeEnum) | Grade du joueur ayant donné la raison de guerre (au moment de la raison de la guerre) |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | Statut actuel de la guerre (ex: IN_PROGRESS, FINISHED) |  [optional] |
|**winner** | **String** | Le nom du pays vainqueur de la guerre (si terminée) |  [optional] |
|**daysBeforeMissilePointReset** | **Integer** | Nombre de jours restants avant la réinitialisation des points missile |  [optional] |
|**attacker** | [**WarParticipant**](WarParticipant.md) |  |  [optional] |
|**defender** | [**WarParticipant**](WarParticipant.md) |  |  [optional] |
|**conditions** | [**WarCondition**](WarCondition.md) |  |  [optional] |
|**conditionType** | [**ConditionTypeEnum**](#ConditionTypeEnum) | Logique d&#39;application des conditions (AND: toutes requises, OR: une seule requise) |  [optional] |
|**rewards** | [**WarRewards**](WarRewards.md) |  |  [optional] |
|**assaults** | [**List&lt;WarAssault&gt;**](WarAssault.md) | Liste des assauts ayant eu lieu durant la guerre |  [optional] |
|**missiles** | [**List&lt;WarMissile&gt;**](WarMissile.md) | Liste des missiles lancés durant la guerre |  [optional] |



## Enum: ReasonEnum

| Name | Value |
|---- | -----|
| KILL_WILDERNESS | &quot;KILL_WILDERNESS&quot; |
| PROVOCATION | &quot;PROVOCATION&quot; |
| TERRITORIAL_EXPANSION | &quot;TERRITORIAL_EXPANSION&quot; |
| TREASON | &quot;TREASON&quot; |
| INTRUSION | &quot;INTRUSION&quot; |
| SCAM | &quot;SCAM&quot; |
| TPKILL | &quot;TPKILL&quot; |
| COLONY_IMDEPENDENCE | &quot;COLONY_IMDEPENDENCE&quot; |
| COLONY_REFUSAL | &quot;COLONY_REFUSAL&quot; |
| COLONY_PROTECTION | &quot;COLONY_PROTECTION&quot; |
| COLONY_STEAL | &quot;COLONY_STEAL&quot; |
| BUFFER_COUNTRY | &quot;BUFFER_COUNTRY&quot; |
| UNDER_POWER | &quot;UNDER_POWER&quot; |
| REPRISAL | &quot;REPRISAL&quot; |
| FOLLOW_WAR | &quot;FOLLOW_WAR&quot; |
| MMR500 | &quot;MMR500&quot; |
| EMPIRE_RIVALITY | &quot;EMPIRE_RIVALITY&quot; |
| WAR_REVENGE | &quot;WAR_REVENGE&quot; |
| BOMBING_ASSISTANCE | &quot;BOMBING_ASSISTANCE&quot; |
| WARZONE_DOMINATION | &quot;WARZONE_DOMINATION&quot; |
| PROTECTORAT | &quot;PROTECTORAT&quot; |



## Enum: TargetGradeEnum

| Name | Value |
|---- | -----|
| RECRUIT | &quot;RECRUIT&quot; |
| MEMBER | &quot;MEMBER&quot; |
| OFFICER | &quot;OFFICER&quot; |
| LEADER | &quot;LEADER&quot; |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| IN_PROGRESS | &quot;IN_PROGRESS&quot; |
| WAITING_VALIDATION | &quot;WAITING_VALIDATION&quot; |
| WAITING_CONDITIONS_ATT | &quot;WAITING_CONDITIONS_ATT&quot; |
| WAITING_CONDITIONS_DEF | &quot;WAITING_CONDITIONS_DEF&quot; |
| WAITING_CONDITIONS_ATT_VALIDATION | &quot;WAITING_CONDITIONS_ATT_VALIDATION&quot; |
| FINISHED | &quot;FINISHED&quot; |
| REFUSED | &quot;REFUSED&quot; |



## Enum: ConditionTypeEnum

| Name | Value |
|---- | -----|
| OR | &quot;OR&quot; |
| AND | &quot;AND&quot; |




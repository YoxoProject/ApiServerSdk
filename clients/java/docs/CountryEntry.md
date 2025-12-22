

# CountryEntry

Données d'un pays

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**name** | **String** | Nom du pays |  [optional] |
|**description** | **String** | Description du pays |  [optional] |
|**motd** | **String** | Message du jour (MOTD) |  [optional] |
|**entryMsg** | **String** | Message d&#39;entrée sur le territoire |  [optional] |
|**age** | **Integer** | Âge du pays en jours |  [optional] |
|**countMembers** | **Integer** | Nombre de membres |  [optional] |
|**countNewMembers** | **Integer** | Nombre de nouvelles recrues |  [optional] |
|**fhomeCoord** | [**CountryCoordinates**](CountryCoordinates.md) |  |  [optional] |
|**level** | **Integer** | Niveau du pays |  [optional] |
|**progress** | **Integer** | Progression vers le niveau suivant (en pourcentage) |  [optional] |
|**notationsPosition** | **Integer** | Position dans le classement des notations |  [optional] |
|**tags** | **List&lt;String&gt;** | Tags du pays |  [optional] |
|**discord** | **String** | Lien discord |  [optional] |
|**allianceName** | **String** | Nom de l&#39;alliance |  [optional] |
|**mmr** | **Integer** | Score MMR |  [optional] |
|**claims** | **Integer** | Nombre de chunks claim |  [optional] |
|**power** | **Integer** | Power actuel |  [optional] |
|**maxPower** | **Integer** | Power maximum |  [optional] |
|**powerboostFixed** | **Integer** | Power boost fixe |  [optional] |
|**powerboostWarzone** | **Integer** | Power boost warzone |  [optional] |
|**powerboostUnesco** | **Integer** | Power boost UNESCO |  [optional] |
|**powerboostNewMember** | **Integer** | Power boost obtenu via les nouveaux membres |  [optional] |
|**powerboostMalusAssault** | **Integer** | Malus de power lié aux assauts |  [optional] |
|**flag** | **String** | Drapeau (en base64) |  [optional] |
|**leader** | **String** | Chef du pays |  [optional] |
|**officers** | **List&lt;String&gt;** | Officiers |  [optional] |
|**members** | **List&lt;String&gt;** | Membres |  [optional] |
|**recruits** | **List&lt;String&gt;** | Recrues |  [optional] |
|**newMembers** | [**List&lt;NewMemberEntry&gt;**](NewMemberEntry.md) | Informations détaillé sur les nouvelles recrues |  [optional] |
|**researchesLevel** | [**ResearchesEntry**](ResearchesEntry.md) |  |  [optional] |
|**wars** | **List&lt;String&gt;** | Guerres en cours |  [optional] |
|**bank** | [**CountryBankEntry**](CountryBankEntry.md) |  |  [optional] |
|**actions** | [**CountryActionsEntry**](CountryActionsEntry.md) |  |  [optional] |
|**settings** | [**CountrySettingsEntry**](CountrySettingsEntry.md) |  |  [optional] |
|**empire** | **Boolean** |  |  [optional] |
|**referent** | **Boolean** |  |  [optional] |
|**topWarzone** | **Boolean** |  |  [optional] |
|**restrictAssault** | **Boolean** |  |  [optional] |
|**restrictMissile** | **Boolean** |  |  [optional] |




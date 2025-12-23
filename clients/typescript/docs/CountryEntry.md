# CountryEntry

Données d\'un pays

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Nom du pays | [optional] [default to undefined]
**description** | **string** | Description du pays | [optional] [default to undefined]
**motd** | **string** | Message du jour (MOTD) | [optional] [default to undefined]
**entryMsg** | **string** | Message d\&#39;entrée sur le territoire | [optional] [default to undefined]
**age** | **number** | Âge du pays en jours | [optional] [default to undefined]
**countMembers** | **number** | Nombre de membres | [optional] [default to undefined]
**countNewMembers** | **number** | Nombre de nouvelles recrues | [optional] [default to undefined]
**fhomeCoord** | [**CountryCoordinates**](CountryCoordinates.md) |  | [optional] [default to undefined]
**level** | **number** | Niveau du pays | [optional] [default to undefined]
**progress** | **number** | Progression vers le niveau suivant (en pourcentage) | [optional] [default to undefined]
**notationsPosition** | **number** | Position dans le classement des notations | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags du pays | [optional] [default to undefined]
**discord** | **string** | Lien discord | [optional] [default to undefined]
**allianceName** | **string** | Nom de l\&#39;alliance | [optional] [default to undefined]
**mmr** | **number** | Score MMR | [optional] [default to undefined]
**claims** | **number** | Nombre de chunks claim | [optional] [default to undefined]
**power** | **number** | Power actuel | [optional] [default to undefined]
**maxPower** | **number** | Power maximum | [optional] [default to undefined]
**powerboostFixed** | **number** | Power boost fixe | [optional] [default to undefined]
**powerboostWarzone** | **number** | Power boost warzone | [optional] [default to undefined]
**powerboostUnesco** | **number** | Power boost UNESCO | [optional] [default to undefined]
**powerboostNewMember** | **number** | Power boost obtenu via les nouveaux membres | [optional] [default to undefined]
**powerboostMalusAssault** | **number** | Malus de power lié aux assauts | [optional] [default to undefined]
**flag** | **string** | Drapeau (en base64) | [optional] [default to undefined]
**leader** | **string** | Chef du pays | [optional] [default to undefined]
**officers** | **Array&lt;string&gt;** | Officiers | [optional] [default to undefined]
**members** | **Array&lt;string&gt;** | Membres | [optional] [default to undefined]
**recruits** | **Array&lt;string&gt;** | Recrues | [optional] [default to undefined]
**newMembers** | [**Array&lt;NewMemberEntry&gt;**](NewMemberEntry.md) | Informations détaillé sur les nouvelles recrues | [optional] [default to undefined]
**researchesLevel** | [**ResearchesEntry**](ResearchesEntry.md) |  | [optional] [default to undefined]
**wars** | **Array&lt;string&gt;** | Guerres en cours | [optional] [default to undefined]
**bank** | [**CountryBankEntry**](CountryBankEntry.md) |  | [optional] [default to undefined]
**actions** | [**CountryActionsEntry**](CountryActionsEntry.md) |  | [optional] [default to undefined]
**settings** | [**CountrySettingsEntry**](CountrySettingsEntry.md) |  | [optional] [default to undefined]
**topWarzone** | **boolean** |  | [optional] [default to undefined]
**restrictAssault** | **boolean** |  | [optional] [default to undefined]
**restrictMissile** | **boolean** |  | [optional] [default to undefined]
**empire** | **boolean** |  | [optional] [default to undefined]
**referent** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { CountryEntry } from '@yoxoproject/yoxo-api-client';

const instance: CountryEntry = {
    name,
    description,
    motd,
    entryMsg,
    age,
    countMembers,
    countNewMembers,
    fhomeCoord,
    level,
    progress,
    notationsPosition,
    tags,
    discord,
    allianceName,
    mmr,
    claims,
    power,
    maxPower,
    powerboostFixed,
    powerboostWarzone,
    powerboostUnesco,
    powerboostNewMember,
    powerboostMalusAssault,
    flag,
    leader,
    officers,
    members,
    recruits,
    newMembers,
    researchesLevel,
    wars,
    bank,
    actions,
    settings,
    topWarzone,
    restrictAssault,
    restrictMissile,
    empire,
    referent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

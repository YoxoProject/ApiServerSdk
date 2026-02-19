# CountrySettingsEntry

Paramètres du pays

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invitationNeeded** | **boolean** | Invitation obligatoire pour rejoindre le pays | [optional] [default to undefined]
**recruitmentOpen** | **boolean** | Pays ouvert aux recrutements | [optional] [default to undefined]
**doKickRecruitWarReason** | **boolean** | Expulsion automatique des recrues lorsque qu\&#39;elles donnent une raison de guerre | [optional] [default to undefined]
**doKickMemberNegativePower** | **boolean** | Expulsion automatique des membres lorsque leur power devient négatif | [optional] [default to undefined]
**permissions** | [**Array&lt;PermissionEntry&gt;**](PermissionEntry.md) | Permissions accordées dans le pays | [optional] [default to undefined]
**logs** | [**Array&lt;SettingLogEntry&gt;**](SettingLogEntry.md) | Logs de pays | [optional] [default to undefined]

## Example

```typescript
import { CountrySettingsEntry } from '@yoxoproject/yoxo-api-client';

const instance: CountrySettingsEntry = {
    invitationNeeded,
    recruitmentOpen,
    doKickRecruitWarReason,
    doKickMemberNegativePower,
    permissions,
    logs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

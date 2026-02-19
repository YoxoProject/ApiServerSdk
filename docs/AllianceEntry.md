# AllianceEntry

Données d\'une alliance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Le nom de l\&#39;alliance | [optional] [default to undefined]
**description** | **string** | La description de l\&#39;alliance | [optional] [default to undefined]
**createdAt** | **number** | Le timestamp en ms à la date dont l\&#39;alliance a été créer | [optional] [default to undefined]
**color** | **string** | La couleur de l\&#39;alliance au format héxadécimale. La couleur représente l\&#39;alliance et est unique à l\&#39;échelle du serveur | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | La liste des tags de l\&#39;alliance | [optional] [default to undefined]
**discord** | **string** | Le lien menant au discord de l\&#39;alliance | [optional] [default to undefined]
**youtube** | **string** | Le lien menant à la chaine youtube de l\&#39;alliance | [optional] [default to undefined]
**rules** | **string** | Les règles de l\&#39;alliance | [optional] [default to undefined]
**bannerUrl** | **string** | L\&#39;url de la banière affiché sur la page de l\&#39;alliance | [optional] [default to undefined]
**blazon** | **string** | Le blazon représentant l\&#39;alliance. Image en base64, de dimension 78x78 | [optional] [default to undefined]
**ranking** | **number** | Le classement de l\&#39;alliance sur le mois en cours. Calculé en fonction du nombre de points de prestiges | [optional] [default to undefined]
**prestigePoints** | **number** | Les points de prestige de l\&#39;alliance. La documentation du prestige est consultable à l\&#39;adresse https://wiki.nationsglory.fr/fr/article/les-alliances-java-1ju6vju/#1-prestige-classement | [optional] [default to undefined]
**stationModuleCount** | **number** | Le nombre de module dans la station spatiale de l\&#39;alliance | [optional] [default to undefined]
**countryCount** | **number** | Le nombre de pays dans l\&#39;alliance | [optional] [default to undefined]
**leaders** | **Array&lt;string&gt;** | La liste des pays leader de l\&#39;alliance | [optional] [default to undefined]
**members** | **Array&lt;string&gt;** | La liste des pays membres de l\&#39;alliance | [optional] [default to undefined]
**protectorats** | **Array&lt;string&gt;** | La liste des pays sous le statut de protectorat dans l\&#39;alliance | [optional] [default to undefined]
**claims** | **number** | Le nombre de claims cumulé des pays de l\&#39;alliance | [optional] [default to undefined]
**countMembers** | **number** | Le nombre de membres cumulés des pays de l\&#39;alliance | [optional] [default to undefined]
**taxes** | [**AllianceTaxes**](AllianceTaxes.md) |  | [optional] [default to undefined]
**modules** | [**Array&lt;AllianceModule&gt;**](AllianceModule.md) | Les modules construits dans la station spatiale | [optional] [default to undefined]
**bank** | [**AllianceBank**](AllianceBank.md) |  | [optional] [default to undefined]
**votesHistory** | [**Array&lt;AllianceVoteHistory&gt;**](AllianceVoteHistory.md) | L\&#39;historique des votes de l\&#39;alliance. Nécessite d\&#39;être membre de l\&#39;alliance pour y avoir accès | [optional] [default to undefined]
**relations** | [**Array&lt;AllianceRelation&gt;**](AllianceRelation.md) | Les relations avec les autres alliances | [optional] [default to undefined]
**primeBoost** | [**AlliancePrimeBoost**](AlliancePrimeBoost.md) |  | [optional] [default to undefined]
**open** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { AllianceEntry } from '@yoxoproject/yoxo-api-client';

const instance: AllianceEntry = {
    name,
    description,
    createdAt,
    color,
    tags,
    discord,
    youtube,
    rules,
    bannerUrl,
    blazon,
    ranking,
    prestigePoints,
    stationModuleCount,
    countryCount,
    leaders,
    members,
    protectorats,
    claims,
    countMembers,
    taxes,
    modules,
    bank,
    votesHistory,
    relations,
    primeBoost,
    open,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

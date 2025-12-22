# EnterpriseEntry

Données d\'une entreprise (différentes versions selon le type)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type d\&#39;entreprise | [optional] [default to undefined]
**name** | **string** | Nom de l\&#39;entreprise | [optional] [default to undefined]
**age** | **number** | Âge de l\&#39;entreprise en jours | [optional] [default to undefined]
**description** | **string** | Description de l\&#39;entreprise | [optional] [default to undefined]
**services** | **string** | Services proposés | [optional] [default to undefined]
**owner** | **string** | Propriétaire de l\&#39;entreprise | [optional] [default to undefined]
**flag** | **string** | Drapeau de l\&#39;entreprise, sous la forme d\&#39;image en Base64 | [optional] [default to undefined]
**cadres** | **Array&lt;string&gt;** | Liste des cadres de l\&#39;entreprise | [optional] [default to undefined]
**employees** | **Array&lt;string&gt;** | Liste des employés de l\&#39;entreprise | [optional] [default to undefined]
**contractsDone** | **number** | Nombre de contrats réalisés | [optional] [default to undefined]
**disputes** | **number** | Nombre de litiges | [optional] [default to undefined]
**contractsSuccess** | **number** | Taux de réussite des contrats (pourcentage) | [optional] [default to undefined]
**turnover** | **number** | Chiffre d\&#39;affaires total | [optional] [default to undefined]
**permissions** | [**Array&lt;EnterprisePermission&gt;**](EnterprisePermission.md) | Permissions de l\&#39;entreprise | [optional] [default to undefined]
**bank** | [**EnterpriseBank**](EnterpriseBank.md) |  | [optional] [default to undefined]
**bets** | [**Array&lt;EnterpriseBetItem&gt;**](EnterpriseBetItem.md) | Liste des paris actifs | [optional] [default to undefined]
**betsRewardRedistributed** | **number** | L\&#39;argent redistribuées suite aux paris | [optional] [default to undefined]
**betTotal** | **number** | Nombre total de paris réalisés | [optional] [default to undefined]
**betActive** | **number** | Nombre de paris actuellement actifs | [optional] [default to undefined]
**history** | **{ [key: string]: number; }** | Historique des rendements journaliers par date | [optional] [default to undefined]
**benefAverage** | **number** | Bénéfice moyen (par jours) | [optional] [default to undefined]
**totalPlay** | **number** | Sommes totale jouée | [optional] [default to undefined]
**winPercent** | **number** | Taux de redistribution des gains (en pourcentage) | [optional] [default to undefined]
**totalWin** | **number** | Somme totale des gains distribuées aux joueurs | [optional] [default to undefined]
**total** | **number** | Total du pétrole distribué (L) | [optional] [default to undefined]
**available** | **number** | Pétrole disponible (L) | [optional] [default to undefined]
**allowCountry** | **boolean** | Autoriser la vente au pays | [optional] [default to undefined]
**allowAlly** | **boolean** | Autoriser la vente aux alliés | [optional] [default to undefined]
**allowAll** | **boolean** | Autoriser la vente à tous | [optional] [default to undefined]
**associatedCountry** | **string** | Pays associé (semble être le pays du chef de l\&#39;entreprise) | [optional] [default to undefined]
**price** | **number** | Prix actuel du pétrole ($/100L) | [optional] [default to undefined]
**priceAverage** | **number** | Prix moyen, à l\&#39;échelle du serveur ($/100L) | [optional] [default to undefined]
**countriesSell** | **{ [key: string]: number; }** | Ventes par pays | [optional] [default to undefined]
**historyGenerated** | **{ [key: string]: number; }** | Historique du pétrole vendue | [optional] [default to undefined]
**historyCollected** | **{ [key: string]: number; }** | Historique du pétrole collectée | [optional] [default to undefined]
**histories** | **{ [key: string]: { [key: string]: number; }; }** | Historiques des ventes par céréale et date | [optional] [default to undefined]
**totalCollected** | **number** | Poids total de céréale vendu depuis la création de l\&#39;entreprise (en kg) | [optional] [default to undefined]
**collectedCereal** | **{ [key: string]: number; }** | Poids total de céréales collectées (pour chaque céréale) | [optional] [default to undefined]
**parcelles** | [**Array&lt;Parcelle&gt;**](Parcelle.md) | Liste des parcelles de l\&#39;entreprise | [optional] [default to undefined]
**totalGenerated** | **number** | Argent total généré | [optional] [default to undefined]
**sumInvestment** | **number** | Somme totale investie par l\&#39;ensemble des investisseurs | [optional] [default to undefined]
**totalInvestors** | **number** | Nombre total d\&#39;investisseurs | [optional] [default to undefined]

## Example

```typescript
import { EnterpriseEntry } from '@yoxoproject/client';

const instance: EnterpriseEntry = {
    type,
    name,
    age,
    description,
    services,
    owner,
    flag,
    cadres,
    employees,
    contractsDone,
    disputes,
    contractsSuccess,
    turnover,
    permissions,
    bank,
    bets,
    betsRewardRedistributed,
    betTotal,
    betActive,
    history,
    benefAverage,
    totalPlay,
    winPercent,
    totalWin,
    total,
    available,
    allowCountry,
    allowAlly,
    allowAll,
    associatedCountry,
    price,
    priceAverage,
    countriesSell,
    historyGenerated,
    historyCollected,
    histories,
    totalCollected,
    collectedCereal,
    parcelles,
    totalGenerated,
    sumInvestment,
    totalInvestors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

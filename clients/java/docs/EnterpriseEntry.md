

# EnterpriseEntry

Données d'une entreprise (différentes versions selon le type)

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**type** | [**TypeEnum**](#TypeEnum) | Type d&#39;entreprise |  [optional] |
|**name** | **String** | Nom de l&#39;entreprise |  [optional] |
|**age** | **Integer** | Âge de l&#39;entreprise en jours |  [optional] |
|**description** | **String** | Description de l&#39;entreprise |  [optional] |
|**services** | **String** | Services proposés |  [optional] |
|**owner** | **String** | Propriétaire de l&#39;entreprise |  [optional] |
|**flag** | **String** | Drapeau de l&#39;entreprise, sous la forme d&#39;image en Base64 |  [optional] |
|**cadres** | **List&lt;String&gt;** | Liste des cadres de l&#39;entreprise |  [optional] |
|**employees** | **List&lt;String&gt;** | Liste des employés de l&#39;entreprise |  [optional] |
|**contractsDone** | **Integer** | Nombre de contrats réalisés |  [optional] |
|**disputes** | **Integer** | Nombre de litiges |  [optional] |
|**contractsSuccess** | **Double** | Taux de réussite des contrats (pourcentage) |  [optional] |
|**turnover** | **Integer** | Chiffre d&#39;affaires total |  [optional] |
|**permissions** | [**List&lt;EnterprisePermission&gt;**](EnterprisePermission.md) | Permissions de l&#39;entreprise |  [optional] |
|**bank** | [**EnterpriseBank**](EnterpriseBank.md) |  |  [optional] |
|**history** | **Map&lt;String, Double&gt;** | Historique des rendements journaliers par date |  [optional] |
|**benefAverage** | **Double** | Bénéfice moyen (par jours) |  [optional] |
|**totalPlay** | **Double** | Sommes totale jouée |  [optional] |
|**winPercent** | **Double** | Taux de redistribution des gains (en pourcentage) |  [optional] |
|**totalWin** | **Double** | Somme totale des gains distribuées aux joueurs |  [optional] |
|**total** | **Integer** | Total du pétrole distribué (L) |  [optional] |
|**available** | **Integer** | Pétrole disponible (L) |  [optional] |
|**allowCountry** | **Boolean** | Autoriser la vente au pays |  [optional] |
|**allowAlly** | **Boolean** | Autoriser la vente aux alliés |  [optional] |
|**allowAll** | **Boolean** | Autoriser la vente à tous |  [optional] |
|**associatedCountry** | **String** | Pays associé (semble être le pays du chef de l&#39;entreprise) |  [optional] |
|**price** | **Integer** | Prix actuel du pétrole ($/100L) |  [optional] |
|**priceAverage** | **Integer** | Prix moyen, à l&#39;échelle du serveur ($/100L) |  [optional] |
|**countriesSell** | **Map&lt;String, Double&gt;** | Ventes par pays |  [optional] |
|**historyGenerated** | **Map&lt;String, Double&gt;** | Historique du pétrole vendue |  [optional] |
|**historyCollected** | **Map&lt;String, Double&gt;** | Historique du pétrole collectée |  [optional] |
|**histories** | **Map&lt;String, Map&lt;String, Double&gt;&gt;** | Historiques des ventes par céréale et date |  [optional] |
|**totalCollected** | **Integer** | Poids total de céréale vendu depuis la création de l&#39;entreprise (en kg) |  [optional] |
|**collectedCereal** | **Map&lt;String, Integer&gt;** | Poids total de céréales collectées (pour chaque céréale) |  [optional] |
|**parcelles** | [**List&lt;Parcelle&gt;**](Parcelle.md) | Liste des parcelles de l&#39;entreprise |  [optional] |
|**totalGenerated** | **Integer** | Argent total généré |  [optional] |
|**sumInvestment** | **Float** | Somme totale investie par l&#39;ensemble des investisseurs |  [optional] |
|**totalInvestors** | **Integer** | Nombre total d&#39;investisseurs |  [optional] |
|**bets** | [**List&lt;EnterpriseBetItem&gt;**](EnterpriseBetItem.md) | Liste des paris actifs |  [optional] |
|**betsRewardRedistributed** | **Integer** | L&#39;argent redistribuées suite aux paris |  [optional] |
|**betTotal** | **Integer** | Nombre total de paris réalisés |  [optional] |
|**betActive** | **Integer** | Nombre de paris actuellement actifs |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| BUILD | &quot;build&quot; |
| ENGINEER | &quot;engineer&quot; |
| TERRAFORM | &quot;terraform&quot; |
| JOURNALIST | &quot;journalist&quot; |
| CASINO | &quot;casino&quot; |
| PVP | &quot;pvp&quot; |
| LOAN | &quot;loan&quot; |
| REALESTATE | &quot;realestate&quot; |
| TRADER | &quot;trader&quot; |
| BET | &quot;bet&quot; |
| REPAIR | &quot;repair&quot; |
| LAWYER | &quot;lawyer&quot; |
| ELECTRIC | &quot;electric&quot; |
| PETROL | &quot;petrol&quot; |
| FARM | &quot;farm&quot; |




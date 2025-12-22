

# EnterpriseBet

Entreprise de paris

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




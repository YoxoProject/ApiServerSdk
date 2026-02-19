

# AllianceEntry

Données d'une alliance

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**name** | **String** | Le nom de l&#39;alliance |  [optional] |
|**description** | **String** | La description de l&#39;alliance |  [optional] |
|**createdAt** | **Long** | Le timestamp en ms à la date dont l&#39;alliance a été créer |  [optional] |
|**color** | **String** | La couleur de l&#39;alliance au format héxadécimale. La couleur représente l&#39;alliance et est unique à l&#39;échelle du serveur |  [optional] |
|**tags** | **List&lt;String&gt;** | La liste des tags de l&#39;alliance |  [optional] |
|**discord** | **String** | Le lien menant au discord de l&#39;alliance |  [optional] |
|**youtube** | **String** | Le lien menant à la chaine youtube de l&#39;alliance |  [optional] |
|**rules** | **String** | Les règles de l&#39;alliance |  [optional] |
|**bannerUrl** | **String** | L&#39;url de la banière affiché sur la page de l&#39;alliance |  [optional] |
|**blazon** | **String** | Le blazon représentant l&#39;alliance. Image en base64, de dimension 78x78 |  [optional] |
|**ranking** | **Integer** | Le classement de l&#39;alliance sur le mois en cours. Calculé en fonction du nombre de points de prestiges |  [optional] |
|**prestigePoints** | **Integer** | Les points de prestige de l&#39;alliance. La documentation du prestige est consultable à l&#39;adresse https://wiki.nationsglory.fr/fr/article/les-alliances-java-1ju6vju/#1-prestige-classement |  [optional] |
|**stationModuleCount** | **Integer** | Le nombre de module dans la station spatiale de l&#39;alliance |  [optional] |
|**countryCount** | **Integer** | Le nombre de pays dans l&#39;alliance |  [optional] |
|**leaders** | **List&lt;String&gt;** | La liste des pays leader de l&#39;alliance |  [optional] |
|**members** | **List&lt;String&gt;** | La liste des pays membres de l&#39;alliance |  [optional] |
|**protectorats** | **List&lt;String&gt;** | La liste des pays sous le statut de protectorat dans l&#39;alliance |  [optional] |
|**claims** | **Integer** | Le nombre de claims cumulé des pays de l&#39;alliance |  [optional] |
|**countMembers** | **Integer** | Le nombre de membres cumulés des pays de l&#39;alliance |  [optional] |
|**taxes** | [**AllianceTaxes**](AllianceTaxes.md) |  |  [optional] |
|**modules** | [**List&lt;AllianceModule&gt;**](AllianceModule.md) | Les modules construits dans la station spatiale |  [optional] |
|**bank** | [**AllianceBank**](AllianceBank.md) |  |  [optional] |
|**votesHistory** | [**List&lt;AllianceVoteHistory&gt;**](AllianceVoteHistory.md) | L&#39;historique des votes de l&#39;alliance. Nécessite d&#39;être membre de l&#39;alliance pour y avoir accès |  [optional] |
|**relations** | [**List&lt;AllianceRelation&gt;**](AllianceRelation.md) | Les relations avec les autres alliances |  [optional] |
|**primeBoost** | [**AlliancePrimeBoost**](AlliancePrimeBoost.md) |  |  [optional] |
|**open** | **Boolean** |  |  [optional] |




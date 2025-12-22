# ApiJavaApi

All URIs are relative to *https://api.yoxo.software*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCerealGlobalMarket**](ApiJavaApi.md#getCerealGlobalMarket) | **GET** /v2/java/cereal_global_market/{date}/{javaServer} | Cereal Global Market |
| [**getCountry**](ApiJavaApi.md#getCountry) | **GET** /v2/java/country/{date}/{javaServer} | Country |
| [**getCountry1**](ApiJavaApi.md#getCountry1) | **GET** /v2/java/country/{date}/{javaServer}/{country} | Country |
| [**getEnterprises**](ApiJavaApi.md#getEnterprises) | **GET** /v2/java/enterprise/{date}/{javaServer} | Enterprise |
| [**getEnterprises1**](ApiJavaApi.md#getEnterprises1) | **GET** /v2/java/enterprise/{date}/{javaServer}/{enterpriseName} | Enterprise |
| [**getHalloween2025**](ApiJavaApi.md#getHalloween2025) | **GET** /v2/java/halloween-2025/{date} | Halloween 2025 |
| [**getNoelMegagift2024**](ApiJavaApi.md#getNoelMegagift2024) | **GET** /v2/java/noelmegagift-2024 | Noël Megagift 2024 |
| [**getNoelMegagift2025**](ApiJavaApi.md#getNoelMegagift2025) | **GET** /v2/java/noelmegagift-2025/{date} | Noël Megagift 2025 |
| [**getPlayerList**](ApiJavaApi.md#getPlayerList) | **GET** /v2/java/player-list/{date}/{javaServer} | Player List |
| [**getResearchConfig**](ApiJavaApi.md#getResearchConfig) | **GET** /v2/java/research/{date}/config | Research Config |
| [**getResearchServer**](ApiJavaApi.md#getResearchServer) | **GET** /v2/java/research/{date}/{javaServer} | Research Server |
| [**getSkill**](ApiJavaApi.md#getSkill) | **GET** /v2/java/skill/{date}/{javaServer} | Skill |
| [**getWar**](ApiJavaApi.md#getWar) | **GET** /v2/java/war/{date}/{javaServer} | War |
| [**getWar1**](ApiJavaApi.md#getWar1) | **GET** /v2/java/war/{date}/{javaServer}/{warId} | War |
| [**postCountry**](ApiJavaApi.md#postCountry) | **POST** /v2/java/country/{date}/{javaServer} | Country |
| [**postEnterprises**](ApiJavaApi.md#postEnterprises) | **POST** /v2/java/enterprise/{date}/{javaServer} | Enterprise |
| [**postHalloween2025**](ApiJavaApi.md#postHalloween2025) | **POST** /v2/java/halloween-2025/{date} | Halloween 2025 |
| [**postNoelMegagift2024**](ApiJavaApi.md#postNoelMegagift2024) | **POST** /v2/java/noelmegagift-2024 | Noël Megagift 2024 |
| [**postNoelMegagift2025**](ApiJavaApi.md#postNoelMegagift2025) | **POST** /v2/java/noelmegagift-2025/{date} | Noël Megagift 2025 |
| [**postPlayerList**](ApiJavaApi.md#postPlayerList) | **POST** /v2/java/player-list/{date}/{javaServer} | Player List |
| [**postResearchServer**](ApiJavaApi.md#postResearchServer) | **POST** /v2/java/research/{date}/{javaServer} | Research Server |
| [**postSkill**](ApiJavaApi.md#postSkill) | **POST** /v2/java/skill/{date}/{javaServer} | Skill |
| [**postWar**](ApiJavaApi.md#postWar) | **POST** /v2/java/war/{date}/{javaServer} | War |


<a id="getCerealGlobalMarket"></a>
# **getCerealGlobalMarket**
> CerealGlobalMarket getCerealGlobalMarket(date, javaServer)

Cereal Global Market

Permet d&#39;obtenir les données du marché global des céréales pour un serveur spécifique à une date donnée.  Ces données incluent : - Les graphiques de l&#39;évolution des prix, des ventes et des stocks - L&#39;historique des prix, ventes et stocks par type de céréale - Les prix actuels des céréales  **Fréquence de mise à jour :** Les données sont actualisées tous les jours impairs du mois (environ une fois tous les 2 jours), généralement la nuit.  **Note :** Ces données représentent un objet unique (pas une liste), donc le filtrage et la pagination ne sont pas applicables. 

### Example
```java
// Import classes:
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.ApiException;
import software.yoxo.client.invoker.Configuration;
import software.yoxo.client.invoker.auth.*;
import software.yoxo.client.invoker.models.*;
import software.yoxo.client.api.ApiJavaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.yoxo.software");
    
    // Configure OAuth2 access token for authorization: oauth2_client_credentials
    OAuth oauth2_client_credentials = (OAuth) defaultClient.getAuthentication("oauth2_client_credentials");
    oauth2_client_credentials.setAccessToken("YOUR ACCESS TOKEN");

    ApiJavaApi apiInstance = new ApiJavaApi(defaultClient);
    LocalDate date = LocalDate.parse("2025-10-28"); // LocalDate | La date à laquelle on veut récupérer les données du marché des céréales (au format ISO-8601: yyyy-MM-dd)
    String javaServer = "blue"; // String | Serveur NationsGlory dont on veut les données. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    try {
      CerealGlobalMarket result = apiInstance.getCerealGlobalMarket(date, javaServer);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiJavaApi#getCerealGlobalMarket");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **date** | **LocalDate**| La date à laquelle on veut récupérer les données du marché des céréales (au format ISO-8601: yyyy-MM-dd) | |
| **javaServer** | **String**| Serveur NationsGlory dont on veut les données. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | [enum: blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha, jade] |

### Return type

[**CerealGlobalMarket**](CerealGlobalMarket.md)

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="getCountry"></a>
# **getCountry**
> Country getCountry(date, javaServer)

Country

Permet d&#39;obtenir la liste et les détails complets de tous les pays d&#39;un serveur à une date donnée (aucun filtrage possible). Il est possible de spécifier un pays dans l&#39;URL pour récupérer un pays spécifique.  **Données exposées :** - Informations générales (nom, description, niveau, power, claims...) - Relations (alliance, guerres) - Membres (liste, rôles, recrues) - Économie (banque, actions) - Paramètres et permissions  **Fréquence de mise à jour :** Les données sont actualisées tous les jours, généralement la nuit. 

### Example
```java
// Import classes:
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.ApiException;
import software.yoxo.client.invoker.Configuration;
import software.yoxo.client.invoker.auth.*;
import software.yoxo.client.invoker.models.*;
import software.yoxo.client.api.ApiJavaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.yoxo.software");
    
    // Configure OAuth2 access token for authorization: oauth2_client_credentials
    OAuth oauth2_client_credentials = (OAuth) defaultClient.getAuthentication("oauth2_client_credentials");
    oauth2_client_credentials.setAccessToken("YOUR ACCESS TOKEN");

    ApiJavaApi apiInstance = new ApiJavaApi(defaultClient);
    LocalDate date = LocalDate.parse("2025-11-24"); // LocalDate | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    String javaServer = "blue"; // String | Serveur NationsGlory dont on veut les données des pays. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    try {
      Country result = apiInstance.getCountry(date, javaServer);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiJavaApi#getCountry");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **date** | **LocalDate**| Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | |
| **javaServer** | **String**| Serveur NationsGlory dont on veut les données des pays. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | [enum: blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha, jade] |

### Return type

[**Country**](Country.md)

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="getCountry1"></a>
# **getCountry1**
> Country getCountry1(date, javaServer, country)

Country

Permet d&#39;obtenir la liste et les détails complets de tous les pays d&#39;un serveur à une date donnée (aucun filtrage possible). Il est possible de spécifier un pays dans l&#39;URL pour récupérer un pays spécifique.  **Données exposées :** - Informations générales (nom, description, niveau, power, claims...) - Relations (alliance, guerres) - Membres (liste, rôles, recrues) - Économie (banque, actions) - Paramètres et permissions  **Fréquence de mise à jour :** Les données sont actualisées tous les jours, généralement la nuit. 

### Example
```java
// Import classes:
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.ApiException;
import software.yoxo.client.invoker.Configuration;
import software.yoxo.client.invoker.auth.*;
import software.yoxo.client.invoker.models.*;
import software.yoxo.client.api.ApiJavaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.yoxo.software");
    
    // Configure OAuth2 access token for authorization: oauth2_client_credentials
    OAuth oauth2_client_credentials = (OAuth) defaultClient.getAuthentication("oauth2_client_credentials");
    oauth2_client_credentials.setAccessToken("YOUR ACCESS TOKEN");

    ApiJavaApi apiInstance = new ApiJavaApi(defaultClient);
    LocalDate date = LocalDate.parse("2025-11-24"); // LocalDate | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    String javaServer = "blue"; // String | Serveur NationsGlory dont on veut les données des pays. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    String country = "country_example"; // String | Nom du pays
    try {
      Country result = apiInstance.getCountry1(date, javaServer, country);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiJavaApi#getCountry1");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **date** | **LocalDate**| Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | |
| **javaServer** | **String**| Serveur NationsGlory dont on veut les données des pays. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | [enum: blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha, jade] |
| **country** | **String**| Nom du pays | |

### Return type

[**Country**](Country.md)

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="getEnterprises"></a>
# **getEnterprises**
> Enterprise getEnterprises(date, javaServer, enterpriseType)

Enterprise

Permet d&#39;obtenir la liste de toutes les entreprises sur un serveur à une date donnée. Chaque entreprise contient des champs communs (nom, propriétaire, employés, contrats) et des champs spécifiques selon son type (ex: historique des gains pour les casinos, production pour les centrales électriques). Il est possible de filtrer par nom d&#39;entreprise.  **Types d&#39;entreprises :** - Casino : Entreprises de casino - Electric : Entreprises électriques - Farm : Entreprises agricoles - Petrol : Entreprises pétrolières - Trader : Entreprises de trading - Bet : Entreprises de paris - RealEstate : Entreprises immobilières (location de parcelles) - Build, Engineer, Terraform, Journalist, PVP, Loan, Repair, Lawyer : Entreprises de services  **Fréquence de mise à jour :** Les données sont actualisées tous les lundis matin. 

### Example
```java
// Import classes:
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.ApiException;
import software.yoxo.client.invoker.Configuration;
import software.yoxo.client.invoker.auth.*;
import software.yoxo.client.invoker.models.*;
import software.yoxo.client.api.ApiJavaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.yoxo.software");
    
    // Configure OAuth2 access token for authorization: oauth2_client_credentials
    OAuth oauth2_client_credentials = (OAuth) defaultClient.getAuthentication("oauth2_client_credentials");
    oauth2_client_credentials.setAccessToken("YOUR ACCESS TOKEN");

    ApiJavaApi apiInstance = new ApiJavaApi(defaultClient);
    LocalDate date = LocalDate.parse("2025-11-24"); // LocalDate | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    String javaServer = "blue"; // String | Serveur NationsGlory dont on veut les données d'entreprises. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    String enterpriseType = "build"; // String | Type d'entreprise
    try {
      Enterprise result = apiInstance.getEnterprises(date, javaServer, enterpriseType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiJavaApi#getEnterprises");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **date** | **LocalDate**| Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | |
| **javaServer** | **String**| Serveur NationsGlory dont on veut les données d&#39;entreprises. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | [enum: blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha, jade] |
| **enterpriseType** | **String**| Type d&#39;entreprise | [optional] [enum: build, engineer, terraform, journalist, casino, pvp, loan, realestate, trader, bet, repair, lawyer, electric, petrol, farm] |

### Return type

[**Enterprise**](Enterprise.md)

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="getEnterprises1"></a>
# **getEnterprises1**
> Enterprise getEnterprises1(date, javaServer, enterpriseName, enterpriseType)

Enterprise

Permet d&#39;obtenir la liste de toutes les entreprises sur un serveur à une date donnée. Chaque entreprise contient des champs communs (nom, propriétaire, employés, contrats) et des champs spécifiques selon son type (ex: historique des gains pour les casinos, production pour les centrales électriques). Il est possible de filtrer par nom d&#39;entreprise.  **Types d&#39;entreprises :** - Casino : Entreprises de casino - Electric : Entreprises électriques - Farm : Entreprises agricoles - Petrol : Entreprises pétrolières - Trader : Entreprises de trading - Bet : Entreprises de paris - RealEstate : Entreprises immobilières (location de parcelles) - Build, Engineer, Terraform, Journalist, PVP, Loan, Repair, Lawyer : Entreprises de services  **Fréquence de mise à jour :** Les données sont actualisées tous les lundis matin. 

### Example
```java
// Import classes:
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.ApiException;
import software.yoxo.client.invoker.Configuration;
import software.yoxo.client.invoker.auth.*;
import software.yoxo.client.invoker.models.*;
import software.yoxo.client.api.ApiJavaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.yoxo.software");
    
    // Configure OAuth2 access token for authorization: oauth2_client_credentials
    OAuth oauth2_client_credentials = (OAuth) defaultClient.getAuthentication("oauth2_client_credentials");
    oauth2_client_credentials.setAccessToken("YOUR ACCESS TOKEN");

    ApiJavaApi apiInstance = new ApiJavaApi(defaultClient);
    LocalDate date = LocalDate.parse("2025-11-24"); // LocalDate | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    String javaServer = "blue"; // String | Serveur NationsGlory dont on veut les données d'entreprises. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    String enterpriseName = "enterpriseName_example"; // String | Nom de l'entreprise
    String enterpriseType = "build"; // String | Type d'entreprise
    try {
      Enterprise result = apiInstance.getEnterprises1(date, javaServer, enterpriseName, enterpriseType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiJavaApi#getEnterprises1");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **date** | **LocalDate**| Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | |
| **javaServer** | **String**| Serveur NationsGlory dont on veut les données d&#39;entreprises. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | [enum: blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha, jade] |
| **enterpriseName** | **String**| Nom de l&#39;entreprise | |
| **enterpriseType** | **String**| Type d&#39;entreprise | [optional] [enum: build, engineer, terraform, journalist, casino, pvp, loan, realestate, trader, bet, repair, lawyer, electric, petrol, farm] |

### Return type

[**Enterprise**](Enterprise.md)

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="getHalloween2025"></a>
# **getHalloween2025**
> Halloween2025 getHalloween2025(date)

Halloween 2025

Permet d&#39;obtenir les statistiques des joueurs du top 50 de l&#39;événement Halloween 2025 \&quot;Demon&#39;s Return\&quot; à une date donnée (aucun filtrage possible). Seuls les joueurs du top 50 interserveur sont accessibles (limitation du serveur).  **À propos de l&#39;événement :** L&#39;événement \&quot;Demon&#39;s Return\&quot; est un événement global interserveur où l&#39;objectif est de collecter des âmes et tuer des démons pour empêcher l&#39;invasion démoniaque. Le classement est identique sur tous les serveurs puisqu&#39;il s&#39;agit d&#39;un événement global à NationsGlory.  **Fréquence de mise à jour :** Les données sont actualisées quotidiennement pendant toute la durée de l&#39;événement (du 21/10/2025 au 04/11/2025), généralement la nuit.  **Documentation :** Plus d&#39;informations sur l&#39;événement : https://wiki.nationsglory.fr/fr/article/halloween-2025-demons-return-1lfsu05/ 

### Example
```java
// Import classes:
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.ApiException;
import software.yoxo.client.invoker.Configuration;
import software.yoxo.client.invoker.auth.*;
import software.yoxo.client.invoker.models.*;
import software.yoxo.client.api.ApiJavaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.yoxo.software");
    
    // Configure OAuth2 access token for authorization: oauth2_client_credentials
    OAuth oauth2_client_credentials = (OAuth) defaultClient.getAuthentication("oauth2_client_credentials");
    oauth2_client_credentials.setAccessToken("YOUR ACCESS TOKEN");

    ApiJavaApi apiInstance = new ApiJavaApi(defaultClient);
    LocalDate date = LocalDate.parse("2025-10-28"); // LocalDate | Date des données au format ISO-8601 (yyyy-MM-dd). Événement actif du 21/10/2025 au 13/11/2025, données actualisées quotidiennement
    try {
      Halloween2025 result = apiInstance.getHalloween2025(date);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiJavaApi#getHalloween2025");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **date** | **LocalDate**| Date des données au format ISO-8601 (yyyy-MM-dd). Événement actif du 21/10/2025 au 13/11/2025, données actualisées quotidiennement | |

### Return type

[**Halloween2025**](Halloween2025.md)

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="getNoelMegagift2024"></a>
# **getNoelMegagift2024**
> NoelMegagift2024 getNoelMegagift2024()

Noël Megagift 2024

Permet d&#39;obtenir les données des tirages du Mega Cadeau de l&#39;événement \&quot;The Key Guardian\&quot; (Noël 2024).  **À propos de l&#39;événement :** L&#39;événement \&quot;The Key Guardian\&quot; est l&#39;événement de Noël 2024 où les joueurs doivent à récupérer 9 clés perdues pour assembler une Méga Clé et débloquer le Mega Cadeau. Chaque tirage du Mega Cadeau offre jusqu&#39;à 4 récompenses selon le nombre de joueurs présents (armes exclusives, plans rares, items légendaires, cosmétiques).  **Période de l&#39;événement :** Du 24/12/2024 au 12/01/2025  **Données exposées :** Chaque entrée représente un tirage individuel du Mega Gift par un joueur, avec les items obtenus et la date/heure du tirage. 

### Example
```java
// Import classes:
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.ApiException;
import software.yoxo.client.invoker.Configuration;
import software.yoxo.client.invoker.auth.*;
import software.yoxo.client.invoker.models.*;
import software.yoxo.client.api.ApiJavaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.yoxo.software");
    
    // Configure OAuth2 access token for authorization: oauth2_client_credentials
    OAuth oauth2_client_credentials = (OAuth) defaultClient.getAuthentication("oauth2_client_credentials");
    oauth2_client_credentials.setAccessToken("YOUR ACCESS TOKEN");

    ApiJavaApi apiInstance = new ApiJavaApi(defaultClient);
    try {
      NoelMegagift2024 result = apiInstance.getNoelMegagift2024();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiJavaApi#getNoelMegagift2024");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**NoelMegagift2024**](NoelMegagift2024.md)

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="getNoelMegagift2025"></a>
# **getNoelMegagift2025**
> NoelMegagift2025 getNoelMegagift2025(date)

Noël Megagift 2025

Permet d&#39;obtenir les données des tirages du Mega Cadeau de l&#39;événement de Noël 2025.  **À propos de l&#39;événement :** Événement interserveur où les joueurs peuvent obtenir des récompenses exclusives via le Mega Cadeau. Plus d&#39;informations sur l&#39;événement : https://wiki.nationsglory.fr/fr/article/lile-du-pere-noel-rv8x0t/#2-le-mega-cadeau-recompense-ultime  **Période de l&#39;événement :** Du 14/12/2025 au 06/01/2026  **Données exposées :** Chaque entrée représente un tirage individuel du Mega cadeau par un joueur, avec les items obtenus et la date/heure du tirage.  **Fréquence de mise à jour :** Les données sont actualisées quotidiennement pendant toute la durée de l&#39;événement (du 14/12/2025 au 06/01/2026), généralement la nuit. 

### Example
```java
// Import classes:
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.ApiException;
import software.yoxo.client.invoker.Configuration;
import software.yoxo.client.invoker.auth.*;
import software.yoxo.client.invoker.models.*;
import software.yoxo.client.api.ApiJavaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.yoxo.software");
    
    // Configure OAuth2 access token for authorization: oauth2_client_credentials
    OAuth oauth2_client_credentials = (OAuth) defaultClient.getAuthentication("oauth2_client_credentials");
    oauth2_client_credentials.setAccessToken("YOUR ACCESS TOKEN");

    ApiJavaApi apiInstance = new ApiJavaApi(defaultClient);
    LocalDate date = LocalDate.parse("2025-11-24"); // LocalDate | Date de la configuration (format ISO-8601: yyyy-MM-dd)
    try {
      NoelMegagift2025 result = apiInstance.getNoelMegagift2025(date);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiJavaApi#getNoelMegagift2025");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **date** | **LocalDate**| Date de la configuration (format ISO-8601: yyyy-MM-dd) | |

### Return type

[**NoelMegagift2025**](NoelMegagift2025.md)

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="getPlayerList"></a>
# **getPlayerList**
> PlayerList getPlayerList(date, javaServer)

Player List

Permet d&#39;obtenir la liste des joueurs s&#39;étant connectés au moins une fois au cours des 14 derniers jours sur un serveur à une date donnée (aucun filtrage possible).  **Fréquence de mise à jour :** Les données sont actualisées quotidiennement, généralement la nuit. 

### Example
```java
// Import classes:
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.ApiException;
import software.yoxo.client.invoker.Configuration;
import software.yoxo.client.invoker.auth.*;
import software.yoxo.client.invoker.models.*;
import software.yoxo.client.api.ApiJavaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.yoxo.software");
    
    // Configure OAuth2 access token for authorization: oauth2_client_credentials
    OAuth oauth2_client_credentials = (OAuth) defaultClient.getAuthentication("oauth2_client_credentials");
    oauth2_client_credentials.setAccessToken("YOUR ACCESS TOKEN");

    ApiJavaApi apiInstance = new ApiJavaApi(defaultClient);
    LocalDate date = LocalDate.parse("2025-10-28"); // LocalDate | La date à laquelle on veut récupérer la liste des joueurs (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    String javaServer = "blue"; // String | Serveur NationsGlory dont on veut la liste des joueurs. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    try {
      PlayerList result = apiInstance.getPlayerList(date, javaServer);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiJavaApi#getPlayerList");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **date** | **LocalDate**| La date à laquelle on veut récupérer la liste des joueurs (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | |
| **javaServer** | **String**| Serveur NationsGlory dont on veut la liste des joueurs. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | [enum: blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha, jade] |

### Return type

[**PlayerList**](PlayerList.md)

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="getResearchConfig"></a>
# **getResearchConfig**
> ResearchConfig getResearchConfig(date)

Research Config

Permet d&#39;obtenir la configuration globale de tous les domaines de recherche disponibles dans NationsGlory. Cette configuration est identique pour tous les serveurs et définit les niveaux, conditions et récompenses.  **Contenu de la configuration :** - Noms et descriptions des domaines de recherche - Niveaux maximum par domaine - Conditions requises par niveau - Récompenses obtenues par niveau - Durées de recherche  **Fréquence de mise à jour :** Les données sont actualisées tous les jours impairs du mois (environ une fois tous les 2 jours), généralement la nuit. 

### Example
```java
// Import classes:
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.ApiException;
import software.yoxo.client.invoker.Configuration;
import software.yoxo.client.invoker.auth.*;
import software.yoxo.client.invoker.models.*;
import software.yoxo.client.api.ApiJavaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.yoxo.software");
    
    // Configure OAuth2 access token for authorization: oauth2_client_credentials
    OAuth oauth2_client_credentials = (OAuth) defaultClient.getAuthentication("oauth2_client_credentials");
    oauth2_client_credentials.setAccessToken("YOUR ACCESS TOKEN");

    ApiJavaApi apiInstance = new ApiJavaApi(defaultClient);
    LocalDate date = LocalDate.parse("2025-11-24"); // LocalDate | Date de la configuration (format ISO-8601: yyyy-MM-dd)
    try {
      ResearchConfig result = apiInstance.getResearchConfig(date);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiJavaApi#getResearchConfig");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **date** | **LocalDate**| Date de la configuration (format ISO-8601: yyyy-MM-dd) | |

### Return type

[**ResearchConfig**](ResearchConfig.md)

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="getResearchServer"></a>
# **getResearchServer**
> ResearchServer getResearchServer(date, javaServer)

Research Server

Permet d&#39;obtenir les niveaux de recherche actuels de tous les pays d&#39;un serveur à une date donnée (sans filtrage).  **Données exposées :** - Niveaux actuels de recherche par domaine pour chaque pays - Dernière recherche complétée par chaque pays - Valeurs actuelles des conditions de recherche  **Fréquence de mise à jour :** Les données sont actualisées tous les jours impairs du mois (environ une fois tous les 2 jours), généralement la nuit. 

### Example
```java
// Import classes:
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.ApiException;
import software.yoxo.client.invoker.Configuration;
import software.yoxo.client.invoker.auth.*;
import software.yoxo.client.invoker.models.*;
import software.yoxo.client.api.ApiJavaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.yoxo.software");
    
    // Configure OAuth2 access token for authorization: oauth2_client_credentials
    OAuth oauth2_client_credentials = (OAuth) defaultClient.getAuthentication("oauth2_client_credentials");
    oauth2_client_credentials.setAccessToken("YOUR ACCESS TOKEN");

    ApiJavaApi apiInstance = new ApiJavaApi(defaultClient);
    LocalDate date = LocalDate.parse("2025-11-24"); // LocalDate | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    String javaServer = "blue"; // String | Serveur NationsGlory dont on veut les données de R&D. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    try {
      ResearchServer result = apiInstance.getResearchServer(date, javaServer);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiJavaApi#getResearchServer");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **date** | **LocalDate**| Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | |
| **javaServer** | **String**| Serveur NationsGlory dont on veut les données de R&amp;D. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | [enum: blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha, jade] |

### Return type

[**ResearchServer**](ResearchServer.md)

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="getSkill"></a>
# **getSkill**
> Skill getSkill(date, javaServer)

Skill

Permet d&#39;obtenir les compétences des joueurs présents dans au moins 1 top 50 compétences sur un serveur à une date donnée (aucun filtrage possible). Seuls les joueurs figurant dans le top 50 d&#39;au moins une compétence sur le serveur sont inclus pour éviter de surcharger les serveurs.  **Fréquence de mise à jour :** Les données sont actualisées tous les jours pairs du mois (environ une fois tous les 2 jours), généralement la nuit.  **Documentation :** Plus d&#39;informations sur les compétences/skills : https://wiki.nationsglory.fr/fr/article/les-competences-java-1shixp7/ 

### Example
```java
// Import classes:
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.ApiException;
import software.yoxo.client.invoker.Configuration;
import software.yoxo.client.invoker.auth.*;
import software.yoxo.client.invoker.models.*;
import software.yoxo.client.api.ApiJavaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.yoxo.software");
    
    // Configure OAuth2 access token for authorization: oauth2_client_credentials
    OAuth oauth2_client_credentials = (OAuth) defaultClient.getAuthentication("oauth2_client_credentials");
    oauth2_client_credentials.setAccessToken("YOUR ACCESS TOKEN");

    ApiJavaApi apiInstance = new ApiJavaApi(defaultClient);
    LocalDate date = LocalDate.parse("2025-10-28"); // LocalDate | La date à laquelle on veut récupéré les skills (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    String javaServer = "blue"; // String | Serveur NationsGlory dont on veut les skills. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    try {
      Skill result = apiInstance.getSkill(date, javaServer);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiJavaApi#getSkill");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **date** | **LocalDate**| La date à laquelle on veut récupéré les skills (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | |
| **javaServer** | **String**| Serveur NationsGlory dont on veut les skills. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | [enum: blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha, jade] |

### Return type

[**Skill**](Skill.md)

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="getWar"></a>
# **getWar**
> War getWar(date, javaServer)

War

Permet d&#39;obtenir la liste des guerres (en cours ou terminées) d&#39;un serveur à une date donnée. Il est possible de spécifier un warId dans l&#39;URL pour récupérer une guerre spécifique.  **Données exposées :** - Identifiant, dates (déclaration, début), raison - Participants (attaquant, défenseur) avec détails (pays, points missiles, progression...) - Conditions de victoire - Récompenses - Détails des assauts et missiles lancés  **Fréquence de mise à jour :** Les données sont actualisées quotidiennement, généralement la nuit. 

### Example
```java
// Import classes:
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.ApiException;
import software.yoxo.client.invoker.Configuration;
import software.yoxo.client.invoker.auth.*;
import software.yoxo.client.invoker.models.*;
import software.yoxo.client.api.ApiJavaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.yoxo.software");
    
    // Configure OAuth2 access token for authorization: oauth2_client_credentials
    OAuth oauth2_client_credentials = (OAuth) defaultClient.getAuthentication("oauth2_client_credentials");
    oauth2_client_credentials.setAccessToken("YOUR ACCESS TOKEN");

    ApiJavaApi apiInstance = new ApiJavaApi(defaultClient);
    LocalDate date = LocalDate.parse("2025-11-24"); // LocalDate | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    String javaServer = "blue"; // String | Serveur NationsGlory dont on veut les données de guerre. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    try {
      War result = apiInstance.getWar(date, javaServer);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiJavaApi#getWar");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **date** | **LocalDate**| Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | |
| **javaServer** | **String**| Serveur NationsGlory dont on veut les données de guerre. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | [enum: blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha, jade] |

### Return type

[**War**](War.md)

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="getWar1"></a>
# **getWar1**
> War getWar1(date, javaServer, warId)

War

Permet d&#39;obtenir la liste des guerres (en cours ou terminées) d&#39;un serveur à une date donnée. Il est possible de spécifier un warId dans l&#39;URL pour récupérer une guerre spécifique.  **Données exposées :** - Identifiant, dates (déclaration, début), raison - Participants (attaquant, défenseur) avec détails (pays, points missiles, progression...) - Conditions de victoire - Récompenses - Détails des assauts et missiles lancés  **Fréquence de mise à jour :** Les données sont actualisées quotidiennement, généralement la nuit. 

### Example
```java
// Import classes:
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.ApiException;
import software.yoxo.client.invoker.Configuration;
import software.yoxo.client.invoker.auth.*;
import software.yoxo.client.invoker.models.*;
import software.yoxo.client.api.ApiJavaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.yoxo.software");
    
    // Configure OAuth2 access token for authorization: oauth2_client_credentials
    OAuth oauth2_client_credentials = (OAuth) defaultClient.getAuthentication("oauth2_client_credentials");
    oauth2_client_credentials.setAccessToken("YOUR ACCESS TOKEN");

    ApiJavaApi apiInstance = new ApiJavaApi(defaultClient);
    LocalDate date = LocalDate.parse("2025-11-24"); // LocalDate | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    String javaServer = "blue"; // String | Serveur NationsGlory dont on veut les données de guerre. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    String warId = "warId_example"; // String | Identifiant de la guerre
    try {
      War result = apiInstance.getWar1(date, javaServer, warId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiJavaApi#getWar1");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **date** | **LocalDate**| Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | |
| **javaServer** | **String**| Serveur NationsGlory dont on veut les données de guerre. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | [enum: blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha, jade] |
| **warId** | **String**| Identifiant de la guerre | |

### Return type

[**War**](War.md)

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="postCountry"></a>
# **postCountry**
> Country postCountry(date, javaServer, postQueryBody)

Country

Permet d&#39;obtenir la liste et les détails complets de tous les pays d&#39;un serveur à une date donnée (avec filtrage possible).  **Données exposées :** - Informations générales (nom, description, niveau, power, claims...) - Relations (alliance, guerres) - Membres (liste, rôles, recrues) - Économie (banque, actions) - Paramètres et permissions  **Fréquence de mise à jour :** Les données sont actualisées tous les jours, généralement la nuit. 

### Example
```java
// Import classes:
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.ApiException;
import software.yoxo.client.invoker.Configuration;
import software.yoxo.client.invoker.auth.*;
import software.yoxo.client.invoker.models.*;
import software.yoxo.client.api.ApiJavaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.yoxo.software");
    
    // Configure OAuth2 access token for authorization: oauth2_client_credentials
    OAuth oauth2_client_credentials = (OAuth) defaultClient.getAuthentication("oauth2_client_credentials");
    oauth2_client_credentials.setAccessToken("YOUR ACCESS TOKEN");

    ApiJavaApi apiInstance = new ApiJavaApi(defaultClient);
    LocalDate date = LocalDate.parse("2025-11-24"); // LocalDate | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    String javaServer = "blue"; // String | Serveur NationsGlory dont on veut les données des pays. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    PostQueryBody postQueryBody = new PostQueryBody(); // PostQueryBody | 
    try {
      Country result = apiInstance.postCountry(date, javaServer, postQueryBody);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiJavaApi#postCountry");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **date** | **LocalDate**| Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | |
| **javaServer** | **String**| Serveur NationsGlory dont on veut les données des pays. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | [enum: blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha, jade] |
| **postQueryBody** | [**PostQueryBody**](PostQueryBody.md)|  | [optional] |

### Return type

[**Country**](Country.md)

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="postEnterprises"></a>
# **postEnterprises**
> Enterprise postEnterprises(date, javaServer, postQueryBody)

Enterprise

Permet d&#39;obtenir la liste de toutes les entreprises sur un serveur à une date donnée. Chaque entreprise contient des champs communs (nom, propriétaire, employés, contrats) et des champs spécifiques selon son type (ex: historique des gains pour les casinos, production pour les centrales électriques).  **Types d&#39;entreprises :** - Casino : Entreprises de casino - Electric : Entreprises électriques - Farm : Entreprises agricoles - Petrol : Entreprises pétrolières - Trader : Entreprises de trading - Bet : Entreprises de paris - RealEstate : Entreprises immobilières (location de parcelles) - Build, Engineer, Terraform, Journalist, PVP, Loan, Repair, Lawyer : Entreprises de services  **Fréquence de mise à jour :** Les données sont actualisées tous les lundis matin. 

### Example
```java
// Import classes:
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.ApiException;
import software.yoxo.client.invoker.Configuration;
import software.yoxo.client.invoker.auth.*;
import software.yoxo.client.invoker.models.*;
import software.yoxo.client.api.ApiJavaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.yoxo.software");
    
    // Configure OAuth2 access token for authorization: oauth2_client_credentials
    OAuth oauth2_client_credentials = (OAuth) defaultClient.getAuthentication("oauth2_client_credentials");
    oauth2_client_credentials.setAccessToken("YOUR ACCESS TOKEN");

    ApiJavaApi apiInstance = new ApiJavaApi(defaultClient);
    LocalDate date = LocalDate.parse("2025-11-24"); // LocalDate | Date des données (format ISO-8601: yyyy-MM-dd)
    String javaServer = "blue"; // String | Serveur NationsGlory
    PostQueryBody postQueryBody = new PostQueryBody(); // PostQueryBody | 
    try {
      Enterprise result = apiInstance.postEnterprises(date, javaServer, postQueryBody);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiJavaApi#postEnterprises");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **date** | **LocalDate**| Date des données (format ISO-8601: yyyy-MM-dd) | |
| **javaServer** | **String**| Serveur NationsGlory | [enum: blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha, jade] |
| **postQueryBody** | [**PostQueryBody**](PostQueryBody.md)|  | [optional] |

### Return type

[**Enterprise**](Enterprise.md)

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="postHalloween2025"></a>
# **postHalloween2025**
> Halloween2025 postHalloween2025(date, postQueryBody)

Halloween 2025

Permet d&#39;obtenir les statistiques des joueurs du top 50 de l&#39;événement Halloween 2025 \&quot;Demon&#39;s Return\&quot; à une date donnée (avec filtrage possible). Seuls les joueurs du top 50 interserveur sont disponibles (limitation du serveur).  **À propos de l&#39;événement :** L&#39;événement \&quot;Demon&#39;s Return\&quot; est un événement global interserveur où l&#39;objectif est de collecter des âmes et tuer des démons pour empêcher l&#39;invasion démoniaque. Le classement est identique sur tous les serveurs puisqu&#39;il s&#39;agit d&#39;un événement global à NationsGlory.  **Fréquence de mise à jour :** Les données sont actualisées quotidiennement pendant toute la durée de l&#39;événement (du 21/10/2025 au 04/11/2025), généralement la nuit.  **Documentation :** Plus d&#39;informations sur l&#39;événement : https://wiki.nationsglory.fr/fr/article/halloween-2025-demons-return-1lfsu05/ 

### Example
```java
// Import classes:
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.ApiException;
import software.yoxo.client.invoker.Configuration;
import software.yoxo.client.invoker.auth.*;
import software.yoxo.client.invoker.models.*;
import software.yoxo.client.api.ApiJavaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.yoxo.software");
    
    // Configure OAuth2 access token for authorization: oauth2_client_credentials
    OAuth oauth2_client_credentials = (OAuth) defaultClient.getAuthentication("oauth2_client_credentials");
    oauth2_client_credentials.setAccessToken("YOUR ACCESS TOKEN");

    ApiJavaApi apiInstance = new ApiJavaApi(defaultClient);
    LocalDate date = LocalDate.parse("2025-10-28"); // LocalDate | Date des données au format ISO-8601 (yyyy-MM-dd). Événement actif du 21/10/2025 au 13/11/2025, données actualisées quotidiennement
    PostQueryBody postQueryBody = new PostQueryBody(); // PostQueryBody | 
    try {
      Halloween2025 result = apiInstance.postHalloween2025(date, postQueryBody);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiJavaApi#postHalloween2025");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **date** | **LocalDate**| Date des données au format ISO-8601 (yyyy-MM-dd). Événement actif du 21/10/2025 au 13/11/2025, données actualisées quotidiennement | |
| **postQueryBody** | [**PostQueryBody**](PostQueryBody.md)|  | [optional] |

### Return type

[**Halloween2025**](Halloween2025.md)

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="postNoelMegagift2024"></a>
# **postNoelMegagift2024**
> NoelMegagift2024 postNoelMegagift2024(postQueryBody)

Noël Megagift 2024

Permet d&#39;obtenir les données des tirages du Mega Cadeau de l&#39;événement \&quot;The Key Guardian\&quot; (Noël 2024).  **À propos de l&#39;événement :** L&#39;événement \&quot;The Key Guardian\&quot; est l&#39;événement de Noël 2024 où les joueurs doivent à récupérer 9 clés perdues pour assembler une Méga Clé et débloquer le Mega Cadeau. Chaque tirage du Mega Cadeau offre jusqu&#39;à 4 récompenses selon le nombre de joueurs présents (armes exclusives, plans rares, items légendaires, cosmétiques).  **Période de l&#39;événement :** Du 24/12/2024 au 12/01/2025  **Données exposées :** Chaque entrée représente un tirage individuel du Mega Gift par un joueur, avec les items obtenus et la date/heure du tirage. 

### Example
```java
// Import classes:
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.ApiException;
import software.yoxo.client.invoker.Configuration;
import software.yoxo.client.invoker.auth.*;
import software.yoxo.client.invoker.models.*;
import software.yoxo.client.api.ApiJavaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.yoxo.software");
    
    // Configure OAuth2 access token for authorization: oauth2_client_credentials
    OAuth oauth2_client_credentials = (OAuth) defaultClient.getAuthentication("oauth2_client_credentials");
    oauth2_client_credentials.setAccessToken("YOUR ACCESS TOKEN");

    ApiJavaApi apiInstance = new ApiJavaApi(defaultClient);
    PostQueryBody postQueryBody = new PostQueryBody(); // PostQueryBody | 
    try {
      NoelMegagift2024 result = apiInstance.postNoelMegagift2024(postQueryBody);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiJavaApi#postNoelMegagift2024");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **postQueryBody** | [**PostQueryBody**](PostQueryBody.md)|  | [optional] |

### Return type

[**NoelMegagift2024**](NoelMegagift2024.md)

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="postNoelMegagift2025"></a>
# **postNoelMegagift2025**
> NoelMegagift2025 postNoelMegagift2025(date, postQueryBody)

Noël Megagift 2025

Permet d&#39;obtenir les données des tirages du Mega Cadeau de l&#39;événement de Noël 2025 (filtrage RSQL possible).  **À propos de l&#39;événement :** Événement interserveur où les joueurs peuvent obtenir des récompenses exclusives via le Mega Cadeau. Plus d&#39;informations sur l&#39;événement : https://wiki.nationsglory.fr/fr/article/lile-du-pere-noel-rv8x0t/#2-le-mega-cadeau-recompense-ultime  **Période de l&#39;événement :** Du 14/12/2025 au 06/01/2026  **Données exposées :** Chaque entrée représente un tirage individuel du Mega cadeau par un joueur, avec les items obtenus et la date/heure du tirage.  **Fréquence de mise à jour :** Les données sont actualisées quotidiennement pendant toute la durée de l&#39;événement (du 14/12/2025 au 06/01/2026), généralement la nuit. 

### Example
```java
// Import classes:
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.ApiException;
import software.yoxo.client.invoker.Configuration;
import software.yoxo.client.invoker.auth.*;
import software.yoxo.client.invoker.models.*;
import software.yoxo.client.api.ApiJavaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.yoxo.software");
    
    // Configure OAuth2 access token for authorization: oauth2_client_credentials
    OAuth oauth2_client_credentials = (OAuth) defaultClient.getAuthentication("oauth2_client_credentials");
    oauth2_client_credentials.setAccessToken("YOUR ACCESS TOKEN");

    ApiJavaApi apiInstance = new ApiJavaApi(defaultClient);
    LocalDate date = LocalDate.parse("2025-11-24"); // LocalDate | Date de la configuration (format ISO-8601: yyyy-MM-dd)
    PostQueryBody postQueryBody = new PostQueryBody(); // PostQueryBody | 
    try {
      NoelMegagift2025 result = apiInstance.postNoelMegagift2025(date, postQueryBody);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiJavaApi#postNoelMegagift2025");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **date** | **LocalDate**| Date de la configuration (format ISO-8601: yyyy-MM-dd) | |
| **postQueryBody** | [**PostQueryBody**](PostQueryBody.md)|  | [optional] |

### Return type

[**NoelMegagift2025**](NoelMegagift2025.md)

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="postPlayerList"></a>
# **postPlayerList**
> PlayerList postPlayerList(date, javaServer, postQueryBody)

Player List

Permet d&#39;obtenir la liste des joueurs s&#39;étant connectés au moins une fois au cours des 14 derniers jours sur un serveur à une date donnée (avec filtrage possible).  **Fréquence de mise à jour :** Les données sont actualisées quotidiennement, généralement la nuit. 

### Example
```java
// Import classes:
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.ApiException;
import software.yoxo.client.invoker.Configuration;
import software.yoxo.client.invoker.auth.*;
import software.yoxo.client.invoker.models.*;
import software.yoxo.client.api.ApiJavaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.yoxo.software");
    
    // Configure OAuth2 access token for authorization: oauth2_client_credentials
    OAuth oauth2_client_credentials = (OAuth) defaultClient.getAuthentication("oauth2_client_credentials");
    oauth2_client_credentials.setAccessToken("YOUR ACCESS TOKEN");

    ApiJavaApi apiInstance = new ApiJavaApi(defaultClient);
    LocalDate date = LocalDate.parse("2025-10-28"); // LocalDate | La date à laquelle on veut récupérer la liste des joueurs (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    String javaServer = "blue"; // String | Serveur NationsGlory dont on veut la liste des joueurs. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    PostQueryBody postQueryBody = new PostQueryBody(); // PostQueryBody | 
    try {
      PlayerList result = apiInstance.postPlayerList(date, javaServer, postQueryBody);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiJavaApi#postPlayerList");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **date** | **LocalDate**| La date à laquelle on veut récupérer la liste des joueurs (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | |
| **javaServer** | **String**| Serveur NationsGlory dont on veut la liste des joueurs. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | [enum: blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha, jade] |
| **postQueryBody** | [**PostQueryBody**](PostQueryBody.md)|  | [optional] |

### Return type

[**PlayerList**](PlayerList.md)

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="postResearchServer"></a>
# **postResearchServer**
> ResearchServer postResearchServer(date, javaServer, postQueryBody)

Research Server

Permet d&#39;obtenir les niveaux de recherche actuels de tous les pays d&#39;un serveur à une date donnée (avec filtrage possible).  **Données exposées :** - Niveaux actuels de recherche par domaine pour chaque pays - Dernière recherche complétée par chaque pays - Valeurs actuelles des conditions de recherche  **Exemples de filtres RSQL :** - &#x60;country&#x3D;&#x3D;Papouasie&#x60; - Pays nommé exactement \&quot;Papouasie\&quot; - &#x60;country&#x3D;&#x3D;*Terre*&#x60; - Pays dont le nom contient \&quot;Terre\&quot; - &#x60;lastResearch.level&gt;3&#x60; - Pays dont la dernière recherche a atteint un niveau &gt; 3 - &#x60;lastResearch.domain&#x3D;&#x3D;militaire&#x60; - Pays dont la dernière recherche était dans le domaine militaire - &#x60;lastResearch.timestamp&gt;1735689600000&#x60; - Pays dont la dernière recherche a été complétée après cette date  **Fréquence de mise à jour :** Les données sont actualisées tous les jours pairs du mois (environ une fois tous les 2 jours), généralement la nuit. 

### Example
```java
// Import classes:
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.ApiException;
import software.yoxo.client.invoker.Configuration;
import software.yoxo.client.invoker.auth.*;
import software.yoxo.client.invoker.models.*;
import software.yoxo.client.api.ApiJavaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.yoxo.software");
    
    // Configure OAuth2 access token for authorization: oauth2_client_credentials
    OAuth oauth2_client_credentials = (OAuth) defaultClient.getAuthentication("oauth2_client_credentials");
    oauth2_client_credentials.setAccessToken("YOUR ACCESS TOKEN");

    ApiJavaApi apiInstance = new ApiJavaApi(defaultClient);
    LocalDate date = LocalDate.parse("2025-11-24"); // LocalDate | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    String javaServer = "blue"; // String | Serveur NationsGlory dont on veut les données de R&D. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    PostQueryBody postQueryBody = new PostQueryBody(); // PostQueryBody | 
    try {
      ResearchServer result = apiInstance.postResearchServer(date, javaServer, postQueryBody);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiJavaApi#postResearchServer");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **date** | **LocalDate**| Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | |
| **javaServer** | **String**| Serveur NationsGlory dont on veut les données de R&amp;D. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | [enum: blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha, jade] |
| **postQueryBody** | [**PostQueryBody**](PostQueryBody.md)|  | [optional] |

### Return type

[**ResearchServer**](ResearchServer.md)

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="postSkill"></a>
# **postSkill**
> Skill postSkill(date, javaServer, postQueryBody)

Skill

Permet d&#39;obtenir les compétences des joueurs présents dans au moins 1 top 50 compétences sur un serveur à une date donnée (avec filtrage possible). Seuls les joueurs figurant dans le top 50 d&#39;au moins une compétence sur le serveur sont inclus pour éviter de surcharger les serveurs.  **Fréquence de mise à jour :** Les données sont actualisées tous les jours pairs du mois (environ une fois tous les 2 jours), généralement la nuit.  **Documentation :** Plus d&#39;informations sur les compétences/skills : https://wiki.nationsglory.fr/fr/article/les-competences-java-1shixp7/ 

### Example
```java
// Import classes:
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.ApiException;
import software.yoxo.client.invoker.Configuration;
import software.yoxo.client.invoker.auth.*;
import software.yoxo.client.invoker.models.*;
import software.yoxo.client.api.ApiJavaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.yoxo.software");
    
    // Configure OAuth2 access token for authorization: oauth2_client_credentials
    OAuth oauth2_client_credentials = (OAuth) defaultClient.getAuthentication("oauth2_client_credentials");
    oauth2_client_credentials.setAccessToken("YOUR ACCESS TOKEN");

    ApiJavaApi apiInstance = new ApiJavaApi(defaultClient);
    LocalDate date = LocalDate.parse("2025-10-28"); // LocalDate | La date à laquelle on veut récupéré les skills (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    String javaServer = "blue"; // String | Serveur NationsGlory dont on veut les skills. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    PostQueryBody postQueryBody = new PostQueryBody(); // PostQueryBody | 
    try {
      Skill result = apiInstance.postSkill(date, javaServer, postQueryBody);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiJavaApi#postSkill");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **date** | **LocalDate**| La date à laquelle on veut récupéré les skills (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | |
| **javaServer** | **String**| Serveur NationsGlory dont on veut les skills. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | [enum: blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha, jade] |
| **postQueryBody** | [**PostQueryBody**](PostQueryBody.md)|  | [optional] |

### Return type

[**Skill**](Skill.md)

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="postWar"></a>
# **postWar**
> War postWar(date, javaServer, postQueryBody)

War

Permet d&#39;obtenir la liste des guerres (en cours ou terminées) d&#39;un serveur à une date donnée (avec filtrage possible).  **Données exposées :** - Identifiant, dates (déclaration, début), raison - Participants (attaquant, défenseur) avec détails (pays, points missiles, progression...) - Conditions de victoire - Récompenses - Détails des assauts et missiles lancés  **Fréquence de mise à jour :** Les données sont actualisées quotidiennement, généralement la nuit. 

### Example
```java
// Import classes:
import software.yoxo.client.invoker.ApiClient;
import software.yoxo.client.invoker.ApiException;
import software.yoxo.client.invoker.Configuration;
import software.yoxo.client.invoker.auth.*;
import software.yoxo.client.invoker.models.*;
import software.yoxo.client.api.ApiJavaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.yoxo.software");
    
    // Configure OAuth2 access token for authorization: oauth2_client_credentials
    OAuth oauth2_client_credentials = (OAuth) defaultClient.getAuthentication("oauth2_client_credentials");
    oauth2_client_credentials.setAccessToken("YOUR ACCESS TOKEN");

    ApiJavaApi apiInstance = new ApiJavaApi(defaultClient);
    LocalDate date = LocalDate.parse("2025-11-24"); // LocalDate | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    String javaServer = "blue"; // String | Serveur NationsGlory dont on veut les données de guerre. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    PostQueryBody postQueryBody = new PostQueryBody(); // PostQueryBody | 
    try {
      War result = apiInstance.postWar(date, javaServer, postQueryBody);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiJavaApi#postWar");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **date** | **LocalDate**| Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | |
| **javaServer** | **String**| Serveur NationsGlory dont on veut les données de guerre. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | [enum: blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha, jade] |
| **postQueryBody** | [**PostQueryBody**](PostQueryBody.md)|  | [optional] |

### Return type

[**War**](War.md)

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


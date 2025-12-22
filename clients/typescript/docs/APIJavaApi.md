# APIJavaApi

All URIs are relative to *https://api.yoxo.software*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCerealGlobalMarket**](#getcerealglobalmarket) | **GET** /v2/java/cereal_global_market/{date}/{javaServer} | Cereal Global Market|
|[**getCountry**](#getcountry) | **GET** /v2/java/country/{date}/{javaServer} | Country|
|[**getCountry1**](#getcountry1) | **GET** /v2/java/country/{date}/{javaServer}/{country} | Country|
|[**getEnterprises**](#getenterprises) | **GET** /v2/java/enterprise/{date}/{javaServer} | Enterprise|
|[**getEnterprises1**](#getenterprises1) | **GET** /v2/java/enterprise/{date}/{javaServer}/{enterpriseName} | Enterprise|
|[**getHalloween2025**](#gethalloween2025) | **GET** /v2/java/halloween-2025/{date} | Halloween 2025|
|[**getNoelMegagift2024**](#getnoelmegagift2024) | **GET** /v2/java/noelmegagift-2024 | Noël Megagift 2024|
|[**getNoelMegagift2025**](#getnoelmegagift2025) | **GET** /v2/java/noelmegagift-2025/{date} | Noël Megagift 2025|
|[**getPlayerList**](#getplayerlist) | **GET** /v2/java/player-list/{date}/{javaServer} | Player List|
|[**getResearchConfig**](#getresearchconfig) | **GET** /v2/java/research/{date}/config | Research Config|
|[**getResearchServer**](#getresearchserver) | **GET** /v2/java/research/{date}/{javaServer} | Research Server|
|[**getSkill**](#getskill) | **GET** /v2/java/skill/{date}/{javaServer} | Skill|
|[**getWar**](#getwar) | **GET** /v2/java/war/{date}/{javaServer} | War|
|[**getWar1**](#getwar1) | **GET** /v2/java/war/{date}/{javaServer}/{warId} | War|
|[**postCountry**](#postcountry) | **POST** /v2/java/country/{date}/{javaServer} | Country|
|[**postEnterprises**](#postenterprises) | **POST** /v2/java/enterprise/{date}/{javaServer} | Enterprise|
|[**postHalloween2025**](#posthalloween2025) | **POST** /v2/java/halloween-2025/{date} | Halloween 2025|
|[**postNoelMegagift2024**](#postnoelmegagift2024) | **POST** /v2/java/noelmegagift-2024 | Noël Megagift 2024|
|[**postNoelMegagift2025**](#postnoelmegagift2025) | **POST** /v2/java/noelmegagift-2025/{date} | Noël Megagift 2025|
|[**postPlayerList**](#postplayerlist) | **POST** /v2/java/player-list/{date}/{javaServer} | Player List|
|[**postResearchServer**](#postresearchserver) | **POST** /v2/java/research/{date}/{javaServer} | Research Server|
|[**postSkill**](#postskill) | **POST** /v2/java/skill/{date}/{javaServer} | Skill|
|[**postWar**](#postwar) | **POST** /v2/java/war/{date}/{javaServer} | War|

# **getCerealGlobalMarket**
> CerealGlobalMarket getCerealGlobalMarket()

Permet d\'obtenir les données du marché global des céréales pour un serveur spécifique à une date donnée.  Ces données incluent : - Les graphiques de l\'évolution des prix, des ventes et des stocks - L\'historique des prix, ventes et stocks par type de céréale - Les prix actuels des céréales  **Fréquence de mise à jour :** Les données sont actualisées tous les jours impairs du mois (environ une fois tous les 2 jours), généralement la nuit.  **Note :** Ces données représentent un objet unique (pas une liste), donc le filtrage et la pagination ne sont pas applicables. 

### Example

```typescript
import {
    APIJavaApi,
    Configuration
} from '@yoxoproject/client';

const configuration = new Configuration();
const apiInstance = new APIJavaApi(configuration);

let date: string; //La date à laquelle on veut récupérer les données du marché des céréales (au format ISO-8601: yyyy-MM-dd) (default to undefined)
let javaServer: 'blue' | 'orange' | 'yellow' | 'white' | 'black' | 'cyan' | 'lime' | 'coral' | 'pink' | 'purple' | 'green' | 'red' | 'mocha' | 'jade'; //Serveur NationsGlory dont on veut les données. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade (default to undefined)

const { status, data } = await apiInstance.getCerealGlobalMarket(
    date,
    javaServer
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] | La date à laquelle on veut récupérer les données du marché des céréales (au format ISO-8601: yyyy-MM-dd) | defaults to undefined|
| **javaServer** | [**&#39;blue&#39; | &#39;orange&#39; | &#39;yellow&#39; | &#39;white&#39; | &#39;black&#39; | &#39;cyan&#39; | &#39;lime&#39; | &#39;coral&#39; | &#39;pink&#39; | &#39;purple&#39; | &#39;green&#39; | &#39;red&#39; | &#39;mocha&#39; | &#39;jade&#39;**]**Array<&#39;blue&#39; &#124; &#39;orange&#39; &#124; &#39;yellow&#39; &#124; &#39;white&#39; &#124; &#39;black&#39; &#124; &#39;cyan&#39; &#124; &#39;lime&#39; &#124; &#39;coral&#39; &#124; &#39;pink&#39; &#124; &#39;purple&#39; &#124; &#39;green&#39; &#124; &#39;red&#39; &#124; &#39;mocha&#39; &#124; &#39;jade&#39;>** | Serveur NationsGlory dont on veut les données. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | defaults to undefined|


### Return type

**CerealGlobalMarket**

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCountry**
> Country getCountry()

Permet d\'obtenir la liste et les détails complets de tous les pays d\'un serveur à une date donnée (aucun filtrage possible). Il est possible de spécifier un pays dans l\'URL pour récupérer un pays spécifique.  **Données exposées :** - Informations générales (nom, description, niveau, power, claims...) - Relations (alliance, guerres) - Membres (liste, rôles, recrues) - Économie (banque, actions) - Paramètres et permissions  **Fréquence de mise à jour :** Les données sont actualisées tous les jours, généralement la nuit. 

### Example

```typescript
import {
    APIJavaApi,
    Configuration
} from '@yoxoproject/client';

const configuration = new Configuration();
const apiInstance = new APIJavaApi(configuration);

let date: string; //Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n\'a été scrap ce jour là, la date antérieure la plus proche sera utilisée (default to undefined)
let javaServer: 'blue' | 'orange' | 'yellow' | 'white' | 'black' | 'cyan' | 'lime' | 'coral' | 'pink' | 'purple' | 'green' | 'red' | 'mocha' | 'jade'; //Serveur NationsGlory dont on veut les données des pays. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade (default to undefined)

const { status, data } = await apiInstance.getCountry(
    date,
    javaServer
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n\&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | defaults to undefined|
| **javaServer** | [**&#39;blue&#39; | &#39;orange&#39; | &#39;yellow&#39; | &#39;white&#39; | &#39;black&#39; | &#39;cyan&#39; | &#39;lime&#39; | &#39;coral&#39; | &#39;pink&#39; | &#39;purple&#39; | &#39;green&#39; | &#39;red&#39; | &#39;mocha&#39; | &#39;jade&#39;**]**Array<&#39;blue&#39; &#124; &#39;orange&#39; &#124; &#39;yellow&#39; &#124; &#39;white&#39; &#124; &#39;black&#39; &#124; &#39;cyan&#39; &#124; &#39;lime&#39; &#124; &#39;coral&#39; &#124; &#39;pink&#39; &#124; &#39;purple&#39; &#124; &#39;green&#39; &#124; &#39;red&#39; &#124; &#39;mocha&#39; &#124; &#39;jade&#39;>** | Serveur NationsGlory dont on veut les données des pays. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | defaults to undefined|


### Return type

**Country**

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCountry1**
> Country getCountry1()

Permet d\'obtenir la liste et les détails complets de tous les pays d\'un serveur à une date donnée (aucun filtrage possible). Il est possible de spécifier un pays dans l\'URL pour récupérer un pays spécifique.  **Données exposées :** - Informations générales (nom, description, niveau, power, claims...) - Relations (alliance, guerres) - Membres (liste, rôles, recrues) - Économie (banque, actions) - Paramètres et permissions  **Fréquence de mise à jour :** Les données sont actualisées tous les jours, généralement la nuit. 

### Example

```typescript
import {
    APIJavaApi,
    Configuration
} from '@yoxoproject/client';

const configuration = new Configuration();
const apiInstance = new APIJavaApi(configuration);

let date: string; //Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n\'a été scrap ce jour là, la date antérieure la plus proche sera utilisée (default to undefined)
let javaServer: 'blue' | 'orange' | 'yellow' | 'white' | 'black' | 'cyan' | 'lime' | 'coral' | 'pink' | 'purple' | 'green' | 'red' | 'mocha' | 'jade'; //Serveur NationsGlory dont on veut les données des pays. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade (default to undefined)
let country: string; //Nom du pays (default to undefined)

const { status, data } = await apiInstance.getCountry1(
    date,
    javaServer,
    country
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n\&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | defaults to undefined|
| **javaServer** | [**&#39;blue&#39; | &#39;orange&#39; | &#39;yellow&#39; | &#39;white&#39; | &#39;black&#39; | &#39;cyan&#39; | &#39;lime&#39; | &#39;coral&#39; | &#39;pink&#39; | &#39;purple&#39; | &#39;green&#39; | &#39;red&#39; | &#39;mocha&#39; | &#39;jade&#39;**]**Array<&#39;blue&#39; &#124; &#39;orange&#39; &#124; &#39;yellow&#39; &#124; &#39;white&#39; &#124; &#39;black&#39; &#124; &#39;cyan&#39; &#124; &#39;lime&#39; &#124; &#39;coral&#39; &#124; &#39;pink&#39; &#124; &#39;purple&#39; &#124; &#39;green&#39; &#124; &#39;red&#39; &#124; &#39;mocha&#39; &#124; &#39;jade&#39;>** | Serveur NationsGlory dont on veut les données des pays. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | defaults to undefined|
| **country** | [**string**] | Nom du pays | defaults to undefined|


### Return type

**Country**

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEnterprises**
> Enterprise getEnterprises()

Permet d\'obtenir la liste de toutes les entreprises sur un serveur à une date donnée. Chaque entreprise contient des champs communs (nom, propriétaire, employés, contrats) et des champs spécifiques selon son type (ex: historique des gains pour les casinos, production pour les centrales électriques). Il est possible de filtrer par nom d\'entreprise.  **Types d\'entreprises :** - Casino : Entreprises de casino - Electric : Entreprises électriques - Farm : Entreprises agricoles - Petrol : Entreprises pétrolières - Trader : Entreprises de trading - Bet : Entreprises de paris - RealEstate : Entreprises immobilières (location de parcelles) - Build, Engineer, Terraform, Journalist, PVP, Loan, Repair, Lawyer : Entreprises de services  **Fréquence de mise à jour :** Les données sont actualisées tous les lundis matin. 

### Example

```typescript
import {
    APIJavaApi,
    Configuration
} from '@yoxoproject/client';

const configuration = new Configuration();
const apiInstance = new APIJavaApi(configuration);

let date: string; //Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n\'a été scrap ce jour là, la date antérieure la plus proche sera utilisée (default to undefined)
let javaServer: 'blue' | 'orange' | 'yellow' | 'white' | 'black' | 'cyan' | 'lime' | 'coral' | 'pink' | 'purple' | 'green' | 'red' | 'mocha' | 'jade'; //Serveur NationsGlory dont on veut les données d\'entreprises. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade (default to undefined)
let enterpriseType: 'build' | 'engineer' | 'terraform' | 'journalist' | 'casino' | 'pvp' | 'loan' | 'realestate' | 'trader' | 'bet' | 'repair' | 'lawyer' | 'electric' | 'petrol' | 'farm'; //Type d\'entreprise (optional) (default to undefined)

const { status, data } = await apiInstance.getEnterprises(
    date,
    javaServer,
    enterpriseType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n\&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | defaults to undefined|
| **javaServer** | [**&#39;blue&#39; | &#39;orange&#39; | &#39;yellow&#39; | &#39;white&#39; | &#39;black&#39; | &#39;cyan&#39; | &#39;lime&#39; | &#39;coral&#39; | &#39;pink&#39; | &#39;purple&#39; | &#39;green&#39; | &#39;red&#39; | &#39;mocha&#39; | &#39;jade&#39;**]**Array<&#39;blue&#39; &#124; &#39;orange&#39; &#124; &#39;yellow&#39; &#124; &#39;white&#39; &#124; &#39;black&#39; &#124; &#39;cyan&#39; &#124; &#39;lime&#39; &#124; &#39;coral&#39; &#124; &#39;pink&#39; &#124; &#39;purple&#39; &#124; &#39;green&#39; &#124; &#39;red&#39; &#124; &#39;mocha&#39; &#124; &#39;jade&#39;>** | Serveur NationsGlory dont on veut les données d\&#39;entreprises. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | defaults to undefined|
| **enterpriseType** | [**&#39;build&#39; | &#39;engineer&#39; | &#39;terraform&#39; | &#39;journalist&#39; | &#39;casino&#39; | &#39;pvp&#39; | &#39;loan&#39; | &#39;realestate&#39; | &#39;trader&#39; | &#39;bet&#39; | &#39;repair&#39; | &#39;lawyer&#39; | &#39;electric&#39; | &#39;petrol&#39; | &#39;farm&#39;**]**Array<&#39;build&#39; &#124; &#39;engineer&#39; &#124; &#39;terraform&#39; &#124; &#39;journalist&#39; &#124; &#39;casino&#39; &#124; &#39;pvp&#39; &#124; &#39;loan&#39; &#124; &#39;realestate&#39; &#124; &#39;trader&#39; &#124; &#39;bet&#39; &#124; &#39;repair&#39; &#124; &#39;lawyer&#39; &#124; &#39;electric&#39; &#124; &#39;petrol&#39; &#124; &#39;farm&#39;>** | Type d\&#39;entreprise | (optional) defaults to undefined|


### Return type

**Enterprise**

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEnterprises1**
> Enterprise getEnterprises1()

Permet d\'obtenir la liste de toutes les entreprises sur un serveur à une date donnée. Chaque entreprise contient des champs communs (nom, propriétaire, employés, contrats) et des champs spécifiques selon son type (ex: historique des gains pour les casinos, production pour les centrales électriques). Il est possible de filtrer par nom d\'entreprise.  **Types d\'entreprises :** - Casino : Entreprises de casino - Electric : Entreprises électriques - Farm : Entreprises agricoles - Petrol : Entreprises pétrolières - Trader : Entreprises de trading - Bet : Entreprises de paris - RealEstate : Entreprises immobilières (location de parcelles) - Build, Engineer, Terraform, Journalist, PVP, Loan, Repair, Lawyer : Entreprises de services  **Fréquence de mise à jour :** Les données sont actualisées tous les lundis matin. 

### Example

```typescript
import {
    APIJavaApi,
    Configuration
} from '@yoxoproject/client';

const configuration = new Configuration();
const apiInstance = new APIJavaApi(configuration);

let date: string; //Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n\'a été scrap ce jour là, la date antérieure la plus proche sera utilisée (default to undefined)
let javaServer: 'blue' | 'orange' | 'yellow' | 'white' | 'black' | 'cyan' | 'lime' | 'coral' | 'pink' | 'purple' | 'green' | 'red' | 'mocha' | 'jade'; //Serveur NationsGlory dont on veut les données d\'entreprises. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade (default to undefined)
let enterpriseName: string; //Nom de l\'entreprise (default to undefined)
let enterpriseType: 'build' | 'engineer' | 'terraform' | 'journalist' | 'casino' | 'pvp' | 'loan' | 'realestate' | 'trader' | 'bet' | 'repair' | 'lawyer' | 'electric' | 'petrol' | 'farm'; //Type d\'entreprise (optional) (default to undefined)

const { status, data } = await apiInstance.getEnterprises1(
    date,
    javaServer,
    enterpriseName,
    enterpriseType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n\&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | defaults to undefined|
| **javaServer** | [**&#39;blue&#39; | &#39;orange&#39; | &#39;yellow&#39; | &#39;white&#39; | &#39;black&#39; | &#39;cyan&#39; | &#39;lime&#39; | &#39;coral&#39; | &#39;pink&#39; | &#39;purple&#39; | &#39;green&#39; | &#39;red&#39; | &#39;mocha&#39; | &#39;jade&#39;**]**Array<&#39;blue&#39; &#124; &#39;orange&#39; &#124; &#39;yellow&#39; &#124; &#39;white&#39; &#124; &#39;black&#39; &#124; &#39;cyan&#39; &#124; &#39;lime&#39; &#124; &#39;coral&#39; &#124; &#39;pink&#39; &#124; &#39;purple&#39; &#124; &#39;green&#39; &#124; &#39;red&#39; &#124; &#39;mocha&#39; &#124; &#39;jade&#39;>** | Serveur NationsGlory dont on veut les données d\&#39;entreprises. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | defaults to undefined|
| **enterpriseName** | [**string**] | Nom de l\&#39;entreprise | defaults to undefined|
| **enterpriseType** | [**&#39;build&#39; | &#39;engineer&#39; | &#39;terraform&#39; | &#39;journalist&#39; | &#39;casino&#39; | &#39;pvp&#39; | &#39;loan&#39; | &#39;realestate&#39; | &#39;trader&#39; | &#39;bet&#39; | &#39;repair&#39; | &#39;lawyer&#39; | &#39;electric&#39; | &#39;petrol&#39; | &#39;farm&#39;**]**Array<&#39;build&#39; &#124; &#39;engineer&#39; &#124; &#39;terraform&#39; &#124; &#39;journalist&#39; &#124; &#39;casino&#39; &#124; &#39;pvp&#39; &#124; &#39;loan&#39; &#124; &#39;realestate&#39; &#124; &#39;trader&#39; &#124; &#39;bet&#39; &#124; &#39;repair&#39; &#124; &#39;lawyer&#39; &#124; &#39;electric&#39; &#124; &#39;petrol&#39; &#124; &#39;farm&#39;>** | Type d\&#39;entreprise | (optional) defaults to undefined|


### Return type

**Enterprise**

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getHalloween2025**
> Halloween2025 getHalloween2025()

Permet d\'obtenir les statistiques des joueurs du top 50 de l\'événement Halloween 2025 \"Demon\'s Return\" à une date donnée (aucun filtrage possible). Seuls les joueurs du top 50 interserveur sont accessibles (limitation du serveur).  **À propos de l\'événement :** L\'événement \"Demon\'s Return\" est un événement global interserveur où l\'objectif est de collecter des âmes et tuer des démons pour empêcher l\'invasion démoniaque. Le classement est identique sur tous les serveurs puisqu\'il s\'agit d\'un événement global à NationsGlory.  **Fréquence de mise à jour :** Les données sont actualisées quotidiennement pendant toute la durée de l\'événement (du 21/10/2025 au 04/11/2025), généralement la nuit.  **Documentation :** Plus d\'informations sur l\'événement : https://wiki.nationsglory.fr/fr/article/halloween-2025-demons-return-1lfsu05/ 

### Example

```typescript
import {
    APIJavaApi,
    Configuration
} from '@yoxoproject/client';

const configuration = new Configuration();
const apiInstance = new APIJavaApi(configuration);

let date: string; //Date des données au format ISO-8601 (yyyy-MM-dd). Événement actif du 21/10/2025 au 13/11/2025, données actualisées quotidiennement (default to undefined)

const { status, data } = await apiInstance.getHalloween2025(
    date
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] | Date des données au format ISO-8601 (yyyy-MM-dd). Événement actif du 21/10/2025 au 13/11/2025, données actualisées quotidiennement | defaults to undefined|


### Return type

**Halloween2025**

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNoelMegagift2024**
> NoelMegagift2024 getNoelMegagift2024()

Permet d\'obtenir les données des tirages du Mega Cadeau de l\'événement \"The Key Guardian\" (Noël 2024).  **À propos de l\'événement :** L\'événement \"The Key Guardian\" est l\'événement de Noël 2024 où les joueurs doivent à récupérer 9 clés perdues pour assembler une Méga Clé et débloquer le Mega Cadeau. Chaque tirage du Mega Cadeau offre jusqu\'à 4 récompenses selon le nombre de joueurs présents (armes exclusives, plans rares, items légendaires, cosmétiques).  **Période de l\'événement :** Du 24/12/2024 au 12/01/2025  **Données exposées :** Chaque entrée représente un tirage individuel du Mega Gift par un joueur, avec les items obtenus et la date/heure du tirage. 

### Example

```typescript
import {
    APIJavaApi,
    Configuration
} from '@yoxoproject/client';

const configuration = new Configuration();
const apiInstance = new APIJavaApi(configuration);

const { status, data } = await apiInstance.getNoelMegagift2024();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**NoelMegagift2024**

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNoelMegagift2025**
> NoelMegagift2025 getNoelMegagift2025()

Permet d\'obtenir les données des tirages du Mega Cadeau de l\'événement de Noël 2025.  **À propos de l\'événement :** Événement interserveur où les joueurs peuvent obtenir des récompenses exclusives via le Mega Cadeau. Plus d\'informations sur l\'événement : https://wiki.nationsglory.fr/fr/article/lile-du-pere-noel-rv8x0t/#2-le-mega-cadeau-recompense-ultime  **Période de l\'événement :** Du 14/12/2025 au 06/01/2026  **Données exposées :** Chaque entrée représente un tirage individuel du Mega cadeau par un joueur, avec les items obtenus et la date/heure du tirage.  **Fréquence de mise à jour :** Les données sont actualisées quotidiennement pendant toute la durée de l\'événement (du 14/12/2025 au 06/01/2026), généralement la nuit. 

### Example

```typescript
import {
    APIJavaApi,
    Configuration
} from '@yoxoproject/client';

const configuration = new Configuration();
const apiInstance = new APIJavaApi(configuration);

let date: string; //Date de la configuration (format ISO-8601: yyyy-MM-dd) (default to undefined)

const { status, data } = await apiInstance.getNoelMegagift2025(
    date
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] | Date de la configuration (format ISO-8601: yyyy-MM-dd) | defaults to undefined|


### Return type

**NoelMegagift2025**

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPlayerList**
> PlayerList getPlayerList()

Permet d\'obtenir la liste des joueurs s\'étant connectés au moins une fois au cours des 14 derniers jours sur un serveur à une date donnée (aucun filtrage possible).  **Fréquence de mise à jour :** Les données sont actualisées quotidiennement, généralement la nuit. 

### Example

```typescript
import {
    APIJavaApi,
    Configuration
} from '@yoxoproject/client';

const configuration = new Configuration();
const apiInstance = new APIJavaApi(configuration);

let date: string; //La date à laquelle on veut récupérer la liste des joueurs (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n\'a été scrap ce jour là, la date antérieure la plus proche sera utilisée (default to undefined)
let javaServer: 'blue' | 'orange' | 'yellow' | 'white' | 'black' | 'cyan' | 'lime' | 'coral' | 'pink' | 'purple' | 'green' | 'red' | 'mocha' | 'jade'; //Serveur NationsGlory dont on veut la liste des joueurs. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade (default to undefined)

const { status, data } = await apiInstance.getPlayerList(
    date,
    javaServer
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] | La date à laquelle on veut récupérer la liste des joueurs (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n\&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | defaults to undefined|
| **javaServer** | [**&#39;blue&#39; | &#39;orange&#39; | &#39;yellow&#39; | &#39;white&#39; | &#39;black&#39; | &#39;cyan&#39; | &#39;lime&#39; | &#39;coral&#39; | &#39;pink&#39; | &#39;purple&#39; | &#39;green&#39; | &#39;red&#39; | &#39;mocha&#39; | &#39;jade&#39;**]**Array<&#39;blue&#39; &#124; &#39;orange&#39; &#124; &#39;yellow&#39; &#124; &#39;white&#39; &#124; &#39;black&#39; &#124; &#39;cyan&#39; &#124; &#39;lime&#39; &#124; &#39;coral&#39; &#124; &#39;pink&#39; &#124; &#39;purple&#39; &#124; &#39;green&#39; &#124; &#39;red&#39; &#124; &#39;mocha&#39; &#124; &#39;jade&#39;>** | Serveur NationsGlory dont on veut la liste des joueurs. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | defaults to undefined|


### Return type

**PlayerList**

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getResearchConfig**
> ResearchConfig getResearchConfig()

Permet d\'obtenir la configuration globale de tous les domaines de recherche disponibles dans NationsGlory. Cette configuration est identique pour tous les serveurs et définit les niveaux, conditions et récompenses.  **Contenu de la configuration :** - Noms et descriptions des domaines de recherche - Niveaux maximum par domaine - Conditions requises par niveau - Récompenses obtenues par niveau - Durées de recherche  **Fréquence de mise à jour :** Les données sont actualisées tous les jours impairs du mois (environ une fois tous les 2 jours), généralement la nuit. 

### Example

```typescript
import {
    APIJavaApi,
    Configuration
} from '@yoxoproject/client';

const configuration = new Configuration();
const apiInstance = new APIJavaApi(configuration);

let date: string; //Date de la configuration (format ISO-8601: yyyy-MM-dd) (default to undefined)

const { status, data } = await apiInstance.getResearchConfig(
    date
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] | Date de la configuration (format ISO-8601: yyyy-MM-dd) | defaults to undefined|


### Return type

**ResearchConfig**

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getResearchServer**
> ResearchServer getResearchServer()

Permet d\'obtenir les niveaux de recherche actuels de tous les pays d\'un serveur à une date donnée (sans filtrage).  **Données exposées :** - Niveaux actuels de recherche par domaine pour chaque pays - Dernière recherche complétée par chaque pays - Valeurs actuelles des conditions de recherche  **Fréquence de mise à jour :** Les données sont actualisées tous les jours impairs du mois (environ une fois tous les 2 jours), généralement la nuit. 

### Example

```typescript
import {
    APIJavaApi,
    Configuration
} from '@yoxoproject/client';

const configuration = new Configuration();
const apiInstance = new APIJavaApi(configuration);

let date: string; //Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n\'a été scrap ce jour là, la date antérieure la plus proche sera utilisée (default to undefined)
let javaServer: 'blue' | 'orange' | 'yellow' | 'white' | 'black' | 'cyan' | 'lime' | 'coral' | 'pink' | 'purple' | 'green' | 'red' | 'mocha' | 'jade'; //Serveur NationsGlory dont on veut les données de R&D. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade (default to undefined)

const { status, data } = await apiInstance.getResearchServer(
    date,
    javaServer
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n\&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | defaults to undefined|
| **javaServer** | [**&#39;blue&#39; | &#39;orange&#39; | &#39;yellow&#39; | &#39;white&#39; | &#39;black&#39; | &#39;cyan&#39; | &#39;lime&#39; | &#39;coral&#39; | &#39;pink&#39; | &#39;purple&#39; | &#39;green&#39; | &#39;red&#39; | &#39;mocha&#39; | &#39;jade&#39;**]**Array<&#39;blue&#39; &#124; &#39;orange&#39; &#124; &#39;yellow&#39; &#124; &#39;white&#39; &#124; &#39;black&#39; &#124; &#39;cyan&#39; &#124; &#39;lime&#39; &#124; &#39;coral&#39; &#124; &#39;pink&#39; &#124; &#39;purple&#39; &#124; &#39;green&#39; &#124; &#39;red&#39; &#124; &#39;mocha&#39; &#124; &#39;jade&#39;>** | Serveur NationsGlory dont on veut les données de R&amp;D. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | defaults to undefined|


### Return type

**ResearchServer**

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSkill**
> Skill getSkill()

Permet d\'obtenir les compétences des joueurs présents dans au moins 1 top 50 compétences sur un serveur à une date donnée (aucun filtrage possible). Seuls les joueurs figurant dans le top 50 d\'au moins une compétence sur le serveur sont inclus pour éviter de surcharger les serveurs.  **Fréquence de mise à jour :** Les données sont actualisées tous les jours pairs du mois (environ une fois tous les 2 jours), généralement la nuit.  **Documentation :** Plus d\'informations sur les compétences/skills : https://wiki.nationsglory.fr/fr/article/les-competences-java-1shixp7/ 

### Example

```typescript
import {
    APIJavaApi,
    Configuration
} from '@yoxoproject/client';

const configuration = new Configuration();
const apiInstance = new APIJavaApi(configuration);

let date: string; //La date à laquelle on veut récupéré les skills (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n\'a été scrap ce jour là, la date antérieure la plus proche sera utilisée (default to undefined)
let javaServer: 'blue' | 'orange' | 'yellow' | 'white' | 'black' | 'cyan' | 'lime' | 'coral' | 'pink' | 'purple' | 'green' | 'red' | 'mocha' | 'jade'; //Serveur NationsGlory dont on veut les skills. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade (default to undefined)

const { status, data } = await apiInstance.getSkill(
    date,
    javaServer
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] | La date à laquelle on veut récupéré les skills (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n\&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | defaults to undefined|
| **javaServer** | [**&#39;blue&#39; | &#39;orange&#39; | &#39;yellow&#39; | &#39;white&#39; | &#39;black&#39; | &#39;cyan&#39; | &#39;lime&#39; | &#39;coral&#39; | &#39;pink&#39; | &#39;purple&#39; | &#39;green&#39; | &#39;red&#39; | &#39;mocha&#39; | &#39;jade&#39;**]**Array<&#39;blue&#39; &#124; &#39;orange&#39; &#124; &#39;yellow&#39; &#124; &#39;white&#39; &#124; &#39;black&#39; &#124; &#39;cyan&#39; &#124; &#39;lime&#39; &#124; &#39;coral&#39; &#124; &#39;pink&#39; &#124; &#39;purple&#39; &#124; &#39;green&#39; &#124; &#39;red&#39; &#124; &#39;mocha&#39; &#124; &#39;jade&#39;>** | Serveur NationsGlory dont on veut les skills. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | defaults to undefined|


### Return type

**Skill**

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWar**
> War getWar()

Permet d\'obtenir la liste des guerres (en cours ou terminées) d\'un serveur à une date donnée. Il est possible de spécifier un warId dans l\'URL pour récupérer une guerre spécifique.  **Données exposées :** - Identifiant, dates (déclaration, début), raison - Participants (attaquant, défenseur) avec détails (pays, points missiles, progression...) - Conditions de victoire - Récompenses - Détails des assauts et missiles lancés  **Fréquence de mise à jour :** Les données sont actualisées quotidiennement, généralement la nuit. 

### Example

```typescript
import {
    APIJavaApi,
    Configuration
} from '@yoxoproject/client';

const configuration = new Configuration();
const apiInstance = new APIJavaApi(configuration);

let date: string; //Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n\'a été scrap ce jour là, la date antérieure la plus proche sera utilisée (default to undefined)
let javaServer: 'blue' | 'orange' | 'yellow' | 'white' | 'black' | 'cyan' | 'lime' | 'coral' | 'pink' | 'purple' | 'green' | 'red' | 'mocha' | 'jade'; //Serveur NationsGlory dont on veut les données de guerre. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade (default to undefined)

const { status, data } = await apiInstance.getWar(
    date,
    javaServer
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n\&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | defaults to undefined|
| **javaServer** | [**&#39;blue&#39; | &#39;orange&#39; | &#39;yellow&#39; | &#39;white&#39; | &#39;black&#39; | &#39;cyan&#39; | &#39;lime&#39; | &#39;coral&#39; | &#39;pink&#39; | &#39;purple&#39; | &#39;green&#39; | &#39;red&#39; | &#39;mocha&#39; | &#39;jade&#39;**]**Array<&#39;blue&#39; &#124; &#39;orange&#39; &#124; &#39;yellow&#39; &#124; &#39;white&#39; &#124; &#39;black&#39; &#124; &#39;cyan&#39; &#124; &#39;lime&#39; &#124; &#39;coral&#39; &#124; &#39;pink&#39; &#124; &#39;purple&#39; &#124; &#39;green&#39; &#124; &#39;red&#39; &#124; &#39;mocha&#39; &#124; &#39;jade&#39;>** | Serveur NationsGlory dont on veut les données de guerre. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | defaults to undefined|


### Return type

**War**

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWar1**
> War getWar1()

Permet d\'obtenir la liste des guerres (en cours ou terminées) d\'un serveur à une date donnée. Il est possible de spécifier un warId dans l\'URL pour récupérer une guerre spécifique.  **Données exposées :** - Identifiant, dates (déclaration, début), raison - Participants (attaquant, défenseur) avec détails (pays, points missiles, progression...) - Conditions de victoire - Récompenses - Détails des assauts et missiles lancés  **Fréquence de mise à jour :** Les données sont actualisées quotidiennement, généralement la nuit. 

### Example

```typescript
import {
    APIJavaApi,
    Configuration
} from '@yoxoproject/client';

const configuration = new Configuration();
const apiInstance = new APIJavaApi(configuration);

let date: string; //Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n\'a été scrap ce jour là, la date antérieure la plus proche sera utilisée (default to undefined)
let javaServer: 'blue' | 'orange' | 'yellow' | 'white' | 'black' | 'cyan' | 'lime' | 'coral' | 'pink' | 'purple' | 'green' | 'red' | 'mocha' | 'jade'; //Serveur NationsGlory dont on veut les données de guerre. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade (default to undefined)
let warId: string; //Identifiant de la guerre (default to undefined)

const { status, data } = await apiInstance.getWar1(
    date,
    javaServer,
    warId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n\&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | defaults to undefined|
| **javaServer** | [**&#39;blue&#39; | &#39;orange&#39; | &#39;yellow&#39; | &#39;white&#39; | &#39;black&#39; | &#39;cyan&#39; | &#39;lime&#39; | &#39;coral&#39; | &#39;pink&#39; | &#39;purple&#39; | &#39;green&#39; | &#39;red&#39; | &#39;mocha&#39; | &#39;jade&#39;**]**Array<&#39;blue&#39; &#124; &#39;orange&#39; &#124; &#39;yellow&#39; &#124; &#39;white&#39; &#124; &#39;black&#39; &#124; &#39;cyan&#39; &#124; &#39;lime&#39; &#124; &#39;coral&#39; &#124; &#39;pink&#39; &#124; &#39;purple&#39; &#124; &#39;green&#39; &#124; &#39;red&#39; &#124; &#39;mocha&#39; &#124; &#39;jade&#39;>** | Serveur NationsGlory dont on veut les données de guerre. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | defaults to undefined|
| **warId** | [**string**] | Identifiant de la guerre | defaults to undefined|


### Return type

**War**

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postCountry**
> Country postCountry()

Permet d\'obtenir la liste et les détails complets de tous les pays d\'un serveur à une date donnée (avec filtrage possible).  **Données exposées :** - Informations générales (nom, description, niveau, power, claims...) - Relations (alliance, guerres) - Membres (liste, rôles, recrues) - Économie (banque, actions) - Paramètres et permissions  **Fréquence de mise à jour :** Les données sont actualisées tous les jours, généralement la nuit. 

### Example

```typescript
import {
    APIJavaApi,
    Configuration,
    PostQueryBody
} from '@yoxoproject/client';

const configuration = new Configuration();
const apiInstance = new APIJavaApi(configuration);

let date: string; //Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n\'a été scrap ce jour là, la date antérieure la plus proche sera utilisée (default to undefined)
let javaServer: 'blue' | 'orange' | 'yellow' | 'white' | 'black' | 'cyan' | 'lime' | 'coral' | 'pink' | 'purple' | 'green' | 'red' | 'mocha' | 'jade'; //Serveur NationsGlory dont on veut les données des pays. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade (default to undefined)
let postQueryBody: PostQueryBody; // (optional)

const { status, data } = await apiInstance.postCountry(
    date,
    javaServer,
    postQueryBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postQueryBody** | **PostQueryBody**|  | |
| **date** | [**string**] | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n\&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | defaults to undefined|
| **javaServer** | [**&#39;blue&#39; | &#39;orange&#39; | &#39;yellow&#39; | &#39;white&#39; | &#39;black&#39; | &#39;cyan&#39; | &#39;lime&#39; | &#39;coral&#39; | &#39;pink&#39; | &#39;purple&#39; | &#39;green&#39; | &#39;red&#39; | &#39;mocha&#39; | &#39;jade&#39;**]**Array<&#39;blue&#39; &#124; &#39;orange&#39; &#124; &#39;yellow&#39; &#124; &#39;white&#39; &#124; &#39;black&#39; &#124; &#39;cyan&#39; &#124; &#39;lime&#39; &#124; &#39;coral&#39; &#124; &#39;pink&#39; &#124; &#39;purple&#39; &#124; &#39;green&#39; &#124; &#39;red&#39; &#124; &#39;mocha&#39; &#124; &#39;jade&#39;>** | Serveur NationsGlory dont on veut les données des pays. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | defaults to undefined|


### Return type

**Country**

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postEnterprises**
> Enterprise postEnterprises()

Permet d\'obtenir la liste de toutes les entreprises sur un serveur à une date donnée. Chaque entreprise contient des champs communs (nom, propriétaire, employés, contrats) et des champs spécifiques selon son type (ex: historique des gains pour les casinos, production pour les centrales électriques).  **Types d\'entreprises :** - Casino : Entreprises de casino - Electric : Entreprises électriques - Farm : Entreprises agricoles - Petrol : Entreprises pétrolières - Trader : Entreprises de trading - Bet : Entreprises de paris - RealEstate : Entreprises immobilières (location de parcelles) - Build, Engineer, Terraform, Journalist, PVP, Loan, Repair, Lawyer : Entreprises de services  **Fréquence de mise à jour :** Les données sont actualisées tous les lundis matin. 

### Example

```typescript
import {
    APIJavaApi,
    Configuration,
    PostQueryBody
} from '@yoxoproject/client';

const configuration = new Configuration();
const apiInstance = new APIJavaApi(configuration);

let date: string; //Date des données (format ISO-8601: yyyy-MM-dd) (default to undefined)
let javaServer: 'blue' | 'orange' | 'yellow' | 'white' | 'black' | 'cyan' | 'lime' | 'coral' | 'pink' | 'purple' | 'green' | 'red' | 'mocha' | 'jade'; //Serveur NationsGlory (default to undefined)
let postQueryBody: PostQueryBody; // (optional)

const { status, data } = await apiInstance.postEnterprises(
    date,
    javaServer,
    postQueryBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postQueryBody** | **PostQueryBody**|  | |
| **date** | [**string**] | Date des données (format ISO-8601: yyyy-MM-dd) | defaults to undefined|
| **javaServer** | [**&#39;blue&#39; | &#39;orange&#39; | &#39;yellow&#39; | &#39;white&#39; | &#39;black&#39; | &#39;cyan&#39; | &#39;lime&#39; | &#39;coral&#39; | &#39;pink&#39; | &#39;purple&#39; | &#39;green&#39; | &#39;red&#39; | &#39;mocha&#39; | &#39;jade&#39;**]**Array<&#39;blue&#39; &#124; &#39;orange&#39; &#124; &#39;yellow&#39; &#124; &#39;white&#39; &#124; &#39;black&#39; &#124; &#39;cyan&#39; &#124; &#39;lime&#39; &#124; &#39;coral&#39; &#124; &#39;pink&#39; &#124; &#39;purple&#39; &#124; &#39;green&#39; &#124; &#39;red&#39; &#124; &#39;mocha&#39; &#124; &#39;jade&#39;>** | Serveur NationsGlory | defaults to undefined|


### Return type

**Enterprise**

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postHalloween2025**
> Halloween2025 postHalloween2025()

Permet d\'obtenir les statistiques des joueurs du top 50 de l\'événement Halloween 2025 \"Demon\'s Return\" à une date donnée (avec filtrage possible). Seuls les joueurs du top 50 interserveur sont disponibles (limitation du serveur).  **À propos de l\'événement :** L\'événement \"Demon\'s Return\" est un événement global interserveur où l\'objectif est de collecter des âmes et tuer des démons pour empêcher l\'invasion démoniaque. Le classement est identique sur tous les serveurs puisqu\'il s\'agit d\'un événement global à NationsGlory.  **Fréquence de mise à jour :** Les données sont actualisées quotidiennement pendant toute la durée de l\'événement (du 21/10/2025 au 04/11/2025), généralement la nuit.  **Documentation :** Plus d\'informations sur l\'événement : https://wiki.nationsglory.fr/fr/article/halloween-2025-demons-return-1lfsu05/ 

### Example

```typescript
import {
    APIJavaApi,
    Configuration,
    PostQueryBody
} from '@yoxoproject/client';

const configuration = new Configuration();
const apiInstance = new APIJavaApi(configuration);

let date: string; //Date des données au format ISO-8601 (yyyy-MM-dd). Événement actif du 21/10/2025 au 13/11/2025, données actualisées quotidiennement (default to undefined)
let postQueryBody: PostQueryBody; // (optional)

const { status, data } = await apiInstance.postHalloween2025(
    date,
    postQueryBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postQueryBody** | **PostQueryBody**|  | |
| **date** | [**string**] | Date des données au format ISO-8601 (yyyy-MM-dd). Événement actif du 21/10/2025 au 13/11/2025, données actualisées quotidiennement | defaults to undefined|


### Return type

**Halloween2025**

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postNoelMegagift2024**
> NoelMegagift2024 postNoelMegagift2024()

Permet d\'obtenir les données des tirages du Mega Cadeau de l\'événement \"The Key Guardian\" (Noël 2024).  **À propos de l\'événement :** L\'événement \"The Key Guardian\" est l\'événement de Noël 2024 où les joueurs doivent à récupérer 9 clés perdues pour assembler une Méga Clé et débloquer le Mega Cadeau. Chaque tirage du Mega Cadeau offre jusqu\'à 4 récompenses selon le nombre de joueurs présents (armes exclusives, plans rares, items légendaires, cosmétiques).  **Période de l\'événement :** Du 24/12/2024 au 12/01/2025  **Données exposées :** Chaque entrée représente un tirage individuel du Mega Gift par un joueur, avec les items obtenus et la date/heure du tirage. 

### Example

```typescript
import {
    APIJavaApi,
    Configuration,
    PostQueryBody
} from '@yoxoproject/client';

const configuration = new Configuration();
const apiInstance = new APIJavaApi(configuration);

let postQueryBody: PostQueryBody; // (optional)

const { status, data } = await apiInstance.postNoelMegagift2024(
    postQueryBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postQueryBody** | **PostQueryBody**|  | |


### Return type

**NoelMegagift2024**

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postNoelMegagift2025**
> NoelMegagift2025 postNoelMegagift2025()

Permet d\'obtenir les données des tirages du Mega Cadeau de l\'événement de Noël 2025 (filtrage RSQL possible).  **À propos de l\'événement :** Événement interserveur où les joueurs peuvent obtenir des récompenses exclusives via le Mega Cadeau. Plus d\'informations sur l\'événement : https://wiki.nationsglory.fr/fr/article/lile-du-pere-noel-rv8x0t/#2-le-mega-cadeau-recompense-ultime  **Période de l\'événement :** Du 14/12/2025 au 06/01/2026  **Données exposées :** Chaque entrée représente un tirage individuel du Mega cadeau par un joueur, avec les items obtenus et la date/heure du tirage.  **Fréquence de mise à jour :** Les données sont actualisées quotidiennement pendant toute la durée de l\'événement (du 14/12/2025 au 06/01/2026), généralement la nuit. 

### Example

```typescript
import {
    APIJavaApi,
    Configuration,
    PostQueryBody
} from '@yoxoproject/client';

const configuration = new Configuration();
const apiInstance = new APIJavaApi(configuration);

let date: string; //Date de la configuration (format ISO-8601: yyyy-MM-dd) (default to undefined)
let postQueryBody: PostQueryBody; // (optional)

const { status, data } = await apiInstance.postNoelMegagift2025(
    date,
    postQueryBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postQueryBody** | **PostQueryBody**|  | |
| **date** | [**string**] | Date de la configuration (format ISO-8601: yyyy-MM-dd) | defaults to undefined|


### Return type

**NoelMegagift2025**

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postPlayerList**
> PlayerList postPlayerList()

Permet d\'obtenir la liste des joueurs s\'étant connectés au moins une fois au cours des 14 derniers jours sur un serveur à une date donnée (avec filtrage possible).  **Fréquence de mise à jour :** Les données sont actualisées quotidiennement, généralement la nuit. 

### Example

```typescript
import {
    APIJavaApi,
    Configuration,
    PostQueryBody
} from '@yoxoproject/client';

const configuration = new Configuration();
const apiInstance = new APIJavaApi(configuration);

let date: string; //La date à laquelle on veut récupérer la liste des joueurs (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n\'a été scrap ce jour là, la date antérieure la plus proche sera utilisée (default to undefined)
let javaServer: 'blue' | 'orange' | 'yellow' | 'white' | 'black' | 'cyan' | 'lime' | 'coral' | 'pink' | 'purple' | 'green' | 'red' | 'mocha' | 'jade'; //Serveur NationsGlory dont on veut la liste des joueurs. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade (default to undefined)
let postQueryBody: PostQueryBody; // (optional)

const { status, data } = await apiInstance.postPlayerList(
    date,
    javaServer,
    postQueryBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postQueryBody** | **PostQueryBody**|  | |
| **date** | [**string**] | La date à laquelle on veut récupérer la liste des joueurs (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n\&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | defaults to undefined|
| **javaServer** | [**&#39;blue&#39; | &#39;orange&#39; | &#39;yellow&#39; | &#39;white&#39; | &#39;black&#39; | &#39;cyan&#39; | &#39;lime&#39; | &#39;coral&#39; | &#39;pink&#39; | &#39;purple&#39; | &#39;green&#39; | &#39;red&#39; | &#39;mocha&#39; | &#39;jade&#39;**]**Array<&#39;blue&#39; &#124; &#39;orange&#39; &#124; &#39;yellow&#39; &#124; &#39;white&#39; &#124; &#39;black&#39; &#124; &#39;cyan&#39; &#124; &#39;lime&#39; &#124; &#39;coral&#39; &#124; &#39;pink&#39; &#124; &#39;purple&#39; &#124; &#39;green&#39; &#124; &#39;red&#39; &#124; &#39;mocha&#39; &#124; &#39;jade&#39;>** | Serveur NationsGlory dont on veut la liste des joueurs. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | defaults to undefined|


### Return type

**PlayerList**

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postResearchServer**
> ResearchServer postResearchServer()

Permet d\'obtenir les niveaux de recherche actuels de tous les pays d\'un serveur à une date donnée (avec filtrage possible).  **Données exposées :** - Niveaux actuels de recherche par domaine pour chaque pays - Dernière recherche complétée par chaque pays - Valeurs actuelles des conditions de recherche  **Exemples de filtres RSQL :** - `country==Papouasie` - Pays nommé exactement \"Papouasie\" - `country==*Terre*` - Pays dont le nom contient \"Terre\" - `lastResearch.level>3` - Pays dont la dernière recherche a atteint un niveau > 3 - `lastResearch.domain==militaire` - Pays dont la dernière recherche était dans le domaine militaire - `lastResearch.timestamp>1735689600000` - Pays dont la dernière recherche a été complétée après cette date  **Fréquence de mise à jour :** Les données sont actualisées tous les jours pairs du mois (environ une fois tous les 2 jours), généralement la nuit. 

### Example

```typescript
import {
    APIJavaApi,
    Configuration,
    PostQueryBody
} from '@yoxoproject/client';

const configuration = new Configuration();
const apiInstance = new APIJavaApi(configuration);

let date: string; //Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n\'a été scrap ce jour là, la date antérieure la plus proche sera utilisée (default to undefined)
let javaServer: 'blue' | 'orange' | 'yellow' | 'white' | 'black' | 'cyan' | 'lime' | 'coral' | 'pink' | 'purple' | 'green' | 'red' | 'mocha' | 'jade'; //Serveur NationsGlory dont on veut les données de R&D. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade (default to undefined)
let postQueryBody: PostQueryBody; // (optional)

const { status, data } = await apiInstance.postResearchServer(
    date,
    javaServer,
    postQueryBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postQueryBody** | **PostQueryBody**|  | |
| **date** | [**string**] | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n\&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | defaults to undefined|
| **javaServer** | [**&#39;blue&#39; | &#39;orange&#39; | &#39;yellow&#39; | &#39;white&#39; | &#39;black&#39; | &#39;cyan&#39; | &#39;lime&#39; | &#39;coral&#39; | &#39;pink&#39; | &#39;purple&#39; | &#39;green&#39; | &#39;red&#39; | &#39;mocha&#39; | &#39;jade&#39;**]**Array<&#39;blue&#39; &#124; &#39;orange&#39; &#124; &#39;yellow&#39; &#124; &#39;white&#39; &#124; &#39;black&#39; &#124; &#39;cyan&#39; &#124; &#39;lime&#39; &#124; &#39;coral&#39; &#124; &#39;pink&#39; &#124; &#39;purple&#39; &#124; &#39;green&#39; &#124; &#39;red&#39; &#124; &#39;mocha&#39; &#124; &#39;jade&#39;>** | Serveur NationsGlory dont on veut les données de R&amp;D. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | defaults to undefined|


### Return type

**ResearchServer**

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postSkill**
> Skill postSkill()

Permet d\'obtenir les compétences des joueurs présents dans au moins 1 top 50 compétences sur un serveur à une date donnée (avec filtrage possible). Seuls les joueurs figurant dans le top 50 d\'au moins une compétence sur le serveur sont inclus pour éviter de surcharger les serveurs.  **Fréquence de mise à jour :** Les données sont actualisées tous les jours pairs du mois (environ une fois tous les 2 jours), généralement la nuit.  **Documentation :** Plus d\'informations sur les compétences/skills : https://wiki.nationsglory.fr/fr/article/les-competences-java-1shixp7/ 

### Example

```typescript
import {
    APIJavaApi,
    Configuration,
    PostQueryBody
} from '@yoxoproject/client';

const configuration = new Configuration();
const apiInstance = new APIJavaApi(configuration);

let date: string; //La date à laquelle on veut récupéré les skills (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n\'a été scrap ce jour là, la date antérieure la plus proche sera utilisée (default to undefined)
let javaServer: 'blue' | 'orange' | 'yellow' | 'white' | 'black' | 'cyan' | 'lime' | 'coral' | 'pink' | 'purple' | 'green' | 'red' | 'mocha' | 'jade'; //Serveur NationsGlory dont on veut les skills. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade (default to undefined)
let postQueryBody: PostQueryBody; // (optional)

const { status, data } = await apiInstance.postSkill(
    date,
    javaServer,
    postQueryBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postQueryBody** | **PostQueryBody**|  | |
| **date** | [**string**] | La date à laquelle on veut récupéré les skills (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n\&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | defaults to undefined|
| **javaServer** | [**&#39;blue&#39; | &#39;orange&#39; | &#39;yellow&#39; | &#39;white&#39; | &#39;black&#39; | &#39;cyan&#39; | &#39;lime&#39; | &#39;coral&#39; | &#39;pink&#39; | &#39;purple&#39; | &#39;green&#39; | &#39;red&#39; | &#39;mocha&#39; | &#39;jade&#39;**]**Array<&#39;blue&#39; &#124; &#39;orange&#39; &#124; &#39;yellow&#39; &#124; &#39;white&#39; &#124; &#39;black&#39; &#124; &#39;cyan&#39; &#124; &#39;lime&#39; &#124; &#39;coral&#39; &#124; &#39;pink&#39; &#124; &#39;purple&#39; &#124; &#39;green&#39; &#124; &#39;red&#39; &#124; &#39;mocha&#39; &#124; &#39;jade&#39;>** | Serveur NationsGlory dont on veut les skills. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | defaults to undefined|


### Return type

**Skill**

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postWar**
> War postWar()

Permet d\'obtenir la liste des guerres (en cours ou terminées) d\'un serveur à une date donnée (avec filtrage possible).  **Données exposées :** - Identifiant, dates (déclaration, début), raison - Participants (attaquant, défenseur) avec détails (pays, points missiles, progression...) - Conditions de victoire - Récompenses - Détails des assauts et missiles lancés  **Fréquence de mise à jour :** Les données sont actualisées quotidiennement, généralement la nuit. 

### Example

```typescript
import {
    APIJavaApi,
    Configuration,
    PostQueryBody
} from '@yoxoproject/client';

const configuration = new Configuration();
const apiInstance = new APIJavaApi(configuration);

let date: string; //Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n\'a été scrap ce jour là, la date antérieure la plus proche sera utilisée (default to undefined)
let javaServer: 'blue' | 'orange' | 'yellow' | 'white' | 'black' | 'cyan' | 'lime' | 'coral' | 'pink' | 'purple' | 'green' | 'red' | 'mocha' | 'jade'; //Serveur NationsGlory dont on veut les données de guerre. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade (default to undefined)
let postQueryBody: PostQueryBody; // (optional)

const { status, data } = await apiInstance.postWar(
    date,
    javaServer,
    postQueryBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postQueryBody** | **PostQueryBody**|  | |
| **date** | [**string**] | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n\&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | defaults to undefined|
| **javaServer** | [**&#39;blue&#39; | &#39;orange&#39; | &#39;yellow&#39; | &#39;white&#39; | &#39;black&#39; | &#39;cyan&#39; | &#39;lime&#39; | &#39;coral&#39; | &#39;pink&#39; | &#39;purple&#39; | &#39;green&#39; | &#39;red&#39; | &#39;mocha&#39; | &#39;jade&#39;**]**Array<&#39;blue&#39; &#124; &#39;orange&#39; &#124; &#39;yellow&#39; &#124; &#39;white&#39; &#124; &#39;black&#39; &#124; &#39;cyan&#39; &#124; &#39;lime&#39; &#124; &#39;coral&#39; &#124; &#39;pink&#39; &#124; &#39;purple&#39; &#124; &#39;green&#39; &#124; &#39;red&#39; &#124; &#39;mocha&#39; &#124; &#39;jade&#39;>** | Serveur NationsGlory dont on veut les données de guerre. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | defaults to undefined|


### Return type

**War**

### Authorization

[oauth2_client_credentials](../README.md#oauth2_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


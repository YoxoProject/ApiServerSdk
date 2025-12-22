# yoxo_client.APIJavaApi

All URIs are relative to *https://api.yoxo.software*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_cereal_global_market**](APIJavaApi.md#get_cereal_global_market) | **GET** /v2/java/cereal_global_market/{date}/{javaServer} | Cereal Global Market
[**get_country**](APIJavaApi.md#get_country) | **GET** /v2/java/country/{date}/{javaServer} | Country
[**get_country1**](APIJavaApi.md#get_country1) | **GET** /v2/java/country/{date}/{javaServer}/{country} | Country
[**get_enterprises**](APIJavaApi.md#get_enterprises) | **GET** /v2/java/enterprise/{date}/{javaServer} | Enterprise
[**get_enterprises1**](APIJavaApi.md#get_enterprises1) | **GET** /v2/java/enterprise/{date}/{javaServer}/{enterpriseName} | Enterprise
[**get_halloween2025**](APIJavaApi.md#get_halloween2025) | **GET** /v2/java/halloween-2025/{date} | Halloween 2025
[**get_noel_megagift2024**](APIJavaApi.md#get_noel_megagift2024) | **GET** /v2/java/noelmegagift-2024 | Noël Megagift 2024
[**get_noel_megagift2025**](APIJavaApi.md#get_noel_megagift2025) | **GET** /v2/java/noelmegagift-2025/{date} | Noël Megagift 2025
[**get_player_list**](APIJavaApi.md#get_player_list) | **GET** /v2/java/player-list/{date}/{javaServer} | Player List
[**get_research_config**](APIJavaApi.md#get_research_config) | **GET** /v2/java/research/{date}/config | Research Config
[**get_research_server**](APIJavaApi.md#get_research_server) | **GET** /v2/java/research/{date}/{javaServer} | Research Server
[**get_skill**](APIJavaApi.md#get_skill) | **GET** /v2/java/skill/{date}/{javaServer} | Skill
[**get_war**](APIJavaApi.md#get_war) | **GET** /v2/java/war/{date}/{javaServer} | War
[**get_war1**](APIJavaApi.md#get_war1) | **GET** /v2/java/war/{date}/{javaServer}/{warId} | War
[**post_country**](APIJavaApi.md#post_country) | **POST** /v2/java/country/{date}/{javaServer} | Country
[**post_enterprises**](APIJavaApi.md#post_enterprises) | **POST** /v2/java/enterprise/{date}/{javaServer} | Enterprise
[**post_halloween2025**](APIJavaApi.md#post_halloween2025) | **POST** /v2/java/halloween-2025/{date} | Halloween 2025
[**post_noel_megagift2024**](APIJavaApi.md#post_noel_megagift2024) | **POST** /v2/java/noelmegagift-2024 | Noël Megagift 2024
[**post_noel_megagift2025**](APIJavaApi.md#post_noel_megagift2025) | **POST** /v2/java/noelmegagift-2025/{date} | Noël Megagift 2025
[**post_player_list**](APIJavaApi.md#post_player_list) | **POST** /v2/java/player-list/{date}/{javaServer} | Player List
[**post_research_server**](APIJavaApi.md#post_research_server) | **POST** /v2/java/research/{date}/{javaServer} | Research Server
[**post_skill**](APIJavaApi.md#post_skill) | **POST** /v2/java/skill/{date}/{javaServer} | Skill
[**post_war**](APIJavaApi.md#post_war) | **POST** /v2/java/war/{date}/{javaServer} | War


# **get_cereal_global_market**
> CerealGlobalMarket get_cereal_global_market(var_date, java_server)

Cereal Global Market

Permet d'obtenir les données du marché global des céréales pour un serveur spécifique à une date donnée.

Ces données incluent :
- Les graphiques de l'évolution des prix, des ventes et des stocks
- L'historique des prix, ventes et stocks par type de céréale
- Les prix actuels des céréales

**Fréquence de mise à jour :**
Les données sont actualisées tous les jours impairs du mois (environ une fois tous les 2 jours), généralement la nuit.

**Note :** Ces données représentent un objet unique (pas une liste), donc le filtrage et la pagination ne sont pas applicables.


### Example

* OAuth Authentication (oauth2_client_credentials):

```python
import yoxo_client
from yoxo_client.models.cereal_global_market import CerealGlobalMarket
from yoxo_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.yoxo.software
# See configuration.py for a list of all supported configuration parameters.
configuration = yoxo_client.Configuration(
    host = "https://api.yoxo.software"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with yoxo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = yoxo_client.APIJavaApi(api_client)
    var_date = '2025-10-28' # date | La date à laquelle on veut récupérer les données du marché des céréales (au format ISO-8601: yyyy-MM-dd)
    java_server = 'red' # str | Serveur NationsGlory dont on veut les données. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade

    try:
        # Cereal Global Market
        api_response = api_instance.get_cereal_global_market(var_date, java_server)
        print("The response of APIJavaApi->get_cereal_global_market:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIJavaApi->get_cereal_global_market: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **date**| La date à laquelle on veut récupérer les données du marché des céréales (au format ISO-8601: yyyy-MM-dd) | 
 **java_server** | **str**| Serveur NationsGlory dont on veut les données. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_country**
> Country get_country(var_date, java_server)

Country

Permet d'obtenir la liste et les détails complets de tous les pays d'un serveur à une date donnée (aucun filtrage possible).
Il est possible de spécifier un pays dans l'URL pour récupérer un pays spécifique.

**Données exposées :**
- Informations générales (nom, description, niveau, power, claims...)
- Relations (alliance, guerres)
- Membres (liste, rôles, recrues)
- Économie (banque, actions)
- Paramètres et permissions

**Fréquence de mise à jour :**
Les données sont actualisées tous les jours, généralement la nuit.


### Example

* OAuth Authentication (oauth2_client_credentials):

```python
import yoxo_client
from yoxo_client.models.country import Country
from yoxo_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.yoxo.software
# See configuration.py for a list of all supported configuration parameters.
configuration = yoxo_client.Configuration(
    host = "https://api.yoxo.software"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with yoxo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = yoxo_client.APIJavaApi(api_client)
    var_date = '2025-11-24' # date | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    java_server = 'red' # str | Serveur NationsGlory dont on veut les données des pays. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade

    try:
        # Country
        api_response = api_instance.get_country(var_date, java_server)
        print("The response of APIJavaApi->get_country:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIJavaApi->get_country: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **date**| Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | 
 **java_server** | **str**| Serveur NationsGlory dont on veut les données des pays. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_country1**
> Country get_country1(var_date, java_server, country)

Country

Permet d'obtenir la liste et les détails complets de tous les pays d'un serveur à une date donnée (aucun filtrage possible).
Il est possible de spécifier un pays dans l'URL pour récupérer un pays spécifique.

**Données exposées :**
- Informations générales (nom, description, niveau, power, claims...)
- Relations (alliance, guerres)
- Membres (liste, rôles, recrues)
- Économie (banque, actions)
- Paramètres et permissions

**Fréquence de mise à jour :**
Les données sont actualisées tous les jours, généralement la nuit.


### Example

* OAuth Authentication (oauth2_client_credentials):

```python
import yoxo_client
from yoxo_client.models.country import Country
from yoxo_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.yoxo.software
# See configuration.py for a list of all supported configuration parameters.
configuration = yoxo_client.Configuration(
    host = "https://api.yoxo.software"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with yoxo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = yoxo_client.APIJavaApi(api_client)
    var_date = '2025-11-24' # date | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    java_server = 'red' # str | Serveur NationsGlory dont on veut les données des pays. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    country = 'country_example' # str | Nom du pays

    try:
        # Country
        api_response = api_instance.get_country1(var_date, java_server, country)
        print("The response of APIJavaApi->get_country1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIJavaApi->get_country1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **date**| Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | 
 **java_server** | **str**| Serveur NationsGlory dont on veut les données des pays. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | 
 **country** | **str**| Nom du pays | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_enterprises**
> Enterprise get_enterprises(var_date, java_server, enterprise_type=enterprise_type)

Enterprise

Permet d'obtenir la liste de toutes les entreprises sur un serveur à une date donnée.
Chaque entreprise contient des champs communs (nom, propriétaire, employés, contrats) et des champs
spécifiques selon son type (ex: historique des gains pour les casinos, production pour les centrales électriques).
Il est possible de filtrer par nom d'entreprise.

**Types d'entreprises :**
- Casino : Entreprises de casino
- Electric : Entreprises électriques
- Farm : Entreprises agricoles
- Petrol : Entreprises pétrolières
- Trader : Entreprises de trading
- Bet : Entreprises de paris
- RealEstate : Entreprises immobilières (location de parcelles)
- Build, Engineer, Terraform, Journalist, PVP, Loan, Repair, Lawyer : Entreprises de services

**Fréquence de mise à jour :**
Les données sont actualisées tous les lundis matin.


### Example

* OAuth Authentication (oauth2_client_credentials):

```python
import yoxo_client
from yoxo_client.models.enterprise import Enterprise
from yoxo_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.yoxo.software
# See configuration.py for a list of all supported configuration parameters.
configuration = yoxo_client.Configuration(
    host = "https://api.yoxo.software"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with yoxo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = yoxo_client.APIJavaApi(api_client)
    var_date = '2025-11-24' # date | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    java_server = 'red' # str | Serveur NationsGlory dont on veut les données d'entreprises. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    enterprise_type = 'enterprise_type_example' # str | Type d'entreprise (optional)

    try:
        # Enterprise
        api_response = api_instance.get_enterprises(var_date, java_server, enterprise_type=enterprise_type)
        print("The response of APIJavaApi->get_enterprises:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIJavaApi->get_enterprises: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **date**| Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | 
 **java_server** | **str**| Serveur NationsGlory dont on veut les données d&#39;entreprises. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | 
 **enterprise_type** | **str**| Type d&#39;entreprise | [optional] 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_enterprises1**
> Enterprise get_enterprises1(var_date, java_server, enterprise_name, enterprise_type=enterprise_type)

Enterprise

Permet d'obtenir la liste de toutes les entreprises sur un serveur à une date donnée.
Chaque entreprise contient des champs communs (nom, propriétaire, employés, contrats) et des champs
spécifiques selon son type (ex: historique des gains pour les casinos, production pour les centrales électriques).
Il est possible de filtrer par nom d'entreprise.

**Types d'entreprises :**
- Casino : Entreprises de casino
- Electric : Entreprises électriques
- Farm : Entreprises agricoles
- Petrol : Entreprises pétrolières
- Trader : Entreprises de trading
- Bet : Entreprises de paris
- RealEstate : Entreprises immobilières (location de parcelles)
- Build, Engineer, Terraform, Journalist, PVP, Loan, Repair, Lawyer : Entreprises de services

**Fréquence de mise à jour :**
Les données sont actualisées tous les lundis matin.


### Example

* OAuth Authentication (oauth2_client_credentials):

```python
import yoxo_client
from yoxo_client.models.enterprise import Enterprise
from yoxo_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.yoxo.software
# See configuration.py for a list of all supported configuration parameters.
configuration = yoxo_client.Configuration(
    host = "https://api.yoxo.software"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with yoxo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = yoxo_client.APIJavaApi(api_client)
    var_date = '2025-11-24' # date | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    java_server = 'red' # str | Serveur NationsGlory dont on veut les données d'entreprises. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    enterprise_name = 'enterprise_name_example' # str | Nom de l'entreprise
    enterprise_type = 'enterprise_type_example' # str | Type d'entreprise (optional)

    try:
        # Enterprise
        api_response = api_instance.get_enterprises1(var_date, java_server, enterprise_name, enterprise_type=enterprise_type)
        print("The response of APIJavaApi->get_enterprises1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIJavaApi->get_enterprises1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **date**| Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | 
 **java_server** | **str**| Serveur NationsGlory dont on veut les données d&#39;entreprises. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | 
 **enterprise_name** | **str**| Nom de l&#39;entreprise | 
 **enterprise_type** | **str**| Type d&#39;entreprise | [optional] 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_halloween2025**
> Halloween2025 get_halloween2025(var_date)

Halloween 2025

Permet d'obtenir les statistiques des joueurs du top 50 de l'événement Halloween 2025 "Demon's Return" à une date donnée (aucun filtrage possible).
Seuls les joueurs du top 50 interserveur sont accessibles (limitation du serveur).

**À propos de l'événement :**
L'événement "Demon's Return" est un événement global interserveur où l'objectif est de collecter des âmes et tuer des démons pour empêcher l'invasion démoniaque.
Le classement est identique sur tous les serveurs puisqu'il s'agit d'un événement global à NationsGlory.

**Fréquence de mise à jour :**
Les données sont actualisées quotidiennement pendant toute la durée de l'événement (du 21/10/2025 au 04/11/2025), généralement la nuit.

**Documentation :**
Plus d'informations sur l'événement : https://wiki.nationsglory.fr/fr/article/halloween-2025-demons-return-1lfsu05/


### Example

* OAuth Authentication (oauth2_client_credentials):

```python
import yoxo_client
from yoxo_client.models.halloween2025 import Halloween2025
from yoxo_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.yoxo.software
# See configuration.py for a list of all supported configuration parameters.
configuration = yoxo_client.Configuration(
    host = "https://api.yoxo.software"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with yoxo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = yoxo_client.APIJavaApi(api_client)
    var_date = '2025-10-28' # date | Date des données au format ISO-8601 (yyyy-MM-dd). Événement actif du 21/10/2025 au 13/11/2025, données actualisées quotidiennement

    try:
        # Halloween 2025
        api_response = api_instance.get_halloween2025(var_date)
        print("The response of APIJavaApi->get_halloween2025:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIJavaApi->get_halloween2025: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **date**| Date des données au format ISO-8601 (yyyy-MM-dd). Événement actif du 21/10/2025 au 13/11/2025, données actualisées quotidiennement | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_noel_megagift2024**
> NoelMegagift2024 get_noel_megagift2024()

Noël Megagift 2024

Permet d'obtenir les données des tirages du Mega Cadeau de l'événement "The Key Guardian" (Noël 2024).

**À propos de l'événement :**
L'événement "The Key Guardian" est l'événement de Noël 2024 où les joueurs doivent
à récupérer 9 clés perdues pour assembler une Méga Clé et débloquer le Mega Cadeau.
Chaque tirage du Mega Cadeau offre jusqu'à 4 récompenses selon le nombre de joueurs présents (armes exclusives,
plans rares, items légendaires, cosmétiques).

**Période de l'événement :** Du 24/12/2024 au 12/01/2025

**Données exposées :**
Chaque entrée représente un tirage individuel du Mega Gift par un joueur, avec les items obtenus
et la date/heure du tirage.


### Example

* OAuth Authentication (oauth2_client_credentials):

```python
import yoxo_client
from yoxo_client.models.noel_megagift2024 import NoelMegagift2024
from yoxo_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.yoxo.software
# See configuration.py for a list of all supported configuration parameters.
configuration = yoxo_client.Configuration(
    host = "https://api.yoxo.software"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with yoxo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = yoxo_client.APIJavaApi(api_client)

    try:
        # Noël Megagift 2024
        api_response = api_instance.get_noel_megagift2024()
        print("The response of APIJavaApi->get_noel_megagift2024:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIJavaApi->get_noel_megagift2024: %s\n" % e)
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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_noel_megagift2025**
> NoelMegagift2025 get_noel_megagift2025(var_date)

Noël Megagift 2025

Permet d'obtenir les données des tirages du Mega Cadeau de l'événement de Noël 2025.

**À propos de l'événement :**
Événement interserveur où les joueurs peuvent obtenir des récompenses exclusives via le Mega Cadeau.
Plus d'informations sur l'événement : https://wiki.nationsglory.fr/fr/article/lile-du-pere-noel-rv8x0t/#2-le-mega-cadeau-recompense-ultime

**Période de l'événement :** Du 14/12/2025 au 06/01/2026

**Données exposées :**
Chaque entrée représente un tirage individuel du Mega cadeau par un joueur, avec les items obtenus
et la date/heure du tirage.

**Fréquence de mise à jour :**
Les données sont actualisées quotidiennement pendant toute la durée de l'événement (du 14/12/2025 au 06/01/2026), généralement la nuit.


### Example

* OAuth Authentication (oauth2_client_credentials):

```python
import yoxo_client
from yoxo_client.models.noel_megagift2025 import NoelMegagift2025
from yoxo_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.yoxo.software
# See configuration.py for a list of all supported configuration parameters.
configuration = yoxo_client.Configuration(
    host = "https://api.yoxo.software"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with yoxo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = yoxo_client.APIJavaApi(api_client)
    var_date = '2025-11-24' # date | Date de la configuration (format ISO-8601: yyyy-MM-dd)

    try:
        # Noël Megagift 2025
        api_response = api_instance.get_noel_megagift2025(var_date)
        print("The response of APIJavaApi->get_noel_megagift2025:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIJavaApi->get_noel_megagift2025: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **date**| Date de la configuration (format ISO-8601: yyyy-MM-dd) | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_player_list**
> PlayerList get_player_list(var_date, java_server)

Player List

Permet d'obtenir la liste des joueurs s'étant connectés au moins une fois au cours des 14 derniers jours sur un serveur à une date donnée (aucun filtrage possible).

**Fréquence de mise à jour :**
Les données sont actualisées quotidiennement, généralement la nuit.


### Example

* OAuth Authentication (oauth2_client_credentials):

```python
import yoxo_client
from yoxo_client.models.player_list import PlayerList
from yoxo_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.yoxo.software
# See configuration.py for a list of all supported configuration parameters.
configuration = yoxo_client.Configuration(
    host = "https://api.yoxo.software"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with yoxo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = yoxo_client.APIJavaApi(api_client)
    var_date = '2025-10-28' # date | La date à laquelle on veut récupérer la liste des joueurs (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    java_server = 'red' # str | Serveur NationsGlory dont on veut la liste des joueurs. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade

    try:
        # Player List
        api_response = api_instance.get_player_list(var_date, java_server)
        print("The response of APIJavaApi->get_player_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIJavaApi->get_player_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **date**| La date à laquelle on veut récupérer la liste des joueurs (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | 
 **java_server** | **str**| Serveur NationsGlory dont on veut la liste des joueurs. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_research_config**
> ResearchConfig get_research_config(var_date)

Research Config

Permet d'obtenir la configuration globale de tous les domaines de recherche disponibles dans NationsGlory.
Cette configuration est identique pour tous les serveurs et définit les niveaux, conditions et récompenses.

**Contenu de la configuration :**
- Noms et descriptions des domaines de recherche
- Niveaux maximum par domaine
- Conditions requises par niveau
- Récompenses obtenues par niveau
- Durées de recherche

**Fréquence de mise à jour :**
Les données sont actualisées tous les jours impairs du mois (environ une fois tous les 2 jours), généralement la nuit.


### Example

* OAuth Authentication (oauth2_client_credentials):

```python
import yoxo_client
from yoxo_client.models.research_config import ResearchConfig
from yoxo_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.yoxo.software
# See configuration.py for a list of all supported configuration parameters.
configuration = yoxo_client.Configuration(
    host = "https://api.yoxo.software"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with yoxo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = yoxo_client.APIJavaApi(api_client)
    var_date = '2025-11-24' # date | Date de la configuration (format ISO-8601: yyyy-MM-dd)

    try:
        # Research Config
        api_response = api_instance.get_research_config(var_date)
        print("The response of APIJavaApi->get_research_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIJavaApi->get_research_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **date**| Date de la configuration (format ISO-8601: yyyy-MM-dd) | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_research_server**
> ResearchServer get_research_server(var_date, java_server)

Research Server

Permet d'obtenir les niveaux de recherche actuels de tous les pays d'un serveur à une date donnée (sans filtrage).

**Données exposées :**
- Niveaux actuels de recherche par domaine pour chaque pays
- Dernière recherche complétée par chaque pays
- Valeurs actuelles des conditions de recherche

**Fréquence de mise à jour :**
Les données sont actualisées tous les jours impairs du mois (environ une fois tous les 2 jours), généralement la nuit.


### Example

* OAuth Authentication (oauth2_client_credentials):

```python
import yoxo_client
from yoxo_client.models.research_server import ResearchServer
from yoxo_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.yoxo.software
# See configuration.py for a list of all supported configuration parameters.
configuration = yoxo_client.Configuration(
    host = "https://api.yoxo.software"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with yoxo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = yoxo_client.APIJavaApi(api_client)
    var_date = '2025-11-24' # date | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    java_server = 'red' # str | Serveur NationsGlory dont on veut les données de R&D. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade

    try:
        # Research Server
        api_response = api_instance.get_research_server(var_date, java_server)
        print("The response of APIJavaApi->get_research_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIJavaApi->get_research_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **date**| Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | 
 **java_server** | **str**| Serveur NationsGlory dont on veut les données de R&amp;D. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_skill**
> Skill get_skill(var_date, java_server)

Skill

Permet d'obtenir les compétences des joueurs présents dans au moins 1 top 50 compétences sur un serveur à une date donnée (aucun filtrage possible).
Seuls les joueurs figurant dans le top 50 d'au moins une compétence sur le serveur sont inclus pour éviter de surcharger les serveurs.

**Fréquence de mise à jour :**
Les données sont actualisées tous les jours pairs du mois (environ une fois tous les 2 jours), généralement la nuit.

**Documentation :**
Plus d'informations sur les compétences/skills : https://wiki.nationsglory.fr/fr/article/les-competences-java-1shixp7/


### Example

* OAuth Authentication (oauth2_client_credentials):

```python
import yoxo_client
from yoxo_client.models.skill import Skill
from yoxo_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.yoxo.software
# See configuration.py for a list of all supported configuration parameters.
configuration = yoxo_client.Configuration(
    host = "https://api.yoxo.software"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with yoxo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = yoxo_client.APIJavaApi(api_client)
    var_date = '2025-10-28' # date | La date à laquelle on veut récupéré les skills (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    java_server = 'red' # str | Serveur NationsGlory dont on veut les skills. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade

    try:
        # Skill
        api_response = api_instance.get_skill(var_date, java_server)
        print("The response of APIJavaApi->get_skill:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIJavaApi->get_skill: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **date**| La date à laquelle on veut récupéré les skills (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | 
 **java_server** | **str**| Serveur NationsGlory dont on veut les skills. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_war**
> War get_war(var_date, java_server)

War

Permet d'obtenir la liste des guerres (en cours ou terminées) d'un serveur à une date donnée.
Il est possible de spécifier un warId dans l'URL pour récupérer une guerre spécifique.

**Données exposées :**
- Identifiant, dates (déclaration, début), raison
- Participants (attaquant, défenseur) avec détails (pays, points missiles, progression...)
- Conditions de victoire
- Récompenses
- Détails des assauts et missiles lancés

**Fréquence de mise à jour :**
Les données sont actualisées quotidiennement, généralement la nuit.


### Example

* OAuth Authentication (oauth2_client_credentials):

```python
import yoxo_client
from yoxo_client.models.war import War
from yoxo_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.yoxo.software
# See configuration.py for a list of all supported configuration parameters.
configuration = yoxo_client.Configuration(
    host = "https://api.yoxo.software"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with yoxo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = yoxo_client.APIJavaApi(api_client)
    var_date = '2025-11-24' # date | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    java_server = 'red' # str | Serveur NationsGlory dont on veut les données de guerre. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade

    try:
        # War
        api_response = api_instance.get_war(var_date, java_server)
        print("The response of APIJavaApi->get_war:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIJavaApi->get_war: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **date**| Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | 
 **java_server** | **str**| Serveur NationsGlory dont on veut les données de guerre. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_war1**
> War get_war1(var_date, java_server, war_id)

War

Permet d'obtenir la liste des guerres (en cours ou terminées) d'un serveur à une date donnée.
Il est possible de spécifier un warId dans l'URL pour récupérer une guerre spécifique.

**Données exposées :**
- Identifiant, dates (déclaration, début), raison
- Participants (attaquant, défenseur) avec détails (pays, points missiles, progression...)
- Conditions de victoire
- Récompenses
- Détails des assauts et missiles lancés

**Fréquence de mise à jour :**
Les données sont actualisées quotidiennement, généralement la nuit.


### Example

* OAuth Authentication (oauth2_client_credentials):

```python
import yoxo_client
from yoxo_client.models.war import War
from yoxo_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.yoxo.software
# See configuration.py for a list of all supported configuration parameters.
configuration = yoxo_client.Configuration(
    host = "https://api.yoxo.software"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with yoxo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = yoxo_client.APIJavaApi(api_client)
    var_date = '2025-11-24' # date | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    java_server = 'red' # str | Serveur NationsGlory dont on veut les données de guerre. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    war_id = 'war_id_example' # str | Identifiant de la guerre

    try:
        # War
        api_response = api_instance.get_war1(var_date, java_server, war_id)
        print("The response of APIJavaApi->get_war1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIJavaApi->get_war1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **date**| Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | 
 **java_server** | **str**| Serveur NationsGlory dont on veut les données de guerre. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | 
 **war_id** | **str**| Identifiant de la guerre | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_country**
> Country post_country(var_date, java_server, post_query_body=post_query_body)

Country

Permet d'obtenir la liste et les détails complets de tous les pays d'un serveur à une date donnée (avec filtrage possible).

**Données exposées :**
- Informations générales (nom, description, niveau, power, claims...)
- Relations (alliance, guerres)
- Membres (liste, rôles, recrues)
- Économie (banque, actions)
- Paramètres et permissions

**Fréquence de mise à jour :**
Les données sont actualisées tous les jours, généralement la nuit.


### Example

* OAuth Authentication (oauth2_client_credentials):

```python
import yoxo_client
from yoxo_client.models.country import Country
from yoxo_client.models.post_query_body import PostQueryBody
from yoxo_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.yoxo.software
# See configuration.py for a list of all supported configuration parameters.
configuration = yoxo_client.Configuration(
    host = "https://api.yoxo.software"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with yoxo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = yoxo_client.APIJavaApi(api_client)
    var_date = '2025-11-24' # date | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    java_server = 'red' # str | Serveur NationsGlory dont on veut les données des pays. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    post_query_body = yoxo_client.PostQueryBody() # PostQueryBody |  (optional)

    try:
        # Country
        api_response = api_instance.post_country(var_date, java_server, post_query_body=post_query_body)
        print("The response of APIJavaApi->post_country:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIJavaApi->post_country: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **date**| Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | 
 **java_server** | **str**| Serveur NationsGlory dont on veut les données des pays. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | 
 **post_query_body** | [**PostQueryBody**](PostQueryBody.md)|  | [optional] 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_enterprises**
> Enterprise post_enterprises(var_date, java_server, post_query_body=post_query_body)

Enterprise

Permet d'obtenir la liste de toutes les entreprises sur un serveur à une date donnée.
Chaque entreprise contient des champs communs (nom, propriétaire, employés, contrats) et des champs
spécifiques selon son type (ex: historique des gains pour les casinos, production pour les centrales électriques).

**Types d'entreprises :**
- Casino : Entreprises de casino
- Electric : Entreprises électriques
- Farm : Entreprises agricoles
- Petrol : Entreprises pétrolières
- Trader : Entreprises de trading
- Bet : Entreprises de paris
- RealEstate : Entreprises immobilières (location de parcelles)
- Build, Engineer, Terraform, Journalist, PVP, Loan, Repair, Lawyer : Entreprises de services

**Fréquence de mise à jour :**
Les données sont actualisées tous les lundis matin.


### Example

* OAuth Authentication (oauth2_client_credentials):

```python
import yoxo_client
from yoxo_client.models.enterprise import Enterprise
from yoxo_client.models.post_query_body import PostQueryBody
from yoxo_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.yoxo.software
# See configuration.py for a list of all supported configuration parameters.
configuration = yoxo_client.Configuration(
    host = "https://api.yoxo.software"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with yoxo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = yoxo_client.APIJavaApi(api_client)
    var_date = '2025-11-24' # date | Date des données (format ISO-8601: yyyy-MM-dd)
    java_server = 'red' # str | Serveur NationsGlory
    post_query_body = yoxo_client.PostQueryBody() # PostQueryBody |  (optional)

    try:
        # Enterprise
        api_response = api_instance.post_enterprises(var_date, java_server, post_query_body=post_query_body)
        print("The response of APIJavaApi->post_enterprises:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIJavaApi->post_enterprises: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **date**| Date des données (format ISO-8601: yyyy-MM-dd) | 
 **java_server** | **str**| Serveur NationsGlory | 
 **post_query_body** | [**PostQueryBody**](PostQueryBody.md)|  | [optional] 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_halloween2025**
> Halloween2025 post_halloween2025(var_date, post_query_body=post_query_body)

Halloween 2025

Permet d'obtenir les statistiques des joueurs du top 50 de l'événement Halloween 2025 "Demon's Return" à une date donnée (avec filtrage possible).
Seuls les joueurs du top 50 interserveur sont disponibles (limitation du serveur).

**À propos de l'événement :**
L'événement "Demon's Return" est un événement global interserveur où l'objectif est de collecter des âmes et tuer des démons pour empêcher l'invasion démoniaque.
Le classement est identique sur tous les serveurs puisqu'il s'agit d'un événement global à NationsGlory.

**Fréquence de mise à jour :**
Les données sont actualisées quotidiennement pendant toute la durée de l'événement (du 21/10/2025 au 04/11/2025), généralement la nuit.

**Documentation :**
Plus d'informations sur l'événement : https://wiki.nationsglory.fr/fr/article/halloween-2025-demons-return-1lfsu05/


### Example

* OAuth Authentication (oauth2_client_credentials):

```python
import yoxo_client
from yoxo_client.models.halloween2025 import Halloween2025
from yoxo_client.models.post_query_body import PostQueryBody
from yoxo_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.yoxo.software
# See configuration.py for a list of all supported configuration parameters.
configuration = yoxo_client.Configuration(
    host = "https://api.yoxo.software"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with yoxo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = yoxo_client.APIJavaApi(api_client)
    var_date = '2025-10-28' # date | Date des données au format ISO-8601 (yyyy-MM-dd). Événement actif du 21/10/2025 au 13/11/2025, données actualisées quotidiennement
    post_query_body = yoxo_client.PostQueryBody() # PostQueryBody |  (optional)

    try:
        # Halloween 2025
        api_response = api_instance.post_halloween2025(var_date, post_query_body=post_query_body)
        print("The response of APIJavaApi->post_halloween2025:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIJavaApi->post_halloween2025: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **date**| Date des données au format ISO-8601 (yyyy-MM-dd). Événement actif du 21/10/2025 au 13/11/2025, données actualisées quotidiennement | 
 **post_query_body** | [**PostQueryBody**](PostQueryBody.md)|  | [optional] 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_noel_megagift2024**
> NoelMegagift2024 post_noel_megagift2024(post_query_body=post_query_body)

Noël Megagift 2024

Permet d'obtenir les données des tirages du Mega Cadeau de l'événement "The Key Guardian" (Noël 2024).

**À propos de l'événement :**
L'événement "The Key Guardian" est l'événement de Noël 2024 où les joueurs doivent
à récupérer 9 clés perdues pour assembler une Méga Clé et débloquer le Mega Cadeau.
Chaque tirage du Mega Cadeau offre jusqu'à 4 récompenses selon le nombre de joueurs présents (armes exclusives,
plans rares, items légendaires, cosmétiques).

**Période de l'événement :** Du 24/12/2024 au 12/01/2025

**Données exposées :**
Chaque entrée représente un tirage individuel du Mega Gift par un joueur, avec les items obtenus
et la date/heure du tirage.


### Example

* OAuth Authentication (oauth2_client_credentials):

```python
import yoxo_client
from yoxo_client.models.noel_megagift2024 import NoelMegagift2024
from yoxo_client.models.post_query_body import PostQueryBody
from yoxo_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.yoxo.software
# See configuration.py for a list of all supported configuration parameters.
configuration = yoxo_client.Configuration(
    host = "https://api.yoxo.software"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with yoxo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = yoxo_client.APIJavaApi(api_client)
    post_query_body = yoxo_client.PostQueryBody() # PostQueryBody |  (optional)

    try:
        # Noël Megagift 2024
        api_response = api_instance.post_noel_megagift2024(post_query_body=post_query_body)
        print("The response of APIJavaApi->post_noel_megagift2024:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIJavaApi->post_noel_megagift2024: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_query_body** | [**PostQueryBody**](PostQueryBody.md)|  | [optional] 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_noel_megagift2025**
> NoelMegagift2025 post_noel_megagift2025(var_date, post_query_body=post_query_body)

Noël Megagift 2025

Permet d'obtenir les données des tirages du Mega Cadeau de l'événement de Noël 2025 (filtrage RSQL possible).

**À propos de l'événement :**
Événement interserveur où les joueurs peuvent obtenir des récompenses exclusives via le Mega Cadeau.
Plus d'informations sur l'événement : https://wiki.nationsglory.fr/fr/article/lile-du-pere-noel-rv8x0t/#2-le-mega-cadeau-recompense-ultime

**Période de l'événement :** Du 14/12/2025 au 06/01/2026

**Données exposées :**
Chaque entrée représente un tirage individuel du Mega cadeau par un joueur, avec les items obtenus
et la date/heure du tirage.

**Fréquence de mise à jour :**
Les données sont actualisées quotidiennement pendant toute la durée de l'événement (du 14/12/2025 au 06/01/2026), généralement la nuit.


### Example

* OAuth Authentication (oauth2_client_credentials):

```python
import yoxo_client
from yoxo_client.models.noel_megagift2025 import NoelMegagift2025
from yoxo_client.models.post_query_body import PostQueryBody
from yoxo_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.yoxo.software
# See configuration.py for a list of all supported configuration parameters.
configuration = yoxo_client.Configuration(
    host = "https://api.yoxo.software"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with yoxo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = yoxo_client.APIJavaApi(api_client)
    var_date = '2025-11-24' # date | Date de la configuration (format ISO-8601: yyyy-MM-dd)
    post_query_body = yoxo_client.PostQueryBody() # PostQueryBody |  (optional)

    try:
        # Noël Megagift 2025
        api_response = api_instance.post_noel_megagift2025(var_date, post_query_body=post_query_body)
        print("The response of APIJavaApi->post_noel_megagift2025:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIJavaApi->post_noel_megagift2025: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **date**| Date de la configuration (format ISO-8601: yyyy-MM-dd) | 
 **post_query_body** | [**PostQueryBody**](PostQueryBody.md)|  | [optional] 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_player_list**
> PlayerList post_player_list(var_date, java_server, post_query_body=post_query_body)

Player List

Permet d'obtenir la liste des joueurs s'étant connectés au moins une fois au cours des 14 derniers jours sur un serveur à une date donnée (avec filtrage possible).

**Fréquence de mise à jour :**
Les données sont actualisées quotidiennement, généralement la nuit.


### Example

* OAuth Authentication (oauth2_client_credentials):

```python
import yoxo_client
from yoxo_client.models.player_list import PlayerList
from yoxo_client.models.post_query_body import PostQueryBody
from yoxo_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.yoxo.software
# See configuration.py for a list of all supported configuration parameters.
configuration = yoxo_client.Configuration(
    host = "https://api.yoxo.software"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with yoxo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = yoxo_client.APIJavaApi(api_client)
    var_date = '2025-10-28' # date | La date à laquelle on veut récupérer la liste des joueurs (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    java_server = 'red' # str | Serveur NationsGlory dont on veut la liste des joueurs. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    post_query_body = yoxo_client.PostQueryBody() # PostQueryBody |  (optional)

    try:
        # Player List
        api_response = api_instance.post_player_list(var_date, java_server, post_query_body=post_query_body)
        print("The response of APIJavaApi->post_player_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIJavaApi->post_player_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **date**| La date à laquelle on veut récupérer la liste des joueurs (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | 
 **java_server** | **str**| Serveur NationsGlory dont on veut la liste des joueurs. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | 
 **post_query_body** | [**PostQueryBody**](PostQueryBody.md)|  | [optional] 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_research_server**
> ResearchServer post_research_server(var_date, java_server, post_query_body=post_query_body)

Research Server

Permet d'obtenir les niveaux de recherche actuels de tous les pays d'un serveur à une date donnée (avec filtrage possible).

**Données exposées :**
- Niveaux actuels de recherche par domaine pour chaque pays
- Dernière recherche complétée par chaque pays
- Valeurs actuelles des conditions de recherche

**Exemples de filtres RSQL :**
- `country==Papouasie` - Pays nommé exactement "Papouasie"
- `country==*Terre*` - Pays dont le nom contient "Terre"
- `lastResearch.level>3` - Pays dont la dernière recherche a atteint un niveau > 3
- `lastResearch.domain==militaire` - Pays dont la dernière recherche était dans le domaine militaire
- `lastResearch.timestamp>1735689600000` - Pays dont la dernière recherche a été complétée après cette date

**Fréquence de mise à jour :**
Les données sont actualisées tous les jours pairs du mois (environ une fois tous les 2 jours), généralement la nuit.


### Example

* OAuth Authentication (oauth2_client_credentials):

```python
import yoxo_client
from yoxo_client.models.post_query_body import PostQueryBody
from yoxo_client.models.research_server import ResearchServer
from yoxo_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.yoxo.software
# See configuration.py for a list of all supported configuration parameters.
configuration = yoxo_client.Configuration(
    host = "https://api.yoxo.software"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with yoxo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = yoxo_client.APIJavaApi(api_client)
    var_date = '2025-11-24' # date | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    java_server = 'red' # str | Serveur NationsGlory dont on veut les données de R&D. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    post_query_body = yoxo_client.PostQueryBody() # PostQueryBody |  (optional)

    try:
        # Research Server
        api_response = api_instance.post_research_server(var_date, java_server, post_query_body=post_query_body)
        print("The response of APIJavaApi->post_research_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIJavaApi->post_research_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **date**| Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | 
 **java_server** | **str**| Serveur NationsGlory dont on veut les données de R&amp;D. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | 
 **post_query_body** | [**PostQueryBody**](PostQueryBody.md)|  | [optional] 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_skill**
> Skill post_skill(var_date, java_server, post_query_body=post_query_body)

Skill

Permet d'obtenir les compétences des joueurs présents dans au moins 1 top 50 compétences sur un serveur à une date donnée (avec filtrage possible).
Seuls les joueurs figurant dans le top 50 d'au moins une compétence sur le serveur sont inclus pour éviter de surcharger les serveurs.

**Fréquence de mise à jour :**
Les données sont actualisées tous les jours pairs du mois (environ une fois tous les 2 jours), généralement la nuit.

**Documentation :**
Plus d'informations sur les compétences/skills : https://wiki.nationsglory.fr/fr/article/les-competences-java-1shixp7/


### Example

* OAuth Authentication (oauth2_client_credentials):

```python
import yoxo_client
from yoxo_client.models.post_query_body import PostQueryBody
from yoxo_client.models.skill import Skill
from yoxo_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.yoxo.software
# See configuration.py for a list of all supported configuration parameters.
configuration = yoxo_client.Configuration(
    host = "https://api.yoxo.software"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with yoxo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = yoxo_client.APIJavaApi(api_client)
    var_date = '2025-10-28' # date | La date à laquelle on veut récupéré les skills (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    java_server = 'red' # str | Serveur NationsGlory dont on veut les skills. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    post_query_body = yoxo_client.PostQueryBody() # PostQueryBody |  (optional)

    try:
        # Skill
        api_response = api_instance.post_skill(var_date, java_server, post_query_body=post_query_body)
        print("The response of APIJavaApi->post_skill:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIJavaApi->post_skill: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **date**| La date à laquelle on veut récupéré les skills (au format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | 
 **java_server** | **str**| Serveur NationsGlory dont on veut les skills. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | 
 **post_query_body** | [**PostQueryBody**](PostQueryBody.md)|  | [optional] 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_war**
> War post_war(var_date, java_server, post_query_body=post_query_body)

War

Permet d'obtenir la liste des guerres (en cours ou terminées) d'un serveur à une date donnée (avec filtrage possible).

**Données exposées :**
- Identifiant, dates (déclaration, début), raison
- Participants (attaquant, défenseur) avec détails (pays, points missiles, progression...)
- Conditions de victoire
- Récompenses
- Détails des assauts et missiles lancés

**Fréquence de mise à jour :**
Les données sont actualisées quotidiennement, généralement la nuit.


### Example

* OAuth Authentication (oauth2_client_credentials):

```python
import yoxo_client
from yoxo_client.models.post_query_body import PostQueryBody
from yoxo_client.models.war import War
from yoxo_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.yoxo.software
# See configuration.py for a list of all supported configuration parameters.
configuration = yoxo_client.Configuration(
    host = "https://api.yoxo.software"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with yoxo_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = yoxo_client.APIJavaApi(api_client)
    var_date = '2025-11-24' # date | Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n'a été scrap ce jour là, la date antérieure la plus proche sera utilisée
    java_server = 'red' # str | Serveur NationsGlory dont on veut les données de guerre. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade
    post_query_body = yoxo_client.PostQueryBody() # PostQueryBody |  (optional)

    try:
        # War
        api_response = api_instance.post_war(var_date, java_server, post_query_body=post_query_body)
        print("The response of APIJavaApi->post_war:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIJavaApi->post_war: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **date**| Date des données (format ISO-8601: yyyy-MM-dd). Si aucune donnée n&#39;a été scrap ce jour là, la date antérieure la plus proche sera utilisée | 
 **java_server** | **str**| Serveur NationsGlory dont on veut les données de guerre. Valeurs possibles : blue, orange, yellow, white, black, cyan, lime, coral, pink, purple, green, red, mocha et jade | 
 **post_query_body** | [**PostQueryBody**](PostQueryBody.md)|  | [optional] 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


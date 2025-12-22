## @yoxoproject/yoxo-api-client@1.0-SNAPSHOT.202512222227

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @yoxoproject/yoxo-api-client@1.0-SNAPSHOT.202512222227 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://api.yoxo.software*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*APIJavaApi* | [**getCerealGlobalMarket**](docs/APIJavaApi.md#getcerealglobalmarket) | **GET** /v2/java/cereal_global_market/{date}/{javaServer} | Cereal Global Market
*APIJavaApi* | [**getCountry**](docs/APIJavaApi.md#getcountry) | **GET** /v2/java/country/{date}/{javaServer} | Country
*APIJavaApi* | [**getCountry1**](docs/APIJavaApi.md#getcountry1) | **GET** /v2/java/country/{date}/{javaServer}/{country} | Country
*APIJavaApi* | [**getEnterprises**](docs/APIJavaApi.md#getenterprises) | **GET** /v2/java/enterprise/{date}/{javaServer} | Enterprise
*APIJavaApi* | [**getEnterprises1**](docs/APIJavaApi.md#getenterprises1) | **GET** /v2/java/enterprise/{date}/{javaServer}/{enterpriseName} | Enterprise
*APIJavaApi* | [**getHalloween2025**](docs/APIJavaApi.md#gethalloween2025) | **GET** /v2/java/halloween-2025/{date} | Halloween 2025
*APIJavaApi* | [**getNoelMegagift2024**](docs/APIJavaApi.md#getnoelmegagift2024) | **GET** /v2/java/noelmegagift-2024 | Noël Megagift 2024
*APIJavaApi* | [**getNoelMegagift2025**](docs/APIJavaApi.md#getnoelmegagift2025) | **GET** /v2/java/noelmegagift-2025/{date} | Noël Megagift 2025
*APIJavaApi* | [**getPlayerList**](docs/APIJavaApi.md#getplayerlist) | **GET** /v2/java/player-list/{date}/{javaServer} | Player List
*APIJavaApi* | [**getResearchConfig**](docs/APIJavaApi.md#getresearchconfig) | **GET** /v2/java/research/{date}/config | Research Config
*APIJavaApi* | [**getResearchServer**](docs/APIJavaApi.md#getresearchserver) | **GET** /v2/java/research/{date}/{javaServer} | Research Server
*APIJavaApi* | [**getSkill**](docs/APIJavaApi.md#getskill) | **GET** /v2/java/skill/{date}/{javaServer} | Skill
*APIJavaApi* | [**getWar**](docs/APIJavaApi.md#getwar) | **GET** /v2/java/war/{date}/{javaServer} | War
*APIJavaApi* | [**getWar1**](docs/APIJavaApi.md#getwar1) | **GET** /v2/java/war/{date}/{javaServer}/{warId} | War
*APIJavaApi* | [**postCountry**](docs/APIJavaApi.md#postcountry) | **POST** /v2/java/country/{date}/{javaServer} | Country
*APIJavaApi* | [**postEnterprises**](docs/APIJavaApi.md#postenterprises) | **POST** /v2/java/enterprise/{date}/{javaServer} | Enterprise
*APIJavaApi* | [**postHalloween2025**](docs/APIJavaApi.md#posthalloween2025) | **POST** /v2/java/halloween-2025/{date} | Halloween 2025
*APIJavaApi* | [**postNoelMegagift2024**](docs/APIJavaApi.md#postnoelmegagift2024) | **POST** /v2/java/noelmegagift-2024 | Noël Megagift 2024
*APIJavaApi* | [**postNoelMegagift2025**](docs/APIJavaApi.md#postnoelmegagift2025) | **POST** /v2/java/noelmegagift-2025/{date} | Noël Megagift 2025
*APIJavaApi* | [**postPlayerList**](docs/APIJavaApi.md#postplayerlist) | **POST** /v2/java/player-list/{date}/{javaServer} | Player List
*APIJavaApi* | [**postResearchServer**](docs/APIJavaApi.md#postresearchserver) | **POST** /v2/java/research/{date}/{javaServer} | Research Server
*APIJavaApi* | [**postSkill**](docs/APIJavaApi.md#postskill) | **POST** /v2/java/skill/{date}/{javaServer} | Skill
*APIJavaApi* | [**postWar**](docs/APIJavaApi.md#postwar) | **POST** /v2/java/war/{date}/{javaServer} | War


### Documentation For Models

 - [ActionEntry](docs/ActionEntry.md)
 - [BankLogEntry](docs/BankLogEntry.md)
 - [CerealGlobalMarket](docs/CerealGlobalMarket.md)
 - [CerealGlobalMarketEntry](docs/CerealGlobalMarketEntry.md)
 - [Coords](docs/Coords.md)
 - [Country](docs/Country.md)
 - [CountryActionsEntry](docs/CountryActionsEntry.md)
 - [CountryBankEntry](docs/CountryBankEntry.md)
 - [CountryCoordinates](docs/CountryCoordinates.md)
 - [CountryEntry](docs/CountryEntry.md)
 - [CountryResearchEntry](docs/CountryResearchEntry.md)
 - [CountrySettingsEntry](docs/CountrySettingsEntry.md)
 - [DividendeClassementEntry](docs/DividendeClassementEntry.md)
 - [DividendeHistoryEntry](docs/DividendeHistoryEntry.md)
 - [Enterprise](docs/Enterprise.md)
 - [EnterpriseBank](docs/EnterpriseBank.md)
 - [EnterpriseBankLog](docs/EnterpriseBankLog.md)
 - [EnterpriseBase](docs/EnterpriseBase.md)
 - [EnterpriseBasic](docs/EnterpriseBasic.md)
 - [EnterpriseBet](docs/EnterpriseBet.md)
 - [EnterpriseBetItem](docs/EnterpriseBetItem.md)
 - [EnterpriseCasino](docs/EnterpriseCasino.md)
 - [EnterpriseElectric](docs/EnterpriseElectric.md)
 - [EnterpriseEntry](docs/EnterpriseEntry.md)
 - [EnterpriseFarm](docs/EnterpriseFarm.md)
 - [EnterprisePermission](docs/EnterprisePermission.md)
 - [EnterprisePetrol](docs/EnterprisePetrol.md)
 - [EnterpriseRealEstate](docs/EnterpriseRealEstate.md)
 - [EnterpriseTrader](docs/EnterpriseTrader.md)
 - [Halloween2025](docs/Halloween2025.md)
 - [Halloween2025Entry](docs/Halloween2025Entry.md)
 - [LastResearchEntry](docs/LastResearchEntry.md)
 - [Metadata](docs/Metadata.md)
 - [NewMemberEntry](docs/NewMemberEntry.md)
 - [NoelMegagift2024](docs/NoelMegagift2024.md)
 - [NoelMegagift2024Entry](docs/NoelMegagift2024Entry.md)
 - [NoelMegagift2025](docs/NoelMegagift2025.md)
 - [NoelMegagift2025Entry](docs/NoelMegagift2025Entry.md)
 - [Parcelle](docs/Parcelle.md)
 - [PermissionEntry](docs/PermissionEntry.md)
 - [PlayerList](docs/PlayerList.md)
 - [PlayerListEntry](docs/PlayerListEntry.md)
 - [PostQueryBody](docs/PostQueryBody.md)
 - [ResearchConfig](docs/ResearchConfig.md)
 - [ResearchConfigEntry](docs/ResearchConfigEntry.md)
 - [ResearchLevelEntry](docs/ResearchLevelEntry.md)
 - [ResearchServer](docs/ResearchServer.md)
 - [ResearchesEntry](docs/ResearchesEntry.md)
 - [SettingLogEntry](docs/SettingLogEntry.md)
 - [Skill](docs/Skill.md)
 - [SkillEntry](docs/SkillEntry.md)
 - [War](docs/War.md)
 - [WarAssault](docs/WarAssault.md)
 - [WarCondition](docs/WarCondition.md)
 - [WarEntry](docs/WarEntry.md)
 - [WarMissile](docs/WarMissile.md)
 - [WarParticipant](docs/WarParticipant.md)
 - [WarRewards](docs/WarRewards.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="oauth2_client_credentials"></a>
### oauth2_client_credentials

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: 
 - **api_access**: Permet l\'accès aux API de Yoxo


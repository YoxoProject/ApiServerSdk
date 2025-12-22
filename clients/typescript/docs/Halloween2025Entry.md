# Halloween2025Entry

Statistiques individuelles d\'un joueur pour l\'événement Halloween 2025

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **string** | Le nom d\&#39;utilisateur du joueur | [optional] [default to undefined]
**demonsKilled** | **number** | Nombre de démons tués dans le Nether | [optional] [default to undefined]
**tickets** | **number** | Nombre de tickets obtenus pour la tombola finale. 1 ticket est obtenu toutes les 200 âmes collectées, avec des tickets bonus pour le top 10 des chasseurs d\&#39;âmes | [optional] [default to undefined]
**lostSoulsCount** | **number** | Nombre d\&#39;âmes égarées retrouvées dans les capitales (/spawn) des différents serveurs | [optional] [default to undefined]
**extractedSouls** | **number** | Nombre de points gagnés par le joueur en battant les démons du Nether (Démon de niveau 1: 1 âme, de niveau 2: 4 âmes, de niveau 3: 40 âmes) | [optional] [default to undefined]
**lostSouls** | **number** | Nombre de points gagnés par le joueur en retrouvant les âmes égarées dans les capitales | [optional] [default to undefined]

## Example

```typescript
import { Halloween2025Entry } from '@yoxo/client';

const instance: Halloween2025Entry = {
    username,
    demonsKilled,
    tickets,
    lostSoulsCount,
    extractedSouls,
    lostSouls,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# NotationEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **string** | Le nom du pays | [optional] [default to undefined]
**server** | **string** | Le serveur sur lequel est le pays | [optional] [default to undefined]
**from** | **string** | La date du début de la semaine notée (yyyy-MM-dd) | [optional] [default to undefined]
**to** | **string** | La date de fin de la semaine notée (yyyy-MM-dd) | [optional] [default to undefined]
**activity** | **number** | Activité du pays (entre 0 et 5) | [optional] [default to undefined]
**gestion** | **number** | Gestion du pays (entre 0 et 10) | [optional] [default to undefined]
**skills** | **number** | Skills du pays (entre 0 et 5) | [optional] [default to undefined]
**economy** | **number** | Economie du pays (entre 0 et 11) | [optional] [default to undefined]
**military** | **number** | Militaire du pays (entre 0 et 11) | [optional] [default to undefined]
**antimatter** | **number** | Possession d\&#39;un missile antimatière (0 ou 2) | [optional] [default to undefined]
**redmatter** | **number** | Possession d\&#39;un missile redmatter (0 ou 3) | [optional] [default to undefined]
**endbringer** | **number** | Possession d\&#39;un missile endbringer (0 ou 5) | [optional] [default to undefined]
**spatial** | **number** | Points lié au spatiale. 1 points par planète dont il y a plus de 10 chunks. Les planète étant lune, mars et edora (entre 0 et 3) | [optional] [default to undefined]
**unesco** | **number** | Points lié à la possession d\&#39;un batiment classé unesco. 3 points si 1 batiment, 5 points si 2 ou plus (entre 0 et 5) | [optional] [default to undefined]
**noteArchitecturale** | **number** | Note totale en architecture (entre 0 et 42) | [optional] [default to undefined]
**architecture** | [**ArchitectureEntry**](ArchitectureEntry.md) |  | [optional] [default to undefined]
**total** | **number** | Le total de la note (entre 0 et 102) | [optional] [default to undefined]
**rang** | **number** | Le rang du pays sur le serveur | [optional] [default to undefined]
**rangInterserv** | **number** | Le rang du pays à l\&#39;interserveur | [optional] [default to undefined]
**bourse** | **number** | La bourse versée au pays | [optional] [default to undefined]
**bourseUnesco** | **number** | La bourse obtenue grâce aux UNESCO | [optional] [default to undefined]

## Example

```typescript
import { NotationEntry } from '@yoxoproject/yoxo-api-client';

const instance: NotationEntry = {
    country,
    server,
    from,
    to,
    activity,
    gestion,
    skills,
    economy,
    military,
    antimatter,
    redmatter,
    endbringer,
    spatial,
    unesco,
    noteArchitecturale,
    architecture,
    total,
    rang,
    rangInterserv,
    bourse,
    bourseUnesco,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# PostQueryBody

Le corps de la requête pour les endpoints POST /v2/data/{type}/{date}/{server}/query permettant des requêtes complexes avec filtrage et pagination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **string** | Permet de filtrer les résultats avec des expressions RSQL dans le corps de la requête. - Opérateurs de comparaison : &#x60;&#x3D;&#x3D;&#x60;, &#x60;!&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x60;, &#x60;&lt;&#x3D;&#x60; - Opérateurs logiques : &#x60;;&#x60; (ET), &#x60;,&#x60; (OU), parenthèses pour grouper - Wildcards : &#x60;*&#x60; pour contient/commence par/finit par (ex: &#x60;username&#x3D;&#x3D;*Didje*&#x60;)  __Exemples de filtres :__ - &#x60;builder&gt;100000&#x60; : joueurs avec plus de 100000 XP en Builder - &#x60;username&#x3D;&#x3D;*Romain*&#x60; : joueurs dont le nom contient \&quot;Romain\&quot; - &#x60;builder&gt;500000;builderPosition&lt;100&#x60; : XP Builder &gt; 500000 ET position &lt; 100 - &#x60;(username&#x3D;&#x3D;*77*,username&#x3D;&#x3D;*24*)&#x60; : nom contient \&quot;77\&quot; OU \&quot;24\&quot;  | [optional] [default to undefined]
**page** | **number** | Le numéro de page à récupérer (la première page est la page 1) | [optional] [default to undefined]
**size** | **number** | Le nombre d\&#39;éléments par page | [optional] [default to undefined]

## Example

```typescript
import { PostQueryBody } from '@yoxoproject/client';

const instance: PostQueryBody = {
    filter,
    page,
    size,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

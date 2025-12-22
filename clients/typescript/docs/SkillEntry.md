# SkillEntry

Skills d\'un joueur

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **string** | Le pseudonyme du joueur | [optional] [default to undefined]
**builder** | **number** | XP du joueur dans le métier de Builder. Paliers: Niveau 1: 5000 XP, Niveau 2: 20000 XP, Niveau 3: 50000 XP, Niveau 4: 100000 XP, Niveau 5: 200000 XP | [optional] [default to undefined]
**farmer** | **number** | XP du joueur dans le métier d\&#39;Agriculteur (Farmer). Paliers: Niveau 1: 5000 XP, Niveau 2: 20000 XP, Niveau 3: 60000 XP, Niveau 4: 125000 XP, Niveau 5: 300000 XP | [optional] [default to undefined]
**hunter** | **number** | XP du joueur dans le métier de Chasseur (Hunter). Paliers: Niveau 1: 5000 XP, Niveau 2: 20000 XP, Niveau 3: 50000 XP, Niveau 4: 100000 XP, Niveau 5: 200000 XP | [optional] [default to undefined]
**lumberjack** | **number** | XP du joueur dans le métier de Bûcheron (Lumberjack). Paliers: Niveau 1: 5000 XP, Niveau 2: 20000 XP, Niveau 3: 50000 XP, Niveau 4: 100000 XP, Niveau 5: 200000 XP | [optional] [default to undefined]
**engineer** | **number** | XP du joueur dans le métier d\&#39;Ingénieur (Engineer). Paliers: Niveau 1: 3500 XP, Niveau 2: 15000 XP, Niveau 3: 30000 XP, Niveau 4: 70000 XP, Niveau 5: 200000 XP | [optional] [default to undefined]
**miner** | **number** | XP du joueur dans le métier de Mineur (Miner). Paliers: Niveau 1: 5000 XP, Niveau 2: 20000 XP, Niveau 3: 75000 XP, Niveau 4: 150000 XP, Niveau 5: 400000 XP | [optional] [default to undefined]
**builderPosition** | **number** | Position du joueur dans le classement serveur de le métier de Builder (1 &#x3D; premier du classement) | [optional] [default to undefined]
**farmerPosition** | **number** | Position du joueur dans le classement serveur de le métier d\&#39;Agriculteur (1 &#x3D; premier du classement) | [optional] [default to undefined]
**hunterPosition** | **number** | Position du joueur dans le classement serveur de le métier de Chasseur (1 &#x3D; premier du classement) | [optional] [default to undefined]
**lumberjackPosition** | **number** | Position du joueur dans le classement serveur de le métier de Bûcheron (1 &#x3D; premier du classement) | [optional] [default to undefined]
**engineerPosition** | **number** | Position du joueur dans le classement serveur de le métier d\&#39;Ingénieur (1 &#x3D; premier du classement) | [optional] [default to undefined]
**minerPosition** | **number** | Position du joueur dans le classement serveur de le métier de Mineur (1 &#x3D; premier du classement) | [optional] [default to undefined]

## Example

```typescript
import { SkillEntry } from '@yoxo/client';

const instance: SkillEntry = {
    username,
    builder,
    farmer,
    hunter,
    lumberjack,
    engineer,
    miner,
    builderPosition,
    farmerPosition,
    hunterPosition,
    lumberjackPosition,
    engineerPosition,
    minerPosition,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

const fs = require('fs');
const path = require('path');

const specPath = path.join(__dirname, '../specs/openapi.json');

try {
    const spec = JSON.parse(fs.readFileSync(specPath, 'utf8'));

    // 1. Identify the problematic schema
    const entrySchema = spec.components.schemas.EnterpriseEntry;
    
    if (entrySchema && entrySchema.properties && entrySchema.oneOf) {
        console.log('Fixing Circular Dependency in EnterpriseEntry...');

        // 2. Create "EnterpriseBase" with common properties
        const commonProperties = { ...entrySchema.properties };
        // Remove the discriminator property from the base if present (it's usually handled by the type)
        // But keep it for now as it holds the value.
        
        spec.components.schemas.EnterpriseBase = {
            type: "object",
            description: "Champs communs à toutes les entreprises",
            properties: commonProperties
        };

        // 3. Update subtypes to inherit from EnterpriseBase instead of EnterpriseEntry
        const subtypes = [
            "EnterpriseBasic", "EnterpriseBet", "EnterpriseCasino", 
            "EnterpriseElectric", "EnterpriseFarm", "EnterpriseRealEstate", 
            "EnterprisePetrol", "EnterpriseTrader"
        ];

        subtypes.forEach(subtypeName => {
            const subtype = spec.components.schemas[subtypeName];
            if (subtype && subtype.allOf) {
                // Replace reference to EnterpriseEntry with EnterpriseBase
                subtype.allOf = subtype.allOf.map(schema => {
                    if (schema.$ref === '#/components/schemas/EnterpriseEntry') {
                        return { $ref: '#/components/schemas/EnterpriseBase' };
                    }
                    return schema;
                });
            }
        });

        // 4. Clean up EnterpriseEntry to be a pure Polymorphic Dispatcher
        // It shouldn't have 'properties' anymore, just 'oneOf' and 'discriminator'
        delete entrySchema.properties;
        
        // We might need to keep the discriminator definition
        // entrySchema.discriminator is already there.

        console.log('✅ EnterpriseEntry circular dependency fixed.');
    }

    fs.writeFileSync(specPath, JSON.stringify(spec, null, 2));

} catch (e) {
    console.error('Error patching spec:', e);
    process.exit(1);
}

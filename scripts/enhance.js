const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const clientsDir = path.join(rootDir, 'clients');
const overlaysDir = path.join(rootDir, 'overlays');

function copyRecursiveSync(src, dest) {
    if (!fs.existsSync(src)) return;
    const stats = fs.statSync(src);
    const isDirectory = stats.isDirectory();

    if (isDirectory) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
        fs.readdirSync(src).forEach((childItemName) => {
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        if (!fs.existsSync(path.dirname(dest))) fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.copyFileSync(src, dest);
        console.log(`Copied ${path.basename(src)}`);
    }
}

// 1. TypeScript Overlay
console.log('Enhancing TypeScript Client...');
copyRecursiveSync(path.join(overlaysDir, 'typescript'), path.join(clientsDir, 'typescript'));

// 2. Java Overlay
console.log('Enhancing Java Client...');
copyRecursiveSync(path.join(overlaysDir, 'java'), path.join(clientsDir, 'java'));

// 3. Python Overlay
console.log('Enhancing Python Client...');
copyRecursiveSync(path.join(overlaysDir, 'python'), path.join(clientsDir, 'python'));

// Python __init__.py patch
const pyInitPath = path.join(clientsDir, 'python', 'yoxo_client', '__init__.py');
if (fs.existsSync(pyInitPath)) {
    let content = fs.readFileSync(pyInitPath, 'utf8');
    if (!content.includes('from yoxo_client.client import YoxoClient')) {
        content += '\nfrom yoxo_client.client import YoxoClient\n';
        fs.writeFileSync(pyInitPath, content);
        console.log('Patched Python __init__.py');
    }
}

// scripts/package-theme.js (ESM compatible)
import fs from 'fs';
import path from 'path';
import { zip } from 'zip-a-folder';
import fse from 'fs-extra';
import { fileURLToPath } from 'url';

// Equivalente de __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const themeName = 'trulydigital';
const bundleDir = path.join(__dirname, '../bundle');
const tempDir = path.join(bundleDir, themeName);
const outputZip = path.join(bundleDir, `${themeName}.zip`);

const filesToInclude = [
    'assets',
    'partials',
    'custom-under-construction.hbs',
    'default.hbs',
    'home.hbs',
    'index.hbs',
    'page.hbs',
    'post.hbs',
    'package.json',
    'README.md'
];

const run = async () => {
    try {
        if (fs.existsSync(bundleDir)) {
            fse.removeSync(bundleDir);
        }
        fs.mkdirSync(bundleDir);
        fs.mkdirSync(tempDir);

        for (const file of filesToInclude) {
            const src = path.join(__dirname, '..', file);
            const dest = path.join(tempDir, file);
            if (fs.existsSync(src)) {
                fse.copySync(src, dest);
                console.log(`✔ Copiado: ${file}`);
            }
        }

        await zip(tempDir, outputZip);
        console.log(`🎉 Tema empaquetado en: ${outputZip}`);

        fse.removeSync(tempDir);
    } catch (err) {
        console.error('❌ Error empaquetando el tema:', err);
    }
};

run();

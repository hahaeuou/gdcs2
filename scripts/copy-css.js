const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const targetDir = path.join(__dirname, '../static/admin');

if (!fs.existsSync(publicDir)) {
    console.error("The 'public' folder didn't exist while trying to copy main.css. Run 'npm run dev' again.");
    process.exit(1);
}

// searches main.[hash].css in public/
const files = fs.readdirSync(publicDir);
const mainCSS = files.find(f => f.startsWith('main.') && f.endsWith('.css'));

if (mainCSS) {
    const src = path.join(publicDir, mainCSS);
    const dest = path.join(targetDir, 'main.css');
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${mainCSS} -> static/admin/main.css`);
} else {
    console.error("A main.*.css file doesn't exist in public/");
}
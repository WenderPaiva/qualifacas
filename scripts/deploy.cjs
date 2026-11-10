const { execSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

const ROOT = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT, 'dist');
const REPO_URL = 'https://github.com/WenderPaiva/qualifacas.git';

function deployGhPages() {
  if (!fs.existsSync(DIST_DIR)) {
    throw new Error('dist directory does not exist. Run build first.');
  }

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'gh-pages-qualifacas-'));
  console.log(`[gh-pages] Staging dist/ in ${tmpDir}...`);

  // Copy all files from dist/ into tmpDir
  for (const entry of fs.readdirSync(DIST_DIR)) {
    fs.cpSync(path.join(DIST_DIR, entry), path.join(tmpDir, entry), {
      recursive: true,
    });
  }

  execSync('git init', { cwd: tmpDir, stdio: 'inherit' });
  execSync('git checkout -b gh-pages', { cwd: tmpDir, stdio: 'inherit' });
  execSync('git add -A', { cwd: tmpDir, stdio: 'inherit' });
  execSync('git commit -m "Deploy FacasFlow to GitHub Pages (gh-pages)"', {
    cwd: tmpDir,
    stdio: 'inherit',
  });
  execSync(`git remote add origin ${REPO_URL}`, {
    cwd: tmpDir,
    stdio: 'inherit',
  });
  execSync('git push -f origin gh-pages', { cwd: tmpDir, stdio: 'inherit' });

  console.log('[gh-pages] Published successfully to branch gh-pages!');
}

deployGhPages();

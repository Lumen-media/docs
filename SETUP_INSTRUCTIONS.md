# Centralized Documentation System Setup Guide

## 1. Central Repository (Lumen-media/docs)

### Initialize Repository
```bash
# Already done - folder structure created:
# lumen/, module-sdk/, community-modules/, lumen-locales/, rust/
# .github/workflows/deploy.yml - GitHub Pages deployment
```

### Enable GitHub Pages
1. Go to **Settings → Pages**
2. Source: **GitHub Actions**
3. The `deploy.yml` workflow will handle deployment on push to main

## 2. Create DOCS_SYNC_TOKEN (PAT)

For EACH source repository (lumen, module-sdk, community-modules, lumen-locales):

1. Go to **GitHub Settings → Developer settings → Personal access tokens → Fine-grained tokens**
2. Generate new token with:
   - **Repository access**: Only select the central repo `Lumen-media/docs`
   - **Permissions**: Contents → Read and write
3. Copy the token

## 3. Add Secret to Source Repos

For EACH source repository:
1. Go to **Settings → Secrets and variables → Actions**
2. New repository secret:
   - Name: `DOCS_SYNC_TOKEN`
   - Value: Paste the PAT from step 2

## 4. Add Sync Workflow to Source Repos

Create `.github/workflows/sync-docs.yml` in EACH source repo:

```yaml
# Copy the content from central repo's .github/workflows/sync-docs.yml
# This workflow is reusable - same file works for all repos
```

## 5. Verify Setup

1. Push to main in any source repo
2. Check Actions tab - should see "Sync Documentation to Central Repo" run
3. Check central repo (Lumen-media/docs) - should see new folder under repo name
4. Visit https://lumen-media.github.io/docs/ - should deploy automatically

## Repository Structure After Sync

```
Lumen-media/docs/
├── lumen/              # From lumen repo docs/
├── module-sdk/         # From module-sdk repo docs/
├── community-modules/  # From community-modules repo docs/
├── lumen-locales/      # From lumen-locales repo docs/
├── rust/
│   ├── lumen/          # From lumen repo target/doc/
│   ├── module-sdk/     # From module-sdk repo target/doc/
│   ├── community-modules/
│   └── lumen-locales/
├── .github/workflows/
│   ├── deploy.yml      # Pages deployment
│   └── sync-docs.yml   # Reusable sync workflow (copy to source repos)
└── README.md
```

## Troubleshooting

- **Sync fails**: Check DOCS_SYNC_TOKEN has write access to Lumen-media/docs
- **Rust docs not generated**: Ensure Cargo.toml exists in repo root
- **Pages not updating**: Check Actions tab in central repo for deploy.yml runs
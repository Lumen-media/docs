# Lumen-media Centralized Documentation

Central documentation hub for Lumen-media organization, deployed via GitHub Pages at https://lumen-media.github.io/docs/

## Structure

- `lumen/` - Lumen core documentation
- `module-sdk/` - Module SDK documentation
- `community-modules/` - Community modules documentation
- `lumen-locales/` - Localization documentation
- `rust/` - Generated Rust API documentation (from `cargo doc`)

## Deployment

Automatic via GitHub Actions on push to main branch.

## Syncing from Source Repos

Each source repo uses the reusable workflow in `.github/workflows/sync-docs.yml` to push documentation here on changes to `docs/**` or `Cargo.toml`.

See [SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md) for setup details.
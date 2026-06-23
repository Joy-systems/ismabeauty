# Joy Template

Template officiel utilisé par **Joy Engine** pour générer un nouveau site.

## Pour push ce template sur GitHub (one-shot manuel)

1. Crée un repo vide `joy-template` dans l'organisation `joy-systems` sur GitHub.
2. Sur ce repo : **Settings → Template repository → coche la case**.
3. Depuis ce dossier `templates/joy-template/` en local :
   ```bash
   git init && git add . && git commit -m "init"
   git branch -M main
   git remote add origin https://github.com/joy-systems/joy-template.git
   git push -u origin main
   ```
4. Vérifie : `https://github.com/joy-systems/joy-template` doit afficher le badge **"Template"**.

Une fois fait, Joy Engine peut générer des repos via l'API `POST /repos/joy-systems/joy-template/generate`.

## Variables d'environnement utilisées par le template

- `VITE_SITE_NAME` — nom affiché du site
- `VITE_SITE_DESCRIPTION` — description / tagline

Toute autre var injectée via Joy Engine est disponible dans `import.meta.env.VITE_*`.
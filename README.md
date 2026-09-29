# Portfolio Zacharoodjo

Site portfolio sombre cinématographique, 100 % éditable.

## Comment modifier

### 1. Logo
Le logo est déjà intégré (`logo.png`) dans une version **claire / ice blue** adaptée au fond sombre du site.
Si tu veux utiliser une autre version :
1. Remplace simplement le fichier `logo.png` dans ce dossier.
2. Ou bascule vers le texte en commentant l’`<img>` et en décommentant le `<span class="logo-text">` dans `index.html`.

### 2. Changer les textes
Tous les textes importants sont marqués avec des commentaires `<!-- TEXTE MODIFIABLE -->`.
Cherche simplement ces commentaires dans `index.html` et remplace le texte.

### 3. Remplacer les vidéos d’exemple
Dans la section Portfolio, chaque projet a un iframe YouTube.
Remplace l’ID (ex: `dQw4w9WgXcQ`) par le tien :
```
https://www.youtube.com/embed/TON_ID_ICI
```
Tu peux aussi supprimer des cartes de projet en entier (supprime tout le bloc `<article class="project-card">...</article>`).

### 4. Coordonnées de contact
Dans la section Contact, change l’email, le numéro WhatsApp et le lien Instagram.

## Héberger le site (gratuit)

### Option la plus simple : Netlify
1. Va sur [netlify.com](https://www.netlify.com)
2. Crée un compte (gratuit)
3. Glisse-dépose tout le dossier sur la page d’accueil Netlify
4. Ton site est en ligne en 30 secondes

### Autre option : Vercel
Même principe sur [vercel.com](https://vercel.com)

## Structure des fichiers
- `index.html` → contenu (textes, vidéos, logo)
- `style.css` → design (couleurs, mise en page)
- `script.js` → menu mobile + année automatique
- `README.md` → ce fichier

Bon montage !

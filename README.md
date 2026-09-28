# Portfolio Zacharoodjo

Site portfolio sombre cinématographique, 100 % éditable.

## Comment modifier

### 1. Ajouter ton logo
1. Place ton fichier `logo.png` ou `logo.svg` dans ce dossier.
2. Ouvre `index.html`.
3. Trouve la section HEADER (vers le haut).
4. Décommente la ligne :
   ```html
   <img src="logo.png" alt="Zacharoodjo" class="logo-img" />
   ```
5. Supprime ou commente la ligne `<span class="logo-text">Zacharoodjo</span>`.

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

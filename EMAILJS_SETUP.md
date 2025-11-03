# Configuration EmailJS

## 📧 Guide de configuration du formulaire de contact

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Connectez votre service email (Gmail, Outlook, etc.)

### 2. Obtenir les clés API
1. Dans le dashboard EmailJS, allez dans "Account" → "General"
2. Copiez votre **Public Key**
3. Allez dans "Email Services" et créez un service
4. Copiez votre **Service ID**
5. Allez dans "Email Templates" et créez un template
6. Copiez votre **Template ID**

### 3. Configurer les variables d'environnement
Créez un fichier `.env.local` à la racine du projet :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_teclyx8
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_aqbu41b
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=uoLYWA_RX6OzN3C1u
```

**✅ Vos clés sont déjà configurées dans le code !**

### 4. Template EmailJS recommandé
Utilisez ce template dans EmailJS :

**Sujet :** `Nouveau message de {{from_name}}`

**Contenu :**
```
Bonjour {{to_name}},

Vous avez reçu un nouveau message de contact :

Nom : {{from_name}}
Email : {{from_email}}

Message :
{{message}}

---
Ce message a été envoyé depuis votre portfolio.
```

**Variables utilisées dans le template :**
- `{{to_name}}` - Votre nom (Altan DEPELI)
- `{{from_name}}` - Nom de l'expéditeur
- `{{from_email}}` - Email de l'expéditeur  
- `{{message}}` - Message
- `{{reply_to}}` - Email de réponse

**⚠️ IMPORTANT :** Assurez-vous que votre template EmailJS utilise exactement ces noms de variables !

### 5. Déploiement
1. Ajoutez les variables d'environnement dans Vercel :
   - Allez dans votre projet Vercel
   - Settings → Environment Variables
   - Ajoutez les 3 variables

2. Redéployez :
```bash
npx vercel --prod
```

### 6. Test
Testez le formulaire de contact sur votre site déployé pour vérifier que les emails arrivent bien.

#!/bin/bash

# Script de configuration du nom de domaine personnalisé
# Usage: ./scripts/setup-domain.sh votre-domaine.com

if [ $# -eq 0 ]; then
    echo "Usage: $0 <votre-domaine.com>"
    echo "Exemple: $0 altan-depeli.com"
    exit 1
fi

DOMAIN=$1

echo "🌐 Configuration du domaine personnalisé : $DOMAIN"
echo ""

# Vérifier si Vercel CLI est installé
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI n'est pas installé"
    echo "Installez-le avec : npm i -g vercel"
    exit 1
fi

# Ajouter le domaine
echo "📝 Ajout du domaine à Vercel..."
npx vercel domains add $DOMAIN

echo ""
echo "✅ Configuration terminée !"
echo ""
echo "📋 Prochaines étapes :"
echo "1. Configurez les DNS de votre domaine :"
echo "   - Ajoutez un enregistrement CNAME pointant vers cname.vercel-dns.com"
echo "   - Ou ajoutez un enregistrement A pointant vers 76.76.19.61"
echo ""
echo "2. Vérifiez la configuration :"
echo "   npx vercel domains ls"
echo ""
echo "3. Redéployez si nécessaire :"
echo "   npx vercel --prod"
echo ""
echo "🌍 Votre portfolio sera accessible sur : https://$DOMAIN"

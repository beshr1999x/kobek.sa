#!/bin/bash

echo "🚀 Kobek.sa Update Script"
echo "=========================="

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

echo "📝 Adding changes to git..."
git add .

echo "💬 Enter your commit message:"
read commit_message

echo "💾 Committing changes..."
git commit -m "$commit_message"

echo "📤 Pushing to GitHub..."
git push origin main

echo "🔨 Building project..."
npm run build

echo "🚀 Deploying to kobek.sa..."
netlify deploy --prod --dir=out

echo "✅ Update complete! Visit https://kobek.sa"

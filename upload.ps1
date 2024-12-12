Set-Location ../blog-preview

Write-Host "Deploying..."

git add .
git commit -m 'build and upload'
git push

Write-Host "Deployed Completed!"

Set-Location ../blob
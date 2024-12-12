# First set the location to "blog-preview"
Set-Location ../blog-preview

Write-Host "Deploying..."

git add .
git commit -m 'build and upload'
git push

Write-Host "Deployed Completed!"

# Finally, return to "blob"
Set-Location ../blob
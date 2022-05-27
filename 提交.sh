cd "Github repo"/"360测试"
now=$(date "+%Y-%m-%d")
git add .
git commit -m "$now"
git pull
git push
# exec /bin/zsh
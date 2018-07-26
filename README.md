# Angular6 by AKASSE 

#git
git show-ref

#build 
ng build --prod --aot=false --build-optimizer=false

#Vous pouvez aussi spécifier -v, qui vous montre l'URL que Git a stockée pour chaque nom court :

$ git remote -v


#Ajouter des dépôts distants
#J'ai expliqué et donné des exemples d'ajout de dépôts distants dans les chapitres précédents, mais voici spécifiquement comment faire. Pour ajouter un nouveau dépôt distant Git comme nom court auquel il est facile de faire référence, 
lancez git remote add [nomcourt] [url] :


#Maintenant, vous pouvez utiliser le mot-clé pb sur la ligne de commande au lieu de l'URL complète. Par exemple, si vous voulez récupérer toute l'information que Paul a mais que vous ne souhaitez pas l'avoir encore dans votre branche, vous pouvez lancer git fetch pb :
$ git fetch [nom-distant]
$ git fetch pb



#Pousser son travail sur un dépôt distant
#Lorsque votre dépôt vous semble prêt à être partagé, il faut le pousser en amont. La commande pour le faire est simple : git push [nom-distant] [nom-de-branche]. Si vous souhaitez pousser votre branche master vers le serveur origin (pour rappel, cloner un dépôt définit automatiquement ces noms pour vous), alors vous pouvez lancez ceci pour pousser votre travail vers le serveur amont :

$ git push origin master



#Inspecter un dépôt distant
#Si vous souhaitez visualiser plus d'informations à propos d'un dépôt distant particulier, vous pouvez utiliser la commande git remote show [nom-distant]. Si vous lancez cette commande avec un nom court particulier, tel que origin, vous obtenez quelque chose comme :
$ git remote show origin


#Retirer et déplacer des branches distantes
#Si vous souhaitez renommer une référence, dans les versions récentes de Git, vous pouvez lancer git remote rename pour modifier le nom court d'un dépôt distant. Par exemple, si vous souhaitez renommer pb en paul, vous pouvez le faire avec git remote rename :

$ git remote rename pb paul
$ git remote
origin
paul


#Si vous souhaitez retirer une référence pour certaines raisons — vous avez changé de serveur ou vous n'utilisez plus ce serveur particulier, ou peut-être un contributeur a cessé de contribuer — vous pouvez utiliser git remote rm :

$ git remote rm paul
$ git remote
origin

#https://github.com/akasse/angular6.git
#We recommend every repository include a README, LICENSE, and .gitignore.


#"…or create a new repository on the command line
echo "# angular6" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/akasse/angular6.git
git push -u origin master

#…or push an existing repository from the command line
git remote add origin https://github.com/akasse/angular6.git
git push -u origin master

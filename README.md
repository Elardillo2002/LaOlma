# NVM
Instalación: https://github.com/coreybutler/nvm-windows/releases

# ANGULAR
> npm i -g @angular/cli@16.2.12

# GIT
## Obtener ficheros de GITHUB
> git clone https://github.com/Elardillo2002/LaOlma

## Iniciar un proyecto de GIT (localmente)
> git init

## Actualizar cambios de GITHUB
> git pull

## Actualizar cambios propios (main)
> git add . \
> git commit -m "Commit" \
> git remote add origin _url_repositorio_ \
> git fetch \
> git merge origin/main \
> git push -u origin main \
\
> git add . \
> git commit -m "Commit" \
> git fetch \
> git merge origin/main\
> git push 

## Instalar dependencias de Angular
> npm install

## Nuevo proyecto
> ng new LaOlma

# INICIAR PROYECTO
> cd Angular \
> ng serve [--open]

## Generar un nuevo componente
> ng generate component components/_nombre-componente_git


/eventopasado
+ id (autogenerado)
+ fecha (año-mes-dia)
+ descripcion (string)
+ imagen (array de bytes)
+ Enlace (string)

/eventofuturo
+ id
+ fecha
+ descripcion
+ tipo

eventos
get
/api/eventospasados /id
/api/eventosfuturos
/los últimos

post
todos menos el id

borrar
/id

put
/id 
evento a actualizar

futuros
/proximos

post
todo menos el id
en body

delete 
/id

put
/id + body

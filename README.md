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

# OPCIONES DE LA API
## Eventos pasados
- Listar todos los eventos -> /api/eventospasados                                   GET
- Buscar evento por id -> /api/eventospasados/_id_                                  GET
- Listar últimos eventos -> /api/eventospasados/ultimos                             GET
- Añadir un evento nuevo -> /api/eventospasados + BODY                              POST
- Borrar un evento -> /api/eventospasados/_id_                                      DELETE
- Actualizar un evento -> /api/eventospasados/_id_ + BODY                           PUT

## Eventos futuros
- Listar todos los eventos -> /api/eventosfuturos                                   GET
- Buscar evento por id -> /api/eventosfuturos/_id_                                  GET
- Listar próximos eventos -> /api/eventosfuturos/proximos                           GET
- Añadir un evento nuevo -> /api/eventosfuturos + BODY                              POST
- Borrar un evento -> /api/eventosfuturos/_id_                                      DELETE
- Actualizar un evento -> /api/eventosfuturos/_id_ + BODY                           PUT

/eventopasado
+ id (autogenerado)
+ fecha (año-mes-dia)
+ descripcion (string)
+ imagen (array de bytes)
+ Enlace (string)

/eventofuturo
+ id
+ fecha (año-mes-dia)
+ descripcion (string)
+ tipo
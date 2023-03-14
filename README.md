## Funcionamiento en Node
-Primero se debe ejecutar el proyecto node con el comando 
~~~
npm run dev
~~~
- si el codigo compila bien al ejecutar el comando y conectar los demas en node y los comandos de los nodos debera aparcer en la consola de vs code la siguiente imagen

![img-1](https://user-images.githubusercontent.com/33810066/225120937-0b6b5205-7606-455c-85e5-b0bde322ae94.png)

## Funcionamiento en Vue
### Se abre proyecto en vue nodo_1_vue y se ejecuta el proyecto con el siguiente comando 
-Si el codigo es correcto mostrara en consola el id y en el template de vue el id propio generado
~~~
npm run dev -- --host
~~~

![img-2](https://user-images.githubusercontent.com/33810066/225121653-5fd1b32a-b730-4c02-8a44-fe3e2f5e205c.png)

### Se abre proyecto en vue nodo_2_vue y se ejecuta el proyecto con el siguiente comando 
~~~
npm run dev -- --host
~~~
-En el segundo nodo conectado aparecera igual que el primero pero ejecutando en otro puerto

![img-3](https://user-images.githubusercontent.com/33810066/225122481-356b4138-be2b-460f-93bc-a083989de526.png)

-Para conectarlos entre si debe proporcionar el di que se genera en la vista del template resaltado en rojo

![img-4](https://user-images.githubusercontent.com/33810066/225122940-94e1781d-5d61-4847-abf5-f99178573926.png)

-Si la conexion entre ambos nodos es exitosa mostrara en consola del navegador el siguiente mensaje y en el input podras escribir mensajes entre los dos nodos

![img-5](https://user-images.githubusercontent.com/33810066/225123968-42c52171-d368-4bb5-9d85-c667b71cd821.png)

-Mensajes entre nodos se veria de esta manera dialogo entre nodo 1 y nodo 2 no tiene ningun tipo de diseño html y css  esta en su version mas basica.

![img-8](https://user-images.githubusercontent.com/33810066/225126095-ad2b90ab-064d-4965-a5ec-f8416d3f135a.png)




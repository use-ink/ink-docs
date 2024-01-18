---
title: Troubleshooting
slug: /getting-started/troubleshooting
---

<img src="/img/title/magnifying-glass.svg" className="titlePic" />

# Troubleshooting

Aquí están las soluciones para algunos del los problemas más comunes que te puedes encontrar:
### Cambio de época inesperado

Existe un error conocido con el Substrate block production (BABE) en una red funcionando. Si paras el nodo por mucho tiempo (cerrando la terminal, 
poniendo tu ordenador a dormis, etc...), obtendras el siguiente error:

```bash
ClientImport("Unexpected epoch change")
```
Para solucionar esto necesitaras rearrancar el nodo con: `substrate-contracts-node`. En este punto, necesitaras redesplegar 
cualquier contrato y rehacer todos los pasos que has hecho previamente en tu nodo. Mientras mantengas el nodo corriendo, no deberías encontrarte errores.

### Viejos Contratos en Local Storage

**Contracts UI** utiliza su propio local storage para realizar el seguimiento de los contratos que has desplegado. Esto significa
que si desplegas un contrato utilizando la UI, y despues borras tu nodo Substrate, se te pedirá que reinicies tu local storage y por favor hazlo.
Y luego redespliega tus contratos y vuelve a hacer todos los pasos que has hecho previamente en tu nodo. 

### Otros Problemas

Si encuentras otros problemas durante el tutorial, por favor [report el problema](https://github.com/substrate-developer-hub/substrate-docs/issues)!

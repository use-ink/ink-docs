---
title: "#[ink(anonymous)]"
slug: /macros-attributes/anonymous
---

Aplicable a los eventos de ink!.

Le dice al codificador de ink! que trate a los eventos de ink! como anónimos lo que omite la firma del evento como tema al emitir.
Muy similar a los eventos anónimos de Solidity.

Los eventos Anónimos tienen una semantica similar a los de Solidity en que su
firma del evento no sera incluida en los topics de serialización del evento
para reducir la sobrecarga de emisión de eventos. Esto es especialmente útil para
los eventos definidos por los usuarios.

La firma de los eventos es por defecto uno de los topics del evento, excepto 
si anotas el evento con `#[ink(anonymous)]`.
El atributo implica que no es posible filtrar eventos anónimos específicos por el nombre.

---
title: Por qué WebAssembly para Smart Contracts?
slug: /por-que-webassembly-para-smart-contracts
hide_title: true
---

<img src="/img/title/wasm.svg" className="titlePic" />

# Por qué WebAssembly para Smart Contracts?

Tomamos la decisión de utilizar WebAssembly como nuestra arquitectura para ink!.
Estas fueron las razones por las que tomamos dicha decisión:

* <span class="highlight">Alta performance: </span>Wasm es de alta performance — está desarrollados para estar lo más próximo posible al código nativo de la computadora, aún manteniendo una plataforma independiente.

* <span class="highlight">Tamaño compacto: </span>Facilita un binario compacto que puede enviarse a través de internet a dispositivos con, potencialmente, conexiones lentas. 
Esto lo hace ideal para sistemas con restricciones de espacio, como los Blockchains.

* <span class="highlight">Máquina Virtual (VM) General & bytecode: </span> 
Fue desarrollado para que el código pueda ser deployado en cualquier browser con el mismo resultado.
Contrario a EVM que no fue desarrollado para un caso particular, Wasm tiene el befecio de contar con una gran cantidad de herramientas disponibles y de una gran canditat de compañías que dedican recursos en el desarrollo futuro de Wasm.

* <span class="highlight">Eficiente ejecución JIT: </span>
Sporte de operaciónes de números enteros de 64 and 32-bit mapeados 1-1 con instrucciones de CPU.

* <span class="highlight">Minimalístico: </span> Especificaciónes formales que entran en una única página.

* <span class="highlight">Ejecución determinística: </span>
Wasm se vuelve fácilmente deterministico removiendo operaciones con floating points, que son necesarios para algorítmos de consenso.

* <span class="highlight">Open Standards > Soluciones Customizadas: </span>
Wasm es un estándard para navegadores Web desarrollado por el grupo W3C, con compañías de la talla de Google, Mozilla y otros.
Han habido varios años de desarrollo puestos en Wasm, tanto para el compilador como para la estandarización.

* <span class="highlight">Muchos lenguajes Disponibles: </span> Wasm expande la familia de lenguajes disponibles para desarrolladores de smart contracts, incluyendo Rust, C/C++, C#, Typescript, Haxe, y Kotlin. Esto significa que se pueden escribir smart contracts con cualquier lenguaje que te sea familiar. De todas formas, la recomendación parcial es usar Rust, dado que tiene menos complejidad en su runtime, y goza de propiedades que lo hacen extremadamente seguro.

* <span class="highlight">De memoria-segura, encapsulado (sandboxed), y de plataforma independiente.</span>

* <span class="highlight">Sporte LLVM: </span>
Sportado por el projecto de infrastructura del compilador LLVM, lo que significa que Wasm se beneficia de más de una década de optimización en el compilador LLVM.

* <span class="highlight">Compañías líderes involucradas: </span> Continuamente desarrollado por compañías como Google, Apple, Microsoft, Mozilla, y Facebook.

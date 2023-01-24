---
title: Por qué Rust para Smart Contracts?
slug: /por-que-rust-para-smart-contracts
---

ink! no busca crear su nuevo lenguaje de programaciœ, sino que busca adaptarse a un subconjunto de rust para poder cumplir su propósito. Si esto no es suficiente para convencerte, aquí van otras buenas razones:

* <span class="highlight">Rust es un lenguaje ideal para smart contracts:</span> Es type safe, memory safe, y libre de comportamientos indefinidos. Genera pequeños binarios porque no incluye un extra bloat, como garbage collector, y optimizaciones avanzadas y un árbol que elimina el código muerto. A través de indicadores del compilador, Rust puede proteger automáticamente contra el overflow de enteros.

* <span class="highlight">Ecosistema de Rust:</span> Obtiene de todo el soporte disponible para el ecosistema de Rust de forma gratuita. A medida que se desarrolla el lenguaje, ink! obtendrá automáticamente acceso a nuevas características y funcionalidades, mejorando la forma en que se podran escribir smart contracts en el futuro.

* <span class="highlight">Herramientas:</span> Dado que ink! sigue los estándares de Rust, herramientas como rustfmt, clippy y rust-analyzer funcionen directamente. Lo mismo sucede con sismtemas de resaltado de sintáxis o formateo de código en los editores de texto moderno. Además, Rust tiene test y benchmark incorporados directamente en el runner.

* <span class="highlight">No overhead:</span> Runtime mínimo.

* <span class="highlight">Seguro & Eficiente:</span> Cero costo y abstraciones seguros.

* <span class="highlight">Productivo:</span> Cargo + Ecosistema de <a href="https://crates.io">crates.io</a>.

* <span class="highlight">1st class Wasm:</span> Rust provee soporte primario para WebAssembly.

* <span class="highlight">Tamaño compacto:</span> El tamaño es importante en los blockchains donde existen restriciones de espacio. El compilador de Rust es ideal en este sentido, dado que reordena los campos de struct para poder hacer cada tipo lo más compacto posible. Es por eso que las estructuras de datos en Rust son muy compactas, hasta más compactas que en C en ciertos casos.



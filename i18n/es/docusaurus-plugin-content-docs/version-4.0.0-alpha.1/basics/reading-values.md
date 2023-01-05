---
title: Leer Valores del Storage
slug: /basics/reading-values
---

Leer los valores almacenados en el storage es ¡es donde comienza la diversión!

## Funciones del Contrato

Como puedes ver en la plantilla del contrato, todas las funciones del contrato son parte del módulo del contrato.

```rust
impl MyContract {
    // Funciones públicas y privadas van aquí
}
```

### Funciones Públicas y Privadas

En Rust, puede realizar tantas implementaciones como quieras. Como solución más estilística te recomendamos
dividir las definiciones de implementación para sus funciones públicas y privadas:


```rust
impl MyContract {
    /// Public function
    #[ink(message)]
    pub fn my_public_function(&self) {
        /* --snip-- */
    }

    /// Private function
    fn my_private_function(&self) {
        /* --snip-- */
    }

    /* --snip-- */
}
```

También puede optar por dividir las cosas como sea más claro para tú proyecto.

Ten en cuenta que todas las funciones públicas deben utilizar el atributo `#[ink(message)]`.

## Obtener un Valor

Ya te hemos mostrado como inicializar un valor en el storage en este capítulo [Almacenando Valores](/basics/storing-values).
Obtener el valor es así de simple:

```rust
impl MyContract {
    #[ink(message)]
    pub fn my_getter(&self) -> u32 {
        self.number
    }
}
```

En Rust, si la última expresion de una función no tiene un punto y coma, entonces es el valor que retornara.
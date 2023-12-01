---
title: "#[ink::chain_extension]"
slug: /macros-attributes/chain-extension
hide_title: true
---

<img src="/img/title/text/chain-ext.svg" className="titlePic" />

En la configuración por defecto del `contracts-pallet` un smart contract solo puede interactuar con el runtime
via su conjunto bien definido de la interface basica del smart contract. Este API ya permite una gran variedad de
interacción entre el `contracts-pallet` y el smart contract ejecutado. Por ejemplo es posible llamar e instanciar 
otros smart contracts en la misma cadena, emitiendo eventos, consultando información del contexto o
corriendo built-in procedimientos de hashing criptográficos.

Si este conjunto básico de features no es suficiente para una Blockchain particular construida con Substrate
es posible extender facilmente su API utilizando la feature de extensión de la cadena.

<center>
  <img src="/img/venn.png" width="50%" />
</center>

Con las extensiones de cadena puede exponer partes de su lógica de runtime a los desarrolladores de contratos inteligentes.

:::note
El repositorio ink! contiene [el ejemplo `rand-extension` ](https://github.com/paritytech/ink-examples/tree/main/rand-extension).
Este es un ejemplo completo de una extensión de una cadea implementada con ambos ink! y Substrate.
:::

## Estructura

La interface consiste en un código de error que indica los errores ligeros 
asi como la definición de algunos métodos de extensión de cadena.

La estructura general sigue una simple definición de un Rust trat.
El código de error es definido como la definición de un tipo asociado de la definición trait.
Los métodos son definidos como métodos trait asociados sin implementación.

Los métodos de extensión de cadena no deben tener un receptor `self` como `&self` o `&mut self`
y deben tener inputs y outputs que implementen el codec SCALE. Su valor de retorno sigue
unas reglas específicas que pueden ser alteradas utilizando el atributo `handle_status` y la 
alternancia entre los tipos `Result` y Non-`Result`, que se describen con más detalle a continuación.

## Uso

Normalmente la definición de extensión de cadena utilizando este proc. macro 
la provee el autor de la extensión de cadena en un crate separado.
Los smart contracts ink! utilizando esta extensión de cadena simplemente dependen en
de este crate y utilizan su definición de entorno asociado para hacer uso
de los métodos proporcionados por la extensión de cadena.

## Atributos

Los métodos de extensión de cadena pueden marcarse con dos atributos diferentes:

| Atributos | Requerido | Valor por Defecto | Descripción |
|:----------|:--------:|:--------------|:-----------:|
| `ink(extension = N: u32)` | Si | - | Determina el ID único de la función del método de extensión de cadena |
| `ink(handle_status = flag: bool)` | Opcional | `true` | Asume que el código de estatus devuelto del método de extensión de la cadena siempre indica exito y por lo tanto siempre carga y decodifica el output buffer de la llamada. |

Como en todos los atributos ink! pueden aparecer multiples de ellos en una lista contigua:

```rust
type Access = i32;

#[ink::chain_extension]
pub trait MyChainExtension {
    type ErrorCode = i32;
  
    #[ink(extension = 5, handle_status = false)]
    fn key_access_for_account(key: &[u8], account: &[u8]) -> Access;
}
```

o como multiples atributos ink! independientes aplicados al mismo item:

```rust
type Access = i32;

#[ink::chain_extension]
pub trait MyChainExtension {
  type ErrorCode = i32;
  
  #[ink(extension = 5)]
  #[ink(handle_status = false)]
  fn key_access_for_account(key: &[u8], account: &[u8]) -> Access;
}
```

## Detalles: `handle_status`

Valor por defecto: `true`

Por defecto todos los métodos de extensión de cadena deberían retornar un `Result<T, E>` donde `E: From<Self::ErrorCode>`.
El `Self::ErrorCode` representa el código de error de la extensión de cadena.
Esto significa que un smart contract llamando a un método de extensión de cadena primero consulta el 
código de estado devuelto por el método de extensión de cadena y solo carga y decodifica el output si el 
código de estado devuelto indica que ha sido una llamada exitosa.
Se diseño asi para ser más eficiente cuando ningún outputs sin contar con el código de error
es requerido por la llamada de extensión de cadena. Cuando diseñes la extensión de cadena intenta no utilizar el
código de error para devolver errores y solo utiliza el buffer output para más información que no encja
en un único valor `u32`.

Un método de extensión de cadena que es marcado con `handle_status = false` asume que el código de error devuelto
siempre indicara éxito. Por lo tanto siempre cargara y decodificara el buffer output y perdera el
constraint `E: From<Self::ErrorCode` de la llamada.

Tenga en cuenta que si un método de extensión de cadena no retorna `Result<T, E>` where `E: From<Self::ErrorCode>`
pero con `handle_status = true`, seguirá retornando un valor de tipo `Result<T, Self::ErrorCode>`.

## Uso: `handle_status` + tipo de retorno `Result<T, E>`

Utiliza ambos `handle_status = false` y tipo de retorno non-`Result` para el mismo método de extensión de cadena
si una llamada nunca puede fallar y nunca devuelva un tipo `Result`.

## Combinaciones

Debido a la posibilidad de marcar un método de extensión de cadena con `handle_status` y (1) devolver `Result<T, E>` o 
(2) devolver sólo `T`, hay 4 casos diferentes con semántica ligeramente variable:

| `handle_status` | Retorna `Result<T, E>` | Efectos |
|:---------------:|:----------------:|:--------|
|`true` |`true` | El método de extensión de cadena requiere devolver un valor de tipo `Result<T, E>` donde `E: From<Self::ErrorCode>`. Una llamada siempre comprobará si el código de estado devuelto indica exito y solo entonces cargara y decodificara el valor en el buffer output. |
|`true` |`false`| El método de extensión de cadena puede devolver cualquier tipo non-`Result`. Una llamada siempre comprobará si el código de estado devuelto indica exito y solo entonces cargará y decodificará el valor en el buffer output. El tipo de retorno real del método de extensión de la cadena sigue siendo `Result<T, Self::ErrorCode>` cuando el método de extensión de cadena fue definido para devilver un valor de tipo `T`. |
|`false`|`true` | El método de extensión de cadena requiere devolver un valor de tipo `Result<T, E>`. Una llamada siempre asume que el código de estado devuelto indica exito por lo tanto siempre cargará y decodificará el buffer output directamente. |
|`false`|`false`| El método de extensión de cadena puede devolver cualquier tipo non-`Result`. Una llamada siempre asume que el código de estado devuelto indica exito por lo tanto siempre cargará y decodificará el buffer output directamente. |
## Código de Error

Cada extensión de cadena define exactamente un `ErrorCode` utilizando la siguiente sintaxis:

```rust
#[ink::chain_extension]
pub trait MyChainExtension {
    type ErrorCode = MyErrorCode;

    // más definiciones ...
}
```

El definido `ErrorCode` debe implementar `FromStatusCode` que debe ser implementado como una
conversión más o menos trivial del código de estado `u32` a `Result<(), Self::ErrorCode>`.
El valor `Ok(())` indica que la llamada al método de extensión de cadena fue un éxito.

Por convención un código de error de `0` representa éxito.
Sin embargo, los autores de extensión de cadena pueden utilizar lo que se adapte a sus necesidades.

## Ejemplo: Definición

En el ejemplo a continuación una extensión de cadena se define que se permite a los usuarios 
leer y escribir en el storage del runtime utilizando privilegios de acceso:

```rust
/// Custom chain extension to read to and write from the runtime.
#[ink::chain_extension]
pub trait RuntimeReadWrite {
    type ErrorCode = ReadWriteErrorCode;

    /// Reads from runtime storage.
    ///
    /// # Note
    ///
    /// Actually returns a value of type `Result<Vec<u8>, Self::ErrorCode>`.
    /// #[ink(extension = 1, returns_result = false)]
    /// fn read(key: &[u8]) -> Vec<u8>;
    ///
    /// Reads from runtime storage.
    ///
    /// Returns the number of bytes read and up to 32 bytes of the
    /// read value. Unused bytes in the output are set to 0.
    ///
    /// # Errors
    ///
    /// If the runtime storage cell stores a value that requires more than
    /// 32 bytes.
    ///
    /// # Note
    ///
    /// This requires `ReadWriteError` to implement `From<ReadWriteErrorCode>`
    /// and may potentially return any `Self::ErrorCode` through its return value.
    #[ink(extension = 2)]
    fn read_small(key: &[u8]) -> Result<(u32, [u8; 32]), ReadWriteError>;

    /// Writes into runtime storage.
    ///
    /// # Note
    ///
    /// Actually returns a value of type `Result<(), Self::ErrorCode>`.
    #[ink(extension = 3)]
    fn write(key: &[u8], value: &[u8]);

    /// Returns the access allowed for the key for the caller.
    ///
    /// # Note
    ///
    /// Assumes to never fail the call and therefore always returns `Option<Access>`.
    #[ink(extension = 4, handle_status = false)]
    fn access(key: &[u8]) -> Option<Access>;

    /// Unlocks previously aquired permission to access key.
    ///
    /// # Errors
    ///
    /// If the permission was not granted.
    ///
    /// # Note
    ///
    /// Assumes the call to never fail and therefore does _NOT_ require `UnlockAccessError`
    /// to implement `From<Self::ErrorCode>` as in the `read_small` method above.
    #[ink(extension = 5, handle_status = false)]
    fn unlock_access(key: &[u8], access: Access) -> Result<(), UnlockAccessError>;
}

#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]
pub enum ReadWriteErrorCode {
  InvalidKey,
  CannotWriteToKey,
  CannotReadFromKey,
}

#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]
pub enum ReadWriteError {
  ErrorCode(ReadWriteErrorCode),
  BufferTooSmall { required_bytes: u32 },
}

impl From<ReadWriteErrorCode> for ReadWriteError {
  fn from(error_code: ReadWriteErrorCode) -> Self {
    Self::ErrorCode(error_code)
  }
}

impl From<scale::Error> for ReadWriteError {
  fn from(_: scale::Error) -> Self {
    panic!("encountered unexpected invalid SCALE encoding")
  }
}

#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]
pub struct UnlockAccessError {
  reason: String,
}

impl From<scale::Error> for UnlockAccessError {
  fn from(_: scale::Error) -> Self {
    panic!("encountered unexpected invalid SCALE encoding")
  }
}

#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]
pub enum Access {
  ReadWrite,
  ReadOnly,
  WriteOnly,
}

impl ink_env::chain_extension::FromStatusCode for ReadWriteErrorCode {
  fn from_status_code(status_code: u32) -> Result<(), Self> {
    match status_code {
      0 => Ok(()),
      1 => Err(Self::InvalidKey),
      2 => Err(Self::CannotWriteToKey),
      3 => Err(Self::CannotReadFromKey),
      _ => panic!("encountered unknown status code"),
    }
  }
}
```

Todos los tipos de error y otros tipos de utilizad utilizados en la definición de extensión de cadena de arriba
son normalmente requeridos para implementar varios traits como los SCALE's `Encode` y `Decode`
asi como los traits `scale-info`'s `TypeInfo`.

Un ejemplo completo de la definición de extensión de cadena de arriba puede verse
[aquí](https://github.com/paritytech/ink/blob/017f71d60799b764425334f86b732cc7b7065fe6/crates/lang/macro/tests/ui/chain_extension/simple.rs).

## Ejemplo: Entorno

Para permitir a los ink! smart contracts utilizar la extensión de cadena definida arriba se necesita
integrarla en una definición `Environment` como se muestra a continuación:

```rust
type RuntimeReadWrite = i32;

use ink::env::{Environment, DefaultEnvironment};

pub enum CustomEnvironment {}

impl Environment for CustomEnvironment {
    const MAX_EVENT_TOPICS: usize =
        <DefaultEnvironment as Environment>::MAX_EVENT_TOPICS;

    type AccountId = <DefaultEnvironment as Environment>::AccountId;
    type Balance = <DefaultEnvironment as Environment>::Balance;
    type Hash = <DefaultEnvironment as Environment>::Hash;
    type BlockNumber = <DefaultEnvironment as Environment>::BlockNumber;
    type Timestamp = <DefaultEnvironment as Environment>::Timestamp;

    type ChainExtension = RuntimeReadWrite;
}
```

Arriba hemos definido el `CustomEnvironment` que por defecto es el ink!'s `DefaultEnvironment`
para todas las constantes y tipos excepto el tipo`ChainExtension` que es asignado a nuestra nueva
definición de extensión de cadena.

## Ejemplo: Uso

Un ink! smart contract puede utilizar la cadena de extensión definida arriba a través de la definición `Environment`
definida en el ejemplo de la última sección utilizando el parametro de macro `env` como se muestra a continuación.

Nota que los métodos de extensión de cadena son accesibles a través de `Self::extension()` o
`self.extension()`. Por ejemplo en `Self::extension().read(..)` o `self.extension().read(..)`.

```rust
#[ink::contract(env = CustomEnvironment)]
mod read_writer {
    #[ink(storage)]
    pub struct ReadWriter {}

    impl ReadWriter {
        #[ink(constructor)]
        pub fn new() -> Self { Self {} }

        #[ink(message)]
        pub fn read(&self, key: Vec<u8>) -> Result<Vec<u8>, ReadWriteErrorCode> {
            self.env()
                .extension()
                .read(&key)
        }

        #[ink(message)]
        pub fn read_small(&self, key: Vec<u8>) -> Result<(u32, [u8; 32]), ReadWriteError> {
            self.env()
                .extension()
                .read_small(&key)
        }

        #[ink(message)]
        pub fn write(
            &self,
            key: Vec<u8>,
            value: Vec<u8>,
        ) -> Result<(), ReadWriteErrorCode> {
            self.env()
                .extension()
                .write(&key, &value)
        }

        #[ink(message)]
        pub fn access(&self, key: Vec<u8>) -> Option<Access> {
            self.env()
                .extension()
                .access(&key)
        }

        #[ink(message)]
        pub fn unlock_access(&self, key: Vec<u8>, access: Access) -> Result<(), UnlockAccessError> {
            self.env()
                .extension()
                .unlock_access(&key, access)
        }
    }
    
    /// Custom chain extension to read to and write from the runtime.
    #[ink::chain_extension]
    pub trait RuntimeReadWrite {
          type ErrorCode = ReadWriteErrorCode;
          #[ink(extension = 1)]
          fn read(key: &[u8]) -> Vec<u8>;
          #[ink(extension = 2)]
          fn read_small(key: &[u8]) -> Result<(u32, [u8; 32]), ReadWriteError>;
          #[ink(extension = 3)]
          fn write(key: &[u8], value: &[u8]);
          #[ink(extension = 4, handle_status = false)]
          fn access(key: &[u8]) -> Option<Access>;
          #[ink(extension = 5, handle_status = false)]
          fn unlock_access(key: &[u8], access: Access) -> Result<(), UnlockAccessError>;
    }
    
    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]
    pub enum ReadWriteErrorCode {
          InvalidKey,
          CannotWriteToKey,
          CannotReadFromKey,
    }
    
    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]
    pub enum ReadWriteError {
          ErrorCode(ReadWriteErrorCode),
          BufferTooSmall { required_bytes: u32 },
    }
    impl From<ReadWriteErrorCode> for ReadWriteError {
         fn from(error_code: ReadWriteErrorCode) -> Self {
             Self::ErrorCode(error_code)
         }
    }
    impl From<scale::Error> for ReadWriteError {
         fn from(_: scale::Error) -> Self {
             panic!("encountered unexpected invalid SCALE encoding")
         }
    }
  
    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]
    pub struct UnlockAccessError {
         reason: String,
    }
    impl From<scale::Error> for UnlockAccessError {
         fn from(_: scale::Error) -> Self {
             panic!("encountered unexpected invalid SCALE encoding")
         }
    }
    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]
    pub enum Access {
         ReadWrite,
         ReadOnly,
         WriteOnly,
    }
    impl ink::env::chain_extension::FromStatusCode for ReadWriteErrorCode {
         fn from_status_code(status_code: u32) -> Result<(), Self> {
             match status_code {
                 0 => Ok(()),
                 1 => Err(Self::InvalidKey),
                 2 => Err(Self::CannotWriteToKey),
                 3 => Err(Self::CannotReadFromKey),
                 _ => panic!("encountered unknown status code"),
             }
         }
    }
    pub enum CustomEnvironment {}
    impl ink::env::Environment for CustomEnvironment {
         const MAX_EVENT_TOPICS: usize =
             <ink::env::DefaultEnvironment as ink::env::Environment>::MAX_EVENT_TOPICS;
    
         type AccountId = <ink::env::DefaultEnvironment as ink::env::Environment>::AccountId;
         type Balance = <ink::env::DefaultEnvironment as ink::env::Environment>::Balance;
         type Hash = <ink::env::DefaultEnvironment as ink::env::Environment>::Hash;
         type BlockNumber = <ink::env::DefaultEnvironment as ink::env::Environment>::BlockNumber;
         type Timestamp = <ink::env::DefaultEnvironment as ink::env::Environment>::Timestamp;
    
         type ChainExtension = RuntimeReadWrite;
    }
}
```

## Limitaciones técnicas

- Por limitaciones técnicas no es posible referirse al tipo asociado `ErrorCode` utilizando
  `Self::ErrorCode` en cualquier lugar dentro de la extensión de cadena y sus métodos definidos.
  En su lugar los autores de la extensión de cadena deben utilizar directamente el tipo de código de error cuando se requiera.
  Esta limitación podría eliminarse en versiones futuras deink!.
- No es posible declarar otros traits de extensiones de cadenas como super traits o super
  extensiones de cadenas o otros.

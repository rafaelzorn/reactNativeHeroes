# React Native Heroes

Pesquise sobre os heróis da Marvel para ler informações adicionais sobre eles.

### Instalando

Primeiro você tem que usar o seu Terminal para chegar ao diretório que você deseja armazenar o projeto. Então você executa:

```
git clone https://github.com/rafaelzorn/reactNativeHeroes.git
```

Acesse o diretório criado e você estará no diretório-raiz do projeto:

```
cd reactNativeHeroes
```

Instalar as dependências do projeto:

```
yarn install
````

### .ENV

Crie sua conta na Marvel Developer Portal para adquirir sua API KEY e PRIVATE KEY. A API KEY e PRIVATE KEY devem ser adicionadas no .env que ainda não existe. Basta duplicar o .env.example, renomeando para .env e adicionar a chave.

### Instalar apk

No seguinte caminho **"reactNativeHeroes\android\app\build\outputs\apk"** execute o comando: 

```
adb install app-debug.apk
````

Na raiz do projeto execute: 

```
adb reverse tcp:8081 tcp:8081
```

Por fim, execute:

```
react-native start
````

## Screenshots

![Screenshot 1](https://image.ibb.co/f87Tin/image.jpg)

## Construído com

* [React Native](https://facebook.github.io/react-native/)
* [Redux](https://redux.js.org)
* [Redux Thunk](https://github.com/gaearon/redux-thunk)
* [Axios](https://github.com/axios/axios)
* [Marvel Developer Portal](https://developer.marvel.com/)
<p align="center">
 <img width="20%" height="20%" src="./logo.png">
</p>

<br />

[![ngx-pagememory](https://github.com/dkreider/ngx-pagememory/actions/workflows/ngx-pagememory.yml/badge.svg)](https://github.com/dkreider/ngx-pagememory/actions/workflows/ngx-pagememory.yml)


A lightweight Angular library that remembers the last page a user visited when they leave an Angular application and them routes them to it when the re-open it.


### Installation

```
ng add ngx-pagememory
```

## Usage

Import the `NgxPagememoryModule` into your `AppModule`. You can configure it as shown below:

```ts
import { NgxPagememoryModule } from 'ngx-pagememory';

@NgModule({
    declarations: [AppComponent],
    imports: [
        NgxPagememoryModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

## Credits
- <a href="https://www.flaticon.com/free-icons/brain" title="brain icons">Brain icons created by Vitaly Gorbachev - Flaticon</a>
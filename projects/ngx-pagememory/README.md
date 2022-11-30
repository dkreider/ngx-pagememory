<p align="center">
 <img width="20%" height="20%" src="https://github.com/dkreider/ngx-pagememory/blob/main/logo.png">
</p>

<br />

[![ngx-pagememory](https://github.com/dkreider/ngx-pagememory/actions/workflows/ngx-pagememory.yml/badge.svg)](https://github.com/dkreider/ngx-pagememory/actions/workflows/ngx-pagememory.yml)
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)


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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.danielk.tech/"><img src="https://avatars.githubusercontent.com/u/11043868?v=4" width="100px;" alt=""/><br /><sub><b>Daniel Kreider</b></sub></a><br /><a href="https://github.com/dkreider/ngx-pagememory/commits?author=dkreider" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification.

Contributions of any kind welcome!

## Credits
- <a href="https://www.flaticon.com/free-icons/brain" title="brain icons">Brain icons created by Vitaly Gorbachev - Flaticon</a>
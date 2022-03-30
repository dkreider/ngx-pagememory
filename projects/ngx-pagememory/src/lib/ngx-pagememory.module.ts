import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPagememoryService } from './ngx-pagememory.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
})
export class NgxPagememoryModule { 

  public static forRoot(): ModuleWithProviders<NgxPagememoryModule> {
    return {
      ngModule: NgxPagememoryModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          deps: [NgxPagememoryService, Router],
          useFactory: (pM: NgxPagememoryService) => () => pM.register(),
          multi: true
        }
      ]
    }
  }

}

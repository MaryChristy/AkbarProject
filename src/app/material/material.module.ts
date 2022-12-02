import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';

const materials=[MatFormFieldModule,
MatSelectModule,
MatInputModule,
MatDatepickerModule,
MatExpansionModule,
MatNativeDateModule
]



@NgModule({
  imports: [materials,
    
  ],
  exports:[
   materials
  ]
})
export class MaterialModule { }

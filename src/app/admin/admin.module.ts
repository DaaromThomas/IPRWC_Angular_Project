import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [AdminComponent],
    imports: [FormsModule, CommonModule],
    exports: [AdminComponent],
    providers: []
  })
  export class AdminModule {}
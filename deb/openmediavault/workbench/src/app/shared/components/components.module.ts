import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MaterialModule } from '~/app/material.module';
import { AlertPanelComponent } from '~/app/shared/components/alert-panel/alert-panel.component';
import { DatatableComponent } from '~/app/shared/components/datatable/datatable.component';
import { DatatableActionsComponent } from '~/app/shared/components/datatable-actions/datatable-actions.component';
import { MatFormButtonComponent } from '~/app/shared/components/mat-form-button/mat-form-button.component';
import { MatFormDatatableComponent } from '~/app/shared/components/mat-form-datatable/mat-form-datatable.component';
import { ModalDialogComponent } from '~/app/shared/components/modal-dialog/modal-dialog.component';
import { ProgressBarComponent } from '~/app/shared/components/progress-bar/progress-bar.component';
import { SubmitButtonComponent } from '~/app/shared/components/submit-button/submit-button.component';
import { TaskDialogComponent } from '~/app/shared/components/task-dialog/task-dialog.component';
import { DirectivesModule } from '~/app/shared/directives/directives.module';
import { PipesModule } from '~/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [
    AlertPanelComponent,
    ModalDialogComponent,
    DatatableComponent,
    SubmitButtonComponent,
    TaskDialogComponent,
    DatatableActionsComponent,
    MatFormDatatableComponent,
    MatFormButtonComponent,
    ProgressBarComponent
  ],
  exports: [
    AlertPanelComponent,
    ModalDialogComponent,
    SubmitButtonComponent,
    DatatableComponent,
    DatatableActionsComponent,
    MatFormDatatableComponent,
    MatFormButtonComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    MaterialModule,
    NgxDatatableModule,
    TranslateModule.forChild(),
    FormsModule,
    FlexLayoutModule,
    DirectivesModule
  ]
})
export class ComponentsModule {}

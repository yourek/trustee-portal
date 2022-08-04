import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NEVER, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SimpleConfirmationDialogComponent } from '../tools/dialogs/simple-confirmation-dialog/simple-confirmation-dialog.component';

type Params = {
  title?: string;
  message: string;
  action: () => void;
  onCancel?: () => void;
  onDestroy$?: Observable<unknown>;
};

@Injectable({
  providedIn: 'root',
})
export class ConfirmationsService {
  constructor(private dialog: MatDialog) {}

  confirm({ title, message, action, onCancel, onDestroy$ }: Params) {
    const dialogRef = this.dialog.open(SimpleConfirmationDialogComponent, {
      data: { title, message },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(onDestroy$ || NEVER))
      .subscribe((result) => {
        if (result) {
          action();
        } else if (onCancel) {
          onCancel();
        }
      });
  }
}

import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { ItemBase }     from './item-base';
@Component({
  moduleId: module.id,
  selector: 'df-item',
  templateUrl: 'item.component.html',
})
export class DynamicFormQuestionComponent {
  @Input() question: ItemBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
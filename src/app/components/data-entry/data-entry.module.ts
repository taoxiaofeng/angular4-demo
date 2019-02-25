import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataEntryRoutingModule } from './data-entry-routing.module';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CascaderComponent } from './cascader/cascader.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { InputComponent } from './input/input.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { MentionComponent } from './mention/mention.component';
import { RadioComponent } from './radio/radio.component';
import { RateComponent } from './rate/rate.component';
import { SelectComponent } from './select/select.component';
import { SliderComponent } from './slider/slider.component';
import { SwitchComponent } from './switch/switch.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { TransferComponent } from './transfer/transfer.component';
import { TreeSelectComponent } from './tree-select/tree-select.component';
import { UploadComponent } from './upload/upload.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [AutocompleteComponent, CascaderComponent, CheckboxComponent, DatePickerComponent, InputComponent, InputNumberComponent, MentionComponent, RadioComponent, RateComponent, SelectComponent, SliderComponent, SwitchComponent, TimePickerComponent, TransferComponent, TreeSelectComponent, UploadComponent, FormComponent],
  imports: [
    CommonModule,
    DataEntryRoutingModule
  ]
})
export class DataEntryModule { }

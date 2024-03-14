import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFormConfig } from 'sh-dynamic-form-builder/lib/dynamic-form-builder/shared/model/form-config.interface';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  isSubmit: boolean = false;
  formValue = {
    fullName: 'Meenakshi Kinkar',
    description: 'Angular front-end developer',
    tasks: [],
    email1: null,
    avatar: null,
    color: '#cc55dd',
    gender: null,
    number: 3,
    range: 20,
    jobType: 'fullTime',
    remote: true,
    time: '10:45',
    week: null,
    month: null,
  };
  formGroup = new FormGroup({});
  config: IFormConfig = {
    // title: 'Profile',
    formControlConfig: {
      elementSize: 'medium',
      simpleValidationError: true,
    },
    fields: [
      {
        type: 'text',
        name: 'fullName',
        label: 'Full name',
        placeholder: 'Enter your name and family',
        id: 'fullName',
        validators: [
          { rule: 'required', msg: 'Full name is required' },
          {
            rule: 'minlength',
            value: 6,
            msg: 'Full name must be at least 6 characters long',
          },
        ],
      },
      {
        type: 'text',
        name: 'description',
        label: 'Description',
        placeholder: 'Please describe your job',
        multiline: true,
        rowCount: 3,
      },
      {
        type: 'form-array',
        label: 'Tasks',
        name: 'tasks',
        formArray: {
          divider: {
            // height:5
          },
          simpleAddButton: true,
          addButtonBGColor: 'green',
          fields: [
            {
              type: 'text',
              name: 'title',
              label: 'title',
              validators: [
                { rule: 'required', msg: 'title is required!' },
                {
                  rule: 'maxlength',
                  value: 50,
                  msg: 'Maximum length should be 50 characters',
                },
              ],
            },
            {
              type: 'date',
              name: 'dueDate',
              label: 'due date',
              validators: [{ rule: 'required', msg: 'date is required!' }],
            },
          ],
        },
      },
      {
        type: 'text',
        name: 'email1',
        label: 'E-mail',
        placeholder: 'example@gmail.com',
        validators: [{ rule: 'email', msg: 'E-mail is wrong' }],
      },
      {
        type: 'file',
        name: 'avatar',
        label: 'Avatar',
        onUpload: this.onUpload.bind(this),
        multipleFile: true,
      },
      {
        type: 'color',
        name: 'color',
        label: 'Color',
        defaultValue: '#cc55dd',
        width: 100,
      },
      {
        type: 'dropdown',
        name: 'gender',
        label: 'Gender',
        options: [
          { key: 'f', label: 'Female' },
          { key: 'm', label: 'Man' },
        ],
      },
      {
        type: 'number',
        name: 'number',
        label: 'Number',
        defaultValue: 3,
      },
      {
        type: 'password',
        name: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
      },
      {
        type: 'range',
        name: 'range',
        label: 'Range',
        defaultValue: 20,
        rangeMin: 10,
        rangeMax: 60,
      },
      {
        type: 'radio',
        name: 'jobType',
        label: 'Job type',
        defaultValue: 'fullTime',
        options: [
          { key: 'fullTime', label: 'Full-time' },
          { key: 'partTime', label: 'Part-time' },
        ],
      },
      {
        type: 'checkbox',
        name: 'remote',
        label: 'Remote',
        defaultValue: true,
      },
      {
        type: 'time',
        name: 'time',
        label: 'Time',
        defaultValue: '10:45',
      },
      {
        type: 'week',
        name: 'week',
        label: 'Week',
      },
      {
        type: 'month',
        name: 'month',
        label: 'Month',
      },
    ],
    buttonSetting: {
      fullWidthButtons: 'all',
      buttons: [
        { type: 'submit', caption: 'Submit', bgColor: 'blue' },
        { type: 'reset', caption: 'Reset', bgColor: 'orange' },
        { type: 'cancel', caption: 'Cancel', bgColor: 'light' },
      ],
    },
  };
  public submit(event: FormGroup): void {
    this.isSubmit = true;
    this.formGroup = event;
    /**Sending data .... */
    this.isSubmit = false;
  }
  public cancel(): void {
    /** */
  }
  private onUpload(event: any): void {
    const files = event.files;
    console.log('files===', files);
  }
}

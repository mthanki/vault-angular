import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { Directive } from '@angular/core';

@Directive({
  selector: '[appPassworsdMatchValidator]'
})
export class PassworsdMatchValidatorDirective {
  constructor() { }
}

/** Passowrd and re-entered password should be the same. */
export const passwordsMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const reentered = control.get('reenteredPassword');

  return password && reentered && password.value !== reentered.value ? { passwordsDontMatch: true } : null;
};


/** Passowrd and re-entered password should be the same. */
export const passwordsPolicyValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.value;
  
  const hasNumberError = !(new RegExp(/\d/).test(password));
  const hasCapitalCaseError = !(new RegExp(/[A-Z]/).test(password));
  const hasSmallCaseError = !(new RegExp(/[a-z]/).test(password));

  // console.log(hasCapitalCase, hasSmallCase, hasNumber, 'validator');
  // console.log((hasNumber && hasCapitalCase && hasSmallCase), 'q validator');
  
  return (!hasNumberError && !hasCapitalCaseError && !hasSmallCaseError) ? null : { hasNumberError, hasSmallCaseError, hasCapitalCaseError };
};

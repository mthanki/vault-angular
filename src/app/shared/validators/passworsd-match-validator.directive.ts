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


export const whiteSpaceValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const input = control.value;

  const hasWhiteSpace = new RegExp(/\s/).test(input);

  return hasWhiteSpace ? { hasWhiteSpaceError: true } : null;
};

/** Passowrd should have a Capital case, Small case, number and at least Eight characters. */
export const passwordsPolicyValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.value.trim().replace(/\s/g,'');
  
  const hasNumberError = !(new RegExp(/\d/).test(password));
  const hasCapitalCaseError = !(new RegExp(/[A-Z]/).test(password));
  const hasSmallCaseError = !(new RegExp(/[a-z]/).test(password));
  const hasEightCharacterError = password && password.length >= 8 ? false : true;

  // console.log(hasCapitalCase, hasSmallCase, hasNumber, 'validator');
  // console.log((hasNumber && hasCapitalCase && hasSmallCase), 'q validator');
  
  return (!hasNumberError && !hasCapitalCaseError && !hasSmallCaseError && !hasEightCharacterError) 
    ? null : { 
      hasNumberError, hasSmallCaseError, hasCapitalCaseError, hasEightCharacterError
    };
};

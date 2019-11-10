import Validator from 'Validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){
  let errors={};
  if(Validator.isEmpty(data.phone)){
    errors.identifier="this field is required";
  }
  if(Validator.isEmpty(data.password)){
    errors.identifier="this field is required";
  }

  return{
    errors,
    isValid: isEmpty(errors)
  };
}
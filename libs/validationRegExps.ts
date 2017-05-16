interface Validations {
  email: string,
  number: string
}

const validations:Validations = {
  'email': '([\\w-\\.]+)@((?:[\\w]+\\.)+)([a-zA-Z]{2,24})$',
  'number': '^[0-9]+\.{1}[0-9]+$'
}

export default validations;


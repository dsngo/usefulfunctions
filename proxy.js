const phoneHandler = {
  set(target, name, value) {
    target[name] = value.match(/[0-9]/g).join('');
  },
  get(target, name) {
    return target[name].replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
  },
};

const phoneNumbers = new Proxy({}, phoneHandler);

phoneNumbers.work = 'asdfa0976036699';
console.log(phoneNumbers.work);

module.exports.wrapCall = function wrapCall(name, fn) {
  const sync = {
    [name](...parameters) {
      return fn(...parameters);
    },
  };
  const async = {
    async [name](...parameters) {
      return await fn(...parameters);
    },
  };
  
  return { sync: sync[name], async: async[name] };
};

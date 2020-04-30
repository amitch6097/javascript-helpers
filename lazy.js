    function lazy(fn) {
        const handler = {
            get: (obj, property) => {
                return fn()[property]
            }
        }
        return new Proxy([{}], handler);
    }

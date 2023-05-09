// FUNÇÕES AUTO EXECUTAVEIS AO CARREGAR O JS
(() =>{
    console.log('EXECUTOU')
    const qwe = {
        name: function(firstName){
            // console.log(arguments)
            console.log(this)
        },
        // ARROW FUNCTION
        nameArrow: (firstName) =>{
            // console.log(arguments)
            // console.log(this)
        }
    };
    qwe.name('zeca');
    qwe.nameArrow();

    const loop = (number) => {
        console.log(number);
        if(number === 10){
            return number
        }
        loop(++number);
    };
    // loop(3)
})();

// CALLBACK
const form = document.querySelector('form');

const handleSubmit = ( onSubmit, onError, self) => {
    const nameInput = self.querySelector('input#username');

    console.log(nameInput.value)
    console.log(nameInput.value.length)
    if(nameInput.value.length < 5){
        return onError()
    }
    onSubmit()
};

const error = () => {
    console.log('ERROR')
};
const submit = () =>{
    console.log('SUBTMIT')
};

form.addEventListener("submit", function(event) {
    event.preventDefault();
    handleSubmit(submit, error, this);
});

// PROMISSES
const funcPromise = (condition) =>{
    return new Promise((resolve, reject) => {
        console.log('funcPromise');
    
        if(!condition){
            return reject();
        }

        resolve();
    })
}

const funcAsync = async (condition) =>{
   
    if(!condition){
        throw new Error('Condition is false');
    }

    return true;
}
// EXECUTA ANTES DO WINDOW
funcPromise(true)
// EXECUTA DEPOIS DO WINDOW
funcAsync(true)
.then((response) => {
    console.log('funcAsync')
})
.catch((error) => {
    console.log(error)
})
// EXECUTA O WINDOW
console.log('executou 1')


// LOOP E INTERAÇÕES
const numbers = [1,2,3,4,5];
console.log(numbers)

const numberObj = numbers.map((atual, index, arrayinicial) =>{
    return {number: atual}
})
console.log(numberObj)
//O FILTER RETIRA O VALOR DO ARRAY
const numberWithout = numbers.filter((atual) => {
    return atual !== 1;
})
console.log('filter = ' + numberWithout)
//O SOME PROCURA SE NO ARRAY TEM UM x VALOR, e para na 1 que retorna TRUE
const haveTwo = numbers.some((atual) => (console.log(atual), atual === 3));
console.log('some = ' + haveTwo);
//O FIND PROCURA NO ARRAY SE TEM UM x VALOR e retorna o valor do objeto e não TRUE como no some
const four = numbers.find((atual) => atual === 4);
console.log('find = ' + four)

const mapAndFilter = numbers.reduce((inicial, atual, index, arrayinicial) => {
    if(atual === 4){
        console.log(inicial)
        return inicial
    }

    return inicial.concat([{number: atual}]);
}, []);
console.log('reduce + ' +mapAndFilter);
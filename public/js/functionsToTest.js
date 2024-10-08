
/**
 *
 * Retourne un objet avec les arguments fournis, indexé par des clés numériques.
 * @param {*} args
 * @return {object| String} un objet avec arg indexé ou un message si aucun arg n'est fourni
 */

 export const returnAnObject = (...args) => {
  let response = {};
  if (args.length) {
    let index = 0;
    args.forEach(arg => {
      response[index] = arg;
      index++;
    })
  } else {
    response = 'No argument was given to the function.';
  };
  return response;
};


/**
 *
 *Multiplie chaque element d'un tableau par 2
 * @param {Array<number>} arrayOfNumbers - un tableau de nombre à multiplier
 * @return {Array<number>|string} -un tableau avec chaque nombre multiplié par 2 ou un message d'erreur si l'argument n'est pas un tableau de nombre
 */

export const multiplyAllByTwo = (arrayOfNumbers) => {
  let response;
  if (Array.isArray(arrayOfNumbers)) {
  
    for (const element of arrayOfNumbers) {
      if (typeof element !== 'number') {
        return `l'argument n'est pas un tableau de nombres`;
      }
    }
    
    response = arrayOfNumbers.map(val => val * 2);
  }

  return response;
};


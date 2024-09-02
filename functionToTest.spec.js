
import {multiplyAllByTwo,returnAnObject} from './public/js/functionsToTest';


describe('Ceci est le début des tests de la fonction multiplyAllByTwo et returnAnObject', () => {

  
      test('devrait retourner un objet avec les arguments comme valeurs lorsque des arguments sont fournis', () => {
        expect(returnAnObject('a', 'b', 'c')).toEqual({ 0: 'a', 1: 'b', 2: 'c' });
      });
    

      test('devrait retourner un objet avec un seul argument', () => {
        expect(returnAnObject('un')).toEqual({ 0: 'un' });
      });
    
      test(`devrait retourner un objet avec une chaîne vide si l\'argument est une chaîne vide`, () => {
        expect(returnAnObject('')).toEqual({ 0: '' });
      });


      test('devrait multiplier tous les nombres du tableau par 2', () => {
        expect(multiplyAllByTwo([1, 2, 3])).toEqual([2, 4, 6]);
      });
    
      test('devrait gérer les tableaux avec des valeurs non numériques', () => {
        expect(multiplyAllByTwo([1, 'a', 3])).toBe(`l'argument n'est pas un tableau de nombres`);
    });

    
    });









    

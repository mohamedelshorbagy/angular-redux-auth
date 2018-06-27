import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: any[], term: string, prop: string): any[] {
    if (!arr) {
      return [];
    }
    if (!term || term.length === 0) {
      return arr;
    }

    // Convert the input
    term = term.toLowerCase();
    return arr.filter(item => {
      let propSplitter = prop.split('.');
      if (this.checkNested(item, ...propSplitter)) { // Spreaded Strings
      // if (this.checkNested(item, propSplitter)) { // Array of Strings
      // if (this.checkNested(item, prop)) { // String Separated By Commas
        let propEval = eval('item.' + prop);
        if (propEval) {
          return propEval.toLowerCase().includes(term);
        }
      }
    })

  }


  /**
   * 
   * @function: checkNested(obj , args)
   * @param { JS Object } obj
   * @param { args } 
   *    1. take an array of strings of the keys ==> ['customer' , 'name' , 'first']
   *    2. take an infinite number of keys ==> 'customer' , 'name' , 'first'
   *    3. take an string of keys seprated by (.) ===> 'customer.name.first'
   * @desc: Check the existance of key inside an object in level and nested levels
   * @return: { true , false }
   * 
   */


  checkNested(obj, ...args) {
    if (args[0] instanceof Array && args.length === 1) args = args[0];
    if (typeof args[0] === "string" && args.length === 1) { console.log(args[0]); args = args[0].split('.'); }
    for (let i = 0; i < args.length; i++) {
      if (!obj || !obj.hasOwnProperty(args[i])) {
        return false;
      }
      obj = obj[args[i]];
    }
    return true;
  }

}
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let name = [];
    members.map(item => {
      if (typeof(item) === 'string') {
        name.push(item.split('')[0]);
      } else if (Array.isArray(item)) {
        if (item[0].split('')[0] == '') {
          item.map(item => {
            if (item != '') {
              name.push(item);
            }
          })
        } else {
          name.push(item[0].split('')[0]);
        }
      }
    }) 
    return name.sort().join('').toUpperCase()
  } else {
    return false
  }
}
module.exports = {
  createDreamTeam
};

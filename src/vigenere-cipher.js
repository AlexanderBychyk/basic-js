const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(bool) {
    this.bool = bool == false ? false : true
  }
  encrypt(message, key) {
    this.checkArguments(message, key)

    message = message.toUpperCase();
    let keystream = key;
    while (keystream.length < message.length) {
      keystream += key;
    }
    for (let i = 0; i < message.length; i++) {
      let m = message[i].charCodeAt(0) - 65;
      if (!(m >= 0 && m <= 25)) {
        keystream = keystream.slice(0, i) + message[i] + keystream.slice(i);
      }
    }
    keystream = keystream.slice(0, message.length).toUpperCase();

    let encryption = [];
    for (let i = 0; i < message.length; i++) {
      let m = message[i].charCodeAt(0) - 65;
      if (m >= 0 && m <= 25) {
        let k = keystream[i].charCodeAt(0) - 65;
        encryption.push(String.fromCharCode(((m + k) % 26) + 65));
      } else {
        encryption.push(message[i])
      }
    }

    return this.bool ? encryption.join('') : encryption.reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    this.checkArguments(encryptedMessage, key)
    
    encryptedMessage = encryptedMessage.toUpperCase();
    let keystream = key;
    while (keystream.length < encryptedMessage.length) {
        keystream += key;
    }
    for (let i = 0; i < encryptedMessage.length; i++) {
        let m = encryptedMessage[i].charCodeAt(0)-65;
        if (!(m >= 0 && m <= 25)) {
            keystream = keystream.slice(0, i) + encryptedMessage[i] + keystream.slice(i);
        }
    }
    keystream = keystream.slice(0, encryptedMessage.length).toUpperCase();
    
    let encryption = [];
    for (let i = 0; i < encryptedMessage.length; i++) {
        let m = encryptedMessage[i].charCodeAt(0)-65;
        if (m >= 0 && m <= 25) {
            let k = keystream[i].charCodeAt(0)-65;
            encryption.push(String.fromCharCode(((m - k + 26) % 26)+65));
        } else {
            encryption.push(encryptedMessage[i])
        }
    }
    
    return this.bool ? encryption.join('') : encryption.reverse().join('');
  }
  checkArguments(arg1, arg2) {
    if (arg1 == undefined) {
      throw new Error('Incorrect arguments!');
    }
    if (arg2 == undefined) {
      throw new Error('Incorrect arguments!');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};

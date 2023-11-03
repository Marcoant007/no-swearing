import { BAD_WORDS } from "../util/bad-words";
const BAD_WORDS_SET = new Set(BAD_WORDS.map(word => word.toLowerCase().replace(/[^a-zãàáäâẽèéëêìíïîõòóöôùúüûñç]/gi, '')));
/**
 * Verifica se o texto contém algum palavrão.
 *
 * @param {string} text - O texto a ser verificado.
 * @returns {string | null} - Retorna a palavra ofensiva encontrada ou null se nenhuma palavra ofensiva foi encontrada.
 */

function checkProfanity(text: string): string | null {
  const words = text.toLowerCase().replace(/[^a-zãàáäâẽèéëêìíïîõòóöôùúüûñç\s]/gi, '').split(/\s+/);

  for (let word of words) {
    if (BAD_WORDS_SET.has(word)) {
      return word;
    }
  }

  return null;
}

export default checkProfanity;
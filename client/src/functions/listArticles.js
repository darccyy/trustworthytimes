// Shuffle, sort and slice array of articles
export default function listArticles(articles, length, options) {
  if (!articles) {
    return null;
  }

  // Set options
  options = { shuffle: true, hidden: false, shown: true, ...options };
  if (!options.hidden && !options.shown) {
    return [];
  }

  // Sort articles
  var array = [];
  for (var i in articles) {
    if (!articles[i]) {
      continue;
    }

    // Sort by options
    if (!options.hidden) {
      if (articles[i].hide) {
        continue;
      }
    }
    if (!options.shown) {
      if (!articles[i].hide) {
        continue;
      }
    }

    // Special articles
    if (["template", "example"].includes(articles[i].id)) {
      continue;
    }

    array.push(articles[i]);
  }

  // Previous, next articles
  if (options.siblings) {
    var sibling = 3;
    for (var i = 0; i < array.length; i++) {
      if (options.siblings && array[i].id === options.siblings) {
        sibling = i;
      }
    }

    return [
      array[sibling > 0 ? sibling - 1 : array.length - 1] || {},
      array[sibling < array.length - 1 ? sibling + 1 : 0] || {},
    ];
  }

  // Shuffle articles
  if (options.shuffle) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
  }

  // Return full array if length undefined
  if (!length && length !== 0) {
    return array;
  }

  // Return array with max length
  return array.slice(0, length);
}

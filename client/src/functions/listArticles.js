// Shuffle, sort and slice array of articles
export default function listArticles(articles, length, options) {
  if (!articles) {
    return null;
  }

  options = { shuffle: true, hidden: false, shown: true, ...options };
  if (!options.hidden && !options.shown) {
    return [];
  }

  var array = [];
  for (var i in articles) {
    if (!articles[i]) {
      continue;
    }

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

    array.push(articles[i]);
  }

  if (options.shuffle) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
  }

  if (!length && length !== 0) {
    return array
  }

  return array.slice(0, length);
}

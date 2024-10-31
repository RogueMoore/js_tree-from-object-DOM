'use strict';

const food = {
  Drink: {
    Wine: {
      French: {},
      Moldavian: {},
    },
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createEl(tagName) {
  return document.createElement(tagName);
}

function createTree(element, data) {
  if (Object.keys(data) === 0) {
    return;
  }

  const list = createEl('ul');
  element.append(list);

  for (const key in data) {
    const item = createEl('li');

    item.textContent = key;
    list.append(item);

    createTree(item, data[key]);
  }
}

createTree(tree, food);

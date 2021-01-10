const newItems = [
  {
    network: 'facebook',
    text: 'post number 1'
  },
  {
    network: 'twitter',
    text: 'some twitter text'
  },
  {
    network: 'gplus',
    text: 'some gplus stuff'
  },
  {
    network: 'facebook',
    text: 'post number 2'
  }
];

function foo(arrayOfItems, aNetwork) {
  const finalsItems = arrayOfItems
    .filter(({ network }) => network === aNetwork)
    .map(({ network, text }) => ({ displayName: network, text }));

  return finalsItems;
}

console.log(foo(newItems, 'facebook'));
console.log(foo(newItems, 'gplus'));

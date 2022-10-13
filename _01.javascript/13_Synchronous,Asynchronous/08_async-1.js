function fetchEgg(chicken){
  //return new Promise((resolve, reject))
  return Promise.resolve(`${chicken} --> 🥚`); 
}

function freyEgg(egg){
  return Promise.resolve(`${egg} --> 🍳`);
}

function getChicken(){
  return Promise.reject(new Error('치킨을 가지고 올 수 없음!!'));
  //return Promise.resolve(`🌿 --> 🐔`);
}

async function makeEggFried(){
  let aa;
  try {
    aa = await getChicken();
  } 
  catch {
    aa = '🌿';
  }

  const egg = await fetchEgg(aa);
  return freyEgg(egg);
  // const frey = await freyEgg();
}

makeEggFried().then(console.log)

// getChicken()
// .catch((error)=> { console.log(error.name); return '🌻'})
// .then(fetchEgg)
// .then(freyEgg)
// .then(console.log)



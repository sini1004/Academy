function fetchEgg(chicken){
  //return new Promise((resolve, reject))
  return Promise.resolve(`${chicken} --> π₯`); 
}

function freyEgg(egg){
  return Promise.resolve(`${egg} --> π³`);
}

function getChicken(){
  return Promise.reject(new Error('μΉν¨μ κ°μ§κ³  μ¬ μ μμ!!'));
  //return Promise.resolve(`πΏ --> π`);
}

async function makeEggFried(){
  let aa;
  try {
    aa = await getChicken();
  } 
  catch {
    aa = 'πΏ';
  }

  const egg = await fetchEgg(aa);
  return freyEgg(egg);
  // const frey = await freyEgg();
}

makeEggFried().then(console.log)

// getChicken()
// .catch((error)=> { console.log(error.name); return 'π»'})
// .then(fetchEgg)
// .then(freyEgg)
// .then(console.log)



const coolGreeting = (person) => {
  if (person.isCool) {
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`;
  } else {
    return `Greetings ${person.name}, how have you been lately?`;
  }
};

const haveBirthday = (person) => {
  person.age++;
};

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name;
  person[spyHandle] = spyHandle;
};

const carMaker = (name, maker, year) => {
  return {
    name: name,
    maker: maker,
    year: year,
    needsOilChange: false
  };
};

const weAreNotFriends = (person) => {
  return person.friends.pop();
};

const listHobbies = (person) => {
  person.hobbies.forEach(hobby => {
    console.log(`${person.name} likes ${hobby}.`);
  });
};

const getNextOpponent = (team) => {
  if (team.matches.length > 0) {
    return team.matches[0].teamName;
  } else {
    return null;
  }
};

const listAllKeys = (object) => {
  return Object.keys(object);
};

const listAllValues = (object) => {
  return Object.values(object);
};

const convertToMatrix = (arrayOfObjects) => {
  if (arrayOfObjects.length === 0) {
    return [];
  }
  
  const keys = Object.keys(arrayOfObjects[0]);
  const matrix = [keys];

  arrayOfObjects.forEach(obj => {
    const values = keys.map(key => obj[key]);
    matrix.push(values);
  });

  return matrix;
};


module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};

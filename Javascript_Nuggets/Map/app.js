// MAP Method

const people = [
    {
      name: "bob",
      age: 20,
      position: "developer",
    },
    {
      name: "anna",
      age: 25,
      position: "designer",
    },
    {
      name: "susy",
      age: 30,
      position: "the boss",
    },
    {
      name: "john",
      age: 26,
      position: "inter",
    },
  ];
  
  
  const getAge = (person) => person.age;
  
  // const ages = people.map((person) => {
  //   return person.age;
  // });
  // or
  const ages = people.map(getAge);
  console.log(ages);
  
  const newPeople = people.map((what_ever) => {
    return {
      firstName: what_ever.name.toUpperCase(),
      oldAge: what_ever.age + 20,
    };
  });
  console.log(newPeople);
  
  const names = people.map((czlowiek)=> `<h2>${czlowiek.name}<h2>`)
  const result = document.querySelector('#result')
  result.innerHTML = names.join('')
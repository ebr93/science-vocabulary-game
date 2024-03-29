let score = 0;
let totalQuestions = 0;
const levels = ['easy', 'medium', 'hard'];
let currentLevel = 'easy'; // Default level
let pendingQuestions = []; // Store words for later
let currentQuestion = {
  word: null,
  correctDefinition: null
};

  // let currentWord;
  // let correctDefinition = '';
const submitButton = document.querySelector('#submitButton');
const nextButton = document.querySelector('#nextButton')

document.addEventListener('DOMContentLoaded', function () {
  let wordBank = [
    {
      name: "Photosynthesis",
      teks: "Nature and Environments",
      definitions: {
          easy: "Process used by plants to convert light energy into food.",
          medium: "The process by which green plants and some other organisms use sunlight to synthesize foods from carbon dioxide and water.",
          hard: "A complex process where chlorophyll in plant cells captures light energy and converts it into chemical energy, involving multiple stages including the Calvin cycle."
      }
    },
    {
        name: "Biotic Factors",
        teks: "Nature and Environments",
        definitions: {
            easy: "Living parts of where organisms live, like plants and animals.",
            medium: "The living parts of an ecosystem, such as plants, animals, and microorganisms.",
            example: "Birds, trees, and bacteria in a forest"
        }
        },
        {
        name: "Abiotic Factors",
        teks: "Nature and Environments",
        definitions: {
            easy: "Nonliving parts of where organisms live, like sunlight and water.",
            medium: "The nonliving parts of an ecosystem, such as sunlight, water, soil, and temperature.",
            example: "Sunlight and water in a desert ecosystem"
        }
        },
        {
        name: "Habitat",
        teks: "Nature and Environments",
        definitions: {
            easy: "The natural home of a specific kind of animal or plant.",
            medium: "The natural environment in which a specific species lives and grows.",
            example: "Coral reefs for tropical fish"
        }
        },
        {
        name: "Producer",
        teks: "Nature and Environments",
        definitions: {
            easy: "Living things that make their own food from sunlight. Plants, trees and grass are examples of it.",
            medium: "Organisms that make their own food by absorbing the sun’s light. They make their own food.",
            example: "Plants making food through photosynthesis"
        }
        },
        {
        name: "Consumer",
        teks: "Nature and Environments",
        definitions: {
            easy: "Living things that eat other living things for energy.",
            medium: "Organisms that obtain energy by eating other organisms.",
            example: "A lion eating a zebra"
        }
        },
        {
        name: "Interdependence",
        teks: "Nature and Environments",
        definitions: {
            easy: "How living things rely on each other and their environment to survive.",
            medium: "The reliance of organisms on other living and nonliving elements in their environment for survival.",
            example: "Bees and flowers depending on each other"
        }
        },
        {
        name: "Predator",
        teks: "Nature and Environments",
        definitions: {
            easy: "An animal that hunts and eats other animals.",
            medium: "An animal that naturally preys on others.",
            example: "A hawk hunting for mice"
        }
        },
        {
        name: "Prey",
        teks: "Nature and Environments",
        definitions: {
            easy: "An animal that is hunted and eaten by predators.",
            medium: "An animal that is hunted and killed by another for food.",
            example: "A rabbit being hunted by a fox"
        }
        },
        {
        name: "Pollination",
        teks: "Nature and Environments",
        definitions: {
            easy: "The process of moving pollen to flowers to make seeds, often done by birds and insects.",
            medium: "The process by which pollen is transferred to the female reproductive organs of a plant, enabling fertilization. Often done by birds and insects.",
            example: "Bees transferring pollen among flowers"
        }
        },
      
      {
        name: "Food Web",
        teks: "Nature and Environments",
        definitions: {
          easy: "A network showing who eats whom in an ecosystem.",
          medium: "A complex network of feeding relationships between organisms in an ecosystem, showing how energy flows through trophic levels.",
          example: "Forest Food Web"
        }
      },
      {
        name: "Energy Flow",
        teks: "Nature and Environments",
        definitions: {
          easy: "How energy moves from plants to animals in a food chain.",
          medium: "The movement of energy through a food chain or food web, from primary producers to various consumers.",
          example: "Energy Flow in an Ocean Ecosystem"
        }
      },
      {
        name: "Sun",
        teks: "Nature and Environments",
        definitions: {
          easy: "The main source of energy for life on Earth.",
          medium: "The primary source of energy for most ecosystems, driving photosynthesis in producers.",
          example: "The Sun's Role in a Forest Ecosystem"
        }
      },
      {
        name: "Producers (Autotrophs)",
        teks: "Nature and Environments",
        definitions: {
          easy: "Living things that make their own food, like plants.",
          medium: "Organisms that produce their own food through photosynthesis (e.g., plants, algae) and are the foundation of the energy flow in ecosystems.",
          example: "Plants in a Grassland Ecosystem"
        }
      },
      {
        name: "Consumers (Heterotrophs)",
        teks: "Nature and Environments",
        definitions: {
          easy: "Living things that eat other living things for energy.",
          medium: "Organisms that obtain energy by eating other organisms. They can be primary (herbivores), secondary (carnivores that eat herbivores), or tertiary consumers (carnivores that eat other carnivores).",
          example: "Lions as Secondary Consumers in a Savannah"
        }
      },
      {
        name: "Decomposers",
        teks: "Nature and Environments",
        definitions: {
          easy: "Tiny living things that break down dead plants and animals.",
          medium: "Organisms (such as bacteria and fungi) that break down dead or decaying organisms, returning essential nutrients to the soil and supporting the energy flow.",
          example: "Fungi Decomposing a Fallen Tree"
        }
      },
      {
        name: "Trophic Levels",
        teks: "Nature and Environments",
        definitions: {
          easy: "Different steps in the food chain, showing who eats whom.",
          medium: "The levels of a food chain or web defined by the organism's source of energy, ranging from producers to various levels of consumers.",
          example: "Trophic Levels in a Pond Ecosystem"
        }
      },
      {
        name: "Ecosystems",
        teks: "Nature and Environments",
        definitions: {
          easy: "Places where living things and non-living things interact within their habitat.",
          medium: "Communities of living organisms and their physical environment, interacting as a system.",
          example: "Rainforest Ecosystem"
        }
      },
      {
        name: "Biodiversity",
        teks: "Nature and Environments",
        definitions: {
          easy: "The variety of all living things in a place.",
          medium: "The variety of life in a particular ecosystem or the entire planet, crucial for ecosystem resilience.",
          example: "Biodiversity in the Amazon Rainforest"
        }
      },
      {
        name: "Habitat Alteration",
        teks: "Nature and Environments",
        definitions: {
          easy: "When the natural home of animals and plants changes, often because of humans.",
          medium: "Changes to the natural environment in which an organism lives, often resulting from human activities like urban development or agriculture.",
          example: "Building a Dam and Altering River Habitats"
        }
      },
      {
        name: "Pollution",
        teks: "Nature and Environments",
        definitions: {
          easy: "Adding harmful things to the environment, like trash, chemicals, and harmful gases.",
          medium: "The introduction of harmful substances or products into the environment, negatively affecting wildlife and ecosystems.",
          example: "Plastic Pollution in Oceans"
        }
      },
      {
        name: "Overpopulation",
        teks: "Nature and Environments",
        definitions: {
          easy: "Too many individuals of a species in one place, causing harm to the environment.",
          medium: "A condition where the number of organisms exceeds the carrying capacity of their habitat, often leading to environmental degradation.",
          example: "Deer Overpopulation in a Forest"
        }
      },
      {
        name: "Conservation",
        teks: "Nature and Environments",
        definitions: {
          easy: "Protecting and taking care of nature and wildlife.",
          medium: "The protection and preservation of natural resources and environments.",
          example: "Conservation Efforts in National Parks"
        }
      },
      {
        name: "Sustainable Practices",
        teks: "Nature and Environments",
        definitions: {
          easy: "Using natural resources in a way that doesn't run out and helps the Earth.",
          medium: "Methods of using resources in a way that does not deplete them and preserves the environment for future generations.",
          example: "Renewable Energy Sources like Wind and Solar"
        }
      },
      {
        name: "Urbanization",
        teks: "Nature and Environments",
        definitions: {
          easy: "The growth of cities and towns, where more people live and work in one place.",
          medium: "The process by which towns and cities are formed and become larger as more people begin living and working in central areas, often leading to habitat destruction.",
          example: "Expansion of Cities and Loss of Green Spaces"
        }
      },
   
      

      {
        name: "Matter",
        teks: "Properties of Matter",
        definitions: {
          easy: "Anything that has mass and takes up space.",
          medium: "Substances that occupy physical space and possess mass, comprising all tangible materials.",
          example: "Rocks, Metals, and Gases"
        }
      },
      {
        name: "Classify",
        teks: "Properties of Matter",
        definitions: {
          easy: "To sort or organize things into different groups, based on its physical attributes or properties of matter.",
          medium: "The systematic arrangement of materials based on shared characteristics or properties.",
          example: "Sorting Rocks by Size or Minerals by Hardness"
        }
      },
      {
        name: "Measurable",
        teks: "Properties of Matter",
        definitions: {
          easy: "Something that can be measured or quantified using units",
          medium: "Quantifiable aspects of matter that can be determined through empirical means.",
          example: "Measuring the Mass of a Substance in Grams"
        }
      },
      {
        name: "Testable",
        teks: "Properties of Matter",
        definitions: {
          easy: "Something that can be tested or experimented on.",
          medium: "Characteristics of substances that can be verified through experimental procedures.",
          example: "Testing the Boiling Point of Water"
        }
      },
      {
        name: "Observable",
        teks: "Properties of Matter",
        definitions: {
          easy: "Something that can be seen or noticed with your 5 senses.",
          medium: "Physical attributes of substances that are perceptible through sensory experience.",
          example: "Observing the Color Change of a Chemical Reaction"
        }
      },
      {
        name: "Physical Properties",
        teks: "Properties of Matter",
        definitions: {
          easy: "Features of matter that you can see or measure using your 5 senses or tools.",
          medium: "Inherent attributes of substances that can be observed or measured without altering their chemical structure.",
          example: "Density, Melting Point, and Boiling Point"
        }
      },
      {
        name: "Mass",
        teks: "Properties of Matter",
        definitions: {
          easy: "How much matter an object has, the more matter the more mass.",
          medium: "The quantity of matter contained within an object, often measured in kilograms or grams.",
          example: "Measuring the Mass of a Rock with a Balance"
        }
      },
      {
        name: "Magnetism",
        teks: "Properties of Matter",
        definitions: {
          easy: "The force that makes certain things attract or repel each other. Iron, nickel, cobalt and steel are the only metals affected by this force.",
          medium: "A physical phenomenon produced by the motion of electric charge, resulting in attractive and repulsive forces between objects.",
          example: "Using a Magnet to Separate Iron Filings from Sand"
        }
      },
      {
        name: "Physical State",
        teks: "Properties of Matter",
        definitions: {
          easy: "The form matter takes, like solid (hard), liquid (water), or gas (like air).",
          medium: "The distinct forms that different phases of matter take on, characterized by structural differences.",
          example: "Water Existing as Ice, Liquid, and Vapor"
        }
      },
      {
        name: "Solid",
        teks: "Properties of Matter",
        definitions: {
          easy: "A form of matter that has a fixed shape and doesn't flow. Particles tightly packed.",
          medium: "A state of matter characterized by structural rigidity and resistance to changes in shape or volume.",
          example: "A Rock Retaining Its Shape Under Pressure"
        }
      },
      {
        name: "Liquid",
        teks: "Properties of Matter",
        definitions: {
          easy: "A form of matter that flows and takes the shape of its container but keeps the same volume. Particles are close together and always moving.",
          medium: "A fluid state of matter that conforms to the shape of its container but retains a constant volume independent of pressure.",
          example: "Water Taking the Shape of Its Glass"
        }
      },
      {
        name: "Gas",
        teks: "Properties of Matter",
        definitions: {
          easy: "A form of matter that can spread out to fill any space. Cannot be seen most of the times, particles have a lot of energy.",
          medium: "A state of matter consisting of particles that have neither a defined volume nor shape, expanding to fill its container.",
          example: "Air Expanding to Fill a Balloon"
        }
      },
      {
        name: "Relative Density",
        teks: "Properties of Matter",
        definitions: {
          easy: "Whether something is something sinks or floats on water. More dense sinks, less dense will float.",
          medium: "A measure of how dense a substance is in relation to a reference substance, typically water.",
          example: "An Apple Floating in Water and a Rock Sinking"
        }
      },
      {
        name: "Solubility",
        teks: "Properties of Matter",
        definitions: {
          easy: "How well a substance can dissolve in water.",
          medium: "The ability of a substance to dissolve in a solvent, forming a homogeneous solution.",
          example: "Sugar Dissolving in Water"
        }
      },
      {
        name: "Water",
        teks: "Properties of Matter",
        definitions: {
          easy: "Material used as a standard to test sinking, floating, and solubility.",
          medium: "A universal solvent used in experiments to gauge various physical properties and reactions.",
          example: "Testing Objects for Buoyancy in Water"
        }
      },
      {
        name: "Conduct",
        teks: "Properties of Matter",
        definitions: {
          easy: "To let energy flow through something easily, metals are great at allowing energy flow.",
          medium: "The property of a material that allows it to transmit heat or electricity with minimal resistance.",
          example: "Copper Wires Conducting Electricity in a Circuit"
        }
      },
      {
        name: "Insulate",
        teks: "Properties of Matter",
        definitions: {
          easy: "To not let energy go through or stop it, it stops energy flow.",
          medium: "Materials that resist the flow of heat or electricity, used to prevent energy transfer.",
          example: "Rubber Gloves Insulating Hands from Electric Shock"
        }
      },
      {
        name: "Thermal Energy",
        teks: "Properties of Matter",
        definitions: {
          easy: "The energy that comes from heat.",
          medium: "The internal energy present in a system due to its temperature, a form of kinetic energy at the atomic level.",
          example: "Feeling Warmth from a Heated Stove"
        }
      },
      {
        name: "Electric Energy",
        teks: "Properties of Matter",
        definitions: {
          easy: "The energy that comes from the flow of electricity.",
          medium: "Energy made available by the flow of electric charge through a conductor.",
          example: "Lighting a Bulb with Electrical Current"
        }
      },
      {
        name: "Light Energy",
        teks: "Properties of Matter",
        definitions: {
          easy: "The energy that is made of light, you can see it.",
          medium: "A form of electromagnetic radiation that is visible to the human eye, perceived as light.",
          example: "Sunlight Illuminating a Room"
        }
      },
      {
        name: "Sound Energy",
        teks: "Properties of Matter",
        definitions: {
          easy: "The energy that comes from vibrations, you can hear it, it travels in waves.",
          medium: "Energy carried by sound waves, typically perceived through the sense of hearing.",
          example: "The Vibrations from a Ringing Bell"
        }
      },
      {
        name: "Mechanical Energy",
        teks: "Properties of Matter",
        definitions: {
          easy: "The energy of movement, anything that moves has this energy.",
          medium: "The sum of potential and kinetic energy in an object that is used to do work.",
          example: "A Winding Spring in a Toy Car"
        }
      },
      {
        name: "Mixtures",
        teks: "Properties of Matter",
        definitions: {
          easy: "Things mixed together, materials keep their physical properties, still easy to separate. Like cereal with milk - you can see and pick out each part.",
          medium: "Combinations of two or more substances where each substance retains its chemical properties and can be physically separated.",
          example: "A salad with lettuce, tomatoes, and cucumbers where each ingredient can still be identified and separated."
        }
      },
      {
        name: "Solutions",
        teks: "Properties of Matter",
        definitions: {
          easy: "When something (like sugar) mixes completely with something else (like water) and you can't see it anymore. Hard to separate.",
          medium: "Homogeneous mixtures where one substance (solute) is completely dissolved in another (solvent) and cannot be easily separated by physical means.",
          example: "Saltwater, where the salt is fully dissolved in water and cannot be seen as separate particles."
        }
      }       
  ];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateQuestion() {
    let selectedWord;
    if (pendingQuestions.length > 0 && Math.random() > 0.5) {
        // Random chance to pick from pending questions
        console.log(`pending questions ${pendingQuestions}`);
        selectedWord = pendingQuestions.shift();
    } else {
        // Select a random word from the word bank
        selectedWord = getRandomElement(wordBank);
    }

    console.log(selectedWord);
    currentQuestion.word = selectedWord;

    console.log(currentQuestion.word);

    currentQuestion.correctDefinition = selectedWord.definitions[currentLevel];

    let choices = [currentQuestion.correctDefinition];

    // Generate incorrect choices
    while (choices.length < 4) {
        const randomWord = getRandomElement(wordBank);
        const randomDefinition = randomWord.definitions[currentLevel];

        if (!choices.includes(randomDefinition)) {
            choices.push(randomDefinition);
        }
    }

    // Shuffle choices
    choices.sort(() => Math.random() - 0.5);

    // Display question and choices
    const gameDiv = document.getElementById('game');
    gameDiv.innerHTML = `
    <div class="fs-3 justify-content-center">${selectedWord.name}</div>
    <div>
        ${choices.map((choice, index) => `
            <div class="form-check">
                <input class="form-check-input btn-outline-dark" type="radio" name="definition" id="choice${index}">
                <label class="form-check-label" for="choice${index}">${choice}</label>
            </div>
        `).join('')}
    </div>
    `;
}


function highlightAnswer(label, isCorrect) {
  label.classList.add(isCorrect ? 'text-success' : 'text-danger', 'fw-bold');
  if (isCorrect) {
      submitButton.disabled = true; // Disable the submit button if the answer is incorrect
      setTimeout(nextQuestion, 1000); // Proceed to next question after half a second
  } else {
    submitButton.disabled = true; // Disable the submit button if the answer is incorrect
    document.getElementById('nextButton').disabled = false; // Enable the next button for incorrect answers
  }
}


function checkAnswer(wordName, def) {
  const allRadioButtons = document.querySelectorAll('.form-check-input');
  const selected = document.querySelector('input[name="definition"]:checked');
  // const submitButton = document.querySelector('.btn-primary'); // Reference to the submit button

  console.log(wordName);
  console.log(def);

  if (selected) {
      let isCorrect = false;
      const selectedLabel = selected.nextElementSibling;

      if (selectedLabel.textContent === def) {
          isCorrect = true;
          score++; // Increment score for a correct answer
          wordBank = wordBank.filter(word => word.name !== wordName); // Remove the word from the word bank if answered correctly
      } 

      highlightAnswer(selectedLabel, isCorrect);

      allRadioButtons.forEach(radio => {
          radio.disabled = true; // Disable all radio buttons after an answer is submitted
      });

      // this logic is applied in highlightAnswer function
      // if (!isCorrect) {
      //     submitButton.disabled = true; // Disable the submit button if the answer is incorrect
      //     document.getElementById('nextButton').disabled = false; // Enable the next button for incorrect answers
      // }

      totalQuestions++;
      updateScoreDisplay(); // Update the displayed score

      // Integrate tower logic based on the correctness of the answer
      answer(isCorrect); // Call the tower logic's answer function
  }
}


// Additional functions like nextQuestion, updateScoreDisplay, etc. should be defined as per your application's needs.

function updateScoreDisplay() {
  document.getElementById('score').innerText = `Score: ${score} / ${totalQuestions}`;
}

function nextQuestion() {
  // Reset the game area and generate a new question
  document.getElementById('game').innerHTML = '';
  generateQuestion();
  document.getElementById('nextButton').disabled = true; // Disable nextButton until answer is checked
  submitButton.disabled = false; // Enables submitButton for new question
}

// window.checkAnswer = checkAnswer;
// window.nextQuestion = nextQuestion;

// Initial call to start the game
generateQuestion();

// Append score and next button
const gameDiv = document.getElementById('game');
const gameContainerDiv = document.getElementById('game-container');
gameDiv.insertAdjacentHTML('beforebegin', `<p id="score" class="text-center">Score: ${score} / ${totalQuestions}</p>`);


submitButton.addEventListener('click', () => {
  console.log('event listener works for submit');
  console.log(currentQuestion.correctDefinition);
  console.log(currentQuestion.word);
  checkAnswer(`${currentQuestion.name}`, `${currentQuestion.correctDefinition}`);
});

nextButton.addEventListener('click', () => {
  nextQuestion(); // Proceed to next question after a second
});

// ***********************************************************************************
// Tower game logic
let tower = [];
let correctStreak = 0;
let incorrectStreak = 0;
let multiplier = 1;
let floorCount = 0;
const multiplierBase = 1; // Base multiplier value

function updateTower() {
  const towerElement = document.getElementById('tower');
  towerElement.innerHTML = ''; // Clear existing tower

  // Update the multiplier and floor count display
  const multiplierDisplay = document.getElementById('multiplier-display');
  if (multiplierDisplay) {
      multiplierDisplay.textContent = `Multiplier: x${multiplier} | Floors: ${floorCount}`;
  }

  tower.forEach(floor => {
      const floorElement = document.createElement('div');
      floorElement.classList.add('floor', 'bg-success', 'my-1');
      if (floor.damaged) {
          floorElement.classList.remove('bg-success');
          floorElement.classList.add('bg-danger');
      }
      towerElement.appendChild(floorElement);
  });
}


function addFloor(multiplier) {
  for (let i = 0; i < multiplier; i++) {
      tower.push({ damaged: false });
      floorCount++; // Increment floor count for each added floor
  }
  updateTower();
}

function removeFloor() {
  if (tower.length > 0) {
      tower.pop();
      floorCount = Math.max(0, floorCount - 1); // Decrement floor count, ensuring it doesn't go below 0
      updateTower();
  }
}

function damageFloor() {
    if (tower.length > 0) {
        tower[tower.length - 1].damaged = true;
        updateTower();
    }
}


function answer(correct) {
    if (correct) {
        correctStreak++;
        incorrectStreak = 0;
        // Remove damage if exists
        if (tower.length > 0 && tower[tower.length - 1].damaged) {
            tower[tower.length - 1].damaged = false;
        }
        // Update multiplier based on streak
        if (correctStreak >= 20) multiplier = 5;
        else if (correctStreak >= 15) multiplier = 4;
        else if (correctStreak >= 10) multiplier = 3;
        else if (correctStreak >= 5) multiplier = 2;
        else multiplier = 1;

        addFloor(multiplier);
    } else {
        correctStreak = 0;
        incorrectStreak++;
        // Apply damage or remove a floor
        if (incorrectStreak >= 2) {
            removeFloor();
            incorrectStreak = 0; // Reset incorrect streak after removing a floor
        } else {
            damageFloor();
        }
    }
}

// Modify the checkAnswer function to use the answer(correct) function from tower logic
// Replace the existing checkAnswer implementation with the integrated one that updates the tower based on correctness

// Initial tower update
updateTower();
});


/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */
(() => {
    'use strict'
  
    const getStoredTheme = () => localStorage.getItem('theme')
    const setStoredTheme = theme => localStorage.setItem('theme', theme)
  
    const getPreferredTheme = () => {
      const storedTheme = getStoredTheme()
      if (storedTheme) {
        return storedTheme
      }
  
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
  
    const setTheme = theme => {
      if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
      } else {
        document.documentElement.setAttribute('data-bs-theme', theme)
      }
    }
  
    setTheme(getPreferredTheme())
  
    const showActiveTheme = (theme, focus = false) => {
      const themeSwitcher = document.querySelector('#bd-theme')
  
      if (!themeSwitcher) {
        return
      }
  
      const themeSwitcherText = document.querySelector('#bd-theme-text')
      const activeThemeIcon = document.querySelector('.theme-icon-active use')
      const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
      const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')
  
      document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
        element.classList.remove('active')
        element.setAttribute('aria-pressed', 'false')
      })
  
      btnToActive.classList.add('active')
      btnToActive.setAttribute('aria-pressed', 'true')
      activeThemeIcon.setAttribute('href', svgOfActiveBtn)
      const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
      themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)
  
      if (focus) {
        themeSwitcher.focus()
      }
    }
  
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const storedTheme = getStoredTheme()
      if (storedTheme !== 'light' && storedTheme !== 'dark') {
        setTheme(getPreferredTheme())
      }
    })
  
    window.addEventListener('DOMContentLoaded', () => {
      showActiveTheme(getPreferredTheme())
  
      document.querySelectorAll('[data-bs-theme-value]')
        .forEach(toggle => {
          toggle.addEventListener('click', () => {
            const theme = toggle.getAttribute('data-bs-theme-value')
            setStoredTheme(theme)
            setTheme(theme)
            showActiveTheme(theme, true)
          })
        })
    })
})()



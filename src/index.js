
document.addEventListener('DOMContentLoaded', function () {
  let wordBank = [
    {
      name: "Photosynthesis",
      teks: "Biology",
      definitions: {
          easy: "Process used by plants to convert light into energy.",
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
            easy: "Living things that make their own food from sunlight.",
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
            easy: "The process of moving pollen to flowers to make seeds.",
            medium: "The process by which pollen is transferred to the female reproductive organs of a plant, enabling fertilization.",
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
          easy: "Places where living things and their surroundings work together.",
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
          easy: "Adding harmful things to the environment, like trash or chemicals.",
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
          easy: "Using resources in a way that doesn't run out and helps the Earth.",
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
      }      
  ];
  

  let score = 0;
  let totalQuestions = 0;
  const levels = ['easy', 'medium', 'hard'];
  let currentLevel = 'easy'; // Default level
  let pendingQuestions = []; // Store words for later

  function getRandomElement(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
  }

  function generateQuestion() {
      if (pendingQuestions.length > 0 && Math.random() > 0.5) {
          // Random chance to pick from pending questions
          selectedWord = pendingQuestions.shift();
      } else {
          // Select a random word from the word bank
          selectedWord = getRandomElement(wordBank);
      }

      const correctDefinition = selectedWord.definitions[currentLevel];

      let choices = [correctDefinition];
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
          <button class="btn btn-primary mt-3" onclick="checkAnswer('${selectedWord.name}', '${correctDefinition}')">Submit</button>
      `;
  }


  function highlightAnswer(label, isCorrect) {
      label.classList.add(isCorrect ? 'text-success' : 'text-danger', 'fw-bold');
      if (isCorrect) {
          setTimeout(nextQuestion, 500); // Proceed to next question after half a second
      } else {
          document.getElementById('nextButton').disabled = false; // Enable the next button for incorrect answers
      }
  }


  function checkAnswer(wordName, correctDefinition) {
    const allRadioButtons = document.querySelectorAll('.form-check-input');
    const selected = document.querySelector('input[name="definition"]:checked');
    const allChoices = document.querySelectorAll('.form-check-label');

    let isCorrect = false;
    allChoices.forEach(label => {
        if (label.textContent === correctDefinition) {
            label.classList.add('text-success', 'fw-bold'); // Highlight correct answer
        } else {
            label.classList.add('text-muted'); // Dim other answers
        }
    });

    if (selected && selected.nextElementSibling.textContent === correctDefinition) {
        score++;
        isCorrect = true;
        // Remove the word from the word bank
        wordBank = wordBank.filter(word => word.name !== wordName);
    } else {
        // Add the word to pending questions to be asked later
        let delay = Math.floor(Math.random() * 6) + 5; // Random delay between 5 to 10 questions
        let currentQuestionIndex = totalQuestions + delay;
        pendingQuestions.splice(currentQuestionIndex, 0, wordBank.find(word => word.name === wordName));
    }

    highlightAnswer(selected.nextElementSibling, isCorrect);

    // Disable all radio buttons after an answer is submitted
    allRadioButtons.forEach(radio => {
        radio.disabled = true;
    });

    totalQuestions++;
    updateScoreDisplay();

    if (!isCorrect) {
        document.getElementById('nextButton').disabled = false; // Enable the next button for incorrect answers
    }
  }



  function updateScoreDisplay() {
    document.getElementById('score').innerText = `Score: ${score} / ${totalQuestions}`;
  }

  function nextQuestion() {
    // Reset the game area and generate a new question
    document.getElementById('game').innerHTML = '';
    generateQuestion();
    document.getElementById('nextButton').disabled = true; // Disable next button until answer is checked
  }

  window.checkAnswer = checkAnswer;
  window.nextQuestion = nextQuestion;

  // Initial call to start the game
  generateQuestion();

  // Append score and next button
  const gameDiv = document.getElementById('game');
  const gameContainerDiv = document.getElementById('game-container');
  gameDiv.insertAdjacentHTML('beforebegin', `<p id="score" class="text-center">Score: ${score} / ${totalQuestions}</p>`);
  gameContainerDiv.insertAdjacentHTML('afterend', `<button id="nextButton" class="btn btn-secondary mt-3" onclick="nextQuestion()" disabled>Next Question</button>`);
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
 
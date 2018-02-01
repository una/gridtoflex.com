// Primary Function to Run Code Updates

function updateCodeContent(input, example) {
  let codeArea = document.querySelector(`.${example} .show-code`);
  codeArea.innerHTML = input;
}

// Ex1: Embedded Sidebar

const ex1_FlexSolution = `/* Flex Implementation */

.ex1 .container {
  display: flex;
  flex-wrap: wrap;
}

.ex1 .red {
  flex-basis: 100%;
  height: var(--headerHeight);
}

.ex1 .orange {
  flex: 1;
}

.ex1 .yellow {
  flex: 3;
  height: var(--middleHeight);
}

.ex1 .green {
  flex-basis: 100%;
  height: var(--footerHeight);
}`;

const ex1_GridSolution =`/* Grid Implementation */

.ex1 .container {
  display: grid;
  grid-template: 
    '😁  😁' var(--headerHeight)
    '🐒  📝' var(--middleHeight)
    '👠  👠' var(--footerHeight) /
    1fr 3fr ;
  }

  .ex1 .red {
    grid-area: 😁;
  }

  .ex1 .orange {
    grid-area: 🐒;
  }

  .ex1 .yellow {
    grid-area: 📝;
  }

  .ex1 .green {
    grid-area: 👠;
  }
}`;
const ex1_FullSolution =`/* Grid Implementation */

@supports (display: grid) {
  .ex1 .container {
    display: grid;
    grid-template: 
        '😁  😁' var(--headerHeight)
        '🐒  📝' var(--middleHeight)
        '👠  👠' var(--footerHeight) /
        1fr 3fr ;
  }

  .ex1 .red {
    grid-area: 😁;
  }

  .ex1 .orange {
    grid-area: 🐒;
  }

  .ex1 .yellow {
    grid-area: 📝;
  }

  .ex1 .green {
    grid-area: 👠;
  }
}

/* Flexbox Fallback */

@supports not (display: grid) {
  .ex1 .container {
    display: flex;
    flex-wrap: wrap;
  }

  .ex1 .red {
    flex-basis: 100%;
    height: var(--headerHeight);
  }

  .ex1 .orange {
    flex: 1;
  }

  .ex1 .yellow {
    flex: 3;
    height: var(--middleHeight);
  }

  .ex1 .green {
    flex-basis: 100%;
    height: var(--footerHeight);
  }
}`;

// Ex2: Full Sidebar

const ex2_FullSolution = `/* Grid Implementation */

@supports (display: grid) {
  .ex2 .container {
    display: grid;
    grid-template: 
      '🐒  📝' var(--headerHeight)
      '🐒  📝' var(--middleHeight)
      '🐒  📝' var(--footerHeight) /
      1fr 3fr ;
  }

  .ex2 .sidebar-container {
    grid-area: 🐒;
  }
  
  .ex2 .orange {
    height: 100%;
  }
  
  .ex2 .main-container {
    grid-area: 📝;
    display: grid;
    grid-template: 
      '😁' var(--headerHeight)
      '💛' var(--middleHeight)
      '👠' var(--footerHeight) /
      100% ;
  }
  
  .ex2 .red {
    grid-area: 😁;
  }

  .ex2 .yellow {
    grid-area: 💛;
  }

  .ex2 .green {
    grid-area: 👠;
  }
}

// Flexbox Fallback

@supports not (display: grid) {
  .ex2 .container {
    display: flex;
  }
  
  .ex2 .sidebar-container {
    flex: 1;
  }
  
  .ex2 .orange {
    height: 100%;
    width: 100%;
  }
  
  .ex2 .main-container {
    display: flex;
    flex-wrap: wrap;
    flex: 3;
  }
  
  .ex2 .red {
    flex-basis: 100%;
    height: var(--headerHeight);
  }

  .ex2 .yellow {
    flex-basis: 100%;
    height: var(--middleHeight);
  }

  .ex2 .green {
    flex-basis: 100%;
    height: var(--footerHeight);
  }
}`;

const ex2_FlexSolution =`/* Flex Implementation */

.ex2 .container {
  display: grid;
  grid-template: 
    '🐒  📝' var(--headerHeight)
    '🐒  📝' var(--middleHeight)
    '🐒  📝' var(--footerHeight) /
    1fr 3fr ;
}

.ex2 .sidebar-container {
  grid-area: 🐒;
}

.ex2 .orange {
  height: 100%;
}

.ex2 .main-container {
  grid-area: 📝;
  display: grid;
  grid-template: 
    '😁' var(--headerHeight)
    '💛' var(--middleHeight)
    '👠' var(--footerHeight) /
    100% ;
}

.ex2 .red {
  grid-area: 😁;
}

.ex2 .yellow {
  grid-area: 💛;
}

.ex2 .green {
  grid-area: 👠;
}`;

const ex2_GridSolution =`/* Grid Implementation */

.ex2 .container {
  display: flex;
}

.ex2 .sidebar-container {
  flex: 1;
}

.ex2 .orange {
  height: 100%;
  width: 100%;
}

.ex2 .main-container {
  display: flex;
  flex-wrap: wrap;
  flex: 3;
}

.ex2 .red {
  flex-basis: 100%;
  height: var(--headerHeight);
}

.ex2 .yellow {
  flex-basis: 100%;
  height: var(--middleHeight);
}

.ex2 .green {
  flex-basis: 100%;
  height: var(--footerHeight);
}`;

// Events

document.querySelector('.ex1 .flex-button').addEventListener('click', function() {
  codeContent = ex1_FlexSolution;
  updateCodeContent(codeContent, 'ex1');
});
document.querySelector('.ex1 .grid-button').addEventListener('click', function() {
    codeContent = ex1_GridSolution;
    updateCodeContent(codeContent, 'ex1');
});
document.querySelector('.ex1 .both-button').addEventListener('click', function() {
    codeContent = ex1_FullSolution;
  updateCodeContent(codeContent, 'ex1');
});
document.querySelector('.ex2 .flex-button').addEventListener('click', function() {
  codeContent = ex2_FlexSolution;
  updateCodeContent(codeContent, 'ex2');
});
document.querySelector('.ex2 .grid-button').addEventListener('click', function() {
    codeContent = ex2_GridSolution;
    updateCodeContent(codeContent, 'ex2');
});
document.querySelector('.ex2 .both-button').addEventListener('click', function() {
    codeContent = ex2_FullSolution;
  updateCodeContent(codeContent, 'ex2');
});

// Initial setup for Ex1
updateCodeContent(ex1_FullSolution, 'ex1');
updateCodeContent(ex2_FullSolution, 'ex2');
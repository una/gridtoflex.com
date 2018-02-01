document.querySelector('.ex1 .flex-button').addEventListener('click', function() {
  codeContent=`/* Flex Implementation */

.container {
  display: flex;
  flex-wrap: wrap;
}

.red {
  flex-basis: 100%;
  height: var(--headerHeight);
}

.orange {
  flex: 1;
}

.yellow {
  flex: 3;
  height: var(--middleHeight);
}

.green {
  flex-basis: 100%;
  height: var(--footerHeight);
}`
  updateCodeContent(codeContent);
});
document.querySelector('.ex1 .grid-button').addEventListener('click', function() {
    codeContent=`/* Grid Implementation */

.container {
  display: grid;
  grid-template: 
    '😁  😁' var(--headerHeight)
    '🐒  📝' var(--middleHeight)
    '👠  👠' var(--footerHeight) /
    1fr 3fr ;
  }

  .red {
    grid-area: 😁;
  }

  .orange {
    grid-area: 🐒;
  }

  .yellow {
    grid-area: 📝;
  }

  .green {
    grid-area: 👠;
  }
}`;
    updateCodeContent(codeContent);
});
document.querySelector('.ex1 .both-button').addEventListener('click', function() {
    codeContent=`/* Grid Implementation */

@supports (display: grid) {
  .container {
    display: grid;
    grid-template: 
        '😁  😁' var(--headerHeight)
        '🐒  📝' var(--middleHeight)
        '👠  👠' var(--footerHeight) /
        1fr 3fr ;
  }

  .red {
    grid-area: 😁;
  }

  .orange {
    grid-area: 🐒;
  }

  .yellow {
    grid-area: 📝;
  }

    .green {
    grid-area: 👠;
    }
}

/* Flexbox Fallback */

@supports not (display: grid) {
  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .red {
    flex-basis: 100%;
    height: var(--headerHeight);
  }

  .orange {
    flex: 1;
  }

  .yellow {
    flex: 3;
    height: var(--middleHeight);
  }

  .green {
    flex-basis: 100%;
    height: var(--footerHeight);
  }
}`
  updateCodeContent(codeContent);
});

function updateCodeContent(input) {
    let codeArea = document.querySelector('.show-code');
    codeArea.innerHTML = input;
}


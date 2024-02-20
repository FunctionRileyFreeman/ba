document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.neon-btn');
  
    btn.addEventListener('click', () => {
      // Check if the paragraph has already been added to prevent duplicates
      if (!document.querySelector('.elusive-definition')) {
        const contentArea = document.querySelector('.content');
        const newParagraph = document.createElement('p');
        newParagraph.classList.add('elusive-definition', 'neon-text');
        newParagraph.innerHTML = `
          <strong>Synonyms of elusive:</strong><br>
          : tending to elude: such as<br>
          a: tending to evade grasp or pursuit<br>
          &nbsp;&nbsp;&nbsp;elusive prey<br>
          b: hard to comprehend or define<br>
          c: hard to isolate or identify
        `;
        contentArea.appendChild(newParagraph);
      }
    });
  });
  
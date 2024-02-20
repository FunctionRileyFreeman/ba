document.addEventListener('DOMContentLoaded', () => {
    const bushContainer = document.getElementById('bushContainer');
    const bush = document.getElementById('bush');
    let isDragging = false;
    let startX = 0;
  
    const dragStart = (e) => {
      isDragging = true;
      startX = e.pageX - bushContainer.offsetLeft;
      bush.style.cursor = 'grabbing';
      e.preventDefault();
    };
  
    const dragEnd = () => {
      isDragging = false;
      bush.style.cursor = 'ew-resize';
    };
  
    const dragMove = (e) => {
      if (!isDragging) return;
      let x = e.pageX - bushContainer.offsetLeft;
      let walk = (x - startX) * 2; // Speed of the drag
      bushContainer.scrollLeft -= walk;
      checkReveal();
    };
  
    const checkReveal = () => {
      const revealPoint = 50; // Adjust based on desired reveal point
      if (bushContainer.scrollLeft > revealPoint) {
        document.getElementById('campfire').classList.add('revealed');
      }
    };
  
    bushContainer.addEventListener('mousedown', dragStart);
    document.addEventListener('mouseup', dragEnd);
    document.addEventListener('mousemove', dragMove);
  
    // Touch support
    bushContainer.addEventListener('touchstart', (e) => {
      dragStart(e.touches[0]);
    }, false);
  
    document.addEventListener('touchend', dragEnd, false);
  
    document.addEventListener('touchmove', (e) => {
      if (isDragging) {
        dragMove(e.touches[0]);
      }
    }, false);
  });
  
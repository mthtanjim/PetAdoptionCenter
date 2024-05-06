const sportSelect = document.getElementById('sport');
const ageGroupSelect = document.getElementById('age-group');
const petTypeSelect = document.getElementById('pet-type');
const petAgeSelect = document.getElementById('pet-age');
const careDaysInput = document.getElementById('care-days');
const calcButton = document.getElementById('calc-button');
const feeResult = document.getElementById('fee-result');

const costs = {
    dog: {
        'puppy-kitten': 35, // Daily cost
        adult: 30,
        senior: 25 
    },
    cat: {
        'puppy-kitten': 25, 
        adult: 20,
        senior: 18
    },
    bird: {
        'puppy-kitten': 15, 
        adult: 10,
        senior: 8
    },
    mammal: {
        'puppy-kitten': 22, 
        adult: 13,
        senior: 9
    },
    other: { 
        'puppy-kitten': 10, 
        adult: 5,
        senior: 3
    }
};

calcButton.addEventListener('click', () => {
    const petType = petTypeSelect.value;
    const petAge = petAgeSelect.value;
    const days = parseInt(careDaysInput.value); 

    if (days > 0) {
        const dailyCost = costs[petType][petAge];
        const totalCost = dailyCost * days;
        feeResult.textContent = 'Estimated Care Cost: $' + totalCost;
    } else {
        feeResult.textContent = 'Please fill out all fields with valid values.';
    }
});


function getAllStyles(element) {
    const computedStyle = getComputedStyle(element);
  
    // Simple example, would need better handling for full website
    for (let i = 0; i < computedStyle.length; i++) {
      let prop = computedStyle[i];
      let value = computedStyle.getPropertyValue(prop);
      console.log(`${prop}: ${value}`);
    }
  }



  document.getElementById('inquiry-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Show the success message
    document.getElementById('success-message').style.display = 'block';

    // Clear the form fields
    document.getElementById('inquiry-form').reset();
});


// Target the element to animate
const animatedText = document.querySelector('.animated-text');

// Options for the Intersection Observer
const options = {
    threshold: 0.5 // Trigger the animation when 50% of the element is visible
};

// Callback function for the Intersection Observer
const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the animation class when the element comes into view
            animatedText.classList.add('fade-in-up-animation');
            // Unobserve the target element after animation has been triggered
            observer.unobserve(entry.target);
        }
    });
};

// Create the Intersection Observer
const observer = new IntersectionObserver(callback, options);

// Start observing the target element
observer.observe(animatedText);


// start for form 

// Target the element to animate
const calBox = document.querySelector('.calBox');

// Options for the Intersection Observer
const optionss = {
    threshold: 0.5 // Trigger the animation when 50% of the element is visible
};

// Callback function for the Intersection Observer
const callbacks = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the class to show the form with animation
            calBox.classList.add('show');
            // Unobserve the target element after animation has been triggered
            observer.unobserve(entry.target);
        }
    });
};

// Create the Intersection Observer
const observers = new IntersectionObserver(callbacks, optionss);

// Start observing the target element
observers.observe(calBox);


// for sports container 
// Target all elements with the class name 'grid-item'
const sportsContainers = document.querySelectorAll('.grid-item');

// Options for the Intersection Observer
const optionsForS = {
    threshold: 0.5 // Trigger the animation when 50% of the element is visible
};

// Callback function for the Intersection Observer
const callbackForS = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the class to show the sports content with animation
            entry.target.classList.add('show');
            // Unobserve the target element after animation has been triggered
            observer.unobserve(entry.target);
        }
    });
};

// Create a separate Intersection Observer for each sports container
sportsContainers.forEach(container => {
    const observerForS = new IntersectionObserver(callbackForS, optionsForS);
    observerForS.observe(container);
});

  